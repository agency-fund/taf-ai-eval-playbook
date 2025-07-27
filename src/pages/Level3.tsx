import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Brain, Heart, Activity, BarChart3, MessageSquare, Clock, Target, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Level3 = () => {
  const keyMetrics = [
    {
      title: "Cognitive Outcomes",
      description: "Are users gaining new knowledge or correcting misconceptions? Do they demonstrate improved skills or decision-making ability as a result of using the AI?",
      icon: Brain,
      examples: ["Knowledge acquisition", "Skill development", "Decision-making improvement", "Critical thinking enhancement"]
    },
    {
      title: "Affective Outcomes",
      description: "How does the product make users feel? Do users report feeling supported, motivated, and capable after interactions, or are there indications of frustration, confusion, or emotional distress?",
      icon: Heart,
      examples: ["Emotional state", "Motivation levels", "Confidence building", "Stress reduction"]
    },
    {
      title: "Behavioral Outcomes",
      description: "Are users taking small but meaningful actions (e.g., asking more questions, trying out recommended behaviors) that would predict their longer-term development?",
      icon: Activity,
      examples: ["Action taking", "Behavioral change", "Engagement patterns", "Adoption of recommendations"]
    }
  ];

  const evaluationMethods = [
    {
      title: "A/B Testing",
      description: "Feature A vs. Feature B comparison",
      icon: BarChart3
    },
    {
      title: "Multi-armed Bandit",
      description: "Performance-based adaptive allocations",
      icon: Target
    },
    {
      title: "Holdout Testing",
      description: "e.g., AI vs. non-AI",
      icon: User
    }
  ];

  const onPlatformMeasures = [
    {
      title: "Frequency and Depth of Queries",
      description: "How often and how deeply users engage via queries. Increased frequency of interactions with an educational AI can signal greater curiosity and learning gains.",
      examples: ["Number of chatbot interactions", "Progression from basic to advanced questions", "Query complexity over time"],
      reference: "https://eric.ed.gov/?q=source%3A%22British+Journal+of+Educational+Technology%22&ff1=pubReports+-+Research&ff2=subLearner+Engagement&id=EJ1427270"
    },
    {
      title: "Changes in Language Complexity",
      description: "The complexity of language users employ. As users learn and gain expertise, their vocabulary, syntax, and overall linguistic sophistication may become more advanced.",
      examples: ["Advanced terminology usage", "Complex sentence structures", "Vocabulary expansion"],
      reference: "https://eprints.soton.ac.uk/390338/1/1761_Article_Text_8498_1_10_20160728.pdf"
    },
    {
      title: "Follow-up Question Rate",
      description: "Cases where a user asks a new question related to the previous answer. A strong indicator of sustained engagement and intellectual curiosity.",
      examples: ["Average dialogue turns per query", "Productive follow-ups vs. confusion", "Curiosity-driven questions"],
      reference: "https://www.cambridge.org/elt/blog/2022/02/22/engine-achievement-role-curiosity-learner-engagement/"
    },
    {
      title: "Session Duration & Return Rate",
      description: "How long a user spends in a learning session and how frequently users come back for new sessions. Widely used behavioral proxies for engagement and motivation.",
      examples: ["Voluntary session extension", "Return frequency", "Session length trends"],
      reference: "https://moldstud.com/articles/p-essential-benchmarking-metrics-for-evaluating-e-learning-success"
    },
    {
      title: "Feature Utilization and AI Suggestions Followed",
      description: "Whether users actually use suggested tools or follow the AI's advice. Reveals much about user trust and motivation.",
      examples: ["Uptake of recommended activities", "Trust in AI guidance", "Follow-through rates"],
      reference: "https://knowledge.wharton.upenn.edu/article/why-is-it-so-hard-for-ai-to-win-user-trust/"
    }
  ];

  const surveyGuidelines = [
    {
      title: "Use Validated Scales",
      description: "Research existing validated psychological questionnaires that measure latent constructs like self-efficacy, motivation, or emotional state.",
      examples: ["Self-rated knowledge gain", "Confidence level assessment", "Emotional state measurement"]
    },
    {
      title: "Keep It Brief and Specific",
      description: "To avoid survey fatigue and interruptions with AI conversations, only a handful of well-chosen questions should be asked at a time.",
      examples: ["3-question micro-surveys", "Mix of rating scales and open-ended", "Contextual timing"]
    },
    {
      title: "Integrate Seamlessly",
      description: "The timing and context of asking are key – right after significant interactions or at logical breakpoints.",
      examples: ["Conversational surveys", "Natural dialogue integration", "Reflection as part of experience"],
      reference: "https://psychometrics.ai/"
    }
  ];

  const nlpApproaches = [
    {
      title: "Sentiment Analysis",
      description: "Automatically scoring the sentiment of user utterances over time. Are the words used by the user becoming more positive, or less anxious?",
      examples: ["Positive tone trends", "Anxiety reduction", "Comfort level assessment"]
    },
    {
      title: "Topic Modeling and Keyword Analysis",
      description: "Analyze the content of conversations to see what themes emerge. Track progression from fundamental concepts to more advanced ones.",
      examples: ["Theme progression", "Unexpected topic detection", "Cognitive growth indicators"]
    },
    {
      title: "Linguistic Inquiry and Word Count (LIWC)",
      description: "Dictionary-based text analysis that maps words to psychological categories like emotion, social words, cognitive processes.",
      examples: ["Analytical thinking indicators", "Emotional tone measurement", "Social connection signals"],
      reference: "https://www.liwc.app/"
    },
    {
      title: "LLM-Based Text Analysis",
      description: "Leverage large language models to analyze and score text in more nuanced ways. Can detect various psychological constructs with high reliability.",
      examples: ["Self-confidence detection", "Loneliness indicators", "Multi-language analysis"],
      reference: "https://arxiv.org/abs/2309.10771"
    }
  ];

  const offPlatformMeasures = [
    {
      title: "Longer Surveys or Interviews",
      description: "Outside the app, more extensive questionnaires can be administered to measure constructs like knowledge, psychological well-being, or behavioral frequency.",
      examples: ["Knowledge quizzes", "Well-being scales", "Behavioral frequency tracking"]
    },
    {
      title: "Observer Reports",
      description: "In an educational context, teachers or parents might report on the student's changes. These external perspectives can validate self-reported data.",
      examples: ["Teacher observations", "Parent feedback", "Peer assessments"]
    },
    {
      title: "Objective Performance Data",
      description: "Tie AI usage to objective outcomes. Use validated assessments and administrative data to credibly measure improvements.",
      examples: ["Writing assessments", "Exam scores", "Task completion rates"],
      reference: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486"
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
        <h1 className="text-4xl font-bold mb-6">Level 3: User Evaluation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Assessment of how users interact with and benefit from the AI-enabled product. This level focuses on 
          understanding the cognitive, affective, and behavioral changes that result from using the AI system.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg">
                  Does the product positively support users' thoughts, feelings, and actions?
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
            Once an AI product is functioning correctly (Level 1) and engaging users as intended (Level 2), the next 
            step is to ask: Is this product actually changing how users think, feel, or act in ways that are in line 
            with the product's intended purpose? This level is essential because users' psychological and behavioral 
            changes often serve as early indicators of whether a product is likely to achieve its long-term development 
            goals (e.g., improving health outcomes or educational gains). Compared to full-scale impact evaluations, 
            these user evaluations are faster and cheaper, and they allow product developers to iterate rapidly based 
            on real-world feedback.
          </p>
          <p>
            At this stage, evaluations may focus on outcomes such as:
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="grid md:grid-cols-1 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{metric.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {metric.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                  <ul className="space-y-1">
                    {metric.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
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
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription>Behavioral Researchers, Psychologists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Apply evaluation methods with the proper measurement tools.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription>Data Scientists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Support the design of A/B tests and randomized experiments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Evaluation Methods</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
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
        <h2 className="text-3xl font-bold mb-8">Measurement Tools</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-8">
          <p>
            Measuring thoughts, feelings, and behaviors calls for a mix of quantitative and qualitative tools. 
            We can categorize these into <strong>on-platform measures</strong>, <strong>self-report surveys</strong>, 
            <strong> NLP-based text analytics</strong>, and <strong>off-platform assessments</strong>:
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">1. On-Platform Behavioral Measures</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-6">
              <p>
                Within the app or platform, we can collect rich <strong>telemetry and interaction data</strong> that 
                serve as proxies for cognitive and affective outcomes. We offer a few examples in educational AI below:
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {onPlatformMeasures.map((measure, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{measure.title}</CardTitle>
                    <CardDescription className="text-base">
                      {measure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                      <ul className="space-y-1">
                        {measure.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {example}
                          </li>
                        ))}
                      </ul>
                      {measure.reference && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href={measure.reference} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline flex items-center gap-2 text-sm"
                          >
                            Learn more
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">2. Short Self-Report Surveys</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-6">
              <p>
                Often the most direct way to gauge a user's thoughts and feelings is simply to ask them. 
                Short surveys can capture self-reported changes and subjective experience. When developing such 
                measures in an AI product, a few guidelines are important:
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {surveyGuidelines.map((guideline, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{guideline.title}</CardTitle>
                    <CardDescription className="text-base">
                      {guideline.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                      <ul className="space-y-1">
                        {guideline.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {example}
                          </li>
                        ))}
                      </ul>
                      {guideline.reference && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href={guideline.reference} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline flex items-center gap-2 text-sm"
                          >
                            Learn more
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">3. NLP and Text Analysis of User-Generated Content</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-6">
              <p>
                An exciting addition to the toolkit is using Natural Language Processing (NLP) methods to analyze 
                what users say or write during their interactions. The actual conversation logs or written outputs 
                can be mined for signals of cognitive or emotional change. Approaches include:
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {nlpApproaches.map((approach, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{approach.title}</CardTitle>
                    <CardDescription className="text-base">
                      {approach.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                      <ul className="space-y-1">
                        {approach.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {example}
                          </li>
                        ))}
                      </ul>
                      {approach.reference && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href={approach.reference} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline flex items-center gap-2 text-sm"
                          >
                            Learn more
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">4. Off-Platform Measures (Field studies and external data)</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-6">
              <p>
                In some cases, we need to look beyond the app itself to gauge real-world behavior changes. 
                Especially for outcomes that manifest in daily life or over longer periods, we might collect 
                data through:
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {offPlatformMeasures.map((measure, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{measure.title}</CardTitle>
                    <CardDescription className="text-base">
                      {measure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Examples:</h4>
                      <ul className="space-y-1">
                        {measure.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {example}
                          </li>
                        ))}
                      </ul>
                      {measure.reference && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href={measure.reference} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline flex items-center gap-2 text-sm"
                          >
                            Learn more
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
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
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            <em>Case studies to be added - examples from published literature such as the AI can harm learning paper, 
            or self-regulated learning paper with AI tools. Most of our grantees have not yet reached this step.</em>
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
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
            <CardTitle className="text-2xl">Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Data Collection</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Validate behavioral proxies against intended outcomes</li>
                  <li>• Combine multiple measurement approaches</li>
                  <li>• Ensure continuous, real-time data collection</li>
                  <li>• Maintain user privacy and consent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analysis & Interpretation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Distinguish productive engagement from confusion</li>
                  <li>• Track trends over time rather than single points</li>
                  <li>• Consider cultural and contextual factors</li>
                  <li>• Validate findings with qualitative insights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-muted-foreground">Learn about impact evaluation and development outcomes</p>
        </div>
        <Button asChild size="lg">
          <Link to="/level4">
            Level 4: Impact Evaluation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Level3; 