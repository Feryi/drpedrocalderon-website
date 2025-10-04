import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const proceduresList = [
  'Prótesis de Rodilla y Cadera',
  'Padecimientos de Columna',
  'Artroscopia',
  'Pie plano',
  'Fracturas y Luxaciones',
  'Hallux Valgus (juanetes)',
  'Control de Osteoporosis',
];

const Procedures: React.FC = () => {
  return (
    <section id="procedimientos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Padecimientos Ortopédicos y Traumatológicos
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {proceduresList.map((procedure, index) => (
              <motion.li
                key={index}
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheck className="text-blue-700 mr-4 flex-shrink-0" />
                <span>{procedure}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Procedures;