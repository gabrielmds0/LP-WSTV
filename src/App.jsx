import { useState, useRef } from 'react';
import './App.css'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Target from './components/Target'
import Features from './components/Features'
import Benefits from "./components/Benefits"
import Register from "./components/Register"
import ResponsiveFAQ from './components/Faq'
import FoundersSection from './components/Founder'
import VideoSection from './components/VideoSection'




function App() {
  const registerRef = useRef(null);

const scrollToRegister = () => {
  registerRef.current?.scrollIntoView({ behavior: 'smooth' });
};


  return (
    <div className="app">
      <Hero scrollToRegister={scrollToRegister} />
      <VideoSection scrollToRegister={scrollToRegister} />
      <Cards scrollToRegister={scrollToRegister} />
      <Target scrollToRegister={scrollToRegister} />
      <Features />
      <Benefits scrollToRegister={scrollToRegister} />
      <div ref={registerRef}>
        <Register />
      </div>
      <ResponsiveFAQ />
      <FoundersSection />
    </div>
  );
}

export default App