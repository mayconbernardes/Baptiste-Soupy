import { Briefcase, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          À propos de moi
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionné par le développement web, j'ai déjà acquis une petite expérience dans la création d'applications
              web innovantes et performantes. Mon intérêt pour la programmation me pousse à toujours chercher à
              améliorer mes compétences et à suivre les dernières tendances technologiques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Je suis sérieux, ponctuel et déterminé.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Centres d'intérêt</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Les nouvelles technologies</li>
                <li>Les voyages (Londres, Thaïlande, New York)</li>
                <li>Le sport (musculation, plongée, ski alpin)</li>
                <li>Le gaming</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Informations</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-accent" size={20} />
                  <span>20 ans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent" size={20} />
                  <span>Marseille/Var</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent" size={20} />
                  <a href="mailto:baptiste.soupy@gmail.com" className="hover:text-accent transition-colors">
                    baptiste.soupy@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent" size={20} />
                  <span>+33 6 52 15 29 99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-accent" size={20} />
                  <span>Titulaire du permis B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;