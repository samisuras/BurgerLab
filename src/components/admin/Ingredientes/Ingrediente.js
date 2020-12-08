import React, { Component } from 'react';
import Layout from "../../../hoc/Layout/Layout";
import axios from "axios"

class Ingrediente extends Component {
    constructor(props) {
        super(props);
        this.state = { fecha: "", venta_dia: 0, venta_mensual: 0, venta_anual: 0 };
    }

    componentDidMount() {
        document.getElementById("fecha").addEventListener('change', (e) => {
            e.preventDefault()
            console.log(e.target.value);
            this.setState({ fecha: e.target.value })
        })
    }

    enviar = async () => {
        if (this.state.fecha !== "") {
            const respuesta = await axios.get("http://localhost:3300/reportes/venta/" + this.state.fecha)
            console.log(respuesta.data)
            this.setState({ venta_dia: respuesta.data.venta_dia, venta_mensual: respuesta.data.venta_mensual, venta_anual: respuesta.data.venta_anual })
        } else {
            alert('Elija una fecha')
        }
    }

    render() {
        return (
            <span>
                <Layout />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12" align="center">
                            <h1>Reportes de Ingredientes</h1>
                        </div>
                        <div className="col-sm-12 mt-5 mb-5 pl-5 pr-5">
                            <label for="fecha" class="form-label">Selecciona una fecha:</label>
                            <input type="date" class="form-control" id="fecha" />
                            <div className="col-sm-12 pl-0 mt-3">
                                <button onClick={this.enviar} className="btn btn-lg btn-outline-primary">Buscar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </span>
        )
    }
}

export default Ingrediente;