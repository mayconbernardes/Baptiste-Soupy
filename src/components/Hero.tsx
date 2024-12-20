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
            src="https://scontent-cdg4-1.cdninstagram.com/v/t51.29350-15/321346304_570781247756248_3074941917744981558_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-cdg4-1.cdninstagram.com&_nc_cat=104&_nc_ohc=BB0Tj4KrvTYQ7kNvgFMZ25t&_nc_gid=dd12bb60a8df43b2a0bf5efb83ab944e&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzAwMDQ1NDMwOTk2MzkyODA2OQ%3D%3D.3-ccb7-5&oh=00_AYCoiRrP9vv0OlrSV0l3iXP3-7rXYdYT3SYzECbSLQfIbw&oe=676B6F45&_nc_sid=7a9f4b"
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