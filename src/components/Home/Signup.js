import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import '../../styles/Home/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    cnpj: '',
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidDate = (dateString) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if(!regex.test(dateString)) return false;

    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return(
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      companyName,
      email,
      password,
      confirmPassword,
      location,
      cnpj,
      firstName,
      lastName,
      cpf,
      birthDate
    } = formData;

    if (!termsAccepted) {
      alert("Você deve aceitar os termos de serviço e a política de privacidade.");
      return;
    }

    if (isCompany) {
      if (!companyName || !email || !password || !confirmPassword || !location || !cnpj) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      if(cnpj.length !== 18){
        alert("CNPJ inválido.");
        return;
      }
    } else {
      if (!firstName || !lastName || !email || !password || !cpf || !birthDate) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      if(cpf.length !== 14){
        alert("CPF inválido.");
        return;
      }
      if(!isValidDate(birthDate)){
        alert("Data de aniversário inválida.");
        return;
      }
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <main className="signup-form">
          <div className="signup-header">
            <div className="signup-text">
              <h2>Bem-vinda(o)!</h2>
              <h3>Crie sua Conta</h3>
            </div>

            <div className="role-buttons">
              <button 
                className={`freela-button ${!isCompany ? 'active' : ''}`} 
                onClick={() => setIsCompany(false)}
              >
                Sou Freela
              </button>
              <button 
                className={`hire-button ${isCompany ? 'active' : ''}`} 
                onClick={() => setIsCompany(true)}
              >
                Quero Contratar
              </button>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {isCompany ? (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome da Empresa:</label>
                    <input 
                      type="text" 
                      name="companyName"
                      placeholder="Nome da empresa" 
                      value={formData.companyName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="exemplo@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>CNPJ:</label>
                    <InputMask 
                      mask= "99.999.999/9999-99"
                      name="cnpj"
                      placeholder="00.000.000/0000-00" 
                      value={formData.cnpj}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Localização:</label>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Endereço ou cidade" 
                      value={formData.location}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Senha:</label>
                    <input 
                      type="password" 
                      name="password"
                      placeholder="*********" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group input-password">
                    <label>Confirme sua Senha:</label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      placeholder="*********" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome:</label>
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="Insira seu nome" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Sobrenome:</label>
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Insira seu sobrenome" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>CPF:</label>
                    <InputMask 
                      mask= "999.999.999-99"
                      name="cpf"
                      placeholder="111.111.111-11" 
                      value={formData.cpf}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Data de Aniversário:</label>
                    <InputMask
                      mask= "99/99/9999"
                      name="birthDate"
                      placeholder="mm/dd/aaaa" 
                      value={formData.birthDate}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Senha:</label>
                    <input 
                      type="password" 
                      name="password"
                      placeholder="*********" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group input-password">
                    <label>Confirme sua Senha:</label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      placeholder="*********" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </>
            )}
            <div className="terms-container">
              <input 
                type="checkbox" 
                required 
                onChange={(e) => setTermsAccepted(e.target.checked)} 
              />
              <label>
                Aceito os Termos de Serviço e a Política de Privacidade
              </label>
            </div>
            
              <button type="submit" className="submit-button"><Link to="/dashboardEmpresa">Criar conta</Link></button>
            
          </form>

          <p>Já tem uma conta? <a href="/login">Login</a></p>
        </main>
      </div>
    </div>
  );
};

export default Signup;