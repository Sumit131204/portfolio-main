import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, BarChart, Palette, Globe, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'R', level: 65 }
      ]
    },
    {
      title: 'Data Visualization',
      icon: BarChart,
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Plotly', level: 75 }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'ReactJS', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'Flask', level: 75 }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'OpenCV', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis', level: 65 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Jupyter', level: 90 }
      ]
    }
  ];

  const coreSkills = [
    'Python', 'Tableau', 'Power BI', 'ReactJS', 'JavaScript', 
    'Machine Learning', 'Data Analysis', 'Computer Vision'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and tools I work with
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 hero-text">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill, index) => (
              <div
                key={skill}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold border border-primary/20 hover:bg-primary/20 transition-all hover:scale-105 glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-glass hover:glow-accent transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="card-glass max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold hero-text mb-4">What I Bring to the Table</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-muted-foreground">Years of Learning</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;