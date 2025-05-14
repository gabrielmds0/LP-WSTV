import React, { useState } from 'react';

const AccordionBenefits = ({ scrollToRegister }) => {
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle function for accordions
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  // Benefits data
  const benefits = [
    {
      title: "Tenha conhecimento necessário para lidar com situações complexas na Sala Vermelha",
      details: "Aprenda a reconhecer e gerenciar os quadros clínicos mais desafiadores encontrados na emergência, incluindo diagnósticos diferenciais e abordagens iniciais para cada cenário. Este conhecimento é fundamental para a segurança do paciente em situações críticas.",
      examples: [
        "Reconhecimento rápido dos sinais de choque e manejo imediato",
        "Interpretação adequada de exames de imagem em traumas",
        "Identificação dos sinais sutis de deterioração clínica"
      ]
    },
    {
      title: "Desenvolvimento de um raciocínio clínico rápido e eficaz, crucial para a tomada de decisões em situações de emergência",
      details: "Você desenvolverá a capacidade de avaliar rapidamente o quadro clínico, priorizar problemas e implementar condutas apropriadas. Este treinamento reduz significativamente o tempo de resposta em emergências reais.",
      examples: [
        "Prática do método ABCDE em diversos cenários clínicos",
        "Avaliação e estabilização de múltiplas vítimas",
        "Tomada de decisão sob pressão com recursos limitados"
      ]
    },
    {
      title: "Compreensão profunda dos protocolos e medicamentos utilizados na Sala Vermelha para garantir mais assertividade nas ações",
      details: "Domine os principais protocolos de emergência e o uso correto dos medicamentos mais importantes no ambiente de emergência. Conhecer dosagens, efeitos adversos e interações é essencial para evitar erros em momentos críticos.",
      examples: [
        "Oficina de prescrição de drogas vasoativas em diferentes perfis de pacientes",
        "Cálculo de dose e administração segura de antiarrítmicos",
        "Protocolos atualizados de reanimação cardiopulmonar"
      ]
    },
    {
      title: "Segurança em seus conhecimentos e habilidades diminuindo a ansiedade e o estresse em plantões de alta pressão",
      details: "A confiança vem da competência. Ao dominar os procedimentos e protocolos, você experimentará uma redução significativa na ansiedade durante plantões. Médicos preparados tomam decisões mais assertivas e se comunicam melhor com a equipe.",
      examples: [
        "Treinamento em comunicação eficaz durante crises",
        "Técnicas para gerenciamento do estresse em cenários críticos",
        "Desenvolvimento de rotinas mentais para abordagem sistemática de emergências"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          O que você vai conquistar com este workshop
        </h2>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 bg-white"
            >
              {/* Accordion Header */}
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className={`mr-4 h-8 w-1 bg-red-600 rounded ${openAccordion === index ? 'h-12 transition-all duration-300' : ''}`}></div>
                  <h3 className="text-left font-semibold">{benefit.title}</h3>
                </div>
                <div className={`transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              
              {/* Accordion Content */}
              <div 
                className={`px-6 pb-4 transition-all duration-300 overflow-hidden ${openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-700 mb-4">{benefit.details}</p>
                
                {benefit.examples && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Exemplos práticos incluem:</h4>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                      {benefit.examples.map((example, i) => (
                        <li key={i} className="text-gray-600 text-sm">{example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="mb-6 text-gray-600 italic">
            "A confiança no ambiente de emergência vem da prática constante e do conhecimento sólido dos protocolos."
          </p>
          <button onClick={scrollToRegister} className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
            Quero participar do workshop
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccordionBenefits;