import React, { Component } from 'react';

import Layout from '../../hoc/Layout/Layout';
import axios from 'axios'

class OrdersDay extends Component {

  constructor(props) {
    super(props);
    this.state = { ordenes: [] };
  }

  componentDidMount = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3300/venta/ordenes/dia')
      this.setState({ ordenes: respuesta.data.ordenes })
      console.log(this.state.ordenes);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" align="center">
              <h1>Ordenes Del Día</h1>
            </div>
          </div>
          <div className="row">
              {this.state.ordenes.map((orden, i) => {
                return (
                  <div className="col-sm-3 mb-2 mt-2">
                    <div className="card border-warning h-100 w-100" key={i}>
                      <div className="card-body">
                        <h5 className="card-title">Orden: {orden.idorden}</h5>
                        <p className="card-text">
                          Fecha: {orden.fecha.split('T')[0]} <br />
                          Ingredientes: <br />
                          <ul>
                            {orden.ingrediente.map((ingrediente,i) =>{
                              return(
                              <li>{ingrediente}</li>
                              )
                            })}
                          </ul>
                        </p>
                      </div>
                      <div class="card-footer border-warning">
                        Costo: {orden.precio}$ 
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </Layout >
    );
  }
}

export default OrdersDay;
