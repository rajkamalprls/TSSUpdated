import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Target, 
  BookOpen, 
  Briefcase, 
  Users, 
  Calendar, 
  Trophy, 
  Star,
  TrendingUp,
  Clock,
  MapPin,
  ExternalLink,
  Heart,
  Share2
} from "lucide-react";

const StudentDashboard = () => {
  const recommendations = [
    {
      type: "Job",
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "San Francisco, CA",
      match: 95,
      badges: ["Remote OK", "Paid", "React"]
    },
    {
      type: "Course", 
      title: "Advanced React Development",
      provider: "LearnTech",
      duration: "6 weeks",
      match: 88,
      badges: ["Certificate", "Beginner", "JavaScript"]
    },
    {
      type: "Event",
      title: "AI/ML Startup Pitch Competition",
      organizer: "Innovation Hub",
      date: "Dec 15, 2024",
      match: 92,
      badges: ["$10K Prize", "Networking", "AI/ML"]
    }
  ];

  const gamificationStats = [
    { label: "Current Streak", value: "12 days", icon: Trophy },
    { label: "Total Points", value: "2,450", icon: Star },
    { label: "Rank", value: "#23", icon: TrendingUp },
    { label: "Badges Earned", value: "15", icon: Target }
  ];

  const learningPath = [
    { title: "JavaScript Fundamentals", progress: 100, status: "completed" },
    { title: "React Development", progress: 75, status: "in-progress" },
    { title: "Node.js Backend", progress: 30, status: "in-progress" },
    { title: "Database Design", progress: 0, status: "not-started" }
  ];

  const applications = [
    {
      company: "StartupXYZ",
      position: "Software Engineering Intern",
      status: "Interview Scheduled",
      date: "Applied 3 days ago",
      stage: "interview"
    },
    {
      company: "BigTech Inc",
      position: "Product Management Intern",
      status: "Under Review",
      date: "Applied 1 week ago", 
      stage: "review"
    },
    {
      company: "InnovateCorp",
      position: "Data Science Intern",
      status: "Application Sent",
      date: "Applied 2 weeks ago",
      stage: "applied"
    }
  ];

  const upcomingEvents = [
    {
      title: "React Masterclass Workshop",
      date: "Dec 12, 2024",
      time: "2:00 PM",
      type: "Workshop",
      attendees: 45
    },
    {
      title: "Startup Founder Meetup",
      date: "Dec 15, 2024", 
      time: "6:00 PM",
      type: "Networking",
      attendees: 120
    },
    {
      title: "Tech Career Fair",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      type: "Career Fair",
      attendees: 300
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, <span className="bg-gradient-hero bg-clip-text text-transparent">Alex!</span>
            </h1>
            <p className="text-muted-foreground">Here's what's happening with your journey today.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="secondary" className="px-3 py-1">
              <Trophy className="w-4 h-4 mr-1" />
              Level 8 Explorer
            </Badge>
            <Button variant="gradient">
              <Target className="w-4 h-4 mr-2" />
              Set Goals
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Stats & Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Gamification Stats */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {gamificationStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Path Progress */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Learning Path</CardTitle>
                <CardDescription>Software Development Track</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningPath.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
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
                  <Brain className="w-4 h-4 mr-2" />
                  AI Mock Interview
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Practice Coding
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Mentor
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="recommendations" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="recommendations">AI Picks</TabsTrigger>
                <TabsTrigger value="jobs">Jobs & Internships</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              {/* AI Recommendations */}
              <TabsContent value="recommendations" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI-Powered Recommendations
                    </CardTitle>
                    <CardDescription>
                      Personalized suggestions based on your profile and goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="border border-border rounded-lg p-6 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{rec.type}</Badge>
                              <span className="text-lg font-semibold text-foreground">{rec.title}</span>
                            </div>
                            <p className="text-muted-foreground">
                              {rec.company || rec.provider || rec.organizer} 
                              {rec.location && ` • ${rec.location}`}
                              {rec.duration && ` • ${rec.duration}`}
                              {rec.date && ` • ${rec.date}`}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{rec.match}%</div>
                            <div className="text-xs text-muted-foreground">match</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {rec.badges.map((badge) => (
                              <Badge key={badge} variant="secondary" className="text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="default" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Jobs & Internships */}
              <TabsContent value="jobs" className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Application Tracker
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {applications.map((app, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{app.position}</h3>
                            <p className="text-muted-foreground">{app.company}</p>
                          </div>
                          <Badge 
                            variant={app.stage === 'interview' ? 'default' : 'secondary'}
                            className="ml-2"
                          >
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{app.date}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Learning */}
              <TabsContent value="learning" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Continue Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border border-border rounded-lg p-4">
                          <h3 className="font-semibold mb-2">React Development Course</h3>
                          <Progress value={75} className="mb-2" />
                          <p className="text-sm text-muted-foreground">3 lessons remaining</p>
                        </div>
                        <Button variant="gradient" className="w-full">
                          Continue Course
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Practice Coding</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Daily Coding Challenge
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Mock Interview
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Trophy className="w-4 h-4 mr-2" />
                        Coding Contest
                      </Button>
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
                      <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs">{event.type}</Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">{event.attendees} attendees</p>
                            <Button size="sm" className="mt-2">RSVP</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Community */}
              <TabsContent value="community" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Leaderboard</CardTitle>
                      <CardDescription>Top contributors this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((rank) => (
                          <div key={rank} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {rank}
                              </div>
                              <span className="font-medium">Student {rank}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">2,{450 - rank * 50} pts</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle>Join Groups</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        React Developers
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Startup Enthusiasts
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        AI/ML Study Group
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

export default StudentDashboard;