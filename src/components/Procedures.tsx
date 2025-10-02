import React from 'react';
import { motion } from 'framer-motion';

const procedureData = [
  {
    title: 'Fractura de cadera',
    description: 'Tratamiento con fijación mediante clavo centromedular. Procedimiento mínimamente invasivo que permite una movilización temprana.',
  },
  {
    title: 'Artroscopía de rodilla',
    description: 'Técnica recomendada para dolor crónico de rodilla. Permite una recuperación rápida y mejora la movilidad.',
  },
  {
    title: 'Fractura de acetábulo',
    description: 'Lesión causada por accidentes de alta energía. Con fijación adecuada se logra una recuperación satisfactoria.',
  },
  {
    title: 'Fractura compleja de codo',
    description: 'Lesión en los tres huesos de la articulación. Mediante fijación precisa se consigue una recuperación funcional del brazo.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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
          Procedimientos Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procedureData.map((procedure, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">{procedure.title}</h3>
              <p className="text-gray-600">{procedure.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
