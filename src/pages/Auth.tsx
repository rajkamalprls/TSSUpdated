import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  Briefcase, 
  Users,
  Chrome,
  Shield,
  Zap,
  CheckCircle,
  Mail
} from "lucide-react";

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, signIn, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate('/');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, selectedRole, displayName);
        if (!error) {
          // Redirect to appropriate dashboard based on role
          navigate(`/dashboard/${selectedRole}`);
        }
      } else {
        const { error } = await signIn(email, password);
        if (!error) {
          navigate('/');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const userRoles = [
    {
      id: "student",
      name: "Students",
      description: "Find jobs, internships, and courses",
      icon: GraduationCap,
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
      name: "Entrepreneurs",
      description: "Launch your startup journey",
      icon: Rocket,
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
      name: "Colleges",
      description: "Connect with industry partners",
      icon: Building2,
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
      name: "Companies",
      description: "Hire top talent",
      icon: Briefcase,
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
      name: "Incubators",
      description: "Support startup ecosystem",
      icon: Users,
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
      description: "Get started immediately with email signup"
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
            <Tabs value={selectedRole} onValueChange={setSelectedRole} className="w-full">
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
                        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          {isSignUp ? `Join as ${role.name.slice(0, -1)}` : 'Welcome Back'}
                        </CardTitle>
                        <CardDescription>
                          {isSignUp ? 'Create your account to get started' : 'Sign in to your account'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {isSignUp && (
                            <div className="space-y-2">
                              <Label htmlFor="displayName">Full Name</Label>
                              <Input
                                id="displayName"
                                type="text"
                                placeholder="Enter your full name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                required={isSignUp}
                              />
                            </div>
                          )}
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                          
                          <Button 
                            type="submit"
                            variant="gradient" 
                            size="lg" 
                            className="w-full h-12 text-lg"
                            disabled={loading}
                          >
                            {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
                          </Button>
                        </form>

                        <div className="text-center text-sm text-muted-foreground">
                          By continuing, you agree to our{" "}
                          <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                          </p>
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-primary"
                            onClick={() => setIsSignUp(!isSignUp)}
                          >
                            {isSignUp ? 'Sign in here' : 'Create account here'}
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