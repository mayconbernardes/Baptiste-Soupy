import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expérience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-heading font-bold text-xl">
            Baptiste Soupy
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;