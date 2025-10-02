import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/5212222601052";

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Contacto
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 mb-10"
        >
          Agenda tu consulta o resuelve tus dudas directamente.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Tu Nombre" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Tu Correo Electrónico" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <textarea placeholder="Tu Mensaje" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
        
        <motion.a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 inline-flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
        >
          <FaWhatsapp size={24} />
          Agendar por WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
