import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5212222601052';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};

export default WhatsAppButton;
