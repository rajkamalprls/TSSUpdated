import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Building, Rocket, Clock } from "lucide-react";

const JobsInternshipsCard = () => {
  const privateJobs = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$4,000/month",
      type: "Internship",
      remote: true
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      location: "New York, NY", 
      salary: "$80,000/year",
      type: "Full-time",
      remote: false
    }
  ];

  const governmentJobs = [
    {
      title: "Junior Developer - ISRO",
      department: "Indian Space Research Organisation",
      location: "Bangalore, India",
      salary: "₹50,000/month",
      deadline: "Dec 30, 2024"
    },
    {
      title: "Software Developer - NIC",
      department: "National Informatics Centre",
      location: "Delhi, India",
      salary: "₹45,000/month", 
      deadline: "Jan 15, 2025"
    }
  ];

  const startupJobs = [
    {
      title: "Full Stack Developer",
      company: "InnovateTech",
      stage: "Series A",
      equity: "0.1-0.5%",
      salary: "$70,000/year",
      location: "Remote"
    },
    {
      title: "Product Manager Intern",
      company: "GrowthCorp",
      stage: "Seed",
      equity: "0.05%",
      salary: "$3,500/month",
      location: "Austin, TX"
    }
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
    }
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Jobs & Internships
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="government">Government</TabsTrigger>
            <TabsTrigger value="startup">Startups</TabsTrigger>
            <TabsTrigger value="tracker">Tracker</TabsTrigger>
          </TabsList>

          <TabsContent value="private" className="space-y-4">
            {privateJobs.map((job, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company} • {job.location}</p>
                    <p className="text-sm text-primary font-medium">{job.salary}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                      {job.type}
                    </Badge>
                    {job.remote && <Badge variant="outline">Remote</Badge>}
                  </div>
                </div>
                <Button size="sm" variant="default">Apply Now</Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="government" className="space-y-4">
            {governmentJobs.map((job, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground">{job.department}</p>
                    <p className="text-sm text-primary font-medium">{job.salary}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Deadline: {job.deadline}
                    </p>
                  </div>
                  <Badge variant="default">Government</Badge>
                </div>
                <Button size="sm" variant="default">Apply Now</Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="startup" className="space-y-4">
            {startupJobs.map((job, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company} • {job.location}</p>
                    <p className="text-sm text-primary font-medium">{job.salary}</p>
                    <p className="text-xs text-muted-foreground">Equity: {job.equity}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{job.stage}</Badge>
                    <Badge variant="secondary">
                      <Rocket className="w-3 h-3 mr-1" />
                      Startup
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="default">Apply Now</Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="tracker" className="space-y-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{app.position}</h3>
                    <p className="text-muted-foreground">{app.company}</p>
                  </div>
                  <Badge variant={app.stage === 'interview' ? 'default' : 'secondary'}>
                    {app.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{app.date}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default JobsInternshipsCard;