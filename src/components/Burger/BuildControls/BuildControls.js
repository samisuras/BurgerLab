import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lechuga', type: 'lechuga' },
    { label: 'Tocino', type: 'tocino' },
    { label: 'Queso', type: 'queso' },
    { label: 'Carne', type: 'carne' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Precio Actual: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDENAR!</button>
    </div>
);

export default buildControls;