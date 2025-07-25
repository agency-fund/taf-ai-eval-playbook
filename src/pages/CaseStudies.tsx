import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Target, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI Chatbot for Agricultural Extension",
      organization: "Digital Green",
      context: "SMS-based agricultural advice system for smallholder farmers in India",
      challenge: "Measuring user engagement and agricultural outcome impact",
      approach: [
        "Model evaluation: NLP accuracy for local language queries",
        "Product evaluation: SMS interface usability testing",
        "User evaluation: Farmer satisfaction and knowledge retention",
        "Impact evaluation: Crop yield and practice adoption tracking"
      ],
      outcomes: [
        "40% increase in relevant query responses",
        "60% user retention after 3 months", 
        "25% improvement in recommended practice adoption"
      ],
      icon: Target
    },
    {
      title: "Healthcare Diagnostic AI",
      organization: "Babylon Health",
      context: "AI-powered symptom checker for primary healthcare in Rwanda",
      challenge: "Ensuring diagnostic accuracy across diverse population",
      approach: [
        "Model evaluation: Diagnostic accuracy validation with local data",
        "Product evaluation: Clinical workflow integration testing",
        "User evaluation: Healthcare worker acceptance and efficiency",
        "Impact evaluation: Patient outcome and healthcare access metrics"
      ],
      outcomes: [
        "85% diagnostic accuracy for common conditions",
        "30% reduction in consultation time",
        "50% increase in rural healthcare access"
      ],
      icon: Users
    },
    {
      title: "Education Content Recommendation",
      organization: "Pratham Education",
      context: "Personalized learning content for children in low-resource schools",
      challenge: "Adapting to diverse learning contexts and measuring learning outcomes",
      approach: [
        "Model evaluation: Recommendation relevance and fairness testing",
        "Product evaluation: Tablet interface usability in classroom settings",
        "User evaluation: Student engagement and teacher adoption",
        "Impact evaluation: Learning outcome improvements over time"
      ],
      outcomes: [
        "70% improvement in learning progression tracking",
        "80% teacher adoption rate",
        "35% increase in student learning outcomes"
      ],
      icon: BarChart
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Learn from real-world implementations of AI evaluation in development contexts. 
          These case studies demonstrate practical application of the four-level framework.
        </p>
      </div>

      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{study.title}</CardTitle>
                    <div className="text-sm font-medium text-primary">{study.organization}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Details
                </Button>
              </div>
              <CardDescription className="text-base leading-relaxed">
                <strong>Context:</strong> {study.context}
              </CardDescription>
              <CardDescription className="text-base leading-relaxed">
                <strong>Challenge:</strong> {study.challenge}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Evaluation Approach:</h4>
                <ul className="space-y-2">
                  {study.approach.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Outcomes:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {study.outcomes.map((outcome, idx) => (
                    <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm text-green-700 font-medium">{outcome}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-xl">Share Your Case Study</CardTitle>
            <CardDescription className="text-base">
              Have experience implementing AI evaluation in development contexts? 
              We'd love to feature your case study in this living playbook.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary">
              Submit Case Study
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore methods</h3>
          <p className="text-muted-foreground">Dive into specific evaluation methods and tools</p>
        </div>
        <Button asChild size="lg">
          <Link to="/methods">
            Evaluation Methods <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseStudies;