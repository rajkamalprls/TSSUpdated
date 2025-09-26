import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  Users, 
  TrendingUp, 
  Calendar, 
  Award,
  Target,
  BarChart3,
  MessageCircle,
  DollarSign,
  Lightbulb,
  Building2,
  GraduationCap,
  Star,
  CheckCircle,
  Clock
} from "lucide-react";

const IncubatorDashboard = () => {
  const incubatorMetrics = [
    { label: "Active Startups", value: "42", icon: Rocket, trend: "+8" },
    { label: "Total Funding Raised", value: "$125M", icon: DollarSign, trend: "+25%" },
    { label: "Success Rate", value: "73%", icon: Target, trend: "+5%" },
    { label: "Mentor Network", value: "156", icon: Users, trend: "+12" }
  ];

  const portfolioCompanies = [
    {
      name: "AI Health Solutions",
      sector: "HealthTech",
      stage: "Series A",
      funding: "$5.2M",
      valuation: "$25M",
      growth: "+45%",
      status: "Scaling",
      cohort: "2023 Spring"
    },
    {
      name: "EcoLogistics",
      sector: "GreenTech",
      stage: "Seed",
      funding: "$1.8M",
      valuation: "$8M",
      growth: "+120%",
      status: "Product-Market Fit",
      cohort: "2023 Fall"
    },
    {
      name: "EduTech Innovations",
      sector: "EdTech",
      stage: "Pre-Seed",
      funding: "$750K",
      valuation: "$3M",
      growth: "+80%",
      status: "Early Traction",
      cohort: "2024 Spring"
    }
  ];

  const mentorNetwork = [
    {
      name: "Sarah Johnson",
      title: "Former VP Engineering at Uber",
      expertise: ["Engineering Leadership", "Scaling", "Product"],
      startups: 8,
      rating: 4.9,
      availability: "Available"
    },
    {
      name: "Marcus Chen",
      title: "3x Startup Founder & Angel Investor",
      expertise: ["Go-to-Market", "Fundraising", "Strategy"],
      startups: 12,
      rating: 4.8,
      availability: "Fully Booked"
    },
    {
      name: "Dr. Lisa Rodriguez",
      title: "Former Chief Innovation Officer at IBM",
      expertise: ["AI/ML", "Innovation", "Corporate Partnerships"],
      startups: 6,
      rating: 4.9,
      availability: "Available"
    }
  ];

  const upcomingEvents = [
    {
      title: "Demo Day 2024",
      date: "Dec 15, 2024",
      type: "Investor Pitch",
      startups: 12,
      investors: 75,
      description: "Showcase our latest cohort to leading investors"
    },
    {
      title: "Founder Masterclass: Growth Hacking",
      date: "Dec 18, 2024",
      type: "Workshop",
      attendees: 45,
      speaker: "Growth Expert from Airbnb",
      description: "Advanced strategies for rapid user acquisition"
    },
    {
      title: "AI in Business Innovation Summit",
      date: "Jan 12, 2025",
      type: "Conference",
      attendees: 200,
      speakers: 15,
      description: "Exploring AI applications across industries"
    }
  ];

  const cohortProgress = [
    { cohort: "2024 Spring", startups: 15, graduated: 0, active: 15, dropout: 0 },
    { cohort: "2023 Fall", startups: 12, graduated: 10, active: 2, dropout: 0 },
    { cohort: "2023 Spring", startups: 18, graduated: 15, active: 1, dropout: 2 }
  ];

  const partnerEcosystem = [
    {
      name: "Stanford University",
      type: "Academic Partner",
      collaboration: "Student Entrepreneur Program",
      students: 45,
      projects: 12
    },
    {
      name: "TechVentures Capital",
      type: "VC Partner",
      collaboration: "Seed Funding Pipeline",
      investments: "$15M",
      startups: 8
    },
    {
      name: "Google for Startups",
      type: "Corporate Partner",
      collaboration: "Cloud Credits & Mentorship",
      credits: "$500K",
      startups: 25
    }
  ];

  const successStories = [
    {
      name: "DataFlow Analytics",
      exit: "Acquired by Microsoft",
      value: "$85M",
      timeline: "18 months",
      cohort: "2022 Fall",
      description: "B2B analytics platform for enterprise clients"
    },
    {
      name: "GreenTech Solutions",
      exit: "IPO",
      value: "$150M",
      timeline: "3 years",
      cohort: "2021 Spring",
      description: "Renewable energy optimization technology"
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Innovation Hub</span> Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your startup portfolio and accelerator program.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="w-4 h-4 mr-1" />
              Top 10 Accelerator
            </Badge>
            <Button variant="gradient">
              <Rocket className="w-4 h-4 mr-2" />
              Launch Challenge
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Metrics & Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Incubator Metrics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {incubatorMetrics.map((metric) => (
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

            {/* Cohort Progress */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Cohort Progress</CardTitle>
                <CardDescription>Current program status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cohortProgress.map((cohort) => (
                  <div key={cohort.cohort} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{cohort.cohort}</span>
                      <span className="text-xs text-muted-foreground">{cohort.startups} startups</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {cohort.graduated} graduated • {cohort.active} active
                    </div>
                    <Progress 
                      value={(cohort.graduated / cohort.startups) * 100} 
                      className="h-2" 
                    />
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
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Review Applications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Mentor Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Portfolio Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="mentors">Mentors</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                <TabsTrigger value="success">Success Stories</TabsTrigger>
              </TabsList>

              {/* Portfolio */}
              <TabsContent value="portfolio" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      Portfolio Companies
                    </CardTitle>
                    <CardDescription>
                      Active startups in your accelerator program
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {portfolioCompanies.map((company, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{company.name}</h3>
                            <p className="text-muted-foreground mb-2">
                              {company.sector} • {company.stage} • {company.cohort}
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="outline">{company.status}</Badge>
                              <Badge variant="secondary" className="text-secondary">
                                {company.growth} growth
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{company.funding}</div>
                            <div className="text-sm text-muted-foreground">raised</div>
                            <div className="text-sm text-muted-foreground">{company.valuation} valuation</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Schedule Check-in
                          </Button>
                          <Button variant="ghost" size="sm">
                            Analytics
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Funding Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Pre-Seed</span>
                          <span className="font-medium">15 startups</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Seed</span>
                          <span className="font-medium">18 startups</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Series A</span>
                          <span className="font-medium">9 startups</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Sector Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-8 h-8 text-muted-foreground mx-auto mb-1" />
                          <p className="text-sm text-muted-foreground">Sector chart</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Mentors */}
              <TabsContent value="mentors" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Mentor Network
                    </CardTitle>
                    <CardDescription>
                      Expert mentors supporting your portfolio companies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mentorNetwork.map((mentor, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{mentor.name}</h3>
                            <p className="text-muted-foreground mb-2">{mentor.title}</p>
                            <div className="flex gap-2 mb-2">
                              {mentor.expertise.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{mentor.startups} startups mentored</span>
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-current text-accent" />
                                {mentor.rating}
                              </span>
                            </div>
                          </div>
                          <Badge 
                            variant={mentor.availability === 'Available' ? 'default' : 'secondary'}
                          >
                            {mentor.availability}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Assign to Startup
                          </Button>
                          <Button variant="ghost" size="sm">
                            Schedule
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Mentor Matching</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { startup: "AI Health Solutions", mentor: "Dr. Lisa Rodriguez", match: "AI/ML Expertise" },
                        { startup: "EcoLogistics", mentor: "Sarah Johnson", match: "Scaling Operations" }
                      ].map((match, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-1">{match.startup}</h4>
                          <p className="text-sm text-muted-foreground mb-1">→ {match.mentor}</p>
                          <Badge variant="outline" className="text-xs">{match.match}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Mentorship Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">156</div>
                          <div className="text-sm text-muted-foreground">Active Mentors</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-secondary">892</div>
                          <div className="text-sm text-muted-foreground">Sessions This Month</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent">4.8</div>
                          <div className="text-sm text-muted-foreground">Avg Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">94%</div>
                          <div className="text-sm text-muted-foreground">Satisfaction</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Events */}
              <TabsContent value="events" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs mb-2">{event.type}</Badge>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                          <div className="text-right text-sm">
                            {event.startups && <p>{event.startups} startups</p>}
                            {event.investors && <p>{event.investors} investors</p>}
                            {event.attendees && <p>{event.attendees} attendees</p>}
                            {event.speakers && <p>{event.speakers} speakers</p>}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            Manage Event
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Partnerships */}
              <TabsContent value="partnerships" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Partner Ecosystem
                    </CardTitle>
                    <CardDescription>
                      Strategic partnerships supporting your incubator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {partnerEcosystem.map((partner, index) => (
                      <div key={index} className="border border-border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{partner.name}</h3>
                            <p className="text-muted-foreground mb-2">{partner.collaboration}</p>
                            <Badge variant="outline">{partner.type}</Badge>
                          </div>
                          <div className="text-right text-sm">
                            {partner.students && <p>{partner.students} students</p>}
                            {partner.investments && <p>{partner.investments} invested</p>}
                            {partner.credits && <p>{partner.credits} credits</p>}
                            {partner.startups && <p>{partner.startups} startups supported</p>}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Partnership
                          </Button>
                          <Button variant="outline" size="sm">
                            Expand Collaboration
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Success Stories */}
              <TabsContent value="success" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Success Stories
                    </CardTitle>
                    <CardDescription>
                      Celebrating our graduated companies' achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {successStories.map((story, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{story.name}</h3>
                            <p className="text-muted-foreground mb-2">{story.description}</p>
                            <div className="flex gap-2">
                              <Badge variant="outline">{story.cohort}</Badge>
                              <Badge variant="secondary" className="text-secondary">
                                {story.timeline}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{story.value}</div>
                            <div className="text-sm text-muted-foreground">{story.exit}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            Read Case Study
                          </Button>
                          <Button variant="outline" size="sm">
                            Share Story
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Exit Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">$850M+</div>
                      <div className="text-sm text-muted-foreground">Total Exit Value</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Success Rate</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">73%</div>
                      <div className="text-sm text-muted-foreground">Portfolio Success</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Avg Time to Exit</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">2.8 yrs</div>
                      <div className="text-sm text-muted-foreground">From Start to Exit</div>
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

export default IncubatorDashboard;