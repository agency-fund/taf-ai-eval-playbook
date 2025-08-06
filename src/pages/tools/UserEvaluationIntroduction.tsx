import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const UserEvaluationIntroduction = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Introduction to Agency Measurement</h1>
        <p className="text-xl text-black leading-relaxed max-w-4xl">
          Understanding psychological constructs and agency theory for evaluating AI chatbot interactions.
        </p>
      </div>

      {/* Core Citations */}
      <div className="mb-12">
        <div className="bg-taf-blue/10 border border-taf-blue/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-taf-blue">Core Citations</h3>
          <div className="space-y-3 text-sm">
            <p className="text-black">
              <strong>Chong, T., Yu, T., Keeling, D. I., & de Ruyter, K. (2021).</strong> AI-chatbots on the services frontline addressing the challenges and opportunities of agency. <em>Journal of Retailing and Consumer Services, 63</em>, 102735. 
              <a href="https://www.sciencedirect.com/science/article/pii/S0969698921003015" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline ml-2">
                View Paper →
              </a>
            </p>
            <p className="text-black">
              <strong>Bandura, A. (1989).</strong> Human agency in social cognitive theory. <em>American psychologist, 44(9)</em>, 1175. 
              <a href="https://psycnet.apa.org/record/1990-01275-001" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline ml-2">
                View Paper →
              </a>
            </p>
            <p className="text-black">
              <strong>Bandura, A. (2001).</strong> Social cognitive theory: An agentic perspective. <em>Annual review of psychology, 52(1)</em>, 1-26. 
              <a href="https://pubmed.ncbi.nlm.nih.gov/11148297/" target="_blank" rel="noopener noreferrer" className="text-taf-blue hover:text-taf-blue/80 underline ml-2">
                View Paper →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Welcome to the first section of this workshop. Before we begin analyzing chatbot transcripts, testing NLP tools, or designing surveys, it is essential to pause and clarify our central question: <strong>What are we actually trying to understand or measure?</strong>
          </p>
          <p>
            In this workshop, the focus is on the concept of <strong>agency</strong> – a key psychological construct rooted in Social Cognitive Theory. Agency is central to evaluating the impact of AI chatbots like ChatSEL, especially those designed to support teachers and students in their social and emotional learning (SEL) practices. This section will lay the conceptual foundation necessary for understanding how agency functions in human–AI interactions and why it matters for both research and design.
          </p>
        </div>
      </div>

      {/* What Is a Psychological Construct? */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Is a Psychological Construct?</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            To begin, we need to understand the role of <strong>constructs</strong> in psychological research. A psychological construct is a theoretical concept that captures complex, often internal phenomena, such as stress, motivation, or confidence, that are not directly observable but are critically important to human behavior.
          </p>
          <p>
            For instance, stress is a construct. While we cannot see stress itself, we can observe its effects through behavior and self-report. Similarly, <strong>self-efficacy</strong>, an individual's belief in their own ability to succeed, is a construct that helps explain motivation and performance.
          </p>
          <p>
            <strong>Agency</strong> belongs in this same category. It is an abstract but measurable concept that becomes particularly relevant when we evaluate tools like AI chatbots. These tools are not simply technical systems; they are designed to support decision-making, action, and learning. Therefore, evaluating whether a chatbot is effective means looking beyond usage data to ask deeper questions: Does it help users feel more confident in their work? More autonomous? More connected to others? These are questions of <strong>agency</strong>.
          </p>
          <p>
            Understanding agency as a construct allows us to evaluate outcomes that are subjective but highly meaningful — and to do so in a rigorous, theory-driven way.
          </p>
        </div>
      </div>

      {/* Defining Agency in Social Cognitive Theory */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Defining Agency in Social Cognitive Theory</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Agency is most prominently developed in <strong>Social Cognitive Theory (SCT)</strong>, which was proposed by psychologist Albert Bandura (Bandura, 1989). SCT emphasizes that human behavior is shaped through a dynamic interaction between three factors: personal attributes (such as beliefs, emotions, and motivations), behavioral patterns (what people do), and environmental influences (including technologies and social systems).
          </p>
          <p>
            Within this framework, <strong>agency</strong> refers to a person's capacity to act with intention and exert influence over their circumstances. Individuals are not passive recipients of external inputs; they are active participants in shaping their lives. This concept is critical when thinking about how people interact with AI systems.
          </p>
          <p>
            Bandura identifies <strong>three distinct forms of agency</strong>, each of which applies directly to the way users engage with AI chatbots like ChatSEL that target frontline workers (e.g., teachers):
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Self-agency</h4>
              <p>
                involves exercising control through one's own abilities and intentions. For example, a teacher might use ChatSEL to gather ideas, adapt them, and implement them independently. In this case, the chatbot supports the teacher's decision-making without replacing it.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-2">Proxy agency</h4>
              <p>
                occurs when a person delegates action to another agent — human or non-human — to act on their behalf. A teacher might trust ChatSEL's suggestions without further deliberation, effectively allowing the system to make decisions for them. This reflects reliance and trust, but also a shift in who holds control.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-2">Collective agency</h4>
              <p>
                refers to shared action, where individuals work collaboratively toward common goals. In educational contexts, a teacher may feel they are co-creating strategies with ChatSEL. The interaction feels less like using a tool and more like teaming up with a partner.
              </p>
            </div>
          </div>
          <p>
            Recent research, including work by <strong>Chong et al. (2021)</strong>, argues that AI chatbots should be viewed not just as tools but as social actors. As users form relationships with these systems, they begin to assign them roles such as assistant, coach, or collaborator. This relational framing shapes how users experience agency and, by extension, how effective and empowering the technology feels.
          </p>
        </div>
      </div>

      {/* Why Agency Matters in Evaluating ChatSEL */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Agency Matters in Evaluating ChatSEL</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Understanding agency is not just a theoretical exercise. It is essential to evaluate whether AI systems like ChatSEL are genuinely helping users or possibly undermining their agency.
          </p>
          <p>
            There are <strong>three main reasons</strong> why this construct is central to the evaluation process:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">1. Capturing the Psychological Impact of AI</h4>
              <p>
                Two users might interact with ChatSEL in similar ways, yet have very different experiences. One may feel empowered, while the other feels overwhelmed or dependent. Standard usage data (such as the number of interactions) cannot capture this difference, but <strong>agency-focused evaluation</strong> can.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">2. Assessing Alignment with Design Goals</h4>
              <p>
                ChatSEL is designed to support teachers in SEL practice. To assess whether it is achieving this goal, we must ask whether it is helping users feel more capable, confident, and in control. These are expressions of <strong>self-agency</strong>, <strong>proxy agency</strong>, and <strong>collective agency</strong>. If users see the chatbot as an assistant, we would expect self-agency to increase. If they treat it as a coach, they may rely on it through proxy agency. If they view it as a collaborator, collective agency may be most relevant. Understanding these dynamics helps ensure the chatbot aligns with human-centered goals.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">3. Enabling Rapid Evaluation for Iterative Design</h4>
              <p>
                Chong and colleagues emphasize that how people cognitively and emotionally relate to AI tools provides rapid and actionable insights. Measuring agency helps designers understand whether users feel in control, whether they trust the system appropriately, and whether the technology is fostering a sense of shared responsibility. These insights can guide improvements in both design and implementation, especially in fast-paced educational or community-based settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Comes Next */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Comes Next</h2>
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <p>
            Now that we have established a conceptual understanding of agency and its relevance to AI evaluation, the next sections of the workshop will focus on how to measure agency in practice.
          </p>
          <p>
            Specifically, we will explore:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• <strong>Behavioral indicators</strong> of agency within the chatbot platform, such as depth of engagement and follow-through.</li>
            <li>• <strong>Embedded micro-surveys</strong> that allow users to self-report on their sense of agency in real time.</li>
            <li>• <strong>NLP-based analyses</strong> of chatbot interactions, including sentiment shifts, topic development, and linguistic markers (such as use of personal pronouns or emotional language).</li>
          </ul>
          <p>
            Together, these tools will help us evaluate not just whether ChatSEL is being used, but how it is shaping users' sense of control, trust, and collaboration in their work.
          </p>
          <p className="font-semibold">
            Let's move forward.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t pt-8">
        <div className="flex justify-end">
          <Button asChild className="bg-taf-blue hover:bg-taf-blue/90 text-white">
            <Link to="/tools/user-evaluation-behavioral">
              Next: Behavioral Proxies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserEvaluationIntroduction; 