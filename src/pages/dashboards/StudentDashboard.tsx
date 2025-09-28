import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target } from "lucide-react";
import LearningPathCard from "@/components/dashboard/LearningPathCard";
import JobsInternshipsCard from "@/components/dashboard/JobsInternshipsCard";
import LearningDevelopmentCard from "@/components/dashboard/LearningDevelopmentCard";
import EntrepreneurshipHubCard from "@/components/dashboard/EntrepreneurshipHubCard";
import OtherSectionsCard from "@/components/dashboard/OtherSectionsCard";

const StudentDashboard = () => {
  const gamificationStats = [
    { label: "Current Streak", value: "12 days", icon: Trophy },
    { label: "Total Points", value: "2,450", icon: Trophy },
    { label: "Rank", value: "#23", icon: Target },
    { label: "Badges Earned", value: "15", icon: Target }
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Quick Stats */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-gradient-primary rounded-xl p-6 text-white shadow-elegant">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="space-y-4">
                {gamificationStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4" />
                      <span className="text-sm opacity-90">{stat.label}</span>
                    </div>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Row 1: Learning Path & Jobs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LearningPathCard />
              <JobsInternshipsCard />
            </div>
            
            {/* Row 2: Learning & Development */}
            <LearningDevelopmentCard />
            
            {/* Row 3: Entrepreneurship Hub */}
            <EntrepreneurshipHubCard />
            
            {/* Row 4: Other Sections */}
            <OtherSectionsCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentDashboard;