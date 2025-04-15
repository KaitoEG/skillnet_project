import React from 'react';
import './App.css';
import Logo1 from './component/imagenes/logo1.png';

const Login: React.FC = () => {
    return (
        <div className='contiene'>
          <div className="login-container">
          <img src={Logo1} alt="Una imagen de ejemplo" />
          </div>
          <div className="login-form">
            <div className='cubiculo'>
                <h1>INICIAR SESION</h1>
                <button className="google-button">Iniciar con Google</button>
                <button className="apple-button">Iniciar con Apple</button>
                <p>O</p>
                <input type="text" placeholder="Correo electrónico o teléfono" />
                <input type="password" placeholder="Contraseña" />
                <p className="forgot-password">Olvidó su contraseña?</p>
                <label>
                    <input type="checkbox" /> Mantenerme conectado
                </label>
                <button className="submit-button">Iniciar sesión</button>
            </div>
            </div>

            <footer className="footer">
              
              <div className='arriba'>
                <div><p>Acerca de</p></div>
                <div><p>Política de privacidad</p></div>
                <div><p>Condiciones de uso</p></div>
                <div><p>Accesibilidad</p></div>
                
              </div>
              <div className='abajo'>
                <p>Nuestras redes sociales</p>
                <p>+591 777798626</p>
                <p>cybertigres@skillnet.com</p>
                <p>© SkillNet project 2025</p>
              </div>  
              
                
            </footer>
        </div>
    );
};

export default Login;