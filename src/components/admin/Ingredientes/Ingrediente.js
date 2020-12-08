import React, { Component } from 'react';
import Layout from "../../../hoc/Layout/Layout";
import axios from "axios"

class Ingrediente extends Component {
    constructor(props) {
        super(props);
        this.state = { fecha: "", ingrediente_dia: 0, ingrediente_mensual: 0, ingrediente_anual: 0 };
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
            const respuesta = await axios.get("http://localhost:3300/reportes/ingredientes/" + this.state.fecha)
            console.log(respuesta.data)
            this.setState({ ingrediente_dia: respuesta.data.ingrediente_dia, ingrediente_mensual: respuesta.data.ingrediente_mes, ingrediente_anual: respuesta.data.ingrediente_anual })
            console.log(this.state);
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
                        {this.state.ingrediente_anual !== 0 ?
                            <div className="col-sm-12 pl-5 pr-5" align="center">
                                <div className="row">
                                    <div className="col-sm-4" align="center">
                                        <h1 className="text-success">Ingredientes usados al Dia</h1>
                                        <table class="table align-middle table-bordered mb-2">
                                            <thead class="table-primary">
                                                <th scope="col">Ingrediente</th>
                                                <th scope="col">Cantidad</th>
                                            </thead>
                                            <tbody>
                                                {this.state.ingrediente_dia.map((ingrediente, i) => {
                                                    return [
                                                        <td key={i}>{ingrediente.ingrediente}</td>,
                                                        <td key={i}>{ingrediente.total}</td>,
                                                        <tr></tr>
                                                    ]
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm-4" align="center">
                                        <h1 className="text-success">Ingredientes usados al Mes</h1>
                                        <table class="table align-middle table-bordered mb-2">
                                            <thead class="table-primary">
                                                <th scope="col">Ingrediente</th>
                                                <th scope="col">Cantidad</th>
                                            </thead>
                                            <tbody>
                                                {this.state.ingrediente_mensual.map((ingrediente, i) => {
                                                    return [
                                                        <td key={i}>{ingrediente.ingrediente}</td>,
                                                        <td key={i}>{ingrediente.total}</td>,
                                                        <tr></tr>
                                                    ]
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm-4" align="center">
                                        <h1 className="text-success">Ingredientes usados al Año</h1>
                                        <table class="table align-middle table-bordered mb-2">
                                            <thead class="table-primary">
                                                <th scope="col">Ingrediente</th>
                                                <th scope="col">Cantidad</th>
                                            </thead>
                                            <tbody>
                                                {this.state.ingrediente_anual.map((ingrediente, i) => {
                                                    return [
                                                        <td key={i}>{ingrediente.ingrediente}</td>,
                                                        <td key={i}>{ingrediente.total}</td>,
                                                        <tr></tr>
                                                    ]
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            :
                            <span></span>
                        }
                    </div>
                </div>
            </span>
        )
    }
}

export default Ingrediente;