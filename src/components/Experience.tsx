import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Stage - Shenron Formation',
    date: 'Avril à juin 2024',
    description: 'Développement d'un projet CDA avec des étudiants de 3ème année, création d'une application mobile et d'un site web en utilisant Laravel, React et React Native. Créations de maquettes sur Figma en partenariat avec une étudiante de 3ème année.',
    tech: 'LARAVEL/REACT'
  },
  {
    title: 'Stage - Naval Group',
    date: 'Avril à juin 2023',
    description: 'Conception et développement de l'intranet de la DIRISI (base navale de Toulon). Pendant ce stage j'ai dû réaliser un tableau qui permettait de faciliter la recherche d'informations des militaires afin de leur faire gagner du temps.',
    tech: 'PHP/SQL'
  },
  {
    title: 'Stage - Nestenn Siège Social',
    date: 'Janvier 2023',
    description: 'Refonte et optimisation du site destiné aux franchisés.',
    tech: 'HTML/CSS'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Expérience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full" />
              <div className="bg-muted rounded-lg p-6 ml-4">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {exp.date}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  {exp.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;