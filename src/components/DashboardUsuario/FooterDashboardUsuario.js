import React from 'react';
import '../../styles/DashboardUsuario/FooterDashboardUsuario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterDashboardusuario() {
    return (
        <footer className="footer-dashboard-usuario">            
            <div className="footer-dashboard-usuario-left">
                <a href="/terms">Termos</a>
                <a href="/privacy">Privacidade</a>
                <a href="/cookies">Cookies</a>
            </div>

            <div className="footer-dashboard-usuario-right">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
            </div>
        </footer>
    );
}

export default FooterDashboardusuario;
