import React from "react";
import "../../styles/BusinessFeed/BusinessSearchAndFilter.css";

function BusinessSearchAndFilter() {
  return (
    <div className="business-search-filter-container">
      <input
        type="text"
        className="business-search-input"
        placeholder="Pesquisar por Cargo, Posição, Palavra-chave..."
      />
      <select className="business-filter-select">
        <option>Tipo de Emprego</option>
        <option>Designer</option>
        <option>Desenvolvedora Front-End</option>
        <option>Desenvolvedora Back-End</option>
        <option>Marketing Digital</option>
        <option>Edição</option>
      </select>
      <select className="business-filter-select">
        <option>Salário</option>
        <option>R$2.000 - R$4.000</option>
        <option>R$4.000 - R$6.000</option>
        <option>R$6.000 - R$8.000</option>
        <option>R$8.000 - R$10.000</option>
        <option> + R$10.000</option>
      </select>
      <select className="business-filter-select">
        <option>Experiência</option>
        <option>Júnior</option>
        <option>Pleno</option>
        <option>Sênior</option>
      </select>
      <button className="business-search-button">Buscar</button>
    </div>
  );
}

export default BusinessSearchAndFilter;
