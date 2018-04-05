import React from 'react';
import Aux from '../../../hoc';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object
        .keys(props.ingredients)
        .map((key) => {
            return (
                <li key={key}>{key}:{props.ingredients[key]}</li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>{ingredients}</ul>
            <p>Continue to checkout?</p>
            <Button>CANCEL</Button>
            <Button>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary