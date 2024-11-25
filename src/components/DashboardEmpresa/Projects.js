import React, { useState } from 'react';
import '../../styles/DashboardBusiness/Projects.css';

const Projects = () => {
  const [selectedMonth, setSelectedMonth] = useState("Outubro");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const projects = [
    { name: "Roberta", project: "Site para Manicure", date: "23/10/2022 - 14:33", tech: "Front-End", revenue: "R$382,95", status: "Concluido" },
    { name: "Rafaela", project: "Landing Page", date: "08/04/2024 - 08:42", tech: "FullStack", revenue: "R$405,80", status: "Cancelado" },
    { name: "Luana", project: "API", date: "15/07/2023 - 17:25", tech: "Back-End", revenue: "R$340,50", status: "Andamento" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projetos</h2>
        <span className="projects-view-all">Ver Todos</span>
        <div className="projects-month-selector">
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
      
      <div className="projects-table-headers">
        <div>FREELANCER</div>
        <div>PROJETO</div>
        <div>DATA - HORA</div>
        <div>TECNOLOGIA</div>
        <div>CUSTO</div>
        <div>STATUS</div>
      </div>

      <div className="projects-table-content">
        {projects.map((project, index) => (
          <div className="projects-table-row" key={index}>
            <div className="projects-cell">
              <div className="projects-account-info">
                <span className="projects-avatar" />
                {project.name}
              </div>
            </div>
            <div className="projects-cell">{project.project}</div>
            <div className="projects-cell">{project.date}</div>
            <div className="projects-cell">{project.tech}</div>
            <div className="projects-cell">{project.revenue}</div>
            <div className="projects-cell">
              <span className={`projects-status ${project.status.toLowerCase()}`}>{project.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;