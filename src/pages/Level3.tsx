import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Brain, Heart, Activity, MessageSquare, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Level3 = () => {
  const keyMetrics = [
    {
      title: "Cognitive Outcomes",
      description: "Changes in user knowledge, understanding, and decision-making capabilities",
      examples: ["Knowledge acquisition", "Skill development", "Confidence building", "Learning retention"]
    },
    {
      title: "Affective Outcomes",
      description: "Changes in user emotions, attitudes, and psychological well-being",
      examples: ["User satisfaction", "Trust levels", "Motivation", "Emotional support"]
    },
    {
      title: "Behavioral Outcomes",
      description: "Changes in user actions, habits, and behavioral patterns",
      examples: ["Behavioral change", "Action taking", "Habit formation", "Engagement persistence"]
    },
    {
      title: "Self-Efficacy",
      description: "User's belief in their ability to achieve goals and overcome challenges",
      examples: ["Self-confidence", "Agency development", "Empowerment", "Autonomy"]
    }
  ];

  const evaluationMethods = [
    {
      title: "Surveys & Interviews",
      description: "Direct feedback from users about their experiences and outcomes",
      icon: MessageSquare
    },
    {
      title: "Behavioral Tracking",
      description: "Monitoring user actions and patterns over time",
      icon: Activity
    },
    {
      title: "Psychological Assessment",
      description: "Measuring cognitive, emotional, and behavioral changes",
      icon: Brain
    },
    {
      title: "Longitudinal Studies",
      description: "Tracking user outcomes over extended periods",
      icon: BarChart3
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/framework" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Framework
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6">Level 3: User Evaluation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          How users interact with and benefit from the AI-enabled product. This level focuses on measuring 
          the psychological and behavioral impact on individual users.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg">
                  Does the product positively support users' thoughts, feelings, and actions?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Evaluation Metrics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{metric.title}</CardTitle>
                <CardDescription className="text-base">
                  {metric.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                  <ul className="space-y-1">
                    {metric.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Evaluation Methods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">User-Centered Measurement</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Focus on outcomes that matter to users</li>
                  <li>• Use validated psychological assessment tools</li>
                  <li>• Combine quantitative and qualitative data</li>
                  <li>• Respect user privacy and consent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Longitudinal Tracking</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Track changes over meaningful time periods</li>
                  <li>• Account for external factors and context</li>
                  <li>• Use appropriate control groups</li>
                  <li>• Plan for follow-up assessments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-muted-foreground">Learn about impact evaluation and development outcomes</p>
        </div>
        <Button asChild size="lg">
          <Link to="/level4">
            Level 4: Impact Evaluation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level3; 