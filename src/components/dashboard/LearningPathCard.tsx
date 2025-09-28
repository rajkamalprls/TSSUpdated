import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, BookOpen, Target } from "lucide-react";

const LearningPathCard = () => {
  const learningPath = [
    { title: "JavaScript Fundamentals", progress: 100, status: "completed" },
    { title: "React Development", progress: 75, status: "in-progress" },
    { title: "Node.js Backend", progress: 30, status: "in-progress" },
    { title: "Database Design", progress: 0, status: "not-started" }
  ];

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Personalized Learning Path
        </CardTitle>
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
        <Button variant="gradient" className="w-full mt-4">
          <BookOpen className="w-4 h-4 mr-2" />
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
};

export default LearningPathCard;