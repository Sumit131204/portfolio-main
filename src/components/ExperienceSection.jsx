import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Concept Systems and Technologies',
      duration: '2 months',
      type: 'Internship',
      description: 'Built a Realtime Vision-Based Quality Control for Industrial Objects',
      achievements: [
        'Applied computer vision for industrial automation',
        'Developed real-time object detection systems',
        'Implemented quality control algorithms'
      ],
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning']
    },
    {
      title: 'Best Research Paper Award',
      company: 'ICUBE 2025, IEEE – PCCOE Pune',
      duration: '2025',
      type: 'Award',
      description: 'An Automated Realtime Image Driven Quality Control: A Vision-Based Solution for Industrial Object Classification',
      achievements: [
        'Recognized for innovative research in computer vision',
        'Published in IEEE conference proceedings',
        'Presented cutting-edge industrial automation solution'
      ],
      technologies: ['Computer Vision', 'Deep Learning', 'Industrial IoT', 'Research']
    }
  ];

  const currentLearning = [
    'Advanced Machine Learning',
    'Deep Learning',
    'Neural Networks',
    'Computer Vision',
    'Natural Language Processing'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in data science and technology
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8 mb-12 animate-fade-in">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/10 border-4 border-primary rounded-full flex-shrink-0 z-10">
                  {exp.type === 'Award' ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <Building className="w-6 h-6 text-primary" />
                  )}
                </div>

                <Card className="flex-1 card-glass hover:glow-accent transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                        <Badge variant="secondary" className="ml-2">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Card className="card-glass animate-slide-up">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold hero-text mb-2">Currently Learning</h3>
                <p className="text-muted-foreground">
                  Expanding my knowledge in advanced technologies
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {currentLearning.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;