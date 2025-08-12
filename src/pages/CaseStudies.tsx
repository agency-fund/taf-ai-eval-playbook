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
        <p className="text-xl text-black leading-relaxed max-w-3xl mb-4">
          Learn from real-world implementations of AI evaluation in development contexts. 
          Currently, our case studies focus on <strong>Level 1 (Model Evaluation)</strong> as organizations 
          are still building foundational capabilities.
        </p>
        <div className="bg-taf-light-blue/10 border border-taf-light-blue/20 rounded-lg p-4 max-w-3xl">
          <p className="text-taf-blue text-sm">
            <strong>Looking for examples across all evaluation levels?</strong> Check out our 
            <Link to="/tools" className="text-taf-blue hover:text-taf-blue/80 underline mx-1">
              interactive tools
            </Link>
            which include hypothetical case studies covering Levels 2-4.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-lg text-taf-blue mb-2">Guidance Questions for Case Studies</CardTitle>
            <div className="space-y-2 text-sm text-taf-blue">
              <li> What is the GenAI use case?</li>
              <li> How was the model evaluated, on what metrics?</li>
              <li> What methods and tools were used?</li>
              <li> How was success determined?</li>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-16">
        <Card className="border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#003087]" />
              </div>
              <div>
                <CardTitle className="text-2xl">Jacaranda Health</CardTitle>
                <p className="text-taf-blue font-medium">Voice-based Maternal Care in Kenya</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              <a href="https://jacarandahealth.org/" className="text-taf-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Jacaranda Health (JH)
              </a> is pioneering the use of generative AI to transform how underserved mothers in Sub-Saharan Africa 
              access, understand, and act on vital maternal and newborn health information. They are adding voice 
              capabilities to its services, aiming to help mothers who have difficulty reading or seeing text to 
              access its content.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-black">Challenge & Solution</h4>
              <p className="text-black leading-relaxed">
                Jacaranda Health set out to bring voice-based maternal care to women who struggle with text. They 
                recorded a balanced Swahili-English voice corpus from rural and urban mothers across Kenya, then 
                fine-tuned OpenAI's Whisper model on that data. Over successive iterations they drove Word Error 
                Rate down from 87 percent to 15 percent, inching toward their 6 percent target that matches 
                top-tier languages.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Evaluation Innovation</h4>
              <p className="text-black leading-relaxed">
                Standard WER simply tallies substitutions, insertions and deletions without regard for meaning. 
                That metric penalizes Swahili's flexible word order and complex verb forms even when the intent 
                is clear. To get a truer picture of how well mothers can follow advice, Jacaranda now measures 
                <strong> semantic accuracy using a cosine-similarity based WER</strong>. This approach rewards 
                transcripts that convey the same health guidance, even if they differ in exact phrasing.
              </p>
            </div>

            <div className="bg-taf-light-blue/10 border border-taf-light-blue/20 rounded-lg p-4">
              <p className="text-taf-blue text-sm">
                <strong>Key Learning:</strong> Sometimes you need to invent new metrics and stray from the 
                standard to get AI working for your beneficiaries.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#003087]" />
              </div>
              <div>
                <CardTitle className="text-2xl">Digital Green</CardTitle>
                <p className="text-taf-blue font-medium">Agricultural Extension Services in Ethiopia</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-black leading-relaxed">
              <a href="https://digitalgreen.org/" className="text-taf-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Digital Green (DG)
              </a> collaborates with public, private, and non-profit organizations to enhance small-scale farmers' 
              access to timely, actionable, and localized agricultural recommendations. In Ethiopia, partnerships 
              with the Ministry of Agriculture and other institutions have strengthened the country's extension services.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-black">Evaluation Framework</h4>
              <p className="text-black leading-relaxed">
                To benchmark ASR models in agriculture, Digital Green used metrics such as WER, CER and MER but 
                had to introduce a custom <strong>Agri-Weighted WER</strong> that penalizes errors in key 
                agricultural terms more heavily. This evaluation framework helps identify which models are 
                production-ready and where fine-tuning is needed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Multi-language Support</h4>
              <p className="text-black leading-relaxed">
                Using weighted metrics, they track progress across Hindi, Telugu and Odiya datasets and tailor 
                improvements to support scalable, farmer-focused advisory systems. Development Agents (DAs) use 
                these digital tools to expand their reach and effectiveness.
              </p>
            </div>

            <div className="bg-white border border-taf-blue/20 rounded-lg p-4">
              <p className="text-taf-blue text-sm">
                <strong>Key Learning:</strong> Domain-specific weighted metrics provide better signals for 
                production readiness than generic evaluation approaches.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card bg-gray-50">
          <CardHeader>
            <CardTitle className="text-xl">Additional Resources</CardTitle>
            <CardDescription>
              Explore these detailed evaluation frameworks and studies:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Comprehensive Report</h4>
                <a href="https://cdh.stanford.edu/generative-ai-health-low-middle-income-countries" 
                   className="text-primary hover:underline text-sm" 
                   target="_blank" rel="noopener noreferrer">
                  Generative AI for Health in Low & Middle Income Countries
                </a>
              </div>
              <div>
                <h4 className="font-medium mb-1">Evaluation Frameworks</h4>
                <div className="text-sm space-y-1">
                  <div>
                    <a href="https://precisiondev.org/evaluating-ai-for-learning-a-framework/" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Precision Development Evaluation Framework
                    </a>
                  </div>
                  <div>
                    <a href="https://arxiv.org/abs/2409.08916" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Evaluation of Farmer.Chat at Digital Green
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <Card className="border-0 text-taf-blue shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-xl text-taf-blue">Share Your Case Study</CardTitle>
            <CardDescription className="text-base text-taf-blue">
              Have experience implementing AI evaluation in development contexts? 
              We'd love to feature your case study in this living playbook.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="bg-taf-blue hover:bg-taf-blue/90 text-white">
              Submit Case Study
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mt-16">
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore methods</h3>
          <p className="text-black">Dive into specific evaluation methods and tools</p>
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