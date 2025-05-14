import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png' 


const Hero = ({ scrollToRegister }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="relative w-full min-h-[700px] bg-black overflow-hidden flex items-center justify-center">
            {/* Background image with darker overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <img
                    src='src/assets/hero-bg.png'
                    alt='background'
                    className="w-full h-full object-cover z-0"
                />
            </div>

            {/* Main content container - centered */}
            <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
                {/* Logo at top center */}
                <div className="flex justify-center mb-6">
                    <img
                        src={logoImage}
                        alt="Sala Vermelha"
                        className="h-16 md:h-24 w-auto"
                    />
                </div>

                {/* Main headline */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Conquiste a confiança para atender na <span className="text-red-600">Sala Vermelha</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                    Você vai dominar Raciocínio Clínico, Prescrição Médica e os principais Procedimentos Salvadores de Vida.
                </p>

                {/* Call to action */}
                <div className="mb-10">
                    <p className="text-lg text-gray-300 mb-6">
                        Assista o vídeo e descubra como
                    </p>

                    <button
                        onClick={scrollToRegister}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                        Fazer minha inscrição
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Hero;