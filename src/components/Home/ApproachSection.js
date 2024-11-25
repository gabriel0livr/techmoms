import React, { useState } from 'react';
import '../../styles/Home/ApproachSection.css';
import { 
  FaNodeJs, FaPhp, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaDatabase, FaDocker,
  FaAws, FaGitAlt, FaJenkins
} from 'react-icons/fa';
import { SiMysql, SiDotnet, SiCplusplus, SiGo, SiMongodb, SiTypescript, SiJavascript } from 'react-icons/si';
import UX_UI_icon from '../../assets/Home/UX_UI.png';
import Desenvolvimento_icon from '../../assets/Home/Desenvolvimento.png';
import Interatividade_icon from '../../assets/Home/Interitividade.png';
import Segurança_icon from '../../assets/Home/Seguranca.png';
import Revisao_icon from '../../assets/Home/Revisao.png';
import Garantia_icon from '../../assets/Home/Garantia.png';

const Card = ({ icon, title, description }) => (
  <div className="approach-card">
    {typeof icon === 'string' ? (
      <img src={icon} alt={title} className="card-icon" />
    ) : (
      <div className="card-icon">{icon}</div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ApproachSection = () => {
  const [activeCategory, setActiveCategory] = useState('Backend');

  const cardsGroup1 = [
    { icon: UX_UI_icon, title: 'UX/UI', description: 'Transforme suas ideias em experiências digitais incríveis. Serviços de design UX/UI com foco em criar interfaces intuitivas e atrativas.' },
    { icon: Desenvolvimento_icon, title: 'Desenvolvimento de Software', description: 'Transforme suas ideias em soluções digitais. Serviços de Desenvolvimento de Software para atender as necessidades das freelancers.' },
  ];

  const cardsGroup2 = [
    { icon: Interatividade_icon, title: 'Interatividade & Comunidade', description: 'Junte-se à comunidade de mães freelancers. Compartilhe experiências, dicas e oportunidades.' },
    { icon: Segurança_icon, title: 'Segurança & Integridade', description: 'Garantimos segurança e integridade para seus projetos e dados.' },
  ];

  const cardsGroup3 = [
    { icon: Revisao_icon, title: 'Revisão de Entregas', description: 'Garantimos a revisão de entregas para que atendam aos mais altos padrões.' },
    { icon: Garantia_icon, title: 'Garantia de Qualidade & Teste', description: 'Oferecemos serviços de Garantia de Qualidade e Testes para garantir o melhor resultado.' }
  ];

  const technologies = {
    Backend: [
      { icon: <FaNodeJs size={40} color="#68A063" />, title: 'Node.js' }, 
      { icon: <FaPhp size={40} color="#777BB3" />, title: 'PHP' }, 
      { icon: <SiMysql size={40} color="#4479A1" />, title: 'MySQL' }, 
      { icon: <FaJava size={40} color="#F8981D" />, title: 'Java' }, 
      { icon: <SiDotnet size={40} color="#512BD4" />, title: '.NET Core' }, 
      { icon: <FaPython size={40} color="#306998" />, title: 'Python' }, 
      { icon: <SiCplusplus size={40} color="#00599C" />, title: 'C++' }, 
      { icon: <SiGo size={40} color="#00ADD8" />, title: 'Go' }, 
      { icon: <SiMongodb size={40} color="#4DB33D" />, title: 'MongoDB' },
    ],
    Frontend: [
      { icon: <FaAngular size={40} color="#DD0031" />, title: 'Angular' }, 
      { icon: <SiTypescript size={40} color="#007ACC" />, title: 'TypeScript' }, 
      { icon: <FaHtml5 size={40} color="#E34F26" />, title: 'HTML' }, 
      { icon: <FaCss3Alt size={40} color="#2965F1" />, title: 'CSS' }, 
      { icon: <FaReact size={40} color="#61DAFB" />, title: 'React' }, 
      { icon: <SiJavascript size={40} color="#F7DF1E" />, title: 'JavaScript' }, 
    ],
    Dados: [
      { icon: <FaDatabase size={40} color="#F2C94C" />, title: 'Banco de Dados' },
    ],
    QA: [
      { icon: <FaGitAlt size={40} color="#F1502F" />, title: 'Git' }, 
    ],
    Marketing: [
      { icon: <FaAws size={40} color="#FF9900" />, title: 'AWS' }, 
    ],
    DevOps: [
      { icon: <FaDocker size={40} color="#2496ED" />, title: 'Docker' }, 
      { icon: <FaJenkins size={40} color="#D24939" />, title: 'Jenkins' }, 
    ],
  };

  return (
    <section className="approach-section">
      <h2 className="section-title">Nossa Abordagem</h2>
      <h3 className="section-subtitle">Desenvolvimento</h3>

      <div className="cards-container">
        {cardsGroup1.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="cards-container cards-group-separator">
        {cardsGroup2.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="cards-container cards-group-separator">
        {cardsGroup3.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <section className="technologies-section">
        <div className="technologies-menu">
          {Object.keys(technologies).map((category) => (
            <span
              key={category}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="technologies-grid">
          {technologies[activeCategory].map((tech, index) => (
            <div key={index} className="tech-icon">
              {tech.icon}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ApproachSection;
