import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former product manager at Google with 8+ years in EdTech",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Amazon engineer, built scalable platforms for millions of users",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Head of Partnerships",
      bio: "Former startup founder with deep connections in the ecosystem",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users" },
    { icon: Target, value: "1,200+", label: "Partner Companies" },
    { icon: Award, value: "300+", label: "Success Stories" },
    { icon: Globe, value: "25", label: "Countries" }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Computer Science Graduate",
      company: "Now at Microsoft",
      quote: "The Student Spot helped me land my dream job at Microsoft. The AI recommendations were spot-on and the mentorship program was invaluable."
    },
    {
      name: "Lisa Wang",
      role: "Startup Founder",
      company: "TechFlow AI",
      quote: "From idea to funding, The Student Spot connected me with the right mentors and investors. My startup raised $2M in seed funding!"
    },
    {
      name: "Dr. James Miller",
      role: "Career Services Director",
      company: "Stanford University",
      quote: "We've partnered with The Student Spot for 3 years. Their platform has significantly improved our students' job placement rates."
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">The Student Spot</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're on a mission to bridge the gap between education and opportunity, creating a thriving ecosystem where students, startups, colleges, and companies collaborate for mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To create a world where every student has access to opportunities that match their potential, where startups can easily find talent and mentorship, and where educational institutions and companies work together seamlessly to build the future workforce.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Award className="w-8 h-8 text-secondary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to career opportunities through AI-powered recommendations, comprehensive mentorship, and a vibrant community that connects all stakeholders in the education-to-employment journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate individuals with deep experience in education, technology, and entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="text-center shadow-medium hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our community members who've achieved their goals through The Student Spot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="shadow-medium">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to unlock your potential and connect with opportunities that matter?
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;