import React from 'react';
import burgerLogo from "../../../assets/images/burger.png";
import axios from 'axios'

this.datos = {
    correo: "",
    nombre: "",
    apellido: "",
    contrasena: "",
    contrasena2: "",
}

this.submit = async (event) => {
    event.preventDefault();
    this.datos.correo = document.getElementById('correo').value
    this.datos.nombre = document.getElementById('nombre').value
    this.datos.apellido = document.getElementById('apellido').value
    this.datos.contrasena = document.getElementById('contrasena').value
    this.datos.contrasena2 = document.getElementById('contrasena2').value
    if(this.datos.contrasena === this.datos.contrasena2 ){
        try {
            const res = await axios.post('http://localhost:3300/user/register',this.datos)
            console.log(res);
            alert('Usuario Creado Correctamente')
            window.location.href = '/home';
        } catch (error) {
            alert('El correo ya esta registrado')
        }     
    }else{
        alert('Las contraseñas no coinciden')
    }
    console.log(this.datos);

}

const Registro = (props) => (
    <div className="container mt-4 p-2">
        <div className="card p-5">
            <div className="col-sm-12" align="center">
                <h1>Registro de Usuarios de Burger Lab</h1>
            </div>
            <img src={burgerLogo} className=" ml-auto mr-auto pl-auto pr-auto" alt="..." width="30%" height="30%" align="center" />
            <div className="card-body">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Correo Electrónico: <span className="text-danger">*</span> </label>
                        <input type="email" className="form-control" id="correo" required />
                    </div>
                    <div className="form-group">
                        <label>Nombre(s): <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="nombre" required/>
                    </div>
                    <div className="form-group">
                        <label>Apellido(s): <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="apellido" required/>
                    </div>
                    <div className="form-group">
                        <label>Contraseña: <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="contrasena" required/>
                    </div>
                    <div className="form-group">
                        <label>Confirme la Contraseña: <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="contrasena2" required/>
                    </div>
                    <div className="col-sm-12" align="center">
                        <button type="submit" className="btn btn-lg btn-success">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <p>Ya tienes cuenta? <a href="/login">Inicia Sesión Aqui!...</a></p>
            </div>
        </div>
    </div>
);

export default Registro;

