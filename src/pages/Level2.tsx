import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, MousePointer, BarChart3, Settings, Activity, Star, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Level2 = () => {
  const evaluationMethods = [
    {
      title: "A/B Testing",
      description: "Feature A vs. Feature B",
      icon: BarChart3
    },
    {
      title: "Multi-armed Bandit",
      description: "Performance-based adaptive allocations. Contextual bandits for allocation based on user characteristics.",
      icon: Activity
    },
    {
      title: "Holdout Testing",
      description: "e.g., AI vs. non-AI; status quo (default engagement) vs. an accumulation of a/b tests + rollouts (higher dosage engagement)",
      icon: Settings
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
              <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center">
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
          <ol className="space-y-2">
            <li>1. iterations of the product can be precisely and efficiently deployed to different users and</li>
            <li>2. on-platform engagement outcomes are costless to collect and transform into meaningful engagement metrics.</li>
          </ol>
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
        <h2 className="text-3xl font-bold mb-8">Evaluation method</h2>
        <div className="prose prose-lg max-w-none text-black mb-8">
          <p>For details, please see</p>
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
        <h2 className="text-3xl font-bold mb-8">Measurement tools</h2>
        <div className="prose prose-lg max-w-none text-black mb-8">
          <p><strong>Reference:</strong></p>
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
                href="https://arxiv.org/abs/2402.06831#:~:text=What%20We%20Know%20About%20Using%20Non%2DEngagement%20Signals%20in%20Content%20Ranking,-Tom%20Cunningham%2C%20Sana&text=Many%20online%20platforms%20predominantly%20rank,for%20society%20as%20a%20whole." 
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
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Definition</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Examples (in A/B Tests)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold" rowSpan={1}>Retention Metrics</td>
                <td className="border border-gray-300 px-4 py-3">User-Level Retention</td>
                <td className="border border-gray-300 px-4 py-3">Measures continued, active usage of the chatbot over time. Indicates sustained value or habit formation.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>DAU/MAU uplift after introducing a new feature (e.g., personalized summaries)</li>
                    <li>Session count increase post fine-tuning on tone/style</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold" rowSpan={3}>Engagement Metrics</td>
                <td className="border border-gray-300 px-4 py-3">Action-Based Engagement</td>
                <td className="border border-gray-300 px-4 py-3">Measures user actions directly taken during interactions, including response rate, clicks, prompt rewrites, emoji reactions, etc.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>% of conversations with user-initiated follow-up after AI output</li>
                    <li>Increase in prompt rewrites with new UI button</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Interaction Duration</td>
                <td className="border border-gray-300 px-4 py-3">Measures depth of interaction, such as number of back-and-forth turns or average session duration.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Longer session length after updating LLM to a more empathetic version</li>
                    <li>More conversational turns post tone-tuning</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Feature Uptake</td>
                <td className="border border-gray-300 px-4 py-3">Measures usage of optional or advanced features (e.g., exporting content, feedback buttons, reference links).</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Higher click-through to source links after adding citations</li>
                    <li>Greater use of "ask follow-up" option after UI tweak</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold" rowSpan={4}>Non-Engagement Metrics</td>
                <td className="border border-gray-300 px-4 py-3">Quality Scores</td>
                <td className="border border-gray-300 px-4 py-3">Content-level scores assigned by automated systems or human review. Higher or lower scores reflect desired/undesired characteristics.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Decrease in toxicity score after safety fine-tuning</li>
                    <li>Higher informativeness score after system prompt update</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Item-Level Surveys</td>
                <td className="border border-gray-300 px-4 py-3">User feedback tied to specific chatbot responses, often collected after interaction.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Increase in % "helpful" responses rated 4+ stars in variant B</li>
                    <li>More "want to see more like this" votes after grounding the model</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">User-Level Surveys</td>
                <td className="border border-gray-300 px-4 py-3">User feedback on the chatbot or platform experience overall. Measures general satisfaction, trust, or usability.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>More users rate the chatbot 9/10 in variant with memory feature</li>
                    <li>Lower dropout rate when onboarding includes clear expectations</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">User Control</td>
                <td className="border border-gray-300 px-4 py-3">Features that allow users to shape or filter their experience. A measure of user agency and satisfaction with platform control options.</td>
                <td className="border border-gray-300 px-4 py-3">
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>More users engage "see less of this topic" in B variant</li>
                    <li>Increased topic subscriptions with better topic surfacing in UI</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black">
          <p>
            <em>We will add more case studies in the future based on our learnings from the AI4GD accelerator.</em>
          </p>
        </div>
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