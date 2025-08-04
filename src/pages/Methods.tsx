import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Package, User, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Methods = () => {
  const methodsByLevel = [
    {
      level: "Level 1: Model Evaluation",
      icon: Settings,
      color: "bg-red-100 text-red-700 border-red-200",
      coreQuestion: "Does the AI model produce the desired responses?",
      methods: [
        {
          name: "Automatic Benchmarking",
          description: "Compare AI outputs to pre-labeled 'gold standard' answers using metrics like BLEU, ROUGE, or accuracy/F1",
          when: "Tasks with clear correct answers (fact recall, data extraction)",
          example: "A health chatbot evaluated against expert-approved medical FAQs"
        },
        {
          name: "Human as a Judge", 
          description: "Users and experts manually score or annotate AI outputs using defined criteria",
          when: "Tasks requiring subjective judgment or nuanced criteria (accuracy, empathy, completeness)",
          example: "Users and experts rate chatbot responses for cultural sensitivity"
        },
        {
          name: "LLM as a Judge (with Human in the Loop)",
          description: "A high-performing LLM evaluates another LLM's outputs, calibrated against human judgments",
          when: "Large-scale evaluations needing consistency, with human oversight",
          example: "GPT-4 assesses helpfulness and accuracy of outputs from a smaller educational chatbot"
        }
      ]
    },
    {
      level: "Level 2: Product Evaluation",
      icon: Package,
      color: "bg-orange-100 text-orange-700 border-orange-200",
      coreQuestion: "Does the product facilitate meaningful interactions?",
      methods: [
        {
          name: "A/B Testing",
          description: "Feature A vs. Feature B comparison to optimize user engagement",
          when: "Post-deployment feature validation and continuous improvement",
          example: "Testing different UI designs or AI response styles"
        },
        {
          name: "Multi-armed Bandit",
          description: "Performance-based adaptive allocations, including contextual bandits for user characteristics",
          when: "Dynamic optimization based on user feedback and performance",
          example: "Automatically adjusting content recommendations based on user engagement"
        },
        {
          name: "Holdout Testing",
          description: "AI vs. non-AI comparison or status quo vs. enhanced engagement testing",
          when: "Measuring overall product impact vs baseline experiences",
          example: "Comparing user outcomes with and without AI-powered features"
        }
      ]
    },
    {
      level: "Level 3: User Evaluation", 
      icon: User,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      coreQuestion: "Does the product positively support users' thoughts, feelings, and actions?",
      methods: [
        {
          name: "On-Platform Behavioral Measures",
          description: "Analyze user interaction data to assess cognitive and affective outcomes",
          when: "Continuous monitoring of user engagement and learning patterns",
          example: "Tracking query complexity over time to measure knowledge growth"
        },
        {
          name: "Short Self-Report Surveys",
          description: "Brief, contextual surveys using validated scales to measure user states",
          when: "After significant interactions or at logical breakpoints",
          example: "Post-session confidence and motivation assessments"
        },
        {
          name: "NLP-Based Text Analysis",
          description: "Automated analysis of user text for sentiment, cognitive indicators, and psychological constructs",
          when: "Large-scale analysis of conversational data",
          example: "Sentiment analysis to track emotional state changes over time"
        }
      ]
    },
    {
      level: "Level 4: Impact Evaluation",
      icon: BarChart3, 
      color: "bg-green-100 text-green-700 border-green-200",
      coreQuestion: "Does the product improve development outcomes?",
      methods: [
        {
          name: "Randomized Controlled Trials (RCTs)",
          description: "Gold standard for establishing causal relationships between interventions and long-term outcomes",
          when: "When product is mature and ready for scale evaluation",
          example: "Multi-site evaluation of educational AI impact on learning outcomes"
        },
        {
          name: "Quasi-Experimental Designs",
          description: "Alternative approaches when RCTs are not feasible: natural experiments, regression discontinuity",
          when: "When randomization is not possible or ethical",
          example: "Using policy rollouts to measure health AI impact"
        },
        {
          name: "Longitudinal Studies",
          description: "Multi-year follow-up studies to assess sustained impact and cost-effectiveness",
          when: "Measuring long-term development outcomes",
          example: "Tracking income and health improvements over 2-3 years"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Evaluation Methods & Tools</h1>
        <p className="text-xl text-black leading-relaxed max-w-3xl">
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
              <div>
                <h2 className="text-2xl font-bold">{level.level}</h2>
                <p className="text-lg text-black italic">"{level.coreQuestion}"</p>
              </div>
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
                  <CardContent className="space-y-3">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs font-medium text-black mb-1">WHEN TO USE</div>
                      <div className="text-sm">{method.when}</div>
                    </div>
                    {method.example && (
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <div className="text-xs font-medium text-primary mb-1">EXAMPLE</div>
                        <div className="text-sm text-primary/80">{method.example}</div>
                      </div>
                    )}
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
                <p className="text-sm text-black">
                  Prioritize methods that fit your team size, budget, and timeline
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Development Stage</h4>
                <p className="text-sm text-black">
                  Different methods are appropriate at different stages of development
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Risk Level</h4>
                <p className="text-sm text-black">
                  Higher-risk deployments require more comprehensive evaluation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">User Context</h4>
                <p className="text-sm text-black">
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
          <p className="text-black">Check our comprehensive glossary of evaluation terms</p>
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