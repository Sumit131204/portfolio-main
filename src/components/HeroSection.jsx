import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ArrowRight, Sparkles } from "lucide-react";
import sumitProfile from "@/assets/sumit-profile.jpg";

const HeroSection = ({ onSectionChange }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10n ">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-center space-y-12 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mt-20">
              <Sparkles className="w-4 h-4" />
              Available for new opportunities
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                  <span className="block hero-text">Sumit</span>
                  <span className="block hero-text">Kumar</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-light text-primary">
                    Data Science
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Transforming data into actionable insights through machine
                    learning, computer vision, and innovative analytics
                    solutions. Passionate about solving real-world problems with
                    cutting-edge technology.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-primary/25 transition-all hover:scale-105 glow-primary"
                  onClick={() => onSectionChange("contact")}
                >
                  Let's Work Together
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/5 font-medium px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1eh2mVCguJs4Y2LM_CSPLBpD0cmf5r-qQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6 pt-8">
                <a
                  href="https://github.com/Sumit131204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:scale-110 group"
                >
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/sumit-kumar-3a092736b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
                <button
                  onClick={() => onSectionChange("contact")}
                  className="p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:scale-110 group"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>

            {/* Portrait - Floating */}
            <div className="relative max-w-sm mx-auto animate-slide-up">
              <div className="relative">
                {/* Floating rings */}
                <div
                  className="absolute -inset-8 rounded-full border border-primary/20 animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute -inset-16 rounded-full border border-accent/10 animate-spin"
                  style={{
                    animationDuration: "30s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Portrait */}
                <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto">
                  <img
                    src={sumitProfile}
                    alt="Sumit Kumar - Data Science Professional"
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl opacity-60 animate-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
