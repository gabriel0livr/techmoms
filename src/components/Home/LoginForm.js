import React, { useEffect } from 'react';
import '../../styles/Home/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, []);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bem vindo(a) de volta</h2>
        <h3>Entrar na Conta</h3>
        
        <button className="login-btn google">
          <FontAwesomeIcon icon={faGoogle} /> Login com Google
        </button>
        
        <button className="login-btn linkedin">
          <FontAwesomeIcon icon={faLinkedin} /> Login com LinkedIn
        </button>

        <p>OU</p>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Senha" className="input-field" />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Lembrar
            </label>
            <a href="/">Esqueceu a Senha?</a>
          </div>
          <Link to="/dashboardUsuario">
          <button type="submit" className="login-btn submit">Login</button>
          </Link>
        </form>
        <p>Não tem uma conta? <a href="/Signup">Cadastrar</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
