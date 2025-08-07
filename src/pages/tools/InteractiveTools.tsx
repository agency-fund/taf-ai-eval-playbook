import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Users, Target, BarChart3, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const InteractiveTools = () => {
  const tools = [
    {
      icon: Brain,
      title: "Model Evaluation",
      description: "Configure AI systems, create golden test cases, and run comprehensive evaluations to analyze model performance with detailed metrics and insights.",
      link: "/tools/model-evaluation",
      category: "Model Level"
    },
    {
      icon: Users,
      title: "User Evaluation - Introduction", 
      description: "Learn the fundamentals of user evaluation and understand how to assess the user experience and adoption of your AI product.",
      link: "/tools/user-evaluation-introduction",
      category: "User Level"
    },
    {
      icon: BarChart3,
      title: "User Evaluation - Behavioral",
      description: "Analyze user behavior patterns, engagement metrics, and interaction data to understand how users interact with your AI system.",
      link: "/tools/user-evaluation-behavioral", 
      category: "User Level"
    },
    {
      icon: Target,
      title: "User Evaluation - Metrics",
      description: "Define and track key performance indicators and success metrics for measuring the effectiveness of your AI product.",
      link: "/tools/user-evaluation-metrics",
      category: "User Level" 
    },
    {
      icon: Brain,
      title: "User Evaluation - NLP",
      description: "Evaluate natural language processing capabilities and analyze text-based interactions within your AI application.",
      link: "/tools/user-evaluation-nlp",
      category: "User Level"
    },
    {
      icon: Wrench,
      title: "Product and User Evaluation - Testing the Impact of ChatSEL Features on Teacher Engagement and SEL Practices",
      description: "Plan and simulate A/B tests for ChatSEL: engagement and teacher SEL practice across Modeling, Practice, Transfer, Elaboration, Validation.",
      link: "/tools/ab-experiments",
      category: "Product and User Level"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Interactive Tools
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Hands-on tools to help you implement and practice the evaluation frameworks outlined in this playbook. 
              These interactive resources provide practical experience with model evaluation, user testing, and metric collection.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Model Evaluation
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                User Evaluation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Available Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of interactive tools designed to help you evaluate different aspects of your AI product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <Link to={tool.link} className="block h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {tool.description}
                    </CardDescription>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Try Tool <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">New to AI Evaluation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our comprehensive framework to understand the four levels of AI evaluation 
            before diving into the interactive tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/framework">
                Learn the Framework <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/introduction">
                Read Introduction
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveTools;