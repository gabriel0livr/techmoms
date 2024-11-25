import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../styles/BusinessFeed/BusinessTopRatedFreelas.css';

const BusinessTopRatedFreelas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const freelancers = [
    { name: 'Roberta', position: 'Engenheira de Software', rating: '5.0', location: 'Recife, Brasil' },
    { name: 'Fernanda', position: 'Designer', rating: '5.0', location: 'Natal, Brasil' },
    { name: 'Júlia', position: 'Desenvolvedora Front-End', rating: '5.0', location: 'Minas Gerais, Brasil' },
    { name: 'Laura', position: 'Editora de vídeos', rating: '4.8', location: 'Amazonas, Brasil' },
    { name: 'Brunna', position: 'Designer', rating: '4.9', location: 'Rio de Janeiro, Brasil' },
    { name: 'Larissa', position: 'Desenvolvedora Back-End', rating: '4.7', location: 'Maceió, Brasil' },
  ];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="top-freelancers-list-container">
      <h2 className="top-freelancers-title">Freelancers Mais Avaliados</h2>
      <div className="top-freelancers-list">
        {freelancers.map((freelancer, index) => (
          <div key={index} className="top-freelancer-card">
            <div className="top-freelancer-badge">DESTAQUE</div>
            <div className="top-freelancer-card-icon">
              <div className="top-profile-icon">
                <span className="top-online-indicator"></span>
              </div>
              <h4 className="top-position-professional">{freelancer.position}</h4>
            </div>
            <h3 className="top-freelancer-card-title">{freelancer.name}</h3>
            <div className="top-freelancer-rating">
              <span>⭐ {freelancer.rating}</span>
            </div>
            <div className="top-freelancer-location">
              <p>{freelancer.location}</p>
            </div>
            <div className="top-freelancer-jobs">
              <button className='top-freelancers-button-business'>Contratar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="top-freelancers-pagination">
        <button
          className="top-freelancers-pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`top-freelancers-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="top-freelancers-pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BusinessTopRatedFreelas;