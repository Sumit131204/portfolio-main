import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Brain, Database, TrendingUp, Eye, Zap } from 'lucide-react';

const ServicesSection = ({ onSectionChange }) => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Transform raw data into meaningful insights through comprehensive analysis, statistical modeling, and advanced visualization techniques.',
      features: [
        'Statistical Analysis & Modeling',
        'Data Cleaning & Preprocessing',
        'Interactive Dashboards',
        'Comprehensive Reports',
        'Data Visualization',
        'Trend Analysis'
      ],
      tools: ['Python', 'Tableau', 'Power BI', 'SQL', 'Excel']
    },
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn from data to make predictions, automate processes, and drive business decisions.',
      features: [
        'Predictive Modeling',
        'Classification & Regression',
        'Deep Learning Networks',
        'Model Optimization',
        'Algorithm Selection',
        'Performance Evaluation'
      ],
      tools: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Develop vision-based solutions for object detection, image classification, and real-time quality control systems.',
      features: [
        'Object Detection & Classification',
        'Image Processing',
        'Real-time Analysis',
        'Quality Control Systems',
        'Industrial Automation',
        'Custom Vision Models'
      ],
      tools: ['OpenCV', 'YOLO', 'TensorFlow', 'PIL', 'Scikit-image']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive data science solutions to drive your business forward
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-glass hover:glow-accent transition-all duration-300 hover:scale-105 animate-slide-up h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="card-glass animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold hero-text mb-4">My Process</h3>
              <p className="text-muted-foreground text-lg">
                A systematic approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your data and objectives' },
                { step: '02', title: 'Analysis', desc: 'Exploring and preparing your data' },
                { step: '03', title: 'Modeling', desc: 'Building and optimizing solutions' },
                { step: '04', title: 'Delivery', desc: 'Deploying and documenting results' }
              ].map((phase, index) => (
                <div key={phase.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-muted-foreground text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-medium glow-primary transition-all hover:scale-105"
                onClick={() => onSectionChange('contact')}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;