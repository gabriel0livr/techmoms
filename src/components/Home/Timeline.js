import React from 'react';
import '../../styles/Home/Timeline.css';

const Timeline = () => {
  const steps = [
    { id: 1, title: "Matching do Projeto", text: "A freelancer e a empresa procuram a melhor oportunidade de projeto." },
    { id: 2, title: "Comunicação Cliente", text: "A freelancer se comunica com a empresa para entender os requisitos." },
    { id: 3, title: "Desenvolvimento", text: "É iniciado o desenvolvimento do projeto." },
    { id: 4, title: "Revisão da Entrega", text: "Tanto a freelancer quanto a empresa revisam a entrega, verificando se todos os requisitos foram atendidos." },
    { id: 5, title: "Entrega do Projeto", text: "Com tudo certo, a freelancer entrega com sucesso o projeto." },
    { id: 6, title: "Feedback e Avaliação", text: "Tanto a freelancer quanto a empresa se avaliam." },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h2>Fluxo <br /><strong>de Trabalho</strong></h2>
      </div>
      <div className="timeline-content">
        <div className="timeline-line">
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
          <div className="timeline-espaco">
            <div className="divider-up"></div>
            <div className="divider-down"></div>
          </div>
        </div>
        <div className="timeline-box">
          {steps.map((step, index) => (
            <div key={step.id} className={`timeline-step ${index % 2 === 0 ? 'top' : 'bottom'} id${step.id}`}>
              <h3 className="step-title">#{step.id} {step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="timeline-trophy">🏆</div>
      </div>
    </section>
  );
};

export default Timeline;