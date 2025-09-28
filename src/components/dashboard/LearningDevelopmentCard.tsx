import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Brain, 
  BookOpen, 
  GraduationCap, 
  Target,
  Trophy,
  Clock,
  FileText
} from "lucide-react";

const LearningDevelopmentCard = () => {
  const codingChallenges = [
    {
      title: "Daily Coding Challenge",
      difficulty: "Medium",
      points: 50,
      timeLeft: "23h 45m"
    },
    {
      title: "Algorithm Contest",
      difficulty: "Hard",
      points: 100,
      timeLeft: "2d 12h"
    }
  ];

  const mockInterviews = [
    {
      title: "Frontend Interview Prep",
      duration: "45 mins",
      type: "Technical",
      difficulty: "Medium"
    },
    {
      title: "System Design Practice",
      duration: "60 mins",
      type: "Design",
      difficulty: "Hard"
    }
  ];

  const studyMaterials = [
    {
      title: "Data Structures & Algorithms",
      type: "PDF",
      size: "15 MB",
      downloads: 1250
    },
    {
      title: "React Complete Guide",
      type: "Video Series",
      duration: "12 hours",
      rating: 4.8
    }
  ];

  const examPrep = [
    {
      title: "GATE Computer Science",
      subjects: 10,
      mockTests: 25,
      progress: 65
    },
    {
      title: "CAT Preparation",
      subjects: 5,
      mockTests: 15,
      progress: 40
    }
  ];

  const skillCourses = [
    {
      title: "Digital Marketing Masterclass",
      provider: "LearnTech",
      duration: "6 weeks",
      rating: 4.7,
      students: 2340
    },
    {
      title: "AI & Machine Learning",
      provider: "TechAcademy",
      duration: "8 weeks",
      rating: 4.9,
      students: 1890
    }
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Learning & Development
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="coding" className="w-full">
          <TabsList className="grid w-full grid-cols-5 text-xs">
            <TabsTrigger value="coding">Coding</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="coding" className="space-y-4">
            <div className="grid gap-4">
              {codingChallenges.map((challenge, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={challenge.difficulty === 'Hard' ? 'destructive' : challenge.difficulty === 'Medium' ? 'default' : 'secondary'}>
                          {challenge.difficulty}
                        </Badge>
                        <span className="text-sm text-primary font-medium">{challenge.points} pts</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {challenge.timeLeft}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="default">
                    <Code className="w-4 h-4 mr-2" />
                    Start Challenge
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-4">
            {mockInterviews.map((interview, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{interview.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{interview.type}</Badge>
                      <Badge variant={interview.difficulty === 'Hard' ? 'destructive' : 'default'}>
                        {interview.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{interview.duration}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Brain className="w-4 h-4 mr-2" />
                  Start Interview
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            {studyMaterials.map((material, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{material.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{material.type}</Badge>
                      {material.size && <span className="text-sm text-muted-foreground">{material.size}</span>}
                      {material.duration && <span className="text-sm text-muted-foreground">{material.duration}</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    {material.downloads && <p className="text-xs text-muted-foreground">{material.downloads} downloads</p>}
                    {material.rating && <p className="text-xs text-muted-foreground">★ {material.rating}</p>}
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <FileText className="w-4 h-4 mr-2" />
                  Access Material
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="exams" className="space-y-4">
            {examPrep.map((exam, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{exam.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{exam.subjects} Subjects</span>
                      <span>{exam.mockTests} Mock Tests</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{exam.progress}%</p>
                    <p className="text-xs text-muted-foreground">Progress</p>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <Target className="w-4 h-4 mr-2" />
                  Continue Prep
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            {skillCourses.map((course, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{course.title}</h3>
                    <p className="text-muted-foreground text-sm">{course.provider} • {course.duration}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>★ {course.rating}</span>
                      <span>{course.students} students</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LearningDevelopmentCard;