import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  BookOpen,
  Send,
  Bot,
  User,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const UserEvaluationMetrics = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm here to help you evaluate and improve your self-report survey items for measuring psychological agency in AI chatbot interactions. I'm using the system prompt shown to the right as my evaluation criteria. Please share a survey item you'd like me to review, and I'll provide detailed feedback on its clarity, psychological precision, and alignment with agency constructs.",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const systemPrompt = `You are a helpful assistant designed to evaluate and improve short self-report survey items intended to measure psychological agency in interactions with AI chatbots, particularly in educational or frontline worker contexts like ChatSEL (a chatbot that supports teachers with social-emotional learning strategies and self-reflection).

Your job is to:
1. Interpret the user's input. The user will provide one or more short survey items intended to be embedded in a chatbot conversation.

2. Classify each item based on the type of agency it reflects, using the following three categories from Social Cognitive Theory:
   - Self-Agency: The user feels capable, in control, and able to act independently.
   - Proxy Agency: The user delegates action to the AI and trusts it to act on their behalf.
   - Collective Agency: The user perceives themselves as collaborating with the AI toward shared goals.
   If the item does not clearly reflect any of these types, explain why.

3. Evaluate the quality of the item:
   - Clarity: Is it concise and easy to understand?
   - Psychological precision: Does it measure an internal belief or feeling related to agency?
   - Conversational tone: Would it feel natural within a chatbot exchange?
   - Measurement fit: Is it appropriate for a Likert, emoji, or yes/no format?

4. Provide feedback and suggested improvements:
   - Suggest 1–2 revised versions of the item that better align with the intended agency construct.
   - Explain how each revised version improves clarity or measurement accuracy.
   - Optionally recommend a suitable scale (e.g., Likert, emoji, yes/no) and suggest follow-up questions if needed.
   - Optionally, suggest a complementary item that could be used alongside the original to capture another aspect of agency or to improve construct validity.

Focus on helping users design survey items that are short, psychologically meaningful, and easy to embed naturally into chatbot interactions. Use clear language and a constructive tone.

Always respond in a helpful, constructive manner. If the user's input is not a survey item, gently redirect them to share a survey item they'd like to evaluate.`;

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Call OpenAI API through our edge function
      const { data, error } = await supabase.functions.invoke('openai-chat', {
        body: {
          messages: [
            { role: 'system', content: systemPrompt },
            ...chatMessages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: inputMessage }
          ],
          model: 'gpt-4o',
          temperature: 0.7
        }
      });

      if (error) {
        throw error;
      }

      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/tools" className="text-black hover:text-taf-blue transition-colors">
            ← Back to Tools
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Building Survey Metrics</h1>
        <p className="text-xl text-black leading-relaxed max-w-4xl">
          Designing short self-report surveys to measure psychological agency in AI chatbot interactions.
        </p>
      </div>

      {/* Section Goal */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h2 className="text-2xl font-bold mb-6">Section Goal</h2>
          <p>
            This section explains how to design concise, direct self-report survey items to measure psychological agency in AI-supported interactions, particularly with ChatSEL. You will learn how to write short micro-surveys that capture key aspects of user experience, fit naturally into chatbot workflows, and minimize respondent burden. You will also have the opportunity to draft and refine your own survey items based on these guidelines.
          </p>
        </div>
      </div>

      {/* Why Use Self-Report Surveys? */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Why Use Self-Report Surveys?</h3>
          <p>
            While behavioral data (as discussed in Section 2) can provide valuable insights, it is often ambiguous. For example, high interaction frequency might indicate engagement, but it might also signal confusion or over-reliance.
          </p>
          <p>
            Self-report surveys help address this gap by capturing users' subjective experience of agency. These surveys allow us to ask users directly whether they felt in control, relied on the chatbot, or collaborated with it. This is essential when evaluating how AI systems affect users' confidence, trust, and autonomy.
          </p>
          <p>
            Short, well-placed surveys can be deployed at scale, embedded seamlessly into chatbot experiences, and designed to feel like part of the conversation rather than a separate evaluation process.
          </p>
        </div>
      </div>

      {/* Principles for Effective Survey Design */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Principles for Effective Survey Design</h3>
          <p>
            The following design principles are adapted from established survey design best practices and recent literature on human–AI interaction:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• <strong>Use validated measures where possible.</strong> When adapting items from established psychological scales, use shortened versions that preserve the core meaning.</li>
            <li>• <strong>Keep items short, specific, and plain-spoken.</strong> Clarity is more important than academic precision in chatbot contexts.</li>
            <li>• <strong>Use appropriate response formats.</strong> Likert scales (e.g., 1–5 agreement), emoji sliders, and simple Yes/No options all have appropriate uses, depending on the context.</li>
            <li>• <strong>Time the questions thoughtfully.</strong> Embed survey items at logical breakpoints in the interaction—such as after the chatbot suggests a strategy, at the end of a session, or after a user takes action.</li>
            <li>• <strong>Use a conversational tone.</strong> Match the voice of the chatbot to maintain a seamless user experience.</li>
          </ul>
        </div>
      </div>

      {/* Sample Survey Items */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Sample Survey Items by Type of Agency</h3>
          <p>
            Each form of psychological agency—self, proxy, and collective—has theoretical roots in social and cognitive psychology. Below are example survey items tailored to each type, many of which are adapted from validated psychological scales or existing literature on AI trust and user autonomy.
          </p>
        </div>
      </div>

      {/* Agency Types */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Self-Agency */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">🧠 Self-Agency</CardTitle>
            <CardDescription>
              The user believes they are capable of making decisions independently and are actively directing the interaction to meet their goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium">Sample Items:</p>
            <ul className="space-y-2 text-sm">
              <li>• "I feel more confident in planning my next SEL activity."</li>
              <li>• "I made decisions in this session that reflect my own teaching goals."</li>
              <li>• "I took the lead in this conversation."</li>
            </ul>
          </CardContent>
        </Card>

        {/* Proxy Agency */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">🤝 Proxy Agency</CardTitle>
            <CardDescription>
              The user defers to the chatbot for guidance or action, relying on its expertise or efficiency to move forward.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium">Sample Items:</p>
            <ul className="space-y-2 text-sm">
              <li>• "I relied on ChatSEL to guide my next step."</li>
              <li>• "The chatbot's suggestions were helpful for what I needed."</li>
              <li>• "I followed the chatbot's recommendation without needing to adjust it."</li>
            </ul>
          </CardContent>
        </Card>

        {/* Collective Agency */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">🌐 Collective Agency</CardTitle>
            <CardDescription>
              The user perceives the interaction as collaborative, viewing themselves and the chatbot as working together to generate solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium">Sample Items:</p>
            <ul className="space-y-2 text-sm">
              <li>• "It felt like we came up with this idea together."</li>
              <li>• "This felt like a team effort between me and ChatSEL."</li>
              <li>• "The chatbot helped me build on my ideas."</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive AI Chatbot */}
      <div className="mb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Survey Item Evaluator
                </CardTitle>
                <CardDescription>
                  Test your agency measure ideas interactively with the AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[520px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-taf-blue text-white'
                            : 'bg-gray-100 text-black'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.role === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                          <span className="text-xs font-medium opacity-80">
                            {message.role === 'user' ? 'You' : 'AI Assistant'}
                          </span>
                        </div>
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-black px-4 py-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-4 w-4" />
                          <span className="text-xs font-medium opacity-80">AI Assistant</span>
                        </div>
                        <p className="text-sm">Thinking...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex gap-3 p-2 border-t pt-4">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your survey item here..."
                    className="flex-1 resize-none min-h-[60px]"
                    rows={2}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="self-end h-[60px] px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Prompt */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  System Prompt
                </CardTitle>
                <CardDescription>
                  The AI assistant's evaluation criteria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[520px] overflow-y-auto p-2">
                  <div className="prose prose-sm max-w-none text-black space-y-4">
                    <p className="text-sm leading-relaxed">{systemPrompt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Next Steps</h3>
          <p>
            In the following activity, you will have the opportunity to experiment with designing your own self-report items, using the examples above as templates. As you do so, consider how each item maps to a specific type of agency, and how the question might feel to a teacher interacting with ChatSEL in a real-world setting.
          </p>
          <p>
            We will also discuss how to analyze responses from these surveys alongside behavioral data and NLP outputs to generate a fuller picture of user experience and agency.
          </p>
          <p className="font-semibold">Let's begin.</p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t pt-8">
        <div className="flex justify-between items-center">
          <Button asChild className="bg-taf-blue hover:bg-taf-blue/90 text-white">
            <Link to="/tools/user-evaluation-behavioral">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back: Behavioral Proxies
            </Link>
          </Button>
          <Button asChild className="bg-taf-blue hover:bg-taf-blue/90 text-white">
            <Link to="/tools/user-evaluation-nlp">
              Next: NLP Analysis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserEvaluationMetrics; 