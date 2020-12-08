import React, { Component } from 'react';

import Layout from '../../hoc/Layout/Layout';
import axios from 'axios'

class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = { ordenes: [] };
  }

  componentDidMount = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3300/venta/ordenes/' + sessionStorage.getItem('correo'))
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
              <h1>Ordenes Registradas</h1>
            </div>
          </div>
          <div className="row">
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {this.state.ordenes.map((orden, i) => {
                return (
                  <div className="col mb-2 mt-2">
                    <div className="card h-100 w-100" key={i}>
                      <div className="card-body">
                        <h5 className="card-title">Orden: {orden.idorden}</h5>
                        <p className="card-text">
                          Fecha: {orden.fecha.split('T')[0]} <br />
                          Costo: {orden.precio} <br />
                          Ingredientes: <br />
                          <ul>
                            <li>{orden.ingrediente}</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout >
    );
  }
}

export default Orders;
