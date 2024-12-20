import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Laravel', level: 75 },
  { name: 'PHP', level: 85 },
  { name: 'SQL', level: 80 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section bg-muted">
      <div className="container" ref={sectionRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;