import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, GraduationCap, Rocket, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const roles = [
    { name: "Students", icon: GraduationCap, description: "Find jobs, internships, and courses" },
    { name: "Entrepreneurs", icon: Rocket, description: "Launch your startup journey" },
    { name: "Colleges", icon: Building2, description: "Connect with industry partners" },
    { name: "Companies", icon: Briefcase, description: "Hire top talent" },
    { name: "Incubators", icon: Users, description: "Support startup ecosystem" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students and professionals collaborating" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            The <span className="bg-gradient-hero bg-clip-text text-transparent">Student Spot</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connecting Students, Startups, Colleges & Companies in one comprehensive ecosystem for growth, learning, and opportunity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Explore Platform
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="bg-muted px-3 py-1 rounded-full">✨ AI-Powered Recommendations</span>
            <span className="bg-muted px-3 py-1 rounded-full">🎯 Role-Based Dashboards</span>
            <span className="bg-muted px-3 py-1 rounded-full">🤝 Comprehensive Mentorship</span>
            <span className="bg-muted px-3 py-1 rounded-full">🚀 Startup Ecosystem</span>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <Card key={role.name} className="group hover:shadow-medium transition-smooth cursor-pointer hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{role.name}</h3>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Colleges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Startup Mentors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;