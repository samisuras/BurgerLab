import React, { Component } from 'react';


import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <span>
                <h3>Tu Orden</h3>
                <p>Una deliciosa hamburguesa con los siguientes ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Precio Total: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continuar al pago?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
            </span>
        );
    }
}

export default OrderSummary;