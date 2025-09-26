import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Calendar, 
  Award,
  GraduationCap,
  Target,
  BarChart3,
  MessageCircle,
  Search,
  Filter,
  Star,
  MapPin,
  Clock
} from "lucide-react";

const CompanyDashboard = () => {
  const hiringMetrics = [
    { label: "Active Jobs", value: "28", icon: Briefcase, trend: "+5" },
    { label: "Applications", value: "1,247", icon: Users, trend: "+12%" },
    { label: "Interviews Scheduled", value: "89", icon: Calendar, trend: "+8" },
    { label: "Hires This Month", value: "15", icon: Award, trend: "+3" }
  ];

  const talentPool = [
    {
      name: "Alex Rodriguez",
      degree: "Computer Science",
      college: "Stanford University",
      gpa: "3.8",
      skills: ["React", "Node.js", "Python", "AWS"],
      experience: "2 internships",
      match: 95,
      status: "Available"
    },
    {
      name: "Priya Sharma",
      degree: "Data Science",
      college: "MIT",
      gpa: "3.9",
      skills: ["Python", "TensorFlow", "SQL", "Tableau"],
      experience: "1 internship",
      match: 92,
      status: "Interviewing"
    },
    {
      name: "David Chen",
      degree: "Mechanical Engineering",
      college: "UC Berkeley",
      gpa: "3.7",
      skills: ["CAD", "MATLAB", "3D Printing", "IoT"],
      experience: "Research Assistant",
      match: 88,
      status: "Available"
    }
  ];

  const activeJobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "San Francisco, CA",
      applications: 156,
      interviews: 12,
      offers: 2,
      status: "Active"
    },
    {
      title: "Product Manager Intern",
      department: "Product",
      type: "Internship",
      location: "Remote",
      applications: 89,
      interviews: 8,
      offers: 0,
      status: "Active"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      type: "Full-time",
      location: "New York, NY",
      applications: 203,
      interviews: 15,
      offers: 3,
      status: "On Hold"
    }
  ];

  const campusRecruitment = [
    {
      college: "Stanford University",
      tier: "Tier 1",
      relationship: "Premium Partner",
      lastVisit: "Nov 2024",
      hires: 45,
      avgPackage: "$125K",
      nextEvent: "Campus Drive - Dec 20"
    },
    {
      college: "MIT",
      tier: "Tier 1",
      relationship: "Gold Partner",
      lastVisit: "Oct 2024",
      hires: 38,
      avgPackage: "$130K",
      nextEvent: "Info Session - Dec 15"
    },
    {
      college: "UC Berkeley",
      tier: "Tier 1",
      relationship: "Silver Partner",
      lastVisit: "Sep 2024",
      hires: 28,
      avgPackage: "$118K",
      nextEvent: "Tech Talk - Jan 10"
    }
  ];

  const applicationPipeline = [
    { stage: "Applications", count: 1247, percentage: 100 },
    { stage: "Screening", count: 425, percentage: 34 },
    { stage: "Technical Interview", count: 156, percentage: 12.5 },
    { stage: "Final Interview", count: 89, percentage: 7 },
    { stage: "Offers Extended", count: 32, percentage: 2.6 },
    { stage: "Offers Accepted", count: 28, percentage: 2.2 }
  ];

  const brandingMetrics = [
    { metric: "Company Page Views", value: "15.2K", trend: "+18%" },
    { metric: "Followers", value: "8,450", trend: "+12%" },
    { metric: "Engagement Rate", value: "7.2%", trend: "+2.1%" },
    { metric: "Employer Rating", value: "4.6/5", trend: "+0.2" }
  ];

  return (
    <main className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              <span className="bg-gradient-hero bg-clip-text text-transparent">TechCorp Inc</span> Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your talent acquisition and campus engagement.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="w-4 h-4 mr-1" />
              Premium Employer
            </Badge>
            <Button variant="gradient">
              <Briefcase className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Metrics & Quick Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Hiring Metrics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Hiring Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hiringMetrics.map((metric) => (
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

            {/* Application Pipeline */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Application Pipeline</CardTitle>
                <CardDescription>Current hiring funnel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {applicationPipeline.slice(0, 4).map((stage) => (
                  <div key={stage.stage} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stage.stage}</span>
                      <span className="font-medium">{stage.count}</span>
                    </div>
                    <Progress value={stage.percentage} className="h-1" />
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
                  <Search className="w-4 h-4 mr-2" />
                  Search Candidates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Campus Visit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="talent" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="talent">Talent Pool</TabsTrigger>
                <TabsTrigger value="jobs">Job Postings</TabsTrigger>
                <TabsTrigger value="campus">Campus Recruitment</TabsTrigger>
                <TabsTrigger value="branding">Employer Branding</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Talent Pool */}
              <TabsContent value="talent" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Recommended Candidates
                    </CardTitle>
                    <CardDescription>AI-matched candidates based on your requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {talentPool.map((candidate, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{candidate.name}</h3>
                            <p className="text-muted-foreground mb-2">
                              {candidate.degree} • {candidate.college} • GPA: {candidate.gpa}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">{candidate.experience}</p>
                            <div className="flex gap-2 mb-3">
                              {candidate.skills.slice(0, 3).map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {candidate.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{candidate.skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-1">{candidate.match}%</div>
                            <div className="text-xs text-muted-foreground mb-2">match</div>
                            <Badge 
                              variant={candidate.status === 'Available' ? 'default' : 'secondary'}
                            >
                              {candidate.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Star className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Search Filters</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="w-4 h-4 mr-2" />
                        Computer Science Majors
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="w-4 h-4 mr-2" />
                        3.5+ GPA
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="w-4 h-4 mr-2" />
                        Previous Internship Experience
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="w-4 h-4 mr-2" />
                        Available for Full-time
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Talent Pool Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">12,450</div>
                          <div className="text-sm text-muted-foreground">Total Candidates</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-secondary">3,240</div>
                          <div className="text-sm text-muted-foreground">Available Now</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent">892</div>
                          <div className="text-sm text-muted-foreground">High Match (90%+)</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">156</div>
                          <div className="text-sm text-muted-foreground">Favorited</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Job Postings */}
              <TabsContent value="jobs" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Active Job Postings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeJobs.map((job, index) => (
                      <div key={index} className="border border-border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                            <p className="text-muted-foreground mb-2">
                              {job.department} • {job.type}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </p>
                          </div>
                          <Badge 
                            variant={job.status === 'Active' ? 'default' : 'secondary'}
                          >
                            {job.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <div className="font-semibold text-foreground">{job.applications}</div>
                            <div className="text-muted-foreground">Applications</div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{job.interviews}</div>
                            <div className="text-muted-foreground">Interviews</div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{job.offers}</div>
                            <div className="text-muted-foreground">Offers</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Applications
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit Posting
                          </Button>
                          <Button variant="ghost" size="sm">
                            Analytics
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Campus Recruitment */}
              <TabsContent value="campus" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Campus Partnerships
                    </CardTitle>
                    <CardDescription>
                      Your relationships with top universities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {campusRecruitment.map((campus, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{campus.college}</h3>
                            <div className="flex gap-2 mb-2">
                              <Badge variant="outline">{campus.tier}</Badge>
                              <Badge variant="secondary">{campus.relationship}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Last visit: {campus.lastVisit}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground mb-1">This year</div>
                            <div className="font-semibold text-foreground">{campus.hires} hires</div>
                            <div className="text-sm text-primary">{campus.avgPackage} avg</div>
                          </div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 mb-4">
                          <p className="text-sm">
                            <span className="font-medium">Next event:</span> {campus.nextEvent}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            Schedule Visit
                          </Button>
                          <Button variant="outline" size="sm">
                            View Students
                          </Button>
                          <Button variant="ghost" size="sm">
                            Partnership Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Employer Branding */}
              <TabsContent value="branding" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Brand Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {brandingMetrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{metric.metric}</span>
                          <div className="text-right">
                            <span className="font-semibold text-foreground">{metric.value}</span>
                            <Badge variant="outline" className="ml-2 text-xs text-secondary">
                              {metric.trend}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { action: "Tech talk scheduled", time: "2 hours ago", college: "Stanford" },
                        { action: "Company spotlight published", time: "1 day ago", college: "MIT" },
                        { action: "New internship program announced", time: "3 days ago", college: "UC Berkeley" }
                      ].map((activity, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.college}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Engagement Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { 
                        title: "Sponsor ML Hackathon at Stanford", 
                        date: "Dec 20-22, 2024",
                        participants: "200+ students",
                        investment: "$15K",
                        expected: "50+ qualified leads"
                      },
                      { 
                        title: "Guest Lecture Series at MIT", 
                        date: "Jan 15, 2025",
                        participants: "150+ students",
                        investment: "$5K",
                        expected: "Brand awareness boost"
                      }
                    ].map((opportunity, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{opportunity.title}</h4>
                          <Badge variant="outline">{opportunity.investment}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {opportunity.date} • {opportunity.participants}
                        </p>
                        <p className="text-sm text-primary mb-3">Expected: {opportunity.expected}</p>
                        <Button size="sm">
                          Learn More
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Hiring Funnel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Hiring funnel visualization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Source Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Source performance chart</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Key Hiring Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">28</div>
                        <div className="text-sm text-muted-foreground">Days Avg Time to Hire</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mb-2">$8.5K</div>
                        <div className="text-sm text-muted-foreground">Cost per Hire</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent mb-2">92%</div>
                        <div className="text-sm text-muted-foreground">Offer Acceptance Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">94%</div>
                        <div className="text-sm text-muted-foreground">New Hire Retention</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDashboard;