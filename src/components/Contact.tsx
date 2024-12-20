import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-primary text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-lg text-gray-300">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:baptiste.soupy@gmail.com"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Mail size={20} />
              <span>baptiste.soupy@gmail.com</span>
            </a>
            <a
              href="tel:+33652152999"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Phone size={20} />
              <span>+33 6 52 15 29 99</span>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/baptiste-soupy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Soupyx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
