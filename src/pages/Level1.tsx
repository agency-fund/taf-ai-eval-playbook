import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Target, AlertTriangle, CheckCircle, BarChart3, Brain, Shield, Zap, Database, Globe, Mic, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "@/components/ExternalLink";

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
      examples: ["Toxicity detection", "Bias identification", "Safety guardrails", "Fairness metrics"]
    },
    {
      title: "Robustness & Reliability",
      description: "Consistency and reliability across different inputs and conditions",
      examples: ["Performance stability", "Error handling", "Edge case testing", "Stress testing"]
    },
    {
      title: "Efficiency & Performance",
      description: "Speed, resource usage, and operational efficiency",
      examples: ["Response time", "Throughput", "Resource consumption", "Cost optimization"]
    }
  ];

  const evaluationMethods = [
    {
      title: "Automatic Benchmarking",
      description: "Compare AI outputs to pre-labeled 'gold standard' answers using metrics like BLEU, ROUGE, or accuracy/F1.",
      whenWorks: "Tasks with clear correct answers (fact recall, data extraction).",
      example: "A health chatbot evaluated against expert-approved medical FAQs.",
      keyPractices: [
        "BLEU (translation): Measures how closely AI-generated translations match human reference translations",
        "ROUGE (summarization): Evaluates how well AI-generated summaries overlap with human-written summaries",
        "Accuracy/F1 (classification): Assesses correctness and balance between precision and recall in classification tasks"
      ]
    },
    {
      title: "Human as a Judge",
      description: "Users and experts manually score or annotate AI outputs using defined criteria.",
      whenWorks: "Tasks requiring subjective judgment or nuanced criteria (accuracy, empathy, completeness).",
      example: "Users and experts rate chatbot responses for cultural sensitivity.",
      keyPractices: [
        "Vibe checks: Informal spot-checks",
        "Systematic annotations: Structured rubric-based reviews",
        "Pairwise preference ranking: Choose between two AI responses",
        "Likert-scale rating: Score outputs on a numeric scale",
        "Open-ended qualitative feedback: Detailed explanations of strengths and issues"
      ]
    },
    {
      title: "LLM as a Judge (with Human in the Loop)",
      description: "A high-performing LLM evaluates another LLM's outputs, calibrated against human judgments.",
      whenWorks: "Large-scale evaluations needing consistency, with human oversight.",
      example: "GPT-4 assesses helpfulness and accuracy of outputs from a smaller educational chatbot.",
      keyPractices: [
        "Prompt engineering: Structured prompts and examples guide evaluation",
        "Calibration: Align LLM judgments with human benchmarks",
        "Iteration: Refine judging model based on discrepancies with human ratings"
      ],
      link: "https://www.confident-ai.com/blog/g-eval-the-definitive-guide"
    }
  ];

  const ragMetrics = [
    {
      metric: "RAG Metrics (Overall)",
      description: "How well an AI model retrieves useful information and uses it to generate accurate, grounded answers.",
      technical: "Composite of sub-metrics including answer relevancy, faithfulness, contextual recall, and contextual precision. Often measured via human annotation or automated scoring pipelines.",
      example: "A Swahili chatbot for farmers combines recent weather data into a useful response about upcoming rainfall."
    },
    {
      metric: "Answer Relevancy",
      description: "Does the AI answer the user's question directly?",
      technical: "% of responses judged (by humans or LLM-as-judge) to be directly relevant to the input query. Can be binary or rated on a Likert scale.",
      example: "Q: 'When should I plant maize?' A: 'Start planting in early March for optimal growth.'"
    },
    {
      metric: "Faithfulness",
      description: "Is the answer based on real information from the retrieved documents, not made up?",
      technical: "% of responses where all claims are verifiable from retrieved context. Can use semantic similarity (e.g., cosine similarity between answer and retrieved chunks) or manual review.",
      example: "AI states: 'Rainfall is 10mm,' exactly matching the retrieved weather bulletin."
    },
    {
      metric: "Contextual Recall",
      description: "Did the model use all the relevant documents it retrieved?",
      technical: "Recall = (Number of relevant retrieved documents actually used in the final answer) ÷ (Total number of relevant retrieved documents). Requires annotation of which retrieved docs are relevant.",
      example: "5 relevant docs retrieved, 4 used in the answer → Recall = 4/5 = 80%."
    },
    {
      metric: "Contextual Precision",
      description: "Did the model avoid using irrelevant documents in its answer?",
      technical: "Precision = (Number of relevant documents used in answer) ÷ (Total number of documents used in answer). May require binary doc-level relevance labels and model attention/usage tracking.",
      example: "4 relevant docs used out of 5 total docs used → Precision = 4/5 = 80%."
    },
    {
      metric: "Contextual Relevancy",
      description: "Did the model synthesize retrieved documents into a coherent and helpful response?",
      technical: "Often measured via human or model scoring of how well the answer integrates content from multiple documents (semantic similarity to ideal response or human preference ranking).",
      example: "The chatbot combines two forecasts into one summary: 'Rain likely today and tomorrow; avoid pesticide spraying during this time.'"
    }
  ];

  const domainSpecificMetrics = [
    {
      name: "HealthBench",
      link: "https://openai.com/index/healthbench/",
      description: "OpenAI's benchmark for real-world health scenarios, co-developed with 262 physicians from 60 countries. Features 5,000 multi-turn conversations graded on accuracy, communication, and context awareness. Open-source and designed to improve clinical judgment alignment in AI models."
    },
    {
      name: "Eka-Eval",
      link: "https://arxiv.org/abs/2507.01853",
      github: "https://github.com/lingo-iitgn/eka-eval",
      description: "Modular evaluation framework supporting 35+ benchmarks, including Indic languages. Covers nine categories (e.g., reasoning, code, tools), supports Hugging Face and proprietary models, long-context tasks, and custom datasets. Scalable for low-resource, multilingual contexts."
    },
    {
      name: "MMLU-Pro",
      link: "https://arxiv.org/abs/2504.10191",
      description: "Enhanced version of MMLU focused on expert-level reasoning across 30 domains. Uses expert-authored, contamination-free questions with nuanced distractors. Evaluates subject mastery and prevents shortcut exploitation."
    },
    {
      name: "Project Vaani",
      link: "https://vaani.iisc.ac.in/",
      description: "Led by IISc and ARTPARK, supported by Google. Building a 150,000+ hour open-source Indian speech dataset across 86 languages and 773 districts. Prioritizes linguistic, gender, and regional diversity; licensed under CC-BY-4.0 and accessible via Bhashini and Hugging Face."
    },
    {
      name: "The AI Risk Repository",
      link: "https://airisk.mit.edu/",
      description: "MIT FutureTech's database cataloging 1,600+ AI risks. Organizes risks using Causal and Domain Taxonomies. Open-source tool for researchers, policymakers, and developers to support audits, policy, and curriculum design."
    },
    {
      name: "Real-Alignment",
      link: "https://arxiv.org/abs/2505.08245",
      description: "AI psychometrics benchmark evaluating model alignment with real, often conflicting human preferences. Uses 8,400 disagreement-based comparisons and tools like Item Response Theory to assess model robustness and value sensitivity."
    },
    {
      name: "Sociotechnical Safety Evaluation",
      link: "https://arxiv.org/abs/2310.11986",
      description: "Framework for risk-aware LLM evaluation. Proposes 15 model risk types and critiques capability-centric evaluations. Calls for more representative, transparent, and harm-aware benchmarks across research, industry, and policy."
    }
  ];

  const technicalTools = [
    {
      name: "Langfuse",
      link: "https://langfuse.com/",
      description: "LLM observability & tracing. Targets AI engineers and LLM developers. Captures all prompts, tool calls, retries, costs and latency via SDK or OpenTelemetry.",
      docs: "https://langfuse.com/docs/tracing?utm_source=chatgpt.com"
    },
    {
      name: "Traceloop",
      link: "https://www.traceloop.com/",
      description: "Open-source LLM observability. For developers and reliability engineers. Provides lightweight OpenTelemetry integration to trace model calls and vector DB interactions within existing monitoring stacks.",
      github: "https://github.com/traceloop/openllmetry?utm_source=chatgpt.com"
    },
    {
      name: "Helicone",
      link: "https://www.helicone.ai/",
      description: "LLM telemetry & analytics. Suited for product & ops teams. Proxies API traffic, logs metadata (cost, latency, quality), offers dashboards, prompt versioning, and light evaluation support.",
      github: "https://github.com/Helicone/helicone?utm_source=chatgpt.com"
    },
    {
      name: "Confident-AI",
      link: "https://www.confident-ai.com/",
      description: "Evaluation & risk guardrails for LLMs. Ideal for enterprises and QA teams. Open-source DeepEval framework plus cloud dashboard for automated testing, guardrails, and datasets.",
      github: "https://github.com/confident-ai/deepeval?utm_source=chatgpt.com"
    },
    {
      name: "Cove",
      link: "https://getcove.com/",
      description: "Context & veracity evaluation. For researchers and alignment engineers. Judge model for checking factual correctness and statement consistency using external evidence.",
      model: "https://huggingface.co/zentropi-ai/cope-a-9b"
    },
    {
      name: "Variance",
      link: "https://www.variance.co/",
      description: "Prompt A/B testing. Used by prompt engineers and PMs. Compares prompt or model variants to detect regressions, tune output in production context (via Slack/Github integration)."
    },
    {
      name: "Promptfoo",
      link: "https://www.promptfoo.dev/",
      description: "Prompt & RAG testing/security. For prompt engineers and security teams. Open-source CLI/UI tool used for red‑teaming, vulnerability scanning, regression tests, prompt diffing.",
      github: "https://github.com/promptfoo/promptfoo?utm_source=chatgpt.com"
    },
    {
      name: "Sarvam AI",
      link: "https://www.sarvam.ai/",
      description: "Indian-language LLMs and voice AI. Aimed at Indian developers and language researchers. Builds multimodal, multilingual models (e.g., Sarvam‑M, Sarvam‑1) tailored for Indian languages and voice-first applications, open-source under IndiaAI."
    },
    {
      name: "Moonshot",
      link: "https://github.com/aiverify-foundation/moonshot?tab=readme-ov-file",
      description: "Open-source Chinese LLMs for coding & reasoning. Targeting enterprise and developer users. Released 'Kimi K2', noted for strong coding and tool integration performance, part of China's open-source AI ecosystem."
    }
  ];

  const useCases = [
    {
      title: "Conversational agents using RAG",
      description: "Chatbots that pull from external databases or documents",
      icon: Database
    },
    {
      title: "Language models for low-resource languages",
      description: "e.g., Swahili, Kinyarwanda, Amharic",
      icon: Languages
    },
    {
      title: "Text-to-speech and speech-to-text models",
      description: "Voice assistants or phone-based learning tools",
      icon: Mic
    },
    {
      title: "Multilingual models",
      description: "Used for translation or multilingual reasoning",
      icon: Globe
    }
  ];

  const caseStudies = [
    {
      title: "Jacaranda Health",
      description: "Pioneering the use of generative AI to transform how underserved mothers in Sub-Saharan Africa access, understand, and act on vital maternal and newborn health information.",
      evaluation: "They recorded a balanced Swahili‑English voice corpus from rural and urban mothers across Kenya, then fine‑tuned OpenAI's Whisper model on that data. Over successive iterations they drove Word Error Rate down from 87 percent to 15 percent, inching toward their 6 percent target that matches top‑tier languages.",
      innovation: "Standard WER simply tallies substitutions, insertions and deletions without regard for meaning. That metric penalizes Swahili's flexible word order and complex verb forms even when the intent is clear. To get a truer picture of how well mothers can follow advice, Jacaranda now measures semantic accuracy using a cosine‑similarity based WER. This approach rewards transcripts that convey the same health guidance, even if they differ in exact phrasing."
    },
    {
      title: "Digital Green",
      description: "Collaborates with public, private, and non-profit organizations to enhance small-scale farmers' access to timely, actionable, and localized agricultural recommendations.",
      evaluation: "To benchmark ASR models in agriculture, Digital Green's used metrics such as WER, CER and MER but had to introduce a custom Agri‑Weighted WER that penalizes errors in key agricultural terms more heavily.",
      innovation: "This evaluation framework helps identify which models are production‑ready and where fine‑tuning is needed. Using weighted metrics, they track progress across Hindi, Telugu and Odiya datasets and tailor improvements to support scalable, farmer‑focused advisory systems."
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
        <h1 className="text-4xl font-bold mb-6">Level 1: Model Evaluation</h1>
        <p className="text-xl text-black leading-relaxed max-w-3xl">
          Technical performance assessment of the AI model itself. This level focuses on ensuring the model
          produces accurate, safe, and reliable outputs before integration into products.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-taf-yellow/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-100 text-red-700 rounded-lg flex items-center justify-center">
                <Cog className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg text-black">
                  Does the AI model produce the desired responses?
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
            AI models, especially large language models (LLMs), do not{" "}
            <ExternalLink href="https://www.sciencenews.org/article/ai-large-language-model-understanding?utm_source=chatgpt.com">
              "understand"
            </ExternalLink>{" "}
            content in the way humans do. Instead, they generate outputs by predicting the next word in a sequence 
            based on statistical patterns in data. Because of this, model responses can appear fluent and convincing 
            while still being inaccurate, biased, irrelevant, or even harmful.
          </p>
          <p>
            This makes structured model evaluation essential. We need to systematically and rigorously assess whether 
            an AI system produces useful, accurate, appropriate, and safe outputs across a range of tasks and user 
            contexts. This is especially critical when AI tools are deployed in sensitive domains like education, 
            health, or agriculture, where misinformation or misalignment can cause real harm.
          </p>
          <p>
            We believe the tools discussed in this section are relevant to the following important use cases of 
            GenAI in the social sector:
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-black">
                  {useCase.description}
                </CardDescription>
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
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Cog className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription className="text-black">AI Engineers, ML Researchers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Design and build evaluation pipelines, run benchmark tests, implement metrics, and iterate on model fine-tuning.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Support</CardTitle>
                  <CardDescription className="text-black">Domain Experts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Contribute to evaluation rubric design, identify harmful or biased outputs, and contextualize AI behavior within real-world use cases.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How do we evaluate AI models?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6 mb-8">
          <p>
            Model evaluation combines automated metrics, human judgment, and LLMs acting as evaluators. Here are 
            common approaches and tools:
          </p>
          <p>
            <em>Reference:{" "}
              <ExternalLink href="https://huggingface.co/blog/clefourrier/llm-evaluation">
                HuggingFace Evaluation Guidebook
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://github.com/huggingface/evaluation-guidebook">
                Github
              </ExternalLink>
            </em>
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {evaluationMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                  <CardTitle className="text-xl">
                    {method.title}
                    {method.link && (
                      <ExternalLink href={method.link} className="ml-2 text-sm">
                        (G-Eval)
                      </ExternalLink>
                    )}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-black">{method.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">When it works well</h4>
                  <p className="text-sm text-black">{method.whenWorks}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example</h4>
                  <p className="text-sm text-black">{method.example}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Practices</h4>
                  <ul className="space-y-1">
                    {method.keyPractices.map((practice, idx) => (
                      <li key={idx} className="text-sm text-black flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                        {practice}
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
        <h2 className="text-3xl font-bold mb-8">Measurement Tools</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6 mb-8">
          <p>
            Evaluating an AI model's performance requires both <strong>generalized metrics</strong> and{" "}
            <strong>context-specific metrics</strong> tailored to the model's specific use case, domain, and user 
            population. While general-purpose tools like{" "}
            <ExternalLink href="https://github.com/confident-ai/deepeval">
              DeepEval
            </ExternalLink>{" "}
            offer a flexible starting point, development-sector applications often demand context-specific metrics 
            that reflect local realities and user needs.
          </p>
          <p>
            We recommend that readers further check this{" "}
            <ExternalLink href="https://www.comet.com/site/blog/llm-evaluation-frameworks/">
              head-to-head comparison
            </ExternalLink>{" "}
            of LLM evaluation frameworks conducted by Comet. For instance, if you are building a RAG chatbot, 
            the following RAGAS metrics would be the most immediately relevant generalized metrics.
          </p>
          <p>
            <em>Reference:{" "}
              <ExternalLink href="https://www.deepeval.com/docs/getting-started">
                DeepEval - The open-source LLM evaluation framework
              </ExternalLink>{" "}
              (see also{" "}
              <ExternalLink href="https://www.confident-ai.com/blog/llm-chatbot-evaluation-explained-top-chatbot-evaluation-metrics-and-testing-techniques">
                this link
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/">
                a list of other RAG metrics
              </ExternalLink>
            </em>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">RAG Metrics</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {ragMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{metric.metric}</CardTitle>
                  <CardDescription className="text-base text-black">
                    {metric.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Definition & Calculation</h4>
                    <p className="text-sm text-black">{metric.technical}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Example</h4>
                    <p className="text-sm text-black">{metric.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Domain-Specific Metrics</h3>
          <div className="prose prose-lg max-w-none text-black space-y-6 mb-8">
            <p>
              Off-the-shelf metrics are not enough for high-stakes, context-specific applications in the global 
              social sector. <strong>Domain-specific metrics</strong> help ensure that model performance is 
              judged not only by general accuracy, but by what matters most in a given domain.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {domainSpecificMetrics.map((tool, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        <ExternalLink href={tool.link}>{tool.name}</ExternalLink>
                        {tool.github && (
                          <ExternalLink href={tool.github} className="ml-2 text-sm">
                            [Github]
                          </ExternalLink>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Technical Tools and Platforms</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {technicalTools.map((tool, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        <ExternalLink href={tool.link}>{tool.name}</ExternalLink>
                        {tool.github && (
                          <ExternalLink href={tool.github} className="ml-2 text-sm">
                            [GitHub]
                          </ExternalLink>
                        )}
                        {tool.docs && (
                          <ExternalLink href={tool.docs} className="ml-2 text-sm">
                            [Docs]
                          </ExternalLink>
                        )}
                        {tool.model && (
                          <ExternalLink href={tool.model} className="ml-2 text-sm">
                            [Model]
                          </ExternalLink>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-black">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6 mb-8">
          <p>
            <em>Expand on this report{" "}
              <ExternalLink href="https://cdh.stanford.edu/generative-ai-health-low-middle-income-countries">
                Generative AI for Health in Low & Middle Income Countries
              </ExternalLink>
            </em>
          </p>
          <p>
            <em>Select 1-3 orgs and describe their evaluation method, metrics, and tech tools, and how they 
            learn from their AI evaluation efforts</em>
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-float transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-base text-black">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Evaluation Approach</h4>
                  <p className="text-sm text-black">{study.evaluation}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-black">{study.innovation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Evaluation Frameworks</h4>
                                  <ul className="space-y-2 text-sm text-black">
                      <li>• <ExternalLink href="https://cdh.stanford.edu/generative-ai-health-low-middle-income-countries">Evaluation framework of PROMPTS at Jacaranda Health</ExternalLink></li>
                      <li>• <ExternalLink href="https://precisiondev.org/evaluating-ai-for-learning-a-framework/">Evaluation framework at Precision Development</ExternalLink></li>
                      <li>• <ExternalLink href="https://docs.google.com/presentation/d/1agCgpDWNVWtbOFhdlDYUpLM3OxyHP5CxyzON_tn61x0/edit?slide=id.p#slide=id.p">[slide]</ExternalLink></li>
                    </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Research Papers</h4>
                                  <ul className="space-y-2 text-sm text-black">
                      <li>• <ExternalLink href="https://arxiv.org/abs/2409.08916">Evaluation of Farmer.Chat at Digital Green</ExternalLink></li>
                      <li>• <ExternalLink href="https://docs.google.com/presentation/d/1mAF1lI8tkTjLLW3SjwrV8mdz4VDkTdog/edit?slide=id.p1#slide=id.p1">Evaluation mMitra at Armman</ExternalLink></li>
                    </ul>
            </div>
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
                <h4 className="font-semibold mb-2 text-[#003087]">Evaluation Design</h4>
                <ul className="space-y-2 text-sm text-[#003087]">
                  <li>• Use appropriate metrics for your specific use case</li>
                  <li>• Combine automated and human evaluation methods</li>
                  <li>• Consider domain-specific requirements</li>
                  <li>• Plan for continuous evaluation and iteration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#003087]">Implementation</h4>
                <ul className="space-y-2 text-sm text-[#003087]">
                  <li>• Start with generalized metrics, then add domain-specific ones</li>
                  <li>• Involve domain experts in evaluation design</li>
                  <li>• Document evaluation processes and results</li>
                  <li>• Monitor for bias and safety issues</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-black">Learn about product evaluation and user engagement</p>
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