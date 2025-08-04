import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, MousePointer, BarChart3, Settings, Activity, Star, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Level2 = () => {
  const evaluationMethods = [
    {
      title: "A/B Testing",
      description: "Feature A vs. Feature B comparison",
      icon: BarChart3
    },
    {
      title: "Multi-armed Bandit",
      description: "Performance-based adaptive allocations. Contextual bandits for allocation based on user characteristics",
      icon: Activity
    },
    {
      title: "Holdout Testing",
      description: "e.g., AI vs. non-AI; status quo (default engagement) vs. an accumulation of a/b tests + rollouts (higher dosage engagement)",
      icon: Settings
    }
  ];

  const retentionMetrics = [
    {
      title: "User-Level Retention",
      description: "Measures continued, active usage of the chatbot over time. Indicates sustained value or habit formation.",
      examples: ["DAU/MAU uplift after introducing a new feature (e.g., personalized summaries)", "Session count increase post fine-tuning on tone/style"]
    }
  ];

  const engagementMetrics = [
    {
      title: "Action-Based Engagement",
      description: "Measures user actions directly taken during interactions, including response rate, clicks, prompt rewrites, emoji reactions, etc.",
      examples: ["% of conversations with user-initiated follow-up after AI output", "Increase in prompt rewrites with new UI button"]
    },
    {
      title: "Interaction Duration",
      description: "Measures depth of interaction, such as number of back-and-forth turns or average session duration.",
      examples: ["Longer session length after updating LLM to a more empathetic version", "More conversational turns post tone-tuning"]
    },
    {
      title: "Feature Uptake",
      description: "Measures usage of optional or advanced features (e.g., exporting content, feedback buttons, reference links).",
      examples: ["Higher click-through to source links after adding citations", "Greater use of 'ask follow-up' option after UI tweak"]
    }
  ];

  const nonEngagementMetrics = [
    {
      title: "Quality Scores",
      description: "Content-level scores assigned by automated systems or human review. Higher or lower scores reflect desired/undesired characteristics.",
      examples: ["Decrease in toxicity score after safety fine-tuning", "Higher informativeness score after system prompt update"]
    },
    {
      title: "Item-Level Surveys",
      description: "User feedback tied to specific chatbot responses, often collected after interaction.",
      examples: ["Increase in % 'helpful' responses rated 4+ stars in variant B", "More 'want to see more like this' votes after grounding the model"]
    },
    {
      title: "User-Level Surveys",
      description: "User feedback on the chatbot or platform experience overall. Measures general satisfaction, trust, or usability.",
      examples: ["More users rate the chatbot 9/10 in variant with memory feature", "Lower dropout rate when onboarding includes clear expectations"]
    },
    {
      title: "User Control",
      description: "Features that allow users to shape or filter their experience. A measure of user agency and satisfaction with platform control options.",
      examples: ["More users engage 'see less of this topic' in B variant", "Increased topic subscriptions with better topic surfacing in UI"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/framework" className="text-black hover:text-taf-blue transition-colors">
            ← Back to Framework
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6">Level 2: Product Evaluation</h1>
        <p className="text-xl text-black leading-relaxed max-w-3xl">
          Assessment of the AI system integrated into the product context. This level focuses on how well 
          the AI-enabled product facilitates meaningful interactions and solves user problems.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-taf-yellow/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-100 text-orange-700 border-orange-200 rounded-lg flex items-center justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg text-black">
                  Does the product facilitate meaningful interactions?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why is this level of evaluation important?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Beyond evaluating how the AI model responds to a self-constructed evaluation data set, organizations 
            need to assess how well the product engages real users, and whether it solves a meaningful problem 
            for the user. It is unlikely that a product will shift development outcomes if it fails to engage its users. 
            Bear in mind that this type of evaluation is a continuous and iterative process, rather than one-off.
          </p>
          <p>
            Technology companies frequently evaluate and improve products by collecting user interaction metrics and 
            then running rapid cycles of digital experiments. For example, they may track a user's journey on a website, 
            automatically collecting records like which products the users click on and whether they return to the site. 
            Then, they can compare how different web or app experiences affect browsing time or user satisfaction. 
            This rapid, iterative process is enabled by two factors unique to digital interventions:
          </p>
          <ul className="space-y-2">
            <li>• Iterations of the product can be precisely and efficiently deployed to different users</li>
            <li>• On-platform engagement outcomes are costless to collect and transform into meaningful engagement metrics</li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription className="text-black">Product Managers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Directly responsible for product metrics at this level. Works cross-functionally to prioritize the most promising hypotheses to test.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Data Scientists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Apply evaluation methods with the proper measurement tools. Ensure accuracy and availability of product metrics (data pipelines).
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Engineers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Build and roll out product features.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Evaluation Methods</h2>
        <div className="prose prose-lg max-w-none text-black mb-8">
          <p>
            For detailed guidance on evaluation methods, please refer to:
          </p>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://docs.google.com/document/d/1_i1LjHIA3MHBCez1gxvSqZohN9zkwjG09h5L2k4BryQ/edit?tab=t.0#heading=h.wdgt1uho9q75" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-taf-blue hover:text-taf-blue/80 underline flex items-center gap-2"
              >
                AI4GD A/B Testing Playbook
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-sm text-black"> by Elia Gandolfi</span>
            </li>
            <li>
              <a 
                href="https://docs.google.com/document/u/0/d/18OFMLI70IZLQuwhuxTwZXrDhw6Z-kpT-QUqZZJugEZ4/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-taf-blue hover:text-taf-blue/80 underline flex items-center gap-2"
              >
                AI4GD User Funnel and Metrics Playbook
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-sm text-black"> by Robert On & Temina Madon</span>
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-1 gap-6">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                                  <CardDescription className="text-base text-black">
                    {method.description}
                  </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Measurement Tools</h2>
        <div className="prose prose-lg max-w-none text-black mb-8">
          <p>
            <strong>References:</strong>
          </p>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://help.openai.com/en/articles/10875114-user-analytics-for-chatgpt-enterprise-and-edu-public-beta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-taf-blue hover:text-taf-blue/80 underline flex items-center gap-2"
              >
                User Analytics for ChatGPT Enterprise and Edu
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a 
                href="https://arxiv.org/abs/2402.06831" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-taf-blue hover:text-taf-blue/80 underline flex items-center gap-2"
              >
                What We Know About Using Non-Engagement Signals in Content Ranking
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Retention Metrics</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {retentionMetrics.map((metric, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                    <CardDescription className="text-base text-black">
                      {metric.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-black">Examples (in A/B Tests):</h4>
                      <ul className="space-y-1">
                        {metric.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-black flex items-center">
                            <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mr-3" />
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

          <div>
            <h3 className="text-2xl font-bold mb-6">Engagement Metrics</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {engagementMetrics.map((metric, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                    <CardDescription className="text-base text-black">
                      {metric.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-black">Examples (in A/B Tests):</h4>
                      <ul className="space-y-1">
                        {metric.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-black flex items-center">
                            <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mr-3" />
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

          <div>
            <h3 className="text-2xl font-bold mb-6">Non-Engagement Metrics</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {nonEngagementMetrics.map((metric, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                    <CardDescription className="text-base text-black">
                      {metric.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-black">Examples (in A/B Tests):</h4>
                      <ul className="space-y-1">
                        {metric.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-black flex items-center">
                            <div className="w-1.5 h-1.5 bg-taf-blue rounded-full mr-3" />
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
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black">
          <p>
            <em>Case studies to be added - examples from organizations like Rocket Learning and others demonstrating 
            product evaluation methods, metrics, and success determination.</em>
          </p>
          <div className="mt-6 p-4 bg-taf-yellow/10 rounded-lg">
            <h4 className="font-semibold mb-3">Guidance questions to address in case studies:</h4>
            <ul className="space-y-2 text-sm">
              <li>• What is the GenAI use case?</li>
              <li>• How was the product evaluated, on what metrics?</li>
              <li>• What methods and tools were used?</li>
              <li>• How was success determined?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003087]">Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-[#003087]">User-Centered Design</h4>
                <ul className="space-y-2 text-sm text-[#003087]">
                  <li>• Design for actual user workflows and needs</li>
                  <li>• Test with representative users early and often</li>
                  <li>• Measure both quantitative and qualitative outcomes</li>
                  <li>• Iterate based on user feedback and behavior</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#003087]">Technical Integration</h4>
                <ul className="space-y-2 text-sm text-[#003087]">
                  <li>• Ensure seamless integration with existing systems</li>
                  <li>• Monitor performance impact on overall product</li>
                  <li>• Plan for scalability and maintenance</li>
                  <li>• Document integration requirements and constraints</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-black">Learn about user evaluation and behavioral impact</p>
        </div>
        <Button asChild size="lg">
          <Link to="/level3">
            Level 3: User Evaluation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level2; 