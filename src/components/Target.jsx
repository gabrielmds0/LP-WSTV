import React from 'react';
import { useState, useEffect } from 'react';


const TargetAudienceSection = (scrollToRegister) => {
  return (
    <div className="bg-gradient-to-br from-red-900 to-red-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20fill-rule%3D%22evenodd%22%20d%3D%22M0%200h20v20H0V0zm10%2018a8%208%200%201%200%200-16%208%208%200%200%200%200%2016z%22%20opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E')]"></div>
      
      {/* Darker overlay at the bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title badge */}
        <div className="inline-flex items-center bg-red-950/70 backdrop-blur-sm px-4 py-2 rounded-md mb-12 border-l-4 border-red-600">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
          <span className="text-white text-sm font-medium tracking-wide uppercase">Quem pode participar</span>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side with heading */}
          <div className="max-w-md">
            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Para quem é o Workshop?
            </h2>
            
            {/* Visual divider */}
            <div className="h-1 w-24 bg-red-600 rounded mb-6"></div>
          </div>
          
          {/* Right side with content card */}
          <div className="lg:max-w-xl w-full">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border-t border-r border-red-800/30 shadow-xl">
              <p className="text-xl text-white leading-relaxed mb-8">
                Ele é exclusivo para médicos que querem aprender a trinca salvadora de vidas do RPP (Raciocínio Clínico, Prescrição Médica e Procedimentos) e ter a certeza de que vão conseguir executar no dia a dia.
              </p>
              
              {/* Feature bullets */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white ml-4 text-lg">Médicos que buscam aprimorar habilidades clínicas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white ml-4 text-lg">Profissionais que atuam em emergências</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white ml-4 text-lg">Recém-formados buscando confiança na prática</span>
                </div>
              </div>
              
              {/* CTA button */}
              <button onClick={scrollToRegister} className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded transition-all duration-300 flex items-center justify-center group w-full sm:w-auto">
                <span>Quero me inscrever</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSection;