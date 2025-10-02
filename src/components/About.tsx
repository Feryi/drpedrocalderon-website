import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="acerca" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {/* Espacio para la foto del doctor */}
            <div className="bg-gray-200 h-80 w-full rounded-lg shadow-md flex items-center justify-center">
              <span className="text-gray-500">Foto del Dr. Calderón</span>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Acerca de mí</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              El Dr. Pedro Calderón es especialista en traumatología y ortopedia, con amplia experiencia en el tratamiento de fracturas complejas y procedimientos mínimamente invasivos. Su objetivo es lograr la recuperación funcional y rápida del paciente con técnicas modernas y seguras.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
