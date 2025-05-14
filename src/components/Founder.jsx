import React, { useState, useEffect } from 'react';

const FoundersSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedBio, setExpandedBio] = useState(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle bio expansion (for mobile)
  const toggleBio = (doctorId) => {
    if (expandedBio === doctorId) {
      setExpandedBio(null);
    } else {
      setExpandedBio(doctorId);
    }
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Ian Camilo",
      photo: "src/assets/Ian.jpg",
      shortBio: "Graduado em Medicina pela UFMG, Instrutor do ACLS e BLS pela American Heart Association (AHA).",
      fullBio: "Graduado em Medicina pela UFMG, Instrutor do ACLS e BLS pela American Heart Association (AHA). Pós Graduado em Medicina de Emergência e Cardiologia, pelo Hospital Albert Einstein. Diarista na UTI1 do Hospital Jacob Facuri, Professor Universitário na Disciplina de Urgência e Emergência e Preceptor do internato de Clínica Médica de uma das principais faculdades de Goiás.",
      credentials: [
        { label: "UFMG", icon: "academic-cap" },
        { label: "ACLS & BLS Instrutor", icon: "heart" },
        { label: "Emergência e Cardiologia", icon: "clipboard-document-check" }
      ]
    },
    {
      id: 2,
      name: "Dr. Rodrigo Cleto",
      photo: "src/assets/Rodrigo.jpg",
      shortBio: "Titulado em Clínica Médica, Cardiologia e Medicina Intensiva, Instrutor do ACLS e BLS pela American Heart Association (AHA).",
      fullBio: "O Dr Rodrigo Cleto é Titulado em Clínica Médica, Cardiologia e Medicina Intensiva, Instrutor do ACLS e BLS pela American Heart Association (AHA), co-fundador da Liberdade Médica Educação, coordenador de Unidade de Terapia Intensiva há mais de 20 anos.",
      credentials: [
        { label: "Clínica Médica, Cardiologia e Medicina Intensiva", icon: "trophy" },
        { label: "ACLS & BLS Instrutor", icon: "heart" },
        { label: "20+ anos coordenando UTI", icon: "clock" }
      ]
    }
  ];

  // Heroicons for credentials
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'academic-cap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        );
      case 'clipboard-document-check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
          </svg>
        );
      case 'trophy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-amber-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Os fundadores da Liberdade Médica
        </h2>
        
        {/* Desktop Layout */}
        {!isMobile && (
          <div className="flex flex-wrap justify-center gap-8">
            {doctors.map(doctor => (
              <div 
                key={doctor.id} 
                className="w-full max-w-xl overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  {/* Custom image positioning for each doctor */}
                  <div className="h-72 overflow-hidden">
                    <div className="w-full h-full relative">
                                                <img 
                        src={doctor.photo} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        style={doctor.id === 1 
                          ? { objectPosition: '50% 35%', objectFit: 'cover' } // For Dr. Ian
                          : { objectPosition: '50% 25%', objectFit: 'cover' } // For Dr. Rodrigo
                        }
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "src/assets/placeholder-doctor.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{doctor.name}</h3>
                  
                  {/* Credentials */}
                  <div className="space-y-2 mb-5">
                    {doctor.credentials.map((credential, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          {getIcon(credential.icon)}
                        </div>
                        <span className="text-sm">{credential.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Full bio for desktop */}
                  <p className="text-gray-700 leading-relaxed">{doctor.fullBio}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Mobile Layout */}
        {isMobile && (
          <div className="space-y-8">
            {doctors.map(doctor => (
              <div 
                key={doctor.id} 
                className="overflow-hidden rounded-lg shadow-md border border-gray-100"
              >
                {/* Custom image positioning for each doctor */}
                <div className="h-60 relative">
                  <div className="w-full h-full relative">
                                          <img 
                      src={doctor.photo} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      style={doctor.id === 1 
                        ? { objectPosition: '50% 35%', objectFit: 'cover', transform: 'scale(0.95)' } // For Dr. Ian
                        : { objectPosition: '50% 25%', objectFit: 'cover' } // For Dr. Rodrigo
                      }
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "src/assets/placeholder-doctor.jpg";
                      }}
                    />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{doctor.name}</h3>
                  
                  {/* Credentials for mobile */}
                  <div className="space-y-1.5 mb-4">
                    {doctor.credentials.slice(0, 2).map((credential, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                          {getIcon(credential.icon)}
                        </div>
                        <span className="text-xs">{credential.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Short bio initially, expandable */}
                  <p className="text-gray-700 text-sm mb-3">
                    {expandedBio === doctor.id ? doctor.fullBio : doctor.shortBio}
                  </p>
                  
                  {/* Expand/collapse button */}
                  <button 
                    className="text-red-600 text-sm font-medium flex items-center focus:outline-none"
                    onClick={() => toggleBio(doctor.id)}
                  >
                    {expandedBio === doctor.id ? 'Ver menos' : 'Ver mais'}
                    <svg 
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${expandedBio === doctor.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FoundersSection;