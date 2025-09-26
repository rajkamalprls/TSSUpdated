import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Users, 
  BookOpen, 
  Briefcase, 
  Rocket, 
  Trophy, 
  Calendar,
  MessageCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Get personalized job, internship, and course suggestions tailored to your profile and goals.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Target,
      title: "Role-Based Dashboards",
      description: "Customized interfaces for students, entrepreneurs, colleges, companies, and incubators.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Users,
      title: "Comprehensive Mentorship",
      description: "Connect with industry experts, peer mentors, and AI-powered career guidance.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Access courses, coding practice, mock interviews, and skill development resources.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Briefcase,
      title: "Job & Internship Board",
      description: "Discover opportunities in private companies, government sectors, and startups.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Rocket,
      title: "Startup Ecosystem",
      description: "Launch your startup with funding resources, pitch decks, and incubator connections.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Trophy,
      title: "Gamification System",
      description: "Earn badges, points, and climb leaderboards while achieving your career goals.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Participate in hackathons, workshops, networking events, and industry webinars.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: MessageCircle,
      title: "Community Platform",
      description: "Join groups, collaborate on projects, and build meaningful professional connections.",
      gradient: "bg-gradient-accent",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to <span className="bg-gradient-hero bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From AI-powered recommendations to comprehensive mentorship, we've built the ultimate platform for your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={feature.title} className="group hover:shadow-medium transition-smooth hover:-translate-y-1 cursor-pointer border-border/50">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;