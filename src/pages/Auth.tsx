import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  Briefcase, 
  Users,
  Chrome,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";

const Auth = () => {
  const userRoles = [
    {
      id: "student",
      name: "Student",
      icon: GraduationCap,
      description: "From Inter to PhD, all streams",
      features: [
        "AI-powered job & internship recommendations",
        "Personalized learning paths",
        "Mock interviews & coding practice",
        "Mentorship matching",
        "Gamified progress tracking"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      id: "entrepreneur",
      name: "Entrepreneur",
      icon: Rocket,
      description: "Startup founders & aspiring entrepreneurs",
      features: [
        "Startup launchpad resources",
        "Investor & funding connections",
        "Pitch deck templates",
        "Founder community access",
        "Legal & business guidance"
      ],
      gradient: "bg-gradient-secondary"
    },
    {
      id: "college",
      name: "College",
      icon: Building2,
      description: "Educational institutions",
      features: [
        "Campus placement support",
        "Industry collaboration tools",
        "Student progress analytics",
        "Employer partnership management",
        "Event & hackathon hosting"
      ],
      gradient: "bg-gradient-accent"
    },
    {
      id: "company",
      name: "Company",
      icon: Briefcase,
      description: "Hiring managers & HR teams",
      features: [
        "Access to verified talent pool",
        "Campus recruitment tools",
        "Job posting & management",
        "Skill-based candidate matching",
        "Branding & engagement tools"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      id: "incubator",
      name: "Incubator",
      icon: Users,
      description: "Accelerators & mentorship programs",
      features: [
        "Startup pipeline management",
        "Mentor matching system",
        "Challenge & hackathon hosting",
        "Portfolio company tracking",
        "Success story showcase"
      ],
      gradient: "bg-gradient-secondary"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Get started immediately with Google Single Sign-On"
    },
    {
      icon: CheckCircle,
      title: "Verified Network",
      description: "Connect with authenticated students, companies, and mentors"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join <span className="bg-gradient-hero bg-clip-text text-transparent">The Student Spot</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose your role and unlock personalized opportunities, connections, and resources tailored just for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {benefits.map((benefit) => (
                <Badge key={benefit.title} variant="secondary" className="text-sm py-2 px-4">
                  <benefit.icon className="w-4 h-4 mr-2" />
                  {benefit.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auth Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
                {userRoles.map((role) => (
                  <TabsTrigger 
                    key={role.id} 
                    value={role.id}
                    className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <role.icon className="w-6 h-6 mb-1" />
                    <span className="text-xs lg:text-sm font-medium">{role.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {userRoles.map((role) => (
                <TabsContent key={role.id} value={role.id} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Role Information */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${role.gradient} rounded-xl flex items-center justify-center`}>
                          <role.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{role.name}</h2>
                          <p className="text-muted-foreground">{role.description}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-foreground mb-4">What you'll get:</h3>
                        <ul className="space-y-3">
                          {role.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Auth Card */}
                    <Card className="shadow-medium">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Sign In as {role.name}</CardTitle>
                        <CardDescription>
                          Use your Google account to get started instantly
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full h-12 text-lg"
                        >
                          <Chrome className="w-5 h-5 mr-3" />
                          Continue with Google
                        </Button>

                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or</span>
                          </div>
                        </div>

                        <Button variant="ghost" size="lg" className="w-full h-12 text-lg">
                          Create Account with Email
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                          By continuing, you agree to our{" "}
                          <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            Already have an account?
                          </p>
                          <Button variant="link" className="p-0 h-auto text-primary">
                            Sign in here
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Trusted by Leading Organizations</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Partner Logos Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-background rounded-lg p-6 shadow-soft">
                  <div className="h-12 bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Partner {i}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">SOC 2</div>
                <div className="text-sm text-muted-foreground">Security Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;