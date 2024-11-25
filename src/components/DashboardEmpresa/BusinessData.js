import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiUsers, FiPackage, FiBarChart2, FiStar,  } from 'react-icons/fi';
import '../../styles/DashboardBusiness/BusinessData.css';

function PercentDisplay({ isIncreasing }) {
  return (
    <div className="percent-display">
      {isIncreasing ? (
        <FiTrendingUp className="icon icon-up" />
      ) : (
        <FiTrendingDown className="icon icon-down" />
      )}
    </div>
  );
}

function BusinessData() {
  return (
    <section className='container-business'>
      <div className='business-header'>
        <h1>Dashboard</h1>
      </div>
      <div className='business-filho'>
        <div className='business-data'>
          <div className='business-data-item'>
            <h3>Visualizações</h3>
            <h2>40,689</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">8.5%</span>
              <span className="text-value-empresa">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiUsers className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <h3>Projetos</h3>
            <h2>29</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">1.3%</span>
              <span className="text-value-empresa">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiPackage className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <h3>Gastos</h3>
            <h2>$890,00</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={false} />
              <span className="valueDown">4.3%</span>
              <span className="text-value-empresa">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiBarChart2 className='data-icon'/>
          </div>
        </div>

        <div className='business-data'>
          <div className='business-data-item'>
            <h3>Avaliações</h3>
            <h2>4.9(17)</h2>
            <div className="percent-display-business">
              <PercentDisplay isIncreasing={true} />
              <span className="valueUp">1.8%</span>
              <span className="text-value-empresa">mensal</span>
            </div>
          </div>
          <div className='business-data-img'>
            <FiStar className='data-icon'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessData;
