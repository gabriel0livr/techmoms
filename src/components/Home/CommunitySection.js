import React, { useState } from 'react';
import '../../styles/Home/CommunitySection.css';

const testimonials = [
  {
    name: 'Roberta',
    role: 'Desenvolvimento',
    feedback: 'Consegui uma vaga Full-Stack numa empresa de tecnologia para desenvolver um site. Gostei muito da experiência e recomendo.',
    rating: 4,
  },
  {
    name: 'Júlia',
    role: 'Designer',
    feedback: 'Fui contratada por uma empresa para fazer o design de um aplicativo e finalmente consegui conciliar minha vida profissional com a pessoal.',
    rating: 5,
  },
  {
    name: 'Fernanda',
    role: 'Software Engineer',
    feedback: 'Trabalhei como engenheira de software no desenvolvimento de um sistema inovador, ganhando experiência e aprendendo com os desafios.',
    rating: 4,
  },
  {
    name: 'Brunna',
    role: 'Representante da Google',
    feedback: 'Contratei uma freelancer para o desenvolvimento de uma API, fiquei muito satisfeita com o serviço.',
    rating: 5,
  },
  {
    name: 'Marina',
    role: 'Representante da Amazon',
    feedback: 'Contratei uma freelancer para um projeto de uma landing page, fiquei muito satisfeita com o desenvolvimento dessa pessoa no projeto.',
    rating: 4,
  },
];

const CommunitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="community-section">
      <h2>Faça parte <br /><strong>Da Nossa Comunidade</strong></h2>
      <div className="testimonial-wrapper">
        <button onClick={prevTestimonial} className="arrow-left">←</button>
        
        <div className="testimonial-content">
          <p className="feedback">“{testimonials[currentIndex].feedback}”</p>
         
        </div>
        
        <button onClick={nextTestimonial} className="arrow-right">→</button>
      </div>
      <div className="user-thumbnails">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`thumbnail ${index === currentIndex ? 'active' : ''}`}>
            <div className={`user-circle ${index === currentIndex ? 'active' : ''}`}></div>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className={`name ${index === currentIndex ? 'active' : ''}`}>{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;