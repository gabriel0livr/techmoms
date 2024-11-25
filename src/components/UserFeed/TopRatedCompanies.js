import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft, FaArrowRight, FaAmazon, FaTwitter, FaApple, FaFacebook } from 'react-icons/fa';
import '../../styles/UserFeed/TopRatedCompanies.css';

const TopRatedCompanies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const MicrosoftIcon = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2px',
      width: '50px',
      height: '50px',
    }}>
      <div style={{ backgroundColor: '#F25022', width: '100%', height: '100%' }}></div>
      <div style={{ backgroundColor: '#7FBA00', width: '100%', height: '100%' }}></div>
      <div style={{ backgroundColor: '#00A4EF', width: '100%', height: '100%' }}></div>
      <div style={{ backgroundColor: '#FFB900', width: '100%', height: '100%' }}></div>
    </div>
  );

  const companies = [
    { name: 'Microsoft', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <MicrosoftIcon size={50} /> },
    { name: 'Apple', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <FaApple size={50} color="#000000" /> },
    { name: 'Google Inc.', rating: '5.0', location: 'Recife, Brasil', jobs: 3, icon: <FcGoogle size={50} /> },
    { name: 'Amazon', rating: '4.8', location: 'Recife, Brasil', jobs: 5, icon: <FaAmazon size={50} color="#FF9900" /> },
    { name: 'Facebook', rating: '4.9', location: 'Recife, Brasil', jobs: 4, icon: <FaFacebook size={50} /> },
    { name: 'Twitter', rating: '4.7', location: 'Recife, Brasil', jobs: 2, icon: <FaTwitter size={50} color="#1DA1F2" /> },
  ];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="top-rated-companies-container">
      <h2 className="top-rated-companies-title">Empresas Mais Avaliadas</h2>
      <div className="top-rated-companies-list">
        {companies.map((company, index) => (
          <div key={index} className="top-rated-companies-card">
            <div className="top-rated-companies-badge">DESTAQUE</div>
            <div className="top-rated-companies-card-icon">{company.icon}</div>
            <h3 className="top-rated-companies-card-title">{company.name}</h3>
            <div className="top-rated-companies-rating">
              <span>⭐ {company.rating}</span>
            </div>
            <div className="top-rated-companies-location">
              <p>{company.location}</p>
            </div>
            <div className="top-rated-companies-jobs">
              <button className='companies-button-freela'>Vagas Abertas ({company.jobs})</button>
            </div>
          </div>
        ))}
      </div>
      <div className="top-rated-companies-pagination">
        <button
          className="top-rated-companies-pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`top-rated-companies-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="top-rated-companies-pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopRatedCompanies;
