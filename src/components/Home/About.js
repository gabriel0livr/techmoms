import React from 'react';
import '../../styles/Home/About.css';

function About() {
    return (
        <section className="about-section">
            <div className="about-header">
                <h3>
                    Sobre
                </h3>
                <h2>
                    a TechMoms
                </h2>
            </div>
            <div className="about-content">
                <div className="about-line">
                    <p> 
                        A TechMoms é a solução inovadora para mães no setor de tecnologia que buscam conciliar carreira e maternidade. 
                        Reconhecemos os desafios enfrentados por essas profissionais, que muitas vezes se veem obrigadas a optar por trabalhos freelance, perdendo oportunidades valiosas.
                        Nossa plataforma oferece flexibilidade e incentivos. Com cursos, feedback detalhado e reconhecimento público, capacitamos essas mulheres a se destacarem e crescerem em suas carreiras.
                        Ao apoiar as mães no setor de TI, a TechMoms também contribui para um impacto social positivo, promovendo a inclusão e a diversidade na tecnologia. 
                        Junte-se a nós e faça parte de uma comunidade que valoriza e empodera as mães na busca por sucesso profissional!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;