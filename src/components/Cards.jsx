import React, { useState } from 'react';
import Target from './Target';

const WorkshopContent = ({ scrollToRegister }) => {
  const [activeTab, setActiveTab] = useState('diagnostics');

  const tabContent = {
    diagnostics: {
      title: "Métodos Diagnósticos",
      description: "Aprenda a interpretar exames essenciais para o diagnóstico rápido e preciso",
      topics: [
        {
          title: "Eletrocardiograma",
          description: "Interpretação de ECG em emergências cardiovasculares",
          importance: "Utilizado em mais de 80% dos atendimentos de emergência"
        },
        {
          title: "Gasometria",
          description: "Análise e interpretação de gases arteriais",
          importance: "Fundamental para avaliação da função respiratória"
        },
        {
          title: "Revisão ACLS, ATLS e PALS",
          description: "Protocolos atualizados para atendimento de emergências",
          importance: "Padrão ouro para atendimento em emergência"
        }
      ]
    },
    conditions: {
      title: "Condições Clínicas",
      description: "Abordagem prática das principais emergências encontradas na sala vermelha",
      topics: [
        {
          title: "Síndrome Coronariana Aguda",
          description: "Manejo do infarto e angina instável",
          importance: "Principal causa de morte súbita em adultos"
        },
        {
          title: "Insuficiência Cardíaca Aguda Descompensada",
          description: "Diagnóstico e tratamento da insuficiência cardíaca em descompensação",
          importance: "Alta taxa de readmissão hospitalar quando mal conduzida"
        },
        {
          title: "Sepse e Choque Séptico",
          description: "Reconhecimento precoce e manejo da sepse",
          importance: "Cada hora de atraso no tratamento aumenta mortalidade em 8%"
        },
        {
          title: "Distúrbios de Sódio e de Potássio",
          description: "Diagnóstico e correção de distúrbios eletrolíticos",
          importance: "Complicações frequentes em pacientes críticos"
        }
      ]
    },
    procedures: {
      title: "Procedimentos",
      description: "Treinamento em procedimentos essenciais para o manejo do paciente crítico",
      topics: [
        {
          title: "Intubação Orotraqueal",
          description: "Técnicas e práticas seguras para via aérea definitiva",
          importance: "Procedimento que exige treinamento presencial"
        },
        {
          title: "Ventilação Mecânica",
          description: "Princípios e ajustes iniciais da ventilação mecânica",
          importance: "Fundamental para manejo de pacientes críticos"
        },
        {
          title: "Drogas Vasoativas",
          description: "Indicações e manejo das principais drogas vasoativas",
          importance: "Essencial para estabilização hemodinâmica"
        },
        {
          title: "Sedoanalgesia",
          description: "Protocolos de sedação e analgesia em pacientes críticos",
          importance: "Impacto direto no conforto e recuperação do paciente"
        },
        {
          title: "Injúria Renal Aguda",
          description: "Reconhecimento e manejo da lesão renal aguda",
          importance: "Complicação frequente com alto impacto na mortalidade"
        }
      ]
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Aprendizado imersivo: aprenda presencialmente com dois grandes especialistas na área
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Mais de 70% dos médicos não concluem cursos online, por isso no Workshop Presencial Sala Vermelha vamos estar junto com você enquanto você aprende
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button
          className={`py-4 px-6 font-medium text-lg focus:outline-none whitespace-nowrap ${
            activeTab === 'diagnostics' 
              ? 'border-b-2 border-red-600 text-red-600' 
              : 'text-gray-500 hover:text-red-500'
          }`}
          onClick={() => setActiveTab('diagnostics')}
        >
          Métodos Diagnósticos
        </button>
        <button
          className={`py-4 px-6 font-medium text-lg focus:outline-none whitespace-nowrap ${
            activeTab === 'conditions' 
              ? 'border-b-2 border-red-600 text-red-600' 
              : 'text-gray-500 hover:text-red-500'
          }`}
          onClick={() => setActiveTab('conditions')}
        >
          Condições Clínicas
        </button>
        <button
          className={`py-4 px-6 font-medium text-lg focus:outline-none whitespace-nowrap ${
            activeTab === 'procedures' 
              ? 'border-b-2 border-red-600 text-red-600' 
              : 'text-gray-500 hover:text-red-500'
          }`}
          onClick={() => setActiveTab('procedures')}
        >
          Procedimentos
        </button>
      </div>

      {/* Tab Content */}
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {tabContent[activeTab].title}
          </h3>
          <p className="text-gray-600">
            {tabContent[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabContent[activeTab].topics.map((topic, index) => (
            <div 
              key={index} 
              className="border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 hover:border-red-400"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {topic.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {topic.description}
              </p>
              <p className="text-sm text-red-600 font-medium">
                {topic.importance}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button onClick={scrollToRegister} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 max-w-md mx-auto">
          Fazer minha inscrição
        </button>
      </div>
    </div>
    
  );
};

export default WorkshopContent;