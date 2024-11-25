import React from "react";
import "../../styles/UserFeed/SearchAndFilterBar.css";

function SearchAndFilter() {
  return (
    <div className="search-filter-container">
      <input
        type="text"
        className="search-input"
        placeholder="Pesquisar por Cargo, Posição, Palavra-chave..."
      />
      <select className="filter-select">
        <option>Tipo de Contratação</option>
        <option>Freelancer</option>
        <option>Tempo Integral</option>
      </select>
      <select className="filter-select">
        <option>Salário</option>
        <option>R$2.000 - R$4.000</option>
        <option>R$4.000 - R$6.000</option>
      </select>
      <select className="filter-select">
        <option>Experiência</option>
        <option>Júnior</option>
        <option>Pleno</option>
        <option>Sênior</option>
      </select>
      <button className="search-button">Buscar</button>
    </div>
  );
}

export default SearchAndFilter;
