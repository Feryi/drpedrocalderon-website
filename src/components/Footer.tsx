import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Dr. Pedro C. Calderón</h3>
        <p className="text-gray-400 mt-2">Traumatología y Ortopedia</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start justify-center md:justify-start">
            <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Dirección</p>
              <p className="text-gray-400">Blvrd. 14 sur #4302 col. Jardines de San Manuel</p>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <FaPhone className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Teléfono</p>
              <p className="text-gray-400">2222601052</p>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-end">
            <FaEnvelope className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Correo</p>
              <p className="text-gray-400">pedroccalderon@hotmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-semibold">Atención médica en:</p>
          <p className="text-gray-400">Puebla, Atlixco, Tlaxcala y San Pablo del Monte</p>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Dr. Pedro C. Calderón. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;