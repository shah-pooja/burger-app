import React, {Component} from 'react';
import Aux from '../../hoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    'salad': 1,
    'bacon': 0.7,
    'cheese': 0.6,
    'meat': 1.3
}
class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        }
        this.addIngredients = this
            .addIngredients
            .bind(this);
        this.removeIngredients = this
            .removeIngredients
            .bind(this);
        this.updatePurchaseState = this
            .updatePurchaseState
            .bind(this);
    }
    updatePurchaseState(newIngredients) {
        const sum = Object
            .keys(newIngredients)
            .map((key) => {
                return newIngredients[key]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({
            purchaseable: sum > 0
        })
    }
    addIngredients(type) {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const price = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = price + oldPrice;
        this.updatePurchaseState(newIngredients);
        this.setState({totalPrice: newPrice, ingredients: newIngredients})
    }
    removeIngredients(type) {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const price = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - price;
        this.updatePurchaseState(newIngredients)
        this.setState({totalPrice: newPrice, ingredients: newIngredients})
    }
    purchase = () => {
        this.setState({purchasing: true})
    }
    hideModal = () => {
        this.setState({purchasing: false})
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} hideModal={this.hideModal}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredients={this.addIngredients}
                    removeIngredients={this.removeIngredients}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchase={this.purchase}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;