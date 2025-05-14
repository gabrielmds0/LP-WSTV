import React from 'react';

const Features = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            2 dias aprendendo presencialmente o que você só viu de maneira online
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            O Workshop Presencial Sala Vermelha é a sua oportunidade de aprender presencialmente
            com Dr. Rodrigo Cleto e Dr. Ian Camilo.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600">Aprendizado imersivo</h3>
              </div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Durante 2 dias</span> o Dr. Rodrigo Cleto e o Dr. Ian Camilo vão te 
                ensinar presencialmente como você nunca viu o método RPP 
                (Raciocínio Clínico, Prescrição Médica e Procedimentos).
              </p>
              <p className="text-gray-600 text-sm">
                Ideal para médicos recém-formados que precisam ganhar segurança clínica rapidamente.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600">Aprender com especialistas na área</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Dr. Rodrigo Cleto</span> é titulado em Clínica Médica, Cardiologia e Medicina Intensiva.
                  Instrutor do ACLS e BLS pela American Heart Association (AHA) e coordenador da
                  Unidade de Terapia Intensiva há mais de 20 anos.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Dr. Ian Camilo</span> é pós-graduado em Medicina de Emergência e Cardiologista,
                  instrutor do ACLS e BLS pela American Heart Association (AHA) e Professor
                  Universitário da Disciplina de Urgência e Emergência.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600">Garantia que você vai conseguir colocar em prática</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Ver um curso online não é garantia que você vai conseguir colocar em prática. Por
                isso, no Workshop <span className="font-semibold">você terá o acompanhamento presencial do Dr. Rodrigo Cleto e
                do Dr. Ian Camilo.</span> 
              </p>
              <p className="text-gray-600 text-sm">
                Supere a insegurança dos primeiros plantões com mentoria direta de especialistas.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600">Oficina de Prescrição</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Na oficina você terá um limite de 60 minutos para dar
                o diagnóstico preciso e passar a prescrição e os procedimentos
                necessários para cada caso levantado.
              </p>
              <p className="text-gray-700">
                Ao final, Dr. Ian Camilo e Dr. Rodrigo Cleto irão analisar cada caso juntamente com os
                alunos, oferecendo feedback personalizado para situações reais que você enfrentará nos primeiros anos de carreira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;