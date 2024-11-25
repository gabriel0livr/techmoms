import React, { useState } from 'react';
import '../../styles/BusinessFeed/BusinessFreelasList.css';
import { FaEllipsisH, FaMapMarkerAlt, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const freelancers = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: index % 6 === 0 ? 'UI/UX Designer' : index % 6 === 1 ? 'Engenheira de Software' 
   : index % 6 === 2 ? 'Desenvolvedora Front-End' : index % 6 === 3 ? 'Desenvolvedora Back-End'
   : index % 6 === 4 ? 'Marketing Digital' : 'Edição',
  name: index % 6 === 0 ? 'Fernanda' : index % 6 === 1 ? 'Roberta'
   : index % 6 === 2 ? 'Júlia' : index % 6 === 3 ? 'Brunna'
   : index % 6 === 4 ? 'Maria' : 'Luana',
  location: index % 5 === 0 ? 'Natal, Brasil' : index % 5 === 1 ? 'Recife, Brasil'
   : index % 5 === 2 ? 'Minas Gerais, Brasil' : index % 5 === 3 ? 'Rio de Janeiro, Brasil' 
   : 'São Paulo, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Freelancer',
  rate: index % 4 === 0 ? 'R$ 100/hora' : index % 4 === 1 ? 'R$ 150/hora' : index % 4 === 2 ? 'R$ 80/hora' : 'R$ 120/hora',
  tags: index % 6 === 0 ? ['Designer', 'Pleno'] : index % 6 === 1 ? ['Engenheira de Software', 'Sênior']
   : index % 6 === 2 ? ['Front-End', 'Pleno'] : index % 6 === 3 ? ['Back-End', 'Júnior']
   : index % 6 === 4 ? ['Marketing Digital', 'Júnior'] : ['Edição', 'Pleno'],
  rating: index % 2 === 0 ? '5.0' : '4.8',
  reviews: index % 4 === 0 ? 8 : index % 4 === 1 ? 12 : index % 4 === 2 ? 5 : 6,
}));

const BusinessFreelasList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(freelancers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedFreelancers = freelancers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="freelancer-list-container">
        {displayedFreelancers.map((freelancer) => (
          <div key={freelancer.id} className="freelancer-card">
            <div className="freelancer-header">
              <h3 className="freelancer-title">{freelancer.title}</h3>
              <div className="freelancer-menu">
                <FaEllipsisH />
              </div>
            </div>
            <div className="freelancer-type-container">
              <span className={`freelancer-type ${freelancer.type.replace(' ', '-').toLowerCase()}`}>
                {freelancer.type}
              </span>
              <span className="freelancer-rate">{freelancer.rate}</span>
            </div>
            <div className="freelancer-tags">
              {freelancer.tags.map((tag, index) => (
                <span key={index} className="freelancer-tag">{tag}</span>
              ))}
            </div>
            <div className="freelancer-company-info">
              <div className="freelancer-card-icon">
                <div className="profile-icon">
                  <span className="online-indicator"></span>
                </div>
              </div>
              <div className="freelancer-informacoes">
                <i className="fas fa-user freelancer-icon"></i>
                <span className="freelancer-name">{freelancer.name}</span>
                <span className="freelancer-location">
                  <FaMapMarkerAlt /> {freelancer.location}
                </span>
                <div className="freelancer-rating-list">
                  <FaStar /> {freelancer.rating} <span>({freelancer.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <FaArrowLeft
          className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`top-rated-companies-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <FaArrowRight
          className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
};

export default BusinessFreelasList;