import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Home/Beneficios.css';
import image1 from '../../assets/Home/image1.jpg';
import image2 from '../../assets/Home/image2.png';
import image3 from '../../assets/Home/image3.png';
import image4 from '../../assets/Home/image4.png';
import image5 from '../../assets/Home/image5.png';

const HeaderBeneficios = ({ isCompany, setIsCompany }) => {
  return (
    <div className="header-beneficios">
      <div className="purple-bar"></div>
      <div className="header-content-beneficios">
        <div>
          <h2>Nossos Benefícios</h2>
          <h3>Contrate e Trabalhe</h3>
        </div>
        <div className="button-group">
          <button
            className={`freela button ${!isCompany ? 'active' : ''}`}
            onClick={() => setIsCompany(false)}
          >
            Sou Freela
          </button>
          <button
            className={`button contratar ${isCompany ? 'active' : ''}`}
            onClick={() => setIsCompany(true)}
          >
            Quero Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageSrc, text }) => (
  <div className="card">
    <div className="">
      <img src={imageSrc} alt="Card" />
    </div>
    <p>{text}</p>
  </div>
);

const Carrossel = ({ items }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carrossel">
      <div className="card-list" ref={carouselRef}>
        {items.map((item, index) => (
          <Card key={index} imageSrc={item.imageSrc} text={item.text} />
        ))}
      </div>
      <div className="controls-container">
        <button className="control control-left" onClick={scrollLeft}>
          ←
        </button>
        <button className="control control-right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

const Beneficios = () => {
  const [isCompany, setIsCompany] = useState(false);
  const [displayedItems, setDisplayedItems] = useState([]);

  const freelaItems = [
    { imageSrc: image1, text: 'Trabalhe no seu ritmo: Escolha projetos que respeitem sua rotina e te permitam equilibrar o trabalho com os momentos mais importantes da sua vida.' },
    { imageSrc: image2, text: 'Seja reconhecida pelo que faz de melhor: Construa sua reputação com avaliações positivas, ganhe visibilidade e veja suas habilidades ganhando destaque.' },
    { imageSrc: image3, text: 'Aprenda e cresça no seu tempo: A plataforma te ajuda a se desenvolver com tutoriais, materiais e dicas práticas para melhorar suas habilidades e encarar novos desafios.' },
    { imageSrc: image4, text: 'Conte com uma rede que te entende: Aqui, você encontra outras mães passando pelos mesmos desafios. É sobre trocar experiências, dar e receber apoio.' },
    { imageSrc: image5, text: 'Receba com segurança e sem dor de cabeça: Nada de preocupações com pagamentos. Tudo é processado de forma confiável e dentro do prazo.' },
    { imageSrc: image1, text: 'Trabalhe no seu ritmo: Escolha projetos que respeitem sua rotina e te permitam equilibrar o trabalho com os momentos mais importantes da sua vida.' },
    { imageSrc: image2, text: 'Seja reconhecida pelo que faz de melhor: Construa sua reputação com avaliações positivas, ganhe visibilidade e veja suas habilidades ganhando destaque.' },
    { imageSrc: image3, text: 'Aprenda e cresça no seu tempo: A plataforma te ajuda a se desenvolver com tutoriais, materiais e dicas práticas para melhorar suas habilidades e encarar novos desafios.' },
    { imageSrc: image4, text: 'Conte com uma rede que te entende: Aqui, você encontra outras mães passando pelos mesmos desafios. É sobre trocar experiências, dar e receber apoio.' },
    { imageSrc: image5, text: 'Receba com segurança e sem dor de cabeça: Nada de preocupações com pagamentos. Tudo é processado de forma confiável e dentro do prazo.' },
  ];

  const companyItems = [
    { imageSrc: image1, text: 'Encontre os melhores profissionais: Descubra talentos incríveis que vão além do esperado, com perfis detalhados e habilidades que fazem a diferença.' },
    { imageSrc: image2, text: 'Contrate apenas quando precisar: Reduza custos fixos e aposte na flexibilidade, ajustando o time conforme a necessidade do momento.' },
    { imageSrc: image3, text: 'Facilidade para achar a pessoa certa: Use ferramentas simples e práticas para filtrar freelancers, conferir portfólios e escolher com segurança.' },
    { imageSrc: image4, text: 'Fortaleça sua marca como inclusiva: Mostre que sua empresa valoriza a diversidade, apoiando mães talentosas a seguirem no mercado de tecnologia.' },
    { imageSrc: image5, text: 'Garantia de qualidade nas entregas: Com avaliações e feedbacks detalhados, além de um trabalho bem feito e no prazo.' },
    { imageSrc: image1, text: 'Encontre os melhores profissionais: Descubra talentos incríveis que vão além do esperado, com perfis detalhados e habilidades que fazem a diferença.' },
    { imageSrc: image2, text: 'Contrate apenas quando precisar: Reduza custos fixos e aposte na flexibilidade, ajustando o time conforme a necessidade do momento.' },
    { imageSrc: image3, text: 'Facilidade para achar a pessoa certa: Use ferramentas simples e práticas para filtrar freelancers, conferir portfólios e escolher com segurança.' },
    { imageSrc: image4, text: 'Fortaleça sua marca como inclusiva: Mostre que sua empresa valoriza a diversidade, apoiando mães talentosas a seguirem no mercado de tecnologia.' },
    { imageSrc: image5, text: 'Garantia de qualidade nas entregas: Com avaliações e feedbacks detalhados, além de um trabalho bem feito e no prazo.' },
  ];

  const items = isCompany ? companyItems : freelaItems;

  useEffect(() => {
    const updateDisplayedItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        setDisplayedItems(items.slice(0, 5));
      } else {
        setDisplayedItems(items.slice(0, 10));
      }
    };

    updateDisplayedItems();
    window.addEventListener('resize', updateDisplayedItems);

    return () => {
      window.removeEventListener('resize', updateDisplayedItems);
    };
  }, [items]);

  return (
    <div className="beneficios">
      <HeaderBeneficios isCompany={isCompany} setIsCompany={setIsCompany} />
      <Carrossel items={displayedItems} />
    </div>
  );
};

export default Beneficios;