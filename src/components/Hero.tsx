import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5212222601052";

  return (
    <section id="inicio" className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
        >
          Confianza, experiencia y atención especializada <br /> 
          <span className="text-blue-700">en traumatología y ortopedia.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600"
        >
          Recupera tu movilidad y bienestar con tratamientos de vanguardia.
        </motion.p>
        <motion.a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-transform duration-300 transform hover:scale-105"
        >
          Agendar Cita por WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
