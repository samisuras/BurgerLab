import React from 'react';


const login = (props) => (
    <div className="container mt-5 p-5">
        <div class="card p-5">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Correo Electrónico: </label>
                        <input type="email" class="form-control" id="correo" />
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" />
                    </div>
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </form>
            </div>
            <div class="card-footer">
                <p>No tienes cuenta? <a href="">Haz click Aqui!...</a></p>
            </div>
        </div>
    </div>
);

export default login;