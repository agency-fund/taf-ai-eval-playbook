import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Target, AlertTriangle, CheckCircle, BarChart3, Brain, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Level1 = () => {
  const keyMetrics = [
    {
      title: "Accuracy & Relevance",
      description: "How well the model produces correct and contextually appropriate responses",
      examples: ["Response accuracy scores", "Relevance assessments", "Factual correctness", "Domain-specific accuracy"]
    },
    {
      title: "Safety & Bias",
      description: "Assessment of potential harmful outputs and systematic biases",
      examples: ["Toxicity detection", "Bias measurement", "Hallucination rates", "Inappropriate content flags"]
    },
    {
      title: "Consistency & Reliability",
      description: "How predictable and stable the model's performance is over time",
      examples: ["Response consistency", "Performance variance", "Drift detection", "Reliability metrics"]
    },
    {
      title: "Technical Performance",
      description: "Core technical capabilities like speed, efficiency, and resource usage",
      examples: ["Response latency", "Throughput rates", "Resource consumption", "Scalability metrics"]
    }
  ];

  const evaluationMethods = [
    {
      title: "Automated Benchmarking",
      description: "Compare AI outputs to pre-labeled 'gold standard' answers using metrics like BLEU, ROUGE, or accuracy/F1",
      icon: Cog,
      details: "Tasks with clear correct answers (fact recall, data extraction). Example: A health chatbot evaluated against expert-approved medical FAQs."
    },
    {
      title: "Human as a Judge",
      description: "Users and experts manually score or annotate AI outputs using defined criteria",
      icon: Target,
      details: "Tasks requiring subjective judgment or nuanced criteria (accuracy, empathy, completeness). Includes vibe checks, systematic annotations, pairwise preference ranking, and Likert-scale rating."
    },
    {
      title: "LLM as a Judge",
      description: "A high-performing LLM evaluates another LLM's outputs, calibrated against human judgments",
      icon: Brain,
      details: "Large-scale evaluations needing consistency, with human oversight. Example: GPT-4 assesses helpfulness and accuracy of outputs from a smaller educational chatbot."
    }
  ];

  const ragMetrics = [
    {
      title: "Answer Relevancy",
      description: "Does the AI answer the user's question directly?",
      calculation: "% of responses judged (by humans or LLM-as-judge) to be directly relevant to the input query"
    },
    {
      title: "Faithfulness",
      description: "Is the answer based on real information from the retrieved documents, not made up?",
      calculation: "% of responses where all claims are verifiable from retrieved context"
    },
    {
      title: "Contextual Recall",
      description: "Did the model use all the relevant documents it retrieved?",
      calculation: "Recall = (Number of relevant retrieved documents actually used) ÷ (Total number of relevant retrieved documents)"
    },
    {
      title: "Contextual Precision",
      description: "Did the model avoid using irrelevant documents in its answer?",
      calculation: "Precision = (Number of relevant documents used) ÷ (Total number of documents used)"
    },
    {
      title: "Contextual Relevancy",
      description: "Did the model synthesize retrieved documents into a coherent and helpful response?",
      calculation: "Often measured via human or model scoring of how well the answer integrates content from multiple documents"
    }
  ];

  const technicalTools = [
    {
      name: "Langfuse",
      description: "LLM observability & tracing. Captures all prompts, tool calls, retries, costs and latency via SDK or OpenTelemetry",
      useCase: "AI engineers and LLM developers"
    },
    {
      name: "Traceloop",
      description: "Open-source LLM observability. Provides lightweight OpenTelemetry integration to trace model calls and vector DB interactions",
      useCase: "Developers and reliability engineers"
    },
    {
      name: "Helicone",
      description: "LLM telemetry & analytics. Proxies API traffic, logs metadata (cost, latency, quality), offers dashboards, prompt versioning",
      useCase: "Product & ops teams"
    },
    {
      name: "Confident-AI",
      description: "Evaluation & risk guardrails for LLMs. Open-source DeepEval framework plus cloud dashboard for automated testing",
      useCase: "Enterprises and QA teams"
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
        <h1 className="text-4xl font-bold mb-6">Level 1: Model Evaluation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Technical performance assessment of the AI model itself. This level focuses on ensuring the model 
          produces accurate, safe, and reliable outputs before integration into products.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-to-br from-red-50 to-red-100/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-100 text-red-700 rounded-lg flex items-center justify-center">
                <Cog className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg">
                  Does the AI model produce the desired responses?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why is this level of evaluation important?</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            AI models, especially large language models (LLMs), do not "understand" content in the way humans do. 
            Instead, they generate outputs by predicting the next word in a sequence based on statistical patterns in data. 
            Because of this, model responses can appear fluent and convincing while still being inaccurate, biased, irrelevant, 
            or even harmful.
          </p>
          <p>
            This makes structured model evaluation essential. We need to systematically and rigorously assess whether an AI 
            system produces useful, accurate, appropriate, and safe outputs across a range of tasks and user contexts. 
            This is especially critical when AI tools are deployed in sensitive domains like education, health, or agriculture, 
            where misinformation or misalignment can cause real harm.
          </p>
          <p>
            We believe the tools discussed in this section are relevant to the following important use cases of GenAI in the development sector:
          </p>
          <ul className="space-y-2">
            <li>• Conversational agents using Retrieval-Augmented Generation (RAG) (e.g., chatbots that pull from external databases or documents)</li>
            <li>• Language models designed for low-resource languages (e.g., Swahili, Kinyarwanda, Amharic)</li>
            <li>• Text-to-speech and speech-to-text models (e.g., voice assistants or phone-based learning tools)</li>
            <li>• Multilingual models used for translation or multilingual reasoning</li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription>AI Engineers, ML Researchers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Design and build evaluation pipelines, run benchmark tests, implement metrics, and iterate on model fine-tuning.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription>Domain Experts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contribute to evaluation rubric design, identify harmful or biased outputs, and contextualize AI behavior within real-world use cases.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How do we evaluate AI models?</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Model evaluation combines automated metrics, human judgment, and LLMs acting as evaluators. Here are common approaches and tools:
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-6 mt-8">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-700 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">
                      {method.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>When it works well:</strong> {method.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">RAG-Specific Metrics</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-8">
          <p>
            For Retrieval-Augmented Generation (RAG) systems, specialized metrics help evaluate how well the model 
            retrieves useful information and uses it to generate accurate, grounded answers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {ragMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{metric.title}</CardTitle>
                <CardDescription className="text-base">
                  {metric.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Calculation:</h4>
                  <p className="text-sm text-muted-foreground">{metric.calculation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Technical Tools and Platforms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {technicalTools.map((tool, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Target Users:</h4>
                  <p className="text-sm text-muted-foreground">{tool.useCase}</p>
                </div>
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
                <h4 className="font-semibold mb-2">Before Deployment</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Establish baseline performance metrics</li>
                  <li>• Test across diverse inputs and edge cases</li>
                  <li>• Validate safety and bias assessments</li>
                  <li>• Document model limitations and assumptions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">During Operation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monitor performance drift over time</li>
                  <li>• Track user feedback and error reports</li>
                  <li>• Maintain evaluation datasets</li>
                  <li>• Plan for model updates and retraining</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-muted-foreground">Learn about product evaluation and user engagement</p>
        </div>
        <Button asChild size="lg">
          <Link to="/level2">
            Level 2: Product Evaluation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level1; 