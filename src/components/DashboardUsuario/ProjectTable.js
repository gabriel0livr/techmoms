import React, { useState } from 'react';
import '../../styles/DashboardUsuario/ProjectTable.css';

const ProjectTable = () => {
  const [selectedMonth, setSelectedMonth] = useState("Outubro");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const projects = [
    { name: "CESAR", project: "VoltAI", date: "12/09/2024 - 12:53", revenue: "R$342,95", status: "Concluido" },
    { name: "Apple", project: "BioFuture", date: "12/09/2024 - 12:53", revenue: "R$100,95", status: "Cancelado" },
    { name: "Accenture", project: "TechMoms", date: "12/09/2024 - 12:53", revenue: "R$34.295", status: "Andamento" },
  ];

  return (
    <div className="project-table-container">
      <div className="project-table-header">
        <h2>Projetos</h2>
        <span className="view-all">Ver Todos</span>
        <div className="month-selector">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="table-headers">
        <div>CONTRATANTE</div>
        <div>PROJETO</div>
        <div>DATA - HORA</div>
        <div>RENDA</div>
        <div>STATUS</div>
      </div>

      <div className="table-content">
        {projects.map((project, index) => (
          <div className="table-row" key={index}>
            <div className="cell">
              <div className="account-info">
                {project.name}
              </div>
            </div>
            <div className="cell">{project.project}</div>
            <div className="cell">{project.date}</div>
            <div className="cell">{project.revenue}</div>
            <div className="cell">
              <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTable;