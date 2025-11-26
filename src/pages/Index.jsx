import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setCurrentSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar 
        currentSection={currentSection} 
        onSectionChange={scrollToSection} 
      />

      <main>
        <HeroSection onSectionChange={scrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection onSectionChange={scrollToSection} />
        <ContactSection />
      </main>

      <footer className="bg-secondary/20 border-t border-border/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">SK</span>
              </div>
              <span className="font-bold text-lg hero-text">Sumit Kumar</span>
            </div>
            
            <p className="text-muted-foreground text-sm text-center">
              © 2025 Sumit Kumar. All rights reserved. Built with passion for data science.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Data Science Enthusiast</span>
              <span>•</span>
              <span>Machine Learning Developer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;