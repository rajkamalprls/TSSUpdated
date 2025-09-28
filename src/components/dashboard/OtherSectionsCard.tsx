import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Users, 
  Wrench, 
  HeadphonesIcon,
  Clock,
  MapPin,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail
} from "lucide-react";

const OtherSectionsCard = () => {
  const events = [
    {
      title: "React Masterclass Workshop",
      date: "Dec 12, 2024",
      time: "2:00 PM",
      type: "Workshop",
      attendees: 45,
      location: "Online"
    },
    {
      title: "Startup Founder Meetup",
      date: "Dec 15, 2024",
      time: "6:00 PM", 
      type: "Networking",
      attendees: 120,
      location: "Mumbai, India"
    }
  ];

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      expertise: "AI & Machine Learning",
      experience: "15 years",
      rating: 4.9,
      sessions: 450
    },
    {
      name: "Arjun Kapoor",
      expertise: "Startup Strategy",
      experience: "12 years",
      rating: 4.8,
      sessions: 320
    }
  ];

  const resources = [
    {
      name: "Resume Builder AI",
      type: "Tool",
      category: "Career",
      users: "50K+"
    },
    {
      name: "Coding Interview Prep",
      type: "Resource",
      category: "Technical",
      users: "30K+"
    },
    {
      name: "Startup Pitch Analyzer",
      type: "Tool",
      category: "Entrepreneurship", 
      users: "15K+"
    }
  ];

  const communityGroups = [
    {
      name: "React Developers India",
      members: "25K+",
      activity: "Very Active",
      type: "WhatsApp"
    },
    {
      name: "Startup Founders Network",
      members: "15K+", 
      activity: "Active",
      type: "Telegram"
    }
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle>More Features</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-5 text-xs">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="mentorship">Mentors</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">{event.type}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{event.attendees} attendees</p>
                    <Button size="sm" className="mt-2">RSVP</Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-4">
            {mentors.map((mentor, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                    <p className="text-muted-foreground text-sm">{mentor.expertise}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{mentor.experience} experience</span>
                      <span>★ {mentor.rating}</span>
                      <span>{mentor.sessions} sessions</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Users className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{resource.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                      <Badge variant="secondary" className="text-xs">{resource.category}</Badge>
                      <span className="text-xs text-muted-foreground">{resource.users} users</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Wrench className="w-4 h-4 mr-2" />
                  Use Tool
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            {communityGroups.map((group, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{group.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{group.members} members</span>
                      <Badge variant={group.activity === 'Very Active' ? 'default' : 'secondary'} className="text-xs">
                        {group.activity}
                      </Badge>
                      <span>{group.type}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Group
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="support" className="space-y-4">
            <div className="grid gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    FAQ & Help Center
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Support
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OtherSectionsCard;