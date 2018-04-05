import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';
const burgerControls = (props) => {
    const controls = [
        {
            label: 'Salad',
            type: 'salad'
        }, {
            label: 'Bacon',
            type: 'bacon'
        }, {
            label: 'Cheese',
            type: 'cheese'
        }, {
            label: 'Meat',
            type: 'meat'
        }
    ]
    return (
        <div className={classes.BugerControls}>
            <p>Total Price:<strong>{props.price}</strong>
            </p>
            {controls.map((label, i) => {
                return <BurgerControl
                    label
                    ={label.label}
                    key
                    ={label.label}
                    added
                    ={() => props.addIngredients(label.type)}
                    remove={() => props.removeIngredients(label.type)}
                    disabled
                    ={props.disabled[label.type]}/>
            })}
            <button
                disabled={!props.purchaseable}
                className={classes.OrderButton}
                onClick={props.purchase}>ORDER NOW</button>
        </div>
    )
}
export default burgerControls;