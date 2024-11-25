import React from "react";
import "../../styles/BusinessFeed/BusinessWelcomeMessage.css";

function BusinessWelcomeUser() {
  return (
    <div className="business-welcome-container">
      <h2 className="business-welcome-title">Bem-vindo, Accenture</h2>
      <p className="business-welcome-text">Encontre as melhores oportunidades para você.</p>
      <button className="business-welcome-button">Postar Projeto</button>
    </div>
  );
}

export default BusinessWelcomeUser;