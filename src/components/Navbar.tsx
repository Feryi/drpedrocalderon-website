import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Inicio', id: 'inicio' },
    { title: 'Procedimientos', id: 'procedimientos' },
    { title: 'Acerca de mí', id: 'acerca' },
    { title: 'Contacto', id: 'contacto' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Dr. Pedro Calderón
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)} 
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
