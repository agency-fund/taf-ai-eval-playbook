import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Package, User, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Methods = () => {
  const methodsByLevel = [
    {
      level: "Model Evaluation",
      icon: Settings,
      color: "bg-red-100 text-red-700 border-red-200",
      methods: [
        {
          name: "Cross-validation Testing",
          description: "Assess model generalization across different data splits",
          when: "During model development and training"
        },
        {
          name: "Bias and Fairness Analysis", 
          description: "Evaluate model performance across different demographic groups",
          when: "Before deployment and regularly thereafter"
        },
        {
          name: "Adversarial Testing",
          description: "Test model robustness against edge cases and attacks",
          when: "Pre-deployment security assessment"
        }
      ]
    },
    {
      level: "Product Evaluation",
      icon: Package,
      color: "bg-orange-100 text-orange-700 border-orange-200",
      methods: [
        {
          name: "Integration Testing",
          description: "Verify AI system works correctly within product ecosystem",
          when: "During product integration phases"
        },
        {
          name: "Performance Benchmarking",
          description: "Measure system response times and resource usage",
          when: "Pre-deployment and ongoing monitoring"
        },
        {
          name: "A/B Testing",
          description: "Compare AI-enabled vs non-AI product versions",
          when: "Post-deployment feature validation"
        }
      ]
    },
    {
      level: "User Evaluation", 
      icon: User,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      methods: [
        {
          name: "Usability Testing",
          description: "Observe users interacting with AI features in realistic contexts",
          when: "During design and post-deployment phases"
        },
        {
          name: "User Interviews",
          description: "Gather qualitative feedback on user experience and trust",
          when: "Throughout product lifecycle"
        },
        {
          name: "Longitudinal Studies",
          description: "Track user behavior and satisfaction changes over time",
          when: "Post-deployment, ongoing"
        }
      ]
    },
    {
      level: "Impact Evaluation",
      icon: BarChart3, 
      color: "bg-green-100 text-green-700 border-green-200",
      methods: [
        {
          name: "Randomized Controlled Trials",
          description: "Measure causal impact on intended development outcomes",
          when: "Post-deployment impact assessment"
        },
        {
          name: "Cost-Effectiveness Analysis",
          description: "Compare costs to achieved outcomes and benefits",
          when: "Regular intervals post-deployment"
        },
        {
          name: "Mixed-Methods Evaluation",
          description: "Combine quantitative metrics with qualitative insights",
          when: "Comprehensive impact evaluation"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Evaluation Methods & Tools</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Practical evaluation methods organized by the four-level framework. Choose the right 
          methods for your context, resources, and evaluation objectives.
        </p>
      </div>

      <div className="space-y-12">
        {methodsByLevel.map((level, index) => (
          <div key={index}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${level.color}`}>
                <level.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">{level.level}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {level.methods.map((method, methodIndex) => (
                <Card key={methodIndex} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs font-medium text-muted-foreground mb-1">WHEN TO USE</div>
                      <div className="text-sm">{method.when}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Card className="border-0 shadow-card bg-playbook-gray-light">
          <CardHeader>
            <CardTitle className="text-2xl">Method Selection Guidelines</CardTitle>
            <CardDescription className="text-base">
              Choose evaluation methods based on your specific context and constraints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Resource Constraints</h4>
                <p className="text-sm text-muted-foreground">
                  Prioritize methods that fit your team size, budget, and timeline
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Development Stage</h4>
                <p className="text-sm text-muted-foreground">
                  Different methods are appropriate at different stages of development
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Risk Level</h4>
                <p className="text-sm text-muted-foreground">
                  Higher-risk deployments require more comprehensive evaluation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">User Context</h4>
                <p className="text-sm text-muted-foreground">
                  Adapt methods to your specific user population and environment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div>
          <h3 className="text-lg font-semibold mb-2">Need definitions?</h3>
          <p className="text-muted-foreground">Check our comprehensive glossary of evaluation terms</p>
        </div>
        <Button asChild size="lg">
          <Link to="/glossary">
            Glossary <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Methods;