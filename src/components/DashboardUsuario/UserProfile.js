import React, { useState, useRef } from 'react';
import '../../styles/DashboardUsuario/UserProfile.css';

const UserProfile = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [textFormat] = useState({fontFamily: 'Arial' });
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [availableCount, setAvailableCount] = useState(0);
  const [userName] = useState("Maria Eduarda");
  const textAreaRef = useRef(null);
  const fileInputRef = useRef(null);

  const skills = [
    "JavaScript", "Python", "Java", "C++", "SQL", "HTML", "CSS", "React", "Node.js", 
    "Ruby", "Go", "Swift", "Kotlin", "PHP", "TypeScript", "C#", "Rust", "Scala", 
    "Communication", "Problem-solving", "Teamwork", "Leadership", "Time Management", 
    "Critical Thinking", "Adaptability", "Creativity", "Attention to Detail", 
    "Project Management", "Data Analysis", "Machine Learning", "Cloud Computing", 
    "Cybersecurity", "DevOps", "Agile Methodologies", "UI/UX Design", "Graphic Design",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const handleDaySelect = (day) => {
    setDaysAvailable(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
    setAvailableCount(prev => daysAvailable.includes(day) ? prev - 1 : prev + 1);
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Seu perfil</h1>
        <button className="salvar-button">Salvar</button>
      </div>
      <div className="perfil-content">
        <div className="resumo-container">
          <h2>Resumo</h2>
          <div className="habilidades-section">
            <h3>Habilidades</h3>
            <div className="habilidades-list">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`habilidade ${selectedSkills.includes(skill) ? 'habilidade-active' : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="resumo-profissional">
            <h3>Resumo Profissional</h3>
            <textarea
              ref={textAreaRef}
              className="editor-textarea"
              style={{
                fontFamily: textFormat.fontFamily,
                fontWeight: textFormat.bold ? 'bold' : 'normal',
                fontStyle: textFormat.italic ? 'italic' : 'normal',
                textDecoration: textFormat.underline ? 'underline' : 'none',
              }}
              placeholder="Escreva seu resumo profissional"
            />
          </div>
        </div>
        <div className="perfil-visualizacao">
          <h3>Visualização do seu Perfil</h3>
          <div className="perfil-info">
            <div className="perfil-nome">{userName}</div>
            <div className="perfil-foto"></div>
            <input
              type="file"
              accept="image/png"
              className="escolher-img"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button className="upload-button" onClick={handleImageUpload}>
              Escolher Imagem
            </button>
          </div>
          <div className="horarios-disponiveis">
            <h3>Horários Disponíveis</h3>
            <p>Disponível em {availableCount} de 7</p>
            <div className="dias-semana">
              {['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'].map((dia, index) => (
                <div
                  key={index}
                  className={`dia ${daysAvailable.includes(dia) ? 'dia-active' : ''}`}
                  onClick={() => handleDaySelect(dia)}
                >
                  {dia}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;