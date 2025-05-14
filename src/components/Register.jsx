import React, { useState, useEffect } from 'react';
import './EnhancedRegistrationCard.css';
import logoImage from '../assets/logo.png';

const EnhancedRegistrationCard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [redirectTimer, setRedirectTimer] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Capturar valores dos campos UTM
    const utm_source = document.getElementById('form-field-utm_source')?.value || '';
    const utm_campaign = document.getElementById('form-field-utm_campaign')?.value || '';
    const utm_medium = document.getElementById('form-field-utm_medium')?.value || '';
    const utm_content = document.getElementById('form-field-utm_content')?.value || '';
    
    // Preparar dados para envio
    const dataToSubmit = {
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      utm_source: utm_source,
      utm_campaign: utm_campaign,
      utm_medium: utm_medium,
      utm_content: utm_content,
      tag: "Lead_PV_WSVST"
    };
    
    // Enviar dados para o endpoint
    fetch('https://functions-api.clint.digital/endpoints/integration/webhook/a50c6fa5-aee3-437c-a8ec-4bda06b9e187', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }
      return response.json();
    })
    .then(data => {
      // Show submission confirmation
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Inscrição realizada com sucesso! Redirecionando para o pagamento...'
      });
      
      // Start countdown for redirect
      setRedirectTimer(3);
    })
    .catch(error => {
      console.error('Erro:', error);
      // Show submission confirmation anyway to maintain user flow
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Inscrição realizada com sucesso! Redirecionando para o pagamento...'
      });
      
      // Start countdown for redirect
      setRedirectTimer(3);
    });
  };
  
  // Handle redirect countdown
  useEffect(() => {
    if (redirectTimer === null) return;
    
    if (redirectTimer <= 0) {
      // Redirect to payment page
      window.location.href = 'https://clkdmg.site/pay/9ed13137-96eb-48db-b7b9-d51615332caf ';
      return;
    }
    
    const timer = setTimeout(() => {
      setRedirectTimer(redirectTimer - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [redirectTimer]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 to-red-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 border-2 border-white rotate-45"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 border-2 border-white rotate-45"></div>
      </div>
      
      <div className="max-w-lg mx-auto relative z-10">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
          {/* Card header */}
          <div className="px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
            <span className="inline-block py-1 px-3 bg-white text-red-600 text-xs font-semibold rounded-full mb-2">
              Últimas Vagas
            </span>
            <h3 className="text-xl font-bold">Workshop Sala Vermelha</h3>
          </div>
          
          {/* Card content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">12 e 13 de julho</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-800">Goiânia</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-xs font-medium text-gray-500 mb-1">Investimento:</div>
              <div className="flex items-center">
                <span className="text-gray-400 line-through mr-2">de R$ 3.997</span>
                <span className="text-xl font-bold text-gray-900">Condição Especial</span>
              </div>
              <div className="mt-1">
                <span className="text-xs text-red-600 font-medium">* Vagas limitadas com este valor promocional</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Material didático completo incluso</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Certificado de participação</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Coffee break nos dois dias</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Acesso ao grupo exclusivo de alunos</span>
              </div>
            </div>
            
            <button 
              onClick={() => setShowPopup(true)}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Fazer minha inscrição
            </button>
          </div>
        </div>
      </div>
      
      {/* Semi-transparent Registration Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm bg-black bg-opacity-50 transition-all duration-300">
          <div className="bg-gray-900 bg-opacity-90 rounded-lg shadow-2xl overflow-hidden max-w-md w-full relative animate-fadeIn border border-gray-800">
            {/* Close button */}
            <button 
              onClick={() => {
                setShowPopup(false);
                setFormStatus({submitted: false, success: false, message: ''});
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Popup header */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <img src={logoImage}/>
              </div>
              {!formStatus.submitted ? (
                <p className="text-white text-lg">
                  Preencha seus dados para seguir com a sua inscrição
                </p>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-white text-lg mb-1">{formStatus.message}</p>
                  <p className="text-gray-400">Redirecionando em {redirectTimer} segundos...</p>
                </div>
              )}
            </div>
            
            {/* Form */}
            {!formStatus.submitted ? (
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-white text-sm font-medium mb-2">
                    Nome Completo <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 bg-opacity-80 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="telefone" className="block text-white text-sm font-medium mb-2">
                    Telefone com DDD <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="DDD + Telefone"
                    className="w-full p-3 bg-gray-800 bg-opacity-80 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 bg-opacity-80 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                {/* Campos ocultos para UTM */}
                <input type="hidden" id="form-field-utm_source" name="utm_source" />
                <input type="hidden" id="form-field-utm_campaign" name="utm_campaign" />
                <input type="hidden" id="form-field-utm_medium" name="utm_medium" />
                <input type="hidden" id="form-field-utm_content" name="utm_content" />
                
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Finalizar Inscrição
                </button>
              </form>
            ) : (
              <div className="p-6 flex items-center justify-center">
                <button
                  onClick={() => window.location.href = 'https://clkdmg.site/pay/9ed13137-96eb-48db-b7b9-d51615332caf'}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Ir para o pagamento agora
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedRegistrationCard;