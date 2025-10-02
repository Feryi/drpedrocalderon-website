import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-bold">Dr. Pedro Calderón</h3>
        <p className="text-gray-400 mt-2">Traumatología y Ortopedia</p>
        <div className="mt-4">
          <p>Teléfono: [Tu Número de Teléfono]</p>
          <p>Correo: [Tu Correo Electrónico]</p>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Dr. Pedro Calderón. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
