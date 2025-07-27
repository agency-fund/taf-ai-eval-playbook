import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Package, User, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Framework = () => {
  const levels = [
    {
      level: "Level 1",
      title: "Model Evaluation",
      icon: Cog,
      description: "Technical performance assessment of the AI model itself",
      examples: ["Accuracy metrics", "Bias detection", "Robustness testing", "Performance benchmarking"],
      color: "bg-red-100 text-red-700 border-red-200"
    },
    {
      level: "Level 2", 
      title: "Product Evaluation",
      icon: Package,
      description: "Assessment of the AI system integrated into the product context",
      examples: ["User interface testing", "System integration", "Feature usability", "Technical reliability"],
      color: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      level: "Level 3",
      title: "User Evaluation", 
      icon: User,
      description: "How users interact with and benefit from the AI-enabled product",
      examples: ["User satisfaction", "Task completion rates", "Learning curves", "Accessibility assessment"],
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      level: "Level 4",
      title: "Impact Evaluation",
      icon: BarChart3,
      description: "Real-world outcomes and societal impact of the AI system",
      examples: ["Development outcomes", "Behavioral change", "Cost-effectiveness", "Sustainability metrics"],
      color: "bg-green-100 text-green-700 border-green-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Four-Level Evaluation Framework</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A comprehensive framework for evaluating AI systems in development contexts, progressing 
          from technical assessment to real-world impact measurement.
        </p>
      </div>

      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {levels.map((level, index) => (
            <Link key={index} to={`/level${index + 1}`}>
              <Card className="border-0 shadow-card hover:shadow-float transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${level.color}`}>
                      <level.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{level.level}</div>
                      <CardTitle className="text-xl">{level.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Key Assessment Areas:</h4>
                    <ul className="space-y-2">
                      {level.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-2xl">Framework Implementation</CardTitle>
            <CardDescription className="text-base">
              The four levels build upon each other, creating a comprehensive evaluation approach
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Progressive Assessment</h4>
                <p className="text-sm text-muted-foreground">
                  Start with model evaluation and progress through each level as your AI system 
                  moves from development to deployment and impact.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contextual Adaptation</h4>
                <p className="text-sm text-muted-foreground">
                  Adapt each level's metrics and methods to your specific development context, 
                  user population, and intended outcomes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to implement?</h3>
          <p className="text-muted-foreground">Learn how to integrate evaluation into your product cycles</p>
        </div>
        <Button asChild size="lg">
          <Link to="/motions">
            Repeatable Motions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Framework;