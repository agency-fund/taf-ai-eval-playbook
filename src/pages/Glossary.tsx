import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    // Level 1: Model Evaluation
    {
      term: "Automatic Benchmarking",
      definition: "Comparing AI outputs to pre-labeled 'gold standard' answers using metrics like BLEU, ROUGE, or accuracy/F1. Works best for tasks with clear correct answers like fact recall or data extraction.",
      category: "Model Evaluation"
    },
    {
      term: "Human as a Judge",
      definition: "Users and experts manually score or annotate AI outputs using defined criteria. Essential for tasks requiring subjective judgment or nuanced criteria like accuracy, empathy, or completeness.",
      category: "Model Evaluation"
    },
    {
      term: "LLM as a Judge",
      definition: "A high-performing LLM evaluates another LLM's outputs, calibrated against human judgments. Useful for large-scale evaluations needing consistency with human oversight.",
      category: "Model Evaluation"
    },
    {
      term: "BLEU Score",
      definition: "Measures how closely AI-generated translations match human reference translations by comparing n-gram overlap.",
      category: "Model Evaluation"
    },
    {
      term: "ROUGE Score",
      definition: "Evaluates how well AI-generated summaries overlap with human-written summaries using recall-oriented metrics.",
      category: "Model Evaluation"
    },
    {
      term: "RAG Metrics",
      definition: "Composite metrics measuring how well an AI model retrieves useful information and uses it to generate accurate, grounded answers. Includes answer relevancy, faithfulness, contextual recall, and contextual precision.",
      category: "Model Evaluation"
    },
    {
      term: "Answer Relevancy",
      definition: "Percentage of responses judged to be directly relevant to the input query, measured by humans or LLM-as-judge on binary or Likert scales.",
      category: "Model Evaluation"
    },
    {
      term: "Faithfulness",
      definition: "Percentage of responses where all claims are verifiable from retrieved context, ensuring AI doesn't fabricate information not present in source documents.",
      category: "Model Evaluation"
    },
    {
      term: "Contextual Recall",
      definition: "Measures whether the model used all relevant documents it retrieved: (Number of relevant retrieved documents used) ÷ (Total relevant retrieved documents).",
      category: "Model Evaluation"
    },
    {
      term: "Contextual Precision",
      definition: "Measures whether the model avoided using irrelevant documents: (Number of relevant documents used) ÷ (Total documents used in answer).",
      category: "Model Evaluation"
    },
    {
      term: "Word Error Rate (WER)",
      definition: "Standard metric for speech recognition accuracy that tallies substitutions, insertions and deletions. Can be enhanced with semantic variations like cosine-similarity based WER.",
      category: "Model Evaluation"
    },

    // Level 2: Product Evaluation
    {
      term: "A/B Testing",
      definition: "Feature A vs. Feature B comparison to determine which performs better in terms of user engagement and product metrics.",
      category: "Product Evaluation"
    },
    {
      term: "Multi-armed Bandit",
      definition: "Performance-based adaptive allocations that automatically adjust which users see which features based on real-time performance. Includes contextual bandits for user-specific allocation.",
      category: "Product Evaluation"
    },
    {
      term: "Holdout Testing",
      definition: "Comparing AI vs. non-AI versions or status quo vs. enhanced engagement to measure overall product impact.",
      category: "Product Evaluation"
    },
    {
      term: "DAU/MAU",
      definition: "Daily Active Users/Monthly Active Users - key retention metrics measuring continued, active usage of the product over time.",
      category: "Product Evaluation"
    },
    {
      term: "Action-Based Engagement",
      definition: "Measures user actions directly taken during interactions, including response rates, clicks, prompt rewrites, emoji reactions, and follow-up conversations.",
      category: "Product Evaluation"
    },
    {
      term: "Interaction Duration",
      definition: "Measures depth of interaction, such as number of back-and-forth turns or average session duration, indicating user engagement and satisfaction.",
      category: "Product Evaluation"
    },
    {
      term: "Feature Uptake",
      definition: "Measures usage of optional or advanced features like exporting content, feedback buttons, or reference links to assess product value.",
      category: "Product Evaluation"
    },
    {
      term: "User-Level Retention",
      definition: "Measures continued, active usage of the chatbot over time. Indicates sustained value or habit formation.",
      category: "Product Evaluation"
    },
    {
      term: "Non-Engagement Metrics",
      definition: "Quality indicators beyond user clicks and time spent, including content quality scores, user surveys, and user control features.",
      category: "Product Evaluation"
    },
    {
      term: "Quality Scores",
      definition: "Content-level scores assigned by automated systems or human review. Higher or lower scores reflect desired/undesired characteristics like toxicity or informativeness.",
      category: "Product Evaluation"
    },
    {
      term: "Item-Level Surveys",
      definition: "User feedback tied to specific chatbot responses, often collected after interaction to measure satisfaction with individual outputs.",
      category: "Product Evaluation"
    },
    {
      term: "User-Level Surveys",
      definition: "User feedback on the chatbot or platform experience overall. Measures general satisfaction or usability across the entire product.",
      category: "Product Evaluation"
    },
    {
      term: "User Control",
      definition: "Features that allow users to shape or filter their experience. A measure of user satisfaction with platform control options.",
      category: "Product Evaluation"
    },
    {
      term: "Digital Trace Data",
      definition: "Automatically collected interaction data that provides a picture of user progress and behavior patterns over time.",
      category: "Product Evaluation"
    },

    // Level 3: User Evaluation
    {
      term: "Cognitive Outcomes",
      definition: "Measures whether users are gaining new knowledge, correcting misconceptions, or demonstrating improved skills and decision-making ability from using the AI.",
      category: "User Evaluation"
    },
    {
      term: "Affective Outcomes",
      definition: "Assessment of how the product makes users feel - whether they report feeling supported, motivated, and capable or show signs of frustration, confusion, or distress.",
      category: "User Evaluation"
    },
    {
      term: "Behavioral Outcomes",
      definition: "Measures whether users are taking meaningful actions like asking more questions, trying recommended behaviors, or other actions that predict longer-term development.",
      category: "User Evaluation"
    },
    {
      term: "Frequency and Depth of Queries",
      definition: "Measures how often and how deeply users engage via queries. Increased frequency and complexity of interactions can signal greater curiosity and learning gains.",
      category: "User Evaluation"
    },
    {
      term: "Follow-up Question Rate",
      definition: "Percentage of interactions where users ask new questions related to previous answers, indicating sustained engagement and intellectual curiosity.",
      category: "User Evaluation"
    },
    {
      term: "Language Complexity Analysis",
      definition: "Tracking the complexity of language users employ - vocabulary, syntax, and linguistic sophistication often increase as users learn and gain expertise.",
      category: "User Evaluation"
    },
    {
      term: "Session Duration & Return Rate",
      definition: "How long a user spends in a learning session and how frequently users come back for new sessions. Widely used behavioral proxies for engagement and motivation.",
      category: "User Evaluation"
    },
    {
      term: "Feature Utilization Rate",
      definition: "Whether users actually use suggested tools or follow the AI's advice. Reveals much about user trust and motivation.",
      category: "User Evaluation"
    },
    {
      term: "Sentiment Analysis",
      definition: "Automatically scoring the sentiment of user utterances over time to detect whether words used are becoming more positive or less anxious.",
      category: "User Evaluation"
    },
    {
      term: "Topic Modeling",
      definition: "Analyzing the content of conversations to see what themes emerge. Can track progression from fundamental concepts to more advanced ones, indicating cognitive growth.",
      category: "User Evaluation"
    },
    {
      term: "LIWC Analysis",
      definition: "Linguistic Inquiry and Word Count - dictionary-based text analysis that maps words to psychological categories like emotion, social words, and cognitive processes.",
      category: "User Evaluation"
    },
    {
      term: "LLM-Based Text Analysis",
      definition: "Using large language models to analyze and score text in nuanced ways. Can detect various psychological constructs with high reliability across multiple languages.",
      category: "User Evaluation"
    },
    {
      term: "Validated Scales",
      definition: "Research-backed psychological questionnaires that measure latent constructs like self-efficacy, motivation, or emotional state with proven reliability.",
      category: "User Evaluation"
    },
    {
      term: "Micro-Surveys",
      definition: "Brief, contextually-timed surveys with only a handful of well-chosen questions to avoid survey fatigue and interruptions with AI conversations.",
      category: "User Evaluation"
    },
    {
      term: "AI Psychometrics",
      definition: "Using AI to generate user-level survey items that have good construct validity, enabling seamless survey assessment within conversations.",
      category: "User Evaluation"
    },
    {
      term: "Observer Reports",
      definition: "External perspectives from teachers, parents, or other stakeholders reporting on user changes, validating self-reported and trace data.",
      category: "User Evaluation"
    },
    {
      term: "Objective Performance Data",
      definition: "Tying AI usage to objective outcomes like exam scores, writing assessments, or task completion rates for credible measurement of improvements.",
      category: "User Evaluation"
    },

    // Level 4: Impact Evaluation
    {
      term: "Randomized Controlled Trial (RCT)",
      definition: "Gold standard experimental design where participants are randomly assigned to treatment and control groups to establish causal relationships between interventions and outcomes.",
      category: "Impact Evaluation"
    },
    {
      term: "Quasi-Experimental Design",
      definition: "Alternative evaluation approaches when RCTs are not feasible, including natural experiments, regression discontinuity, and difference-in-differences methods.",
      category: "Impact Evaluation"
    },
    {
      term: "Development Outcomes",
      definition: "Long-term, measurable improvements in areas like health, education, income, or overall well-being that development interventions aim to achieve.",
      category: "Impact Evaluation"
    },
    {
      term: "Cost-Effectiveness Analysis",
      definition: "Assessment of impact relative to cost, enabling comparison with other interventions. Includes cost per outcome achieved and return on investment calculations.",
      category: "Impact Evaluation"
    },
    {
      term: "Theory of Change",
      definition: "Explicit framework defining how an intervention is expected to lead to specific development outcomes, including assumptions and causal pathways.",
      category: "Impact Evaluation"
    },
    {
      term: "Counterfactual",
      definition: "What participants would receive in the absence of the AI tool - could be business-as-usual, non-AI digital tools, or human-delivered services.",
      category: "Impact Evaluation"
    },
    {
      term: "Longitudinal Study",
      definition: "Multi-year follow-up studies tracking outcomes over extended periods to measure sustained impact and long-term development effects.",
      category: "Impact Evaluation"
    },
    {
      term: "Cluster Randomization",
      definition: "Randomization strategy where groups (clusters) rather than individuals are assigned to treatment, useful for reducing spillover effects in AI product evaluations.",
      category: "Impact Evaluation"
    },
    {
      term: "Administrative Data",
      definition: "Objective data from official records (schools, hospitals, government) used for credible measurement of development outcomes that can't be gamed by AI output.",
      category: "Impact Evaluation"
    },
    {
      term: "Contextual Sensitivity",
      definition: "The marginal benefit of an AI product often depends on what other sources of support users currently have access to, varying by geography, institution, or digital access.",
      category: "Impact Evaluation"
    },
    {
      term: "Product Dynamism",
      definition: "AI systems are rarely static - models may be continuously retrained, outputs may adjust as data changes, and product features may evolve during evaluation.",
      category: "Impact Evaluation"
    },
    {
      term: "Model Drift",
      definition: "When AI models are periodically retrained or training datasets are updated, potentially affecting outcome measures and requiring version tracking.",
      category: "Impact Evaluation"
    },
    {
      term: "Version Tagging",
      definition: "Recording exactly which users are exposed to which model versions, maintaining detailed audit trails of model updates for analysis.",
      category: "Impact Evaluation"
    },
    {
      term: "Adaptive Randomization",
      definition: "When AI systems use A/B testing, multi-armed bandits, or contextual bandits during studies, requiring documentation of assignment algorithms.",
      category: "Impact Evaluation"
    },
    {
      term: "Randomized Encouragement Design",
      definition: "Evaluation design where only some users are actively invited or incentivized to engage with a publicly available product, reducing contamination risk.",
      category: "Impact Evaluation"
    },
    {
      term: "Contamination Risk",
      definition: "Risk that treatment effects spread beyond intended recipients in RCTs, particularly relevant for freely accessible AI products designed for scale.",
      category: "Impact Evaluation"
    },
    {
      term: "Stratified Randomization",
      definition: "Randomization strategy that ensures adequate representation of subgroups (e.g., gender, baseline ability, region) for heterogeneous effect analysis.",
      category: "Impact Evaluation"
    },
    {
      term: "Pre-registration",
      definition: "Publishing study design, hypotheses, and analysis plans before conducting research to ensure transparency and prevent selective reporting of results.",
      category: "Impact Evaluation"
    },
    {
      term: "External Validity",
      definition: "The extent to which study results can be generalized to broader populations or different contexts, a core concern for funders considering scale.",
      category: "Impact Evaluation"
    },
    {
      term: "Meta-Analytic Synthesis",
      definition: "Statistical methods to combine results from multiple studies or trials to assess generalizability to broader populations.",
      category: "Impact Evaluation"
    },
    {
      term: "Attrition",
      definition: "Loss of participants during a study, whether through disengagement or lost follow-up, which can undermine study power and interpretability.",
      category: "Impact Evaluation"
    },
    {
      term: "Evaluability",
      definition: "The extent to which a product or intervention can be rigorously evaluated, often requiring early design decisions like holdout groups or embedded randomization.",
      category: "Impact Evaluation"
    },

    // Cross-cutting Terms
    {
      term: "Four-Level Framework",
      definition: "Comprehensive evaluation approach covering Model (Level 1), Product (Level 2), User (Level 3), and Impact (Level 4) assessment to ensure AI tools drive meaningful development outcomes.",
      category: "Framework"
    },
    {
      term: "Cross-Functional Team",
      definition: "Collaborative team structure including AI engineers, product managers, data scientists, behavioral researchers, and domain experts working together across all evaluation levels.",
      category: "Framework"
    },
    {
      term: "Spillover Effects",
      definition: "When treatment effects spread beyond intended recipients, potentially contaminating control groups in evaluations. Particularly relevant for publicly available AI products.",
      category: "Impact Evaluation"
    },
    {
      term: "Independent Evaluator",
      definition: "Third-party evaluator such as an academic partner, research NGO (e.g., J-PAL, IPA), or M&E firm that enhances both technical quality and perceived credibility of evaluations.",
      category: "Framework"
    },
    {
      term: "Digital Interventions",
      definition: "Technology-based solutions that can be precisely deployed to different users with costless collection of engagement outcomes, enabling rapid iterative evaluation cycles.",
      category: "Framework"
    },
    {
      term: "Continuous Evaluation",
      definition: "Ongoing assessment process rather than one-off evaluations, particularly important for AI products that evolve and improve over time.",
      category: "Framework"
    },
    {
      term: "Behavioral Proxies",
      definition: "Indirect measures of user outcomes that can be continuously collected and analyzed in real-time, though requiring validation against intended outcomes.",
      category: "Framework"
    },
    {
      term: "Psychometrically-Sound",
      definition: "Survey instruments with proven reliability and validity for measuring psychological constructs like self-efficacy, motivation, or emotional state.",
      category: "User Evaluation"
    },
    {
      term: "Scalable Qualitative Analysis",
      definition: "Using AI to analyze text in nuanced ways across multiple languages, enabling large-scale qualitative assessment of user conversations and feedback.",
      category: "User Evaluation"
    }
  ];

  const categories = ["All", "Framework", "Model Evaluation", "Product Evaluation", "User Evaluation", "Impact Evaluation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Glossary</h1>
        <p className="text-xl text-black leading-relaxed">
          Key terms and concepts in AI evaluation for development contexts. Use the search and filters 
          to quickly find the definitions you need.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
          <Input
            placeholder="Search terms and definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-black hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredTerms.map((item, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{item.term}</CardTitle>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full shrink-0 ml-4">
                  {item.category}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-black leading-relaxed">{item.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black">No terms found matching your search criteria.</p>
        </div>
      )}

      <div className="mt-16">
        <Card className="border-0 shadow-card bg-gradient-accent">
          <CardHeader>
            <CardTitle className="text-xl text-[#003087]">Suggest a Term</CardTitle>
            <CardDescription className="text-base text-[#003087]">
              Missing a definition? Help us improve this glossary by suggesting new terms 
              relevant to AI evaluation in development contexts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-[#003087]">
              This is a living glossary that grows with community input and evolving best practices.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Glossary;