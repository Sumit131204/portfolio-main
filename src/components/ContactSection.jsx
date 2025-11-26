import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, MapPin, Send, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumit.kumar100525@gmail.com",
      href: "mailto:sumit.kumar100525@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8208956358",
      href: "tel:+918208956358",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sumit-kumar-3a092736b",
      href: "https://linkedin.com/in/sumit-kumar-3a092736b",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sumit131204",
      href: "https://github.com/Sumit131204",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:sumit.kumar100525@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Email client opened!",
      description: "Your message has been prepared in your email client.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next data science project? Let's
            discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-glass animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-background font-medium glow-primary transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="card-glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="card-glass">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and
                    achievements.
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-background transition-all hover:scale-105 glow-accent"
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
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-glass">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Based in India
                  <br />
                  Available for remote work
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="card-glass animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold hero-text mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Whether you have a data science project, need machine learning
                solutions, or want to discuss collaboration opportunities, I'm
                here to help turn your ideas into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-medium glow-primary transition-all hover:scale-105"
                  asChild
                >
                  <a href="mailto:sumit.kumar100525@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Project
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-background transition-all hover:scale-105"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/sumit-kumar-3a092736b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
