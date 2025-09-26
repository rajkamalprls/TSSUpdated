import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  DollarSign, 
  Users, 
  FileText, 
  Lightbulb, 
  TrendingUp,
  Calendar,
  MessageCircle,
  Target,
  Award,
  CheckCircle,
  ExternalLink,
  PieChart
} from "lucide-react";

const EntrepreneurDashboard = () => {
  const startupMetrics = [
    { label: "Funding Stage", value: "Seed", icon: DollarSign, trend: "+25%" },
    { label: "Team Size", value: "8", icon: Users, trend: "+2" },
    { label: "Revenue (MRR)", value: "$12.5K", icon: TrendingUp, trend: "+15%" },
    { label: "Customers", value: "1,240", icon: Target, trend: "+8%" }
  ];

  const fundingSources = [
    {
      name: "TechVentures Capital",
      type: "VC Fund",
      stage: "Seed",
      ticket: "$250K - $2M",
      match: 88,
      status: "Active"
    },
    {
      name: "Innovation Accelerator",
      type: "Accelerator",
      stage: "Pre-Seed",
      ticket: "$50K - $150K",
      match: 92,
      status: "Application Open"
    },
    {
      name: "Angel Network SF",
      type: "Angel Group",
      stage: "Seed",
      ticket: "$100K - $500K",
      match: 76,
      status: "Active"
    }
  ];

  const pitchDeckTemplates = [
    {
      name: "SaaS Startup Template",
      description: "Perfect for B2B software companies",
      slides: 12,
      downloads: "5.2K",
      rating: 4.8
    },
    {
      name: "Consumer App Template",
      description: "Mobile-first consumer applications",
      slides: 15,
      downloads: "3.8K", 
      rating: 4.6
    },
    {
      name: "Hardware Startup Template",
      description: "Physical product companies",
      slides: 18,
      downloads: "2.1K",
      rating: 4.7
    }
  ];

  const mentorMatches = [
    {
      name: "Sarah Chen",
      title: "Former VP Product at Stripe",
      expertise: ["Product Strategy", "Growth", "Fintech"],
      match: 94,
      sessions: 156,
      rating: 4.9
    },
    {
      name: "Marcus Johnson", 
      title: "3x Startup Founder & Investor",
      expertise: ["Fundraising", "Go-to-Market", "Leadership"],
      match: 87,
      sessions: 203,
      rating: 4.8
    },
    {
      name: "Dr. Lisa Rodriguez",
      title: "CTO at Scale AI",
      expertise: ["AI/ML", "Technical Leadership", "Scaling"],
      match: 91,
      sessions: 89,
      rating: 4.9
    }
  ];

  const startupJourney = [
    { phase: "Idea Validation", progress: 100, status: "completed" },
    { phase: "MVP Development", progress: 85, status: "in-progress" },
    { phase: "Market Testing", progress: 40, status: "in-progress" },
    { phase: "Fundraising", progress: 0, status: "not-started" },
    { phase: "Scale & Growth", progress: 0, status: "not-started" }
  ];

  const upcomingEvents = [
    {
      title: "Pitch Perfect Workshop",
      date: "Dec 14, 2024",
      type: "Workshop",
      organizer: "Startup Hub",
      attendees: 45
    },
    {
      title: "Investor Demo Day",
      date: "Dec 18, 2024", 
      type: "Pitch Event",
      organizer: "VC Connect",
      attendees: 120
    },
    {
      title: "Founder Networking Mixer", 
      date: "Dec 22, 2024",
      type: "Networking",
      organizer: "Entrepreneur Society",
      attendees: 80
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, <span className="bg-gradient-hero bg-clip-text text-transparent">Maria!</span>
            </h1>
            <p className="text-muted-foreground">Track your startup journey and access growth resources.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="px-3 py-1">
              <Rocket className="w-4 h-4 mr-1" />
              Growth Stage
            </Badge>
            <Button variant="gradient">
              <Target className="w-4 h-4 mr-2" />
              Set Milestones
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Metrics & Journey */}
          <div className="lg:col-span-1 space-y-6">
            {/* Startup Metrics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Startup Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {startupMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                      </div>
                      <Badge variant="outline" className="text-xs text-secondary">
                        {metric.trend}
                      </Badge>
                    </div>
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Startup Journey Progress */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Startup Journey</CardTitle>
                <CardDescription>Track your progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {startupJourney.map((phase) => (
                  <div key={phase.phase} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{phase.phase}</span>
                      <span className="text-xs text-muted-foreground">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Pitch Deck
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Co-founder
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Mentor Session
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="launchpad" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="launchpad">Launchpad</TabsTrigger>
                <TabsTrigger value="funding">Funding</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              {/* Startup Launchpad */}
              <TabsContent value="launchpad" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        Idea Validation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Current Status: MVP Testing</h3>
                        <Progress value={85} className="mb-2" />
                        <p className="text-sm text-muted-foreground">Ready for market validation</p>
                      </div>
                      <Button variant="gradient" className="w-full">
                        Get Validation Feedback
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="w-5 h-5 text-secondary" />
                        Business Model
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Revenue Model</span>
                          <Badge variant="secondary">SaaS Subscription</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Target Market</span>
                          <Badge variant="secondary">B2B SME</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Pricing Strategy</span>
                          <Badge variant="secondary">Freemium</Badge>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Refine Business Model
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Next Milestones</CardTitle>
                    <CardDescription>Critical goals for the next 90 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { task: "Complete Series A pitch deck", deadline: "Dec 20", status: "in-progress" },
                        { task: "Hire 2 senior engineers", deadline: "Jan 15", status: "planned" },
                        { task: "Launch beta program with 50 users", deadline: "Jan 30", status: "planned" }
                      ].map((milestone, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-medium">{milestone.task}</h4>
                            <p className="text-sm text-muted-foreground">Due: {milestone.deadline}</p>
                          </div>
                          <Badge variant={milestone.status === 'in-progress' ? 'default' : 'secondary'}>
                            {milestone.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Funding */}
              <TabsContent value="funding" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      Funding Opportunities
                    </CardTitle>
                    <CardDescription>
                      Investors and accelerators matched to your startup
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {fundingSources.map((source, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{source.name}</h3>
                            <p className="text-muted-foreground mb-2">
                              {source.type} • {source.stage} Stage • {source.ticket}
                            </p>
                            <Badge 
                              variant={source.status === 'Active' ? 'default' : 'secondary'}
                            >
                              {source.status}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{source.match}%</div>
                            <div className="text-xs text-muted-foreground">match</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Pitch Deck Templates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pitchDeckTemplates.slice(0, 2).map((template, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-1">{template.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                          <div className="flex items-center justify-between text-xs">
                            <span>{template.slides} slides</span>
                            <span>⭐ {template.rating}</span>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Templates
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Funding Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Fundraising Goal</span>
                            <span className="text-sm font-medium">$2M</span>
                          </div>
                          <Progress value={35} className="mb-1" />
                          <p className="text-xs text-muted-foreground">$700K committed</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-primary">12</div>
                            <div className="text-xs text-muted-foreground">Investor Meetings</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-secondary">3</div>
                            <div className="text-xs text-muted-foreground">Term Sheets</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Mentorship */}
              <TabsContent value="mentorship" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Mentor Matches
                    </CardTitle>
                    <CardDescription>
                      Expert mentors aligned with your startup needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mentorMatches.map((mentor, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{mentor.name}</h3>
                            <p className="text-muted-foreground mb-2">{mentor.title}</p>
                            <div className="flex gap-2">
                              {mentor.expertise.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{mentor.match}%</div>
                            <div className="text-xs text-muted-foreground">match</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              ⭐ {mentor.rating} • {mentor.sessions} sessions
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            Book Session
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Resources */}
              <TabsContent value="resources" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Legal & Business</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Incorporation Guide
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Terms & Conditions Template
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Privacy Policy Generator
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Employee Handbook
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Growth Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Growth Hacking Guide
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Customer Acquisition
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <PieChart className="w-4 h-4 mr-2" />
                        Analytics Setup
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Award className="w-4 h-4 mr-2" />
                        Product-Market Fit
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Community */}
              <TabsContent value="community" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {event.date} • {event.organizer}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">{event.type}</Badge>
                            <Button size="sm">Register</Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Founder Groups</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        SaaS Founders Circle
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Female Entrepreneurs
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        AI Startup Community
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Seed Stage Founders
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EntrepreneurDashboard;