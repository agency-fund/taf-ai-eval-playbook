import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Brain, Heart, Activity, BarChart3, MessageSquare, Clock, Target, ExternalLink, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Level3 = () => {
  const evaluationMethods = [
    {
      title: "A/B Testing",
      description: "Feature A vs. Feature B",
      icon: BarChart3
    },
    {
      title: "Multi-armed Bandit",
      description: "Performance-based adaptive allocations",
      icon: Activity
    },
    {
      title: "Holdout Testing",
      description: "e.g., AI vs. non-AI",
      icon: Target
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
        <h1 className="text-4xl font-bold mb-6">Level 3: User Evaluation</h1>
        <p className="text-xl text-black leading-relaxed max-w-3xl">
          Assessment of how users interact with and benefit from the AI-enabled product. This level focuses on 
          understanding the cognitive, affective, and behavioral changes that result from using the AI system.
        </p>
      </div>

      <div className="mb-16">
        <Card className="border-0 shadow-card bg-taf-yellow/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Core Question</CardTitle>
                <CardDescription className="text-lg text-black">
                  Does the product positively support users' thoughts, feelings, and actions?
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
          <ul className="space-y-4">
            <li>
              <strong>Cognitive Outcomes:</strong> Are users gaining new knowledge or correcting misconceptions? Do they demonstrate improved skills or decision-making ability as a result of using the AI?
            </li>
            <li>
              <strong>Affective Outcomes:</strong> How does the product make users feel? Do users report feeling supported, motivated, and capable after interactions, or are there indications of frustration, confusion, or emotional distress?
            </li>
            <li>
              <strong>Behavioral Outcomes:</strong> Are users taking small but meaningful actions (e.g., asking more questions, trying out recommended behaviors) that would predict their longer-term development?
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Who is most involved in this level of evaluation?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-taf-yellow text-taf-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Execute</CardTitle>
                  <CardDescription className="text-black">Behavioral Researchers; Psychologists</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black">
                Apply evaluation methods with the proper measurement tools
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
                Support the design of A/B tests and randomized experiments
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Evaluation method</h2>
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
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Measuring thoughts, feelings, and behaviors calls for a mix of quantitative and qualitative tools. We can categorize these into <strong>on-platform measures</strong>, <strong>self-report surveys</strong>, <strong>NLP-based text analytics</strong>, and <strong>off-platform assessments</strong>:
          </p>
        </div>

        <div className="space-y-8 mt-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">1. On-Platform Behavioral Measures</h3>
            <div className="prose prose-lg max-w-none text-black space-y-6">
              <p>
                Within the app or platform, we can collect rich <strong>telemetry and interaction data</strong> that serve as proxies for cognitive and affective outcomes. We offer a few examples in educational AI below:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Frequency and depth of queries</h4>
                  <p className="mb-3">
                    One key behavioral metric is how often and how deeply users engage via queries. Increased <strong>frequency of interactions</strong> with an educational AI can signal greater curiosity and learning gains. For example, <a href="https://eric.ed.gov/?q=source%3A%22British+Journal+of+Educational+Technology%22&ff1=pubReports+-+Research&ff2=subLearner+Engagement&id=EJ1427270#:~:text=the%20control%20group%20utilized%20rule,regulation%20behaviours" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">a recent study</a> with a chatbot "study coach" found that the <strong>number of chatbot interactions</strong> was a significant positive predictor of improvements in students' self-regulated learning (SRL) behaviors. In practice, as learners become more confident, they tend to ask more questions and explore topics further. The <strong>depth of queries</strong> can also be informative – if over time users progress from basic factual questions to more advanced, specific inquiries, it indicates knowledge growth. <a href="https://moldstud.com/articles/p-essential-benchmarking-metrics-for-evaluating-e-learning-success#:~:text=Analyze%20user%20behavior%20data%20to,learners%20progressing%20to%20subsequent%20sections" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">Learning analytics</a> often track whether learners <strong>move on to advanced content or modules</strong> as a proxy for learning progression. In other words, an upward trend in both the <em>quantity</em> of questions and the <em>complexity</em> or specificity of those questions is generally viewed as evidence that the user's curiosity, confidence, and understanding are increasing over time.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Changes in language complexity</h4>
                  <p className="mb-3">
                    Another measurable outcome is the complexity of the language that users employ. As users learn and gain expertise, their vocabulary, syntax, and overall linguistic sophistication in queries or contributions may become more advanced. Empirical studies support this connection between language complexity and cognitive development. For instance, students tended to write lengthier, more complex sentences when <a href="https://eprints.soton.ac.uk/390338/1/1761_Article_Text_8498_1_10_20160728.pdf#:~:text=scores,The%20negative%20association%20of%20positive" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">engaging in in-depth learning tasks</a>. Thus, if a user's questions and messages show increasing use of advanced terminology or more complex sentence structures over time, it can serve as a <strong>proxy for cognitive gains</strong> and growing mastery of the subject matter.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Follow-up question rate</h4>
                  <p className="mb-3">
                    Follow-up questions – cases where a user asks a new question related to the previous answer – are a strong indicator of sustained engagement. Rather than being satisfied with a single answer, a curious or motivated learner will probe deeper, ask for clarification, or explore related aspects of a topic. Frequent follow-up questions suggest the AI is prompting deeper thinking rather than one-off answers. While direct experimental measures of "follow-up rate" are still emerging, <a href="https://www.cambridge.org/elt/blog/2022/02/22/engine-achievement-role-curiosity-learner-engagement/#:~:text=Curiosity%20is%20an%20important%20condition,classrooms%20to%20increase%20learner%20engagement" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">educational theory</a> emphasizes that students who ask more questions tend to be more actively engaged and curious in their learning. Thus, a rising follow-up question rate can be interpreted as the user maintaining interest and an inquiry mindset. It's important, however, to distinguish <em>productive</em> follow-ups from those caused by confusion; ideally, increasing follow-ups reflect genuine curiosity (e.g. "That makes sense – what about <em>X</em>?") rather than misunderstanding. Some conversational learning systems monitor the <strong>average dialogue turns per query</strong> as an engagement metric – longer conversational exchanges often mean the learner is digging deeper. In summary, a high or growing follow-up question rate is generally a <strong>positive sign of engagement and intellectual curiosity</strong>, aligning with research that links student question-asking to active learning and higher-order thinking.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Session duration & return rate</h4>
                  <p className="mb-3">
                    <strong>Session duration</strong> (how long a user spends in a learning session when not forced) and <strong>return rate</strong> (how frequently users come back for new sessions) are widely used behavioral proxies for engagement and motivation. If learners voluntarily spend more time per session or extend their sessions to continue interacting with the AI, it often indicates they are finding value in the experience. Longer unforced sessions have been <a href="https://moldstud.com/articles/p-essential-benchmarking-metrics-for-evaluating-e-learning-success#:~:text=Incorporate%20tracking%20systems%20that%20monitor,and%20identify%20areas%20needing%20enhancement" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">correlated with</a> better learning outcomes. These metrics are continuously tracked via telemetry, and significant changes (e.g. session length increasing week over week) can reflect growing user investment in learning.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Feature utilization and AI suggestions followed</h4>
                  <p className="mb-3">
                    Modern educational AI platforms often include specific features or recommendations intended to drive learning actions (for example, a chatbot might suggest "Would you like to try a practice quiz on this topic?" or provide links to further reading). <strong>Feature utilization rate</strong> – whether users actually use these suggested tools or follow the AI's advice – can reveal much about user trust and motivation. High follow-through rates on AI suggestions imply that the user not only finds the suggestions useful but also <strong>trusts the AI's guidance</strong> enough to act on it. In <a href="https://knowledge.wharton.upenn.edu/article/why-is-it-so-hard-for-ai-to-win-user-trust/#:~:text=The%20study%E2%80%99s%20findings%20rejected%20the,and%2C%20consequently%2C%20on%20user%20performance" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">a study</a> on AI recommendations and user trust, researchers found that participants' trust in the AI grew when <strong>following the AI's advice led to positive outcomes</strong>, and users who saw good results tended to rely on the AI more over time. In an educational context, if an AI tutor suggests an optional exercise and the learner consistently accepts and completes it, that behavior signals both trust in the AI and a high level of motivation to learn. Conversely, low uptake of recommended activities might indicate either low user trust, low perceived relevance of the suggestions, or lack of motivation.
                  </p>
                </div>
              </div>

              <p>
                These on-platform metrics are essentially <strong>digital trace data</strong> that, when aggregated, provide a picture of user progress. Modern learning analytics and user analytics often use such data to infer engagement and learning. The advantage is that they are <strong>continuously collected</strong> and can often be analyzed in real-time. However, it's important to validate that these behavioral proxies truly reflect the intended outcomes (hence often combined with surveys or assessments).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">2. Short Self-Report Surveys</h3>
            <div className="prose prose-lg max-w-none text-black space-y-6">
              <p>
                Often the most direct way to gauge a user's thoughts and feelings is simply to ask them. Short surveys can capture self-reported changes and subjective experience. When developing such measures in an AI product, a few guidelines are important:
              </p>
              
              <ul className="space-y-4">
                <li>
                  <strong>Use validated scales or items when possible:</strong> Research into existing validated psychological questionnaires (even if shortened) that measure latent constructs like self-efficacy, motivation, or emotional state. For example, educational AI chatbots can measure self-rated knowledge gain ("I learned something new today"), confidence level ("I am more confident in solving these problems on my own"), emotional state ("Using this app made me feel motivated to keep learning"), or behavioral intention ("After chatting with the AI, I plan to try the recommended technique in real life"). Short <strong>psychometrically-sound</strong> surveys can capture such outcomes with surprising depth if designed well.
                </li>
                <li>
                  <strong>Keep it brief and specific:</strong> To avoid survey fatigue and interruptions with AI conversations, only a handful of well-chosen questions should be asked at a time. A mix of multiple-choice rating scales and one open-ended question can yield both quantitative and qualitative insight. For instance, after a chatbot session, a survey might pop up with 3 questions: (1) "How helpful was the advice you received?" (Likert scale), (2) "How did you feel during the conversation?" (perhaps using emoji or scale from frustrated to encouraged), and (3) an optional open text: "What was the most useful part of this interaction?"
                </li>
                <li>
                  <strong>Integrate seamlessly into the chat flow:</strong> The timing and context of asking are key – e.g., right after a significant interaction or at logical breakpoints – so that feedback is tied to a concrete experience. AI assistants themselves could administer micro-surveys conversationally, making the process feel like a natural dialogue. The goal is to make reflection a part of the experience, not an intrusive add-on.
                  <ul className="mt-2 ml-6">
                    <li>There are also exciting recent studies on AI psychometrics where people <a href="https://psychometrics.ai/" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">train GPTs to generate user-level survey items that have good construct validity</a>, so that short survey assessment happens seamlessly within conversations.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">3. NLP and Text Analysis of User-Generated Content</h3>
            <div className="prose prose-lg max-w-none text-black space-y-6">
              <p>
                An exciting addition to the toolkit is using Natural Language Processing (NLP) methods to analyze what users say or write during their interactions. The actual conversation logs or written outputs can be mined for signals of cognitive or emotional change. Approaches include:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Sentiment Analysis</h4>
                  <p>
                    Automatically scoring the sentiment of user utterances over time. Are the words used by the user becoming more positive, or less anxious, as they continue to use the product? A trend from negative to positive tone could indicate growing comfort or satisfaction. Conversely, spikes of negative sentiment might flag frustration at certain points. Tools like fine-tuned transformer models can rate sentiment for each message or session.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Topic Modeling and Keyword Analysis</h4>
                  <p>
                    We can analyze the content of conversations to see what themes emerge. For example, in a learning app, as a user progresses, the topics they discuss might shift from fundamental concepts to more advanced ones – indicating cognitive growth. Topic modeling can track this progression. It can also surface <em>unexpected</em> themes – e.g., users frequently bringing up "exam anxiety" – which might signal an affective need that the product could address.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Linguistic Inquiry and Word Count (LIWC)</h4>
                  <p>
                    <a href="https://www.liwc.app/" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">LIWC</a> is a dictionary-based text analysis tool developed by psychologists that <a href="https://www.researchgate.net/publication/383061194_GPT_is_an_effective_tool_for_multilingual_psychological_text_analysis#:~:text=improved%20across%20successive%20versions%20of,may%20help%20facilitate%20more%20cross" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">maps words to psychological categories</a> (like emotion, social words, cognitive processes). By running user text through such tools, we might quantify, say, the percentage of words indicating <em>analytical thinking</em> or <em>emotional tone</em>. <a href="https://journals.sagepub.com/doi/abs/10.1177/0261927x09351676" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">Decades of research</a> have shown that these linguistic indicators correlate with psychological states. For instance, an increase in <em>first-person plural</em> pronouns ("we, us") might indicate the user feels more socially connected or supported by the AI, whereas a drop in words like "never, not" might indicate reduced negativity.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">LLM-Based Text Analysis</h4>
                  <p>
                    Newer research suggests we can <a href="https://arxiv.org/abs/2309.10771" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">leverage large language models themselves (like GPT)</a> to analyze and score text in more nuanced ways. Remarkably, studies have shown that GPT-4 can accurately detect various psychological constructs in text (such as sentiment, or whether a piece of text contains signs of loneliness, etc.) with reliability often surpassing traditional dictionary methods. This works even across multiple languages, simply by prompting the model (e.g. "On a scale of 1–5, how much self-confidence does this message show?"). Such AI-based analysis could generate a profile of each user's conversation: for example, <em>sentiment trend: positive</em>, <em>confidence expressed: moderate and rising</em>, <em>themes: independence 3/5, belongingness 4/5</em>. These quantified scores from text allow for tracking subtle changes. Of course, using AI to evaluate AI interactions must be done carefully (to avoid bias or over-interpretation), but it opens a path for <strong>scalable qualitative analysis</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">4. Off-Platform Measures (Field studies and external data)</h3>
            <div className="prose prose-lg max-w-none text-black space-y-6">
              <p>
                In some cases, we need to look beyond the app itself to gauge real-world behavior changes. Especially for outcomes that manifest in daily life or over longer periods, we might collect data through:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Longer Surveys or Interviews</h4>
                  <p>
                    Outside the app, more extensive questionnaires can be administered to measure constructs like knowledge (quizzes or tests), psychological well-being scales, or behavioral frequency (e.g. "How often did you practice math outside the app this week?"). Interviews or focus groups can delve into how users' attitudes or habits have changed (e.g. a student might say "I never liked math before, but now I find myself challenging myself with problems for fun").
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Observer Reports</h4>
                  <p>
                    In an educational context, teachers or parents might report on the student's changes ("I noticed my child now approaches homework more confidently"). These external perspectives can validate the self-reported and trace data.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Objective Performance Data</h4>
                  <p>
                    Whenever possible, tie the AI usage to objective outcomes. For example, if an AI writing assistant claims to improve writing skills, have users complete a writing assessment before and after prolonged use and have blind graders evaluate the improvement. Or use exam scores, task completion rates, health indicators, etc., as appropriate. These are more <strong>impact-level metrics</strong>, but measured in a shorter-term, they can serve as strong evidence of user-level change (e.g., an improvement in a practice test score after using the AI tutor for a month). <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486#:~:text=These%20tutors%20comprise%20about%2015,successful%2C%20perform%20worse%20on%20their" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline">A field experiment</a> in a high school illustrated this by integrating an AI tutor into part of the curriculum and then examining students' subsequent test performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        <div className="prose prose-lg max-w-none text-black">
          <p>
            <em>Case studies to be added - examples from organizations demonstrating user evaluation methods, 
            measurement tools, and success determination for cognitive, affective, and behavioral outcomes.</em>
          </p>
          <div className="mt-6 p-4 bg-taf-yellow/10 rounded-lg">
            <h4 className="font-semibold mb-3">Guidance questions to address in case studies:</h4>
            <ul className="space-y-2 text-sm">
              <li>• What is the GenAI use case?</li>
              <li>• How were cognitive, affective, and behavioral outcomes measured?</li>
              <li>• What evaluation methods and tools were used?</li>
              <li>• How was success determined for user-level changes?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ready to explore the next level?</h3>
          <p className="text-black">Learn about impact evaluation and development outcomes</p>
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