import React, { Component } from 'react';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from "axios";
import hamburguesa_sencilla from "../../assets/images/hamburguesa_sencilla.png"
import hamburguesa_clasica from "../../assets/images/hamburguesa_clasica.png"
import hamburguesa_especial from "../../assets/images/hamburguesa_especial.png"
import hamburguesa_paro from "../../assets/images/hamburguesa_paro_cardiaco.png"


const INGREDIENT_PRICES = {
    lechuga: 5,
    queso: 10,
    carne: 30,
    tocino: 20
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lechuga: 0,
            tocino: 0,
            queso: 0,
            carne: 0
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = async () => {
        try {
            await axios.post('http://localhost:3300/venta/orden', {
                ingredients: this.state.ingredients,
                correo: sessionStorage.getItem('correo'),
                total: this.state.totalPrice
            })
            alert('Orden realizada!');
        } catch (error) {
            console.log(error);
        }
    }

    sencilla = () => {
        this.setState({
            totalPrice: 60, ingredients: {
                lechuga: 0,
                tocino: 0,
                queso: 1,
                carne: 1
            },
            purchasable: true
        });
    }

    clasica = () => {
        this.setState({
            totalPrice: 65, ingredients: {
                lechuga: 1,
                tocino: 0,
                queso: 1,
                carne: 1
            },
            purchasable: true
        });
    }

    especial = () => {
        this.setState({
            totalPrice: 85, ingredients: {
                lechuga: 1,
                tocino: 1,
                queso: 1,
                carne: 1
            },
            purchasable: true
        });
    }

    paro = () => {
        this.setState({
            totalPrice: 180, ingredients: {
                lechuga: 0,
                tocino: 2,
                queso: 3,
                carne: 3
            },
            purchasable: true
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <span>
                <div className="row mt-3 mb-5">
                    <div className="col-sm-12" align="center">
                        <h2>Las mas vendidas</h2>
                    </div>
                    <div className="col-sm-3">
                        <div class="card ml-5 mr-3 mt-0 mb-0 p-1 pb-0 pt-0">
                            <div className="col-sm-12 mt-0 pt-0" align="center">
                                <img src={hamburguesa_sencilla} alt="..." width="65%" height="65%" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Sencilla</h5>
                                <p class="card-text">
                                    Incluye:
                                    <ul>
                                        <li>Carne</li>
                                        <li>Queso</li>
                                    </ul>
                                </p>
                                <div className="col-sm-12 mb-0 pb-0" align="center">
                                    <button onClick={this.sencilla} class="btn btn-lg btn-primary">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card ml-5 mr-3 mt-0 mb-0 p-1 pb-0 pt-0">
                            <div className="col-sm-12 mt-0 pt-0" align="center">
                                <img src={hamburguesa_clasica} alt="..." width="60%" height="60%" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Clasica</h5>
                                <p class="card-text">
                                    Incluye:
                                    <ul>
                                        <li>Carne</li>
                                        <li>Queso</li>
                                        <li>Lechuga</li>
                                    </ul>
                                </p>
                                <div className="col-sm-12 mb-0 pb-0" align="center">
                                    <button onClick={this.clasica} class="btn btn-lg btn-primary">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card ml-5 mr-3 mt-0 mb-0 p-1 pb-0 pt-0">
                            <div className="col-sm-12 mt-0 pt-0" align="center">
                                <img src={hamburguesa_especial} alt="..." width="70%" height="70%" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Especial</h5>
                                <p class="card-text">
                                    Incluye:
                                    <ul>
                                        <li>Carne</li>
                                        <li>Queso</li>
                                        <li>Lechuga</li>
                                        <li>Tocino</li>
                                    </ul>
                                </p>
                                <div className="col-sm-12 mb-0 pb-0" align="center">
                                    <button onClick={this.especial} class="btn btn-lg btn-primary">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card ml-5 mr-3 mt-0 mb-0 p-1 pb-0 pt-0">
                            <div className="col-sm-12 mt-0 pt-0" align="center">
                                <img src={hamburguesa_paro} alt="..." width="65%" height="65%" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Paro Cardiaco</h5>
                                <p class="card-text">
                                    Incluye:
                                    <ul>
                                        <li>3x Carne</li>
                                        <li>3x Queso</li>
                                        <li>2x Tocino</li>
                                    </ul>
                                </p>
                                <div className="col-sm-12 mb-0 pb-0" align="center">
                                    <button onClick={this.paro} class="btn btn-lg btn-primary">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </span>
        );
    }
}

export default BurgerBuilder;