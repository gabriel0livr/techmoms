import React from 'react';
import '../../styles/Home/Home.css';
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
    <div className='container'>
      <div className="container-h">
        <div className="header-home">
            <span style={{ color: '#1A202C', fontSize: '53px', fontFamily: 'Arial', fontWeight: 500, lineHeight: '71px', wordWrap: 'break-word' }}>Melhores</span>
            <span style={{ background: '-webkit-linear-gradient(#DE4396, #0D1C9F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '53px', fontFamily: 'Arial', fontWeight: 800, lineHeight: '71px', wordWrap: 'break-word' }}> Projetos</span>
          <br />
            <span style={{ color: '#1A202C', fontSize: '53px', fontFamily: 'Arial', fontWeight: 500, lineHeight: '71px', wordWrap: 'break-word' }}>Criados por </span>
            <span style={{ background: '-webkit-linear-gradient(#F7666F, #406AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '53px', fontFamily: 'Arial', fontWeight: 800, lineHeight: '71px', wordWrap: 'break-word' }}> Freelancers</span>
        </div>
    <div className="subhead">
        <p>Nós conectamos freelancers com os projetos perfeitos na nossa comunidade de mães e empresas</p>
    </div>
    <Link to="/signup">
    <button className="inscreva-btn">     
        <span >Inscreva-se!</span>
    </button>
    </Link>
      </div>
    </div>
    );
  };

export default HomeContent;
