'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(70), 500); // example progress
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Learner!</h1>
        <p className="text-muted-foreground">Track your growth and continue your journey 🚀</p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Resume Builder */}
        <Card>
          <CardHeader>
            <CardTitle>Resume Builder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Create AI-powered resumes based on your skills.</p>
            <Button className="mt-4 w-full" variant="outline">Start Building</Button>
          </CardContent>
        </Card>

        {/* Cover Letter Builder */}
        <Card>
          <CardHeader>
            <CardTitle>Cover Letter Builder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Instantly generate cover letters tailored to your jobs.</p>
            <Button className="mt-4 w-full" variant="outline">Write Cover Letter</Button>
          </CardContent>
        </Card>

        {/* Industry Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Industry Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Explore real-time career trends and skills in demand.</p>
            <Button className="mt-4 w-full" variant="outline">View Insights</Button>
          </CardContent>
        </Card>

        {/* Roadmaps */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Roadmaps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Follow customized roadmaps based on your goals.</p>
            <Button className="mt-4 w-full" variant="outline">Explore Roadmaps</Button>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Your Progress</h2>
        <p className="text-muted-foreground text-sm">Adaptive learning based on your performance.</p>
        <Progress value={progress} className="h-4" />
      </div>

      {/* Customized Recommendations */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended: Advanced React</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Based on your high scores in frontend quizzes.</p>
            <Button className="mt-4 w-full" variant="default">Continue Learning</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended: System Design Basics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Level up your backend and architecture skills.</p>
            <Button className="mt-4 w-full" variant="default">Start Module</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended: AI for Beginners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">AI foundation tailored from your roadmap goals.</p>
            <Button className="mt-4 w-full" variant="default">Learn AI</Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
