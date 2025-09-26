import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  TrendingUp, 
  Calendar, 
  Award,
  Briefcase,
  Target,
  BarChart3,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Clock
} from "lucide-react";

const CollegeDashboard = () => {
  const collegeMetrics = [
    { label: "Total Students", value: "12,450", icon: Users, trend: "+5.2%" },
    { label: "Placement Rate", value: "87%", icon: Target, trend: "+3.1%" },
    { label: "Partner Companies", value: "245", icon: Building2, trend: "+15" },
    { label: "Active Programs", value: "34", icon: GraduationCap, trend: "+2" }
  ];

  const placementStats = [
    { department: "Computer Science", students: 450, placed: 398, rate: 88 },
    { department: "Mechanical Engineering", students: 380, placed: 323, rate: 85 },
    { department: "Electronics & Comm", students: 340, placed: 289, rate: 85 },
    { department: "Business Administration", students: 290, placed: 261, rate: 90 }
  ];

  const partnerCompanies = [
    {
      name: "TechGlobal Inc",
      tier: "Tier 1",
      positions: 25,
      package: "$85K-120K",
      status: "Active Hiring",
      lastVisit: "Nov 2024"
    },
    {
      name: "InnovateCorps",
      tier: "Tier 1", 
      positions: 15,
      package: "$70K-95K",
      status: "Pipeline",
      lastVisit: "Oct 2024"
    },
    {
      name: "StartupXYZ",
      tier: "Tier 2",
      positions: 8,
      package: "$60K-80K",
      status: "Active Hiring",
      lastVisit: "Dec 2024"
    }
  ];

  const upcomingEvents = [
    {
      title: "TechGlobal Campus Drive",
      date: "Dec 15, 2024",
      type: "Campus Recruitment",
      positions: 25,
      departments: ["CS", "IT", "ECE"]
    },
    {
      title: "Innovation Hackathon 2024",
      date: "Dec 20-22, 2024",
      type: "Hackathon",
      participants: 200,
      prize: "$50K"
    },
    {
      title: "Industry Connect Symposium",
      date: "Jan 10, 2025",
      type: "Industry Event",
      speakers: 15,
      attendees: 500
    }
  ];

  const studentProgress = [
    { year: "Final Year", total: 1200, placed: 890, seeking: 310 },
    { year: "Pre-final Year", total: 1350, internships: 980, seeking: 370 },
    { year: "Second Year", total: 1400, courses: 1120, active: 280 }
  ];

  const industryCollaborations = [
    {
      company: "Microsoft",
      type: "Research Partnership",
      value: "$2.5M",
      duration: "3 years",
      focus: "AI & Cloud Computing"
    },
    {
      company: "Google",
      type: "Student Exchange",
      value: "$500K",
      duration: "2 years", 
      focus: "Machine Learning"
    },
    {
      company: "Amazon",
      type: "Curriculum Partnership",
      value: "$1M",
      duration: "4 years",
      focus: "Cloud & DevOps"
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Stanford University</span> Dashboard
            </h1>
            <p className="text-muted-foreground">Manage placements, partnerships, and student success.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="w-4 h-4 mr-1" />
              Tier 1 Institution
            </Badge>
            <Button variant="gradient">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Drive
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Metrics & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* College Metrics */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {collegeMetrics.map((metric) => (
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

            {/* Placement Progress */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Placement Progress</CardTitle>
                <CardDescription>2024-25 Academic Year</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {studentProgress.map((year) => (
                  <div key={year.year} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{year.year}</span>
                      <span className="text-xs text-muted-foreground">{year.total} students</span>
                    </div>
                    {year.placed && (
                      <div className="text-sm text-muted-foreground">
                        {year.placed} placed, {year.seeking} seeking
                      </div>
                    )}
                    {year.internships && (
                      <div className="text-sm text-muted-foreground">
                        {year.internships} internships, {year.seeking} seeking
                      </div>
                    )}
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
                  <Building2 className="w-4 h-4 mr-2" />
                  Invite Company
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="placements" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="placements">Placements</TabsTrigger>
                <TabsTrigger value="companies">Companies</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Placements */}
              <TabsContent value="placements" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Department-wise Placement Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {placementStats.map((dept, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-foreground">{dept.department}</h3>
                          <Badge variant="secondary">{dept.rate}% placed</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                          <div>Total: {dept.students}</div>
                          <div>Placed: {dept.placed}</div>
                          <div>Remaining: {dept.students - dept.placed}</div>
                        </div>
                        <Progress value={dept.rate} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Recent Placements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { name: "Alex Chen", company: "Google", package: "$125K", dept: "CS" },
                        { name: "Priya Sharma", company: "Microsoft", package: "$118K", dept: "CS" },
                        { name: "David Kim", company: "Amazon", package: "$115K", dept: "ECE" }
                      ].map((placement, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-medium">{placement.name}</h4>
                            <p className="text-sm text-muted-foreground">{placement.dept}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-foreground">{placement.company}</p>
                            <p className="text-sm text-primary">{placement.package}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Top Recruiters</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { company: "Microsoft", hires: 45, avgPackage: "$112K" },
                        { company: "Google", hires: 38, avgPackage: "$118K" },
                        { company: "Amazon", hires: 32, avgPackage: "$108K" }
                      ].map((recruiter, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-medium">{recruiter.company}</h4>
                            <p className="text-sm text-muted-foreground">{recruiter.hires} hires</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">{recruiter.avgPackage}</p>
                            <p className="text-xs text-muted-foreground">avg package</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Companies */}
              <TabsContent value="companies" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Partner Companies
                    </CardTitle>
                    <CardDescription>
                      Companies actively recruiting from your institution
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {partnerCompanies.map((company, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{company.name}</h3>
                            <p className="text-muted-foreground mb-2">
                              {company.positions} positions • {company.package}
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="outline">{company.tier}</Badge>
                              <Badge 
                                variant={company.status === 'Active Hiring' ? 'default' : 'secondary'}
                              >
                                {company.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            Last visit: {company.lastVisit}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            Schedule Drive
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
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
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs">{event.type}</Badge>
                          </div>
                          <div className="text-right text-sm">
                            {event.positions && <p>{event.positions} positions</p>}
                            {event.participants && <p>{event.participants} participants</p>}
                            {event.attendees && <p>{event.attendees} attendees</p>}
                            {event.prize && <p className="text-primary font-semibold">{event.prize} prize</p>}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Event Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Interactive calendar view</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Event Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">24</div>
                          <div className="text-sm text-muted-foreground">Events This Year</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-secondary">89%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent">3,240</div>
                          <div className="text-sm text-muted-foreground">Total Participants</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">156</div>
                          <div className="text-sm text-muted-foreground">Companies Engaged</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Partnerships */}
              <TabsContent value="partnerships" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Industry Collaborations
                    </CardTitle>
                    <CardDescription>
                      Strategic partnerships with leading companies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {industryCollaborations.map((collab, index) => (
                      <div key={index} className="border border-border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{collab.company}</h3>
                            <p className="text-muted-foreground mb-2">{collab.type}</p>
                            <p className="text-sm text-muted-foreground">{collab.focus}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">{collab.value}</p>
                            <p className="text-sm text-muted-foreground">{collab.duration}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            View Agreement
                          </Button>
                          <Button variant="outline" size="sm">
                            Extend Partnership
                          </Button>
                        </div>
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
                      <CardTitle>Placement Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Placement trends chart</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Package Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Package distribution chart</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Key Performance Indicators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">87%</div>
                        <div className="text-sm text-muted-foreground">Placement Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary mb-2">$92K</div>
                        <div className="text-sm text-muted-foreground">Avg Package</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent mb-2">245</div>
                        <div className="text-sm text-muted-foreground">Partner Companies</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">96%</div>
                        <div className="text-sm text-muted-foreground">Student Satisfaction</div>
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

export default CollegeDashboard;