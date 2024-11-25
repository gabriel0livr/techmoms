import React from 'react';
import '../../styles/Home/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><a href="/">TechMom</a></div>
            <ul className="navbar-menu">
                <li><a href="/#sobre">Sobre</a></li>
                <li><a href="/#servicos">Serviços</a></li>
                <li><a href="/#beneficios">Benefícios</a></li>
                <li><a href="/#comunidade">Comunidade</a></li>
                <li><a href="/#abordagem">Abordagem</a></li>
            </ul>
            <div className="navbar-button">
                <a href="/login" className="navbar-login">Login</a>
                <a href="/signup" className="navbar-cadastro">Cadastre-se</a>
            </div>
        </nav>
    );
};

export default Navbar;
