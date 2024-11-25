import React from 'react';
import {motion} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import '../../styles/Home/Carousel.css';
import { FaUsers, FaFolderOpen, FaMedal, FaStar, FaComment, FaEye } from 'react-icons/fa';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

const Caroussel = [
    { title: 'Networking e Comunidade', description: 'Uma plataforma para mães freelancers se conectarem, trocarem experiências e colaborarem em projetos.',
    icon: <FaUsers color="#F5A623" size={23}/>},
    { title: 'Tutoriais e Materiais', description: 'Fornecimento de recursos educativos, como modelos de portfólio e currículo, para ajudar mães iniciantes ou que estão retornando ao mercado.',
     icon:  <FaFolderOpen color="#F5A623" size={23} /> },
    { title: 'Sistema de Pontos', description: 'Um sistema que recompensa mães por tarefas e projetos completados, aumentando sua visibilidade e nota avaliativa.',
    icon: <FaStar color="#F5A623" size={23}/> },
    { title: 'Visibilidade de Portfólio', description: 'Oportunidades para mães demonstrarem suas habilidades através de tarefas práticas, facilitando a conexão com clientes.',
    icon:  <FaEye color="#F5A623" size={23}/> },
    { title: 'Feedback de Empresas', description: 'Implementação de um sistema que fornece feedback detalhado e métricas de desempenho, contribuindo para o sistema de pontos.', 
    icon:  <FaComment color="#F5A623" size={23}/>},
    { title: 'Reconhecimento Público', description: 'Destaque mensal para as mães mais ativas ou bem-sucedidas, aumentando sua visibilidade no mercado.',
    icon: <FaMedal color="#F5A623" size={23}/> },
];
const Carousel = () => {
    const carousel = useRef();
    const[width, setWidth] = useState(0);
    useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])
    
    return (
        <div className="teste">
            <h1 className="titulo">Serviços</h1>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div 
            className="inner" 
            drag="x"
            dragConstraints = {{right: 0, left: -width}}
            initial = {{x: 100}}
            animate = {{x: 0}}
            transition = {{duration: 0.8}}
            >
            {Caroussel.map((item, index) => (
                <motion.div className="item" key={index}>
                <span className="icon">
                {item.icon} 
                </span>
                <h1>{item.title}</h1>
                <p className="description">{item.description}</p>
                </motion.div>
            ))}
             </motion.div>  
            </motion.div>
            </div>
    ); 
};
export default Carousel;