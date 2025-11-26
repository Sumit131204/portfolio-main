import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate <span className="text-primary font-semibold">Data Science enthusiast</span> with 
                a keen interest in exploring the power of data to solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy working with <span className="text-primary font-semibold">machine learning</span>, 
                <span className="text-primary font-semibold"> data analysis</span>, and 
                <span className="text-primary font-semibold"> visualization</span> to uncover insights 
                and drive impactful decisions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Continuously learning and experimenting, I aim to build innovative solutions that combine 
                <span className="text-primary font-semibold"> analytical thinking</span> with 
                <span className="text-primary font-semibold"> technology</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Machine Learning', 'Data Analysis', 'Computer Vision', 'Deep Learning', 'Python', 'Problem Solving'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-slide-up">
            <Card className="card-glass hover:glow-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-primary">
                          B.Tech in Electronics & Telecommunication Engineering (E&TC)
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          MIT Academy of Engineering, Alandi, Pune
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Graduation: 2027</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;