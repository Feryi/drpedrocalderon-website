import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Procedures from './components/Procedures';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Procedures />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;