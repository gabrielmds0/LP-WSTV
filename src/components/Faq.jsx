import React, { useState, useEffect } from 'react';

const ResponsiveFAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "Quais aulas vou aprender?",
      answer: "Durante o workshop, você aprenderá sobre diagnóstico e manejo de Síndrome Coronariana Aguda, Intubação Orotraqueal, Ventilação Mecânica, Gasometria, Eletrocardiograma, Drogas Vasoativas, Sedoanalgesia, Insuficiência Cardíaca Aguda, Distúrbios de Sódio e Potássio, Sepse e Choque Séptico, Injúria Renal Aguda, além de revisão completa dos protocolos ACLS, ATLS e PALS."
    },
    {
      id: 2,
      question: "Quais dias vai acontecer? Onde vai ser?",
      answer: "O Workshop Sala Vermelha acontecerá nos dias 12 e 13 de Junho de 2025, das 8h às 18h. O evento será realizado no prédio da Liberdade Médica em Goiânia, localizado na Rua S1, 826 - Setor Bela Vista, Goiânia-GO "
    },
    {
      id: 3,
      question: "Quem dará as aulas?",
      answer: "As aulas serão ministradas pelo Dr. Rodrigo Cleto, titulado em Clínica Médica, Cardiologia e Medicina Intensiva, e pelo Dr. Ian Camilo, pós-graduado em Medicina de Emergência e Cardiologista. Ambos são instrutores certificados pela American Heart Association (AHA) e possuem vasta experiência em emergências médicas e ensino."
    },
    {
      id: 4,
      question: "Quais formas de pagamento?",
      answer: "Aceitamos pagamento via PIX, cartão de crédito (em até 12x com juros), boleto bancário e transferência bancária. Para pagamentos à vista via PIX ou transferência, oferecemos 10% de desconto adicional. Grupos de 3 ou mais pessoas da mesma instituição têm 15% de desconto por participante."
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle question click
  const handleQuestionClick = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        
        {/* Mobile View: Card Grid */}
        {isMobile && (
          <div className="grid grid-cols-1 gap-4">
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              >
                <button
                  className="w-full p-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => handleQuestionClick(item.id)}
                >
                  <span className="font-medium text-base">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      activeQuestion === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeQuestion === item.id && (
                  <div className="p-4 bg-gray-800 border-t border-gray-700 animate-fadeIn">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Desktop View: Side Reveal */}
        {!isMobile && (
          <div className="flex h-[450px] rounded-lg overflow-hidden shadow-2xl">
            {/* Questions Column */}
            <div className="w-1/3 bg-gray-900">
              {faqItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full p-5 text-left transition-colors duration-300 border-l-4 ${
                    activeQuestion === item.id
                      ? 'bg-red-900 border-red-600 text-white'
                      : 'bg-gray-900 border-transparent text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => handleQuestionClick(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        activeQuestion === item.id ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Answer Panel */}
            <div className="w-2/3 bg-gray-800 p-8 relative overflow-hidden">
              {activeQuestion ? (
                <div className="animate-slideIn">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {faqItems.find(item => item.id === activeQuestion)?.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faqItems.find(item => item.id === activeQuestion)?.answer}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl">Selecione uma pergunta para ver a resposta</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveFAQ;