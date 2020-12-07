import React from 'react';
import burgerLogo from "../../assets/images/burger.png";
import axios from 'axios'

this.datos = {
    correo: "",
    contrasena: "",
}

this.submit = async (event) => {
    event.preventDefault();
    this.datos.correo = document.getElementById('correo').value
    this.datos.contrasena = document.getElementById('contrasena').value
    try {
        const res = await axios.post('http://localhost:3300/user/login', this.datos)
        console.log(res);
        alert('Credenciales Correctas')
        window.location.href = '/home';
    } catch (error) {
        alert('Correo y/o contraseña incorrectos')
    }
    console.log(this.datos);

}

const login = (props) => (
    <div className="container mt-4 p-2">
        <div class="card p-5">
            <div class="col-sm-12" align="center">
                <h1>Burger Lab</h1>
            </div>
            <img src={burgerLogo} class=" ml-auto mr-auto pl-auto pr-auto" alt="..." width="30%" height="30%" align="center" />
            <div class="card-body">
                <form onSubmit={this.submit}>
                    <div class="form-group">
                        <label>Correo Electrónico: </label>
                        <input type="email" class="form-control" id="correo" />
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" />
                    </div>
                    <button type="submit" class="btn btn-lg btn-success">Iniciar Sesión</button>
                </form>
            </div>
            <div class="card-footer">
                <p>No tienes cuenta? <a href="/registrar">Haz click Aqui!...</a></p>
            </div>
        </div>
    </div>
);

export default login;