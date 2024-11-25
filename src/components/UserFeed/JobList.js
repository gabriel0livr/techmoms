import React, { useState } from 'react';
import '../../styles/UserFeed/JobList.css';
import { FaEllipsisH, FaMapMarkerAlt, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const jobs = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: index % 6 === 0 ? 'UI/UX Designer' : index % 6 === 1 ? 'Engenheira de Software' 
  : index % 6 === 2 ? 'Desenvolvedora Front-End' : index % 6 === 3 ? 'Desenvolvedora Back-End'
  : index % 6 === 4 ? 'Marketing Digital' : 'Edição',
  company: 'Google Inc.',
  location: 'Recife, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Tempo Integral',
  salary: 'R$ 20.000 - R$ 25.000',
  tags: index % 6 === 0 ? ['Designer', 'Pleno'] : index % 6 === 1 ? ['Engenheira de Software', 'Sênior']
  : index % 6 === 2 ? ['Front-End', 'Pleno'] : index % 6 === 3 ? ['Back-End', 'Júnior']
  : index % 6 === 4 ? ['Marketing Digital', 'Júnior'] : ['Edição', 'Pleno'],
  rating: index % 2 === 0 ? '5.0' : '4.8',
  reviews: 378,
}));

const JobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedJobs = jobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="joblist-container">
        {displayedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-menu">
                <FaEllipsisH />
              </div>
            </div>
            <div className="job-type-container">
              <span className={`job-type ${job.type.replace(' ', '-').toLowerCase()}`}>
                {job.type}
              </span>
              <span className="job-salary">{job.salary}</span>
            </div>
            <div className="job-tags">
              {job.tags.map((tag, index) => (
                <span key={index} className="job-tag">{tag}</span>
              ))}
            </div>
            <div className="job-company-info">
              <FcGoogle className="job-icon" />
              <span className="job-company">{job.company}</span>
              <span className="job-location">
                <FaMapMarkerAlt /> {job.location}
              </span>
            </div>
            <div className="job-rating">
              <FaStar /> {job.rating} <span>({job.reviews})</span>
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

export default JobList;