import React from 'react';
import Aux from '../../hoc';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>
            <p>this is toolbar</p>
            <p>this is sidebar</p>
            <p>this is backdrop</p>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout