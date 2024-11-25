import React from 'react';
import '../../styles/DashboardUsuario/Transactions.css';

const Transactions = () => {
  const transactions = [
    { project: "Aurora Nexus", date: "11/07/2024 - 09:15", price: "$3000", status: "Concluido" },
    { project: "EcoVita", date: "05/08/2024 - 14:30", price: "$750", status: "Concluido" },
    { project: "InspiraLab", date: "22/06/2024 - 10:20", price: "$200", status: "Cancelado" },
    { project: "Stellar Path", date: "19/07/2024 - 16:45", price: "$4500", status: "Andamento" },
    { project: "Novo Horizonte", date: "25/08/2024 - 08:00", price: "$1800", status: "Andamento" },
    { project: "CodeCraft", date: "03/09/2024 - 13:10", price: "$320", status: "Concluido" },

  ];

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2>Transações</h2>
        <p>Lista das transações mais recentes.</p>
      </div>
      
      <div className="transactions-table">
        <div className="transactions-table-header">
          <div>PROJETO</div>
          <div>DATA & HORA</div>
          <div>PREÇO</div>
          <div>STATUS</div>
        </div>
        
        {transactions.map((transaction, index) => (
          <div className="transactions-table-row" key={index}>
            <div>{transaction.project}</div>
            <div>{transaction.date}</div>
            <div>{transaction.price}</div>
            <div>
              <span className={`transactions-status ${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;