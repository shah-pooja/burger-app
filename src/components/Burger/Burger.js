import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    console.log(props.ingredients);
    let burgerIngredients = Object
        .keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredients key={key + i} type={key}/>
            })
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, [])
    console.log(burgerIngredients);
    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please add some ingredients
        </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type={'bread-top'}/> {burgerIngredients}
            {/*<BurgerIngredients type={'cheese'}/>
            <BurgerIngredients type={'salad'}/>
            <BurgerIngredients type={'meat'}/>*/}
            <BurgerIngredients type={'bread-bottom'}/>
        </div>
    )
}
export default burger;