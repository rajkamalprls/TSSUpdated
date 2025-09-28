import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  Users, 
  FileText, 
  Scale,
  DollarSign,
  Lightbulb,
  BookOpen,
  Download
} from "lucide-react";

const EntrepreneurshipHubCard = () => {
  const startupPrograms = [
    {
      title: "Y Combinator Application",
      deadline: "March 15, 2025",
      funding: "$500K",
      equity: "7%",
      status: "Open"
    },
    {
      title: "Techstars Accelerator", 
      deadline: "February 28, 2025",
      funding: "$100K",
      equity: "6%",
      status: "Open"
    }
  ];

  const founderStories = [
    {
      name: "Sarah Chen",
      company: "EcoTech Solutions",
      story: "From College Dropout to $50M Valuation",
      industry: "CleanTech",
      readTime: "8 min"
    },
    {
      name: "Raj Patel",
      company: "HealthAI",
      story: "Building AI Healthcare in India",
      industry: "HealthTech", 
      readTime: "12 min"
    }
  ];

  const startupTools = [
    {
      name: "Business Model Canvas",
      type: "Template",
      downloads: 15420,
      rating: 4.8
    },
    {
      name: "Pitch Deck Template",
      type: "PowerPoint",
      downloads: 8950,
      rating: 4.9
    },
    {
      name: "Financial Model Template",
      type: "Excel",
      downloads: 6730,
      rating: 4.7
    }
  ];

  const legalGuides = [
    {
      title: "Complete Guide to Startup Registration",
      type: "Legal Guide",
      pages: 45,
      updated: "Dec 2024"
    },
    {
      title: "Intellectual Property Protection",
      type: "Legal Guide", 
      pages: 32,
      updated: "Nov 2024"
    },
    {
      title: "Founder Agreements & Equity Split",
      type: "Legal Guide",
      pages: 28,
      updated: "Dec 2024"
    }
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-primary" />
          Entrepreneurship Hub
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="launchpad" className="w-full">
          <TabsList className="grid w-full grid-cols-4 text-xs">
            <TabsTrigger value="launchpad">Launchpad</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
          </TabsList>

          <TabsContent value="launchpad" className="space-y-4">
            {startupPrograms.map((program, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{program.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {program.funding}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {program.equity} equity
                      </Badge>
                      <Badge variant="default" className="text-xs">
                        {program.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Deadline</p>
                    <p className="text-sm font-medium text-primary">{program.deadline}</p>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            ))}
            <Button variant="gradient" className="w-full mt-4">
              <Rocket className="w-4 h-4 mr-2" />
              Submit Your Startup Idea
            </Button>
          </TabsContent>

          <TabsContent value="stories" className="space-y-4">
            {founderStories.map((story, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{story.story}</h3>
                    <p className="text-muted-foreground text-sm">{story.name} - {story.company}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{story.industry}</Badge>
                      <span className="text-xs text-muted-foreground">{story.readTime} read</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Story
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            {startupTools.map((tool, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{tool.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{tool.type}</Badge>
                      <span>★ {tool.rating}</span>
                      <span>{tool.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="legal" className="space-y-4">
            {legalGuides.map((guide, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{guide.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{guide.type}</Badge>
                      <span>{guide.pages} pages</span>
                      <span>Updated {guide.updated}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Scale className="w-4 h-4 mr-2" />
                  Access Guide
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EntrepreneurshipHubCard;