import React from 'react';
import '../../styles/UserFeed/JobCategories.css';

const JobCategories = () => {
  const categories = [
    { icon: 'programming-icon', name: 'Programação', jobs: 312 },
    { icon: 'design-icon', name: 'Design', jobs: 357 },
    { icon: 'data-icon', name: 'Ciência de Dados', jobs: 257 },
    { icon: 'marketing-icon', name: 'Marketing Digital', jobs: 197 },
    { icon: 'video-icon', name: 'Edição de Vídeo', jobs: 297 },
  ];

  return (
    <div className="job-categories-container">
      {categories.map((category, index) => (
        <div key={index} className="job-categories-card">
          <div className={`job-categories-icon ${category.icon}`}></div>
          <div>
            <h4>{category.name}</h4>
            <p>{category.jobs} Vagas Abertas</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCategories;
