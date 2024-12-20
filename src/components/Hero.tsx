import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-white relative">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
            Baptiste Soupy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Développeur Full Stack en alternance
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
            >
              Me contacter
            </a>
            <a
              href="#about"
              className="inline-block px-6 py-3 border border-white hover:bg-white/10 rounded-lg transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="/profile.jpg"
            alt="Baptiste Soupy"
            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;