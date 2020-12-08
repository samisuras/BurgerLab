import React from 'react';
import burgerLogo from "../../assets/images/burger.png";
import axios from 'axios'
import LoginS from './Login.css'

this.datos = {
    correo: "",
    contrasena: "",
}

this.submit = async (event) => {
    event.preventDefault();
    this.datos.correo = document.getElementById('correo').value
    this.datos.contrasena = document.getElementById('contrasena').value
    console.log(this.datos);
    try {
        const respuesta = await axios.post('http://localhost:3300/user/login', this.datos)
        console.log(respuesta.data.usuario);
        const usuario = respuesta.data.usuario
        sessionStorage.setItem('nombre',usuario.nombre)
        sessionStorage.setItem('administrador',usuario.administrador)
        sessionStorage.setItem('correo',usuario.correo)
        alert('Credenciales Correctas')
        window.location.href = '/home';
    } catch (error) {
        alert('Correo y/o contraseña incorrectos')
    }

}

const login = (props) => (
    <div class="container mt-4 p-2 Bc" >
        <div class="card p-5" style={{background: 'rgb(231, 171, 79)'}}>
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