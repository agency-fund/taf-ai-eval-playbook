import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, DollarSign, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Level4 = () => {
  const keyMetrics = [
    {
      title: "Development Outcomes",
      description: "Measurable improvements in key development indicators",
      examples: ["Educational attainment", "Health outcomes", "Income levels", "Quality of life"]
    },
    {
      title: "Cost-Effectiveness",
      description: "Economic efficiency and value for money of the intervention",
      examples: ["Cost per outcome", "Return on investment", "Scalability costs", "Resource efficiency"]
    },
    {
      title: "Sustainability",
      description: "Long-term viability and lasting impact of the intervention",
      examples: ["Long-term outcomes", "Institutional adoption", "Policy influence", "Systemic change"]
    },
    {
      title: "Equity & Inclusion",
      description: "Fair distribution of benefits across different population groups",
      examples: ["Accessibility", "Equity metrics", "Inclusion rates", "Disparity reduction"]
    }
  ];

  const evaluationMethods = [
    {
      title: "Randomized Controlled Trials",
      description: "Gold standard for establishing causal relationships",
      icon: Target
    },
    {
      title: "Quasi-Experimental Designs",
      description: "Alternative approaches when RCTs are not feasible",
      icon: BarChart3
    },
    {
      title: "Cost-Benefit Analysis",
      description: "Economic evaluation of intervention value",
      icon: DollarSign
    },
    {
      title: "Longitudinal Studies",
      description: "Extended tracking of outcomes over time",
      icon: TrendingUp
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
        <h1 className="text-4xl font-bold mb-6">Level 4: Impact Evaluation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Real-world outcomes and societal impact of the AI system. This level focuses on measuring 
          the ultimate development impact and cost-effectiveness of AI interventions.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-to-br from-green-50 to-green-100/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg">
                  Does the product improve development outcomes?
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
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
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
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
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
                <h4 className="font-semibold mb-2">Rigorous Design</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use appropriate experimental or quasi-experimental designs</li>
                  <li>• Ensure adequate sample sizes and statistical power</li>
                  <li>• Control for confounding variables</li>
                  <li>• Plan for long-term follow-up assessments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Policy Relevance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Focus on outcomes relevant to development goals</li>
                  <li>• Consider scalability and generalizability</li>
                  <li>• Engage with policymakers and stakeholders</li>
                  <li>• Document lessons for broader adoption</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardHeader>
            <CardTitle className="text-2xl">Framework Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-4">
              You've now explored all four levels of the AI evaluation framework. Each level builds upon the previous one, 
              creating a comprehensive approach to evaluating AI systems in development contexts.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link to="/framework">
                  Return to Framework Overview <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Level4; 