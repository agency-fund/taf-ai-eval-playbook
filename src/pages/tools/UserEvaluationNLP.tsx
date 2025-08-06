import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  BookOpen,
  Play,
  Code,
  BarChart3,
  Brain,
  MessageSquare,
  TrendingUp,
  Users,
  FileCode,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AnalysisResult {
  sentiment: number[];
  topics: string[];
  agencyIndicators: {
    selfAgency: string[];
    proxyAgency: string[];
    collectiveAgency: string[];
  };
  summary: string;
  agencyScores?: {
    self: number;
    proxy: number;
    collective: number;
  };
  linePredictions?: [string, string][];
}

const UserEvaluationNLP = () => {
  const [chatHistory, setChatHistory] = useState("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("agency-scores");
  const [isPythonScriptExpanded, setIsPythonScriptExpanded] = useState(false);

  // Sample chat histories for demonstration
  const sampleChatHistories = {
    sample1: {
      title: "Proxy Agency Example",
      description: "Teacher relies heavily on ChatSEL suggestions",
      content: `Teacher: I have no idea what to do for SEL today.
ChatSEL: How about a mindfulness breathing exercise called square breathing?
Teacher: Okay, I'll go with that.
ChatSEL: Great! Here's how to do it: breathe in for 4, hold for 4, breathe out for 4, hold for 4.
Teacher: That sounds good. I think I'll try it next week, but add a drawing element to it.
ChatSEL: Wonderful idea! Drawing can help students visualize their breath.
Teacher: Let's co-create one now!`
    },
    sample2: {
      title: "Self-Agency Example", 
      description: "Teacher shows confidence and independent decision-making",
      content: `Teacher: I've been thinking about doing a gratitude circle, but I'm not sure how to start.
ChatSEL: One option is to have each student share something they're thankful for during morning meeting.
Teacher: That sounds good. I think I'll try it next week, but add a drawing element to it.
ChatSEL: Wonderful idea! Drawing can help students visualize their gratitude.
Teacher: I want to make it more interactive though. Maybe have them draw what they're grateful for?
ChatSEL: That's a great adaptation! You could also have them share their drawings with partners.
Teacher: Perfect! I'll structure it as a gallery walk where they can appreciate each other's work.`
    },
    sample3: {
      title: "Collective Agency Example",
      description: "Teacher collaborates with ChatSEL as a thought partner",
      content: `Teacher: My students are acting out during transitions.
ChatSEL: Want to try a "transition song" to signal changes in activities?
Teacher: That's an interesting idea. What if we make it a student-led chant?
ChatSEL: Great! Leading it can build ownership. Want help structuring it?
Teacher: Yes, let's co-create one now. I'm thinking something with movement too.
ChatSEL: Excellent! We could combine chanting with simple gestures. What movements do you think would work?
Teacher: Maybe clapping patterns or hand signals? Let's design it together.
ChatSEL: Perfect! We can start with a simple pattern and let students add their own variations.`
    }
  };

  const runAnalysis = async () => {
    if (!chatHistory.trim()) return;

    setIsAnalyzing(true);

    try {
      // Call the agency classification through Supabase function
      const { data, error } = await supabase.functions.invoke('agency-classifier', {
        body: {
          chat_history: chatHistory
        }
      });

      if (error) {
        throw error;
      }

      // Process the results
      const teacherMessages = chatHistory.split('\n')
        .filter(line => line.trim().startsWith('Teacher:'))
        .map(line => line.replace('Teacher:', '').trim());

      const agencyResults = data.aggregated_results || {};
      const linePredictions = data.line_predictions || [];

      // Create agency scores for visualization
      const agencyScores = {
        self: agencyResults.self?.share || 0,
        proxy: agencyResults.proxy?.share || 0,
        collective: agencyResults.collective?.share || 0
      };

      // Generate agency indicators from predictions
      const agencyIndicators = {
        selfAgency: linePredictions.filter(([msg, label]) => label === 'self').map(([msg]) => msg),
        proxyAgency: linePredictions.filter(([msg, label]) => label === 'proxy').map(([msg]) => msg),
        collectiveAgency: linePredictions.filter(([msg, label]) => label === 'collective').map(([msg]) => msg)
      };

      // Determine dominant agency type
      const dominantAgency = Object.entries(agencyScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];

      const summary = `Analysis of ${teacherMessages.length} teacher messages shows:
• Dominant Agency: ${dominantAgency.charAt(0).toUpperCase() + dominantAgency.slice(1)} (${(agencyScores[dominantAgency as keyof typeof agencyScores] * 100).toFixed(1)}%)
• Self-Agency: ${(agencyScores.self * 100).toFixed(1)}% (${agencyIndicators.selfAgency.length} messages)
• Proxy Agency: ${(agencyScores.proxy * 100).toFixed(1)}% (${agencyIndicators.proxyAgency.length} messages)
• Collective Agency: ${(agencyScores.collective * 100).toFixed(1)}% (${agencyIndicators.collectiveAgency.length} messages)`;

      setAnalysisResult({
        sentiment: [], // Not used for agency analysis
        topics: [], // Not used for agency analysis
        agencyIndicators,
        summary,
        agencyScores,
        linePredictions
      });
    } catch (error) {
      console.error('Error running analysis:', error);
      
      // Fallback to JavaScript agency analysis
      const lines = chatHistory.split('\n').filter(line => line.trim());
      const teacherMessages = lines.filter(line => line.startsWith('Teacher:')).map(line => line.replace('Teacher:', '').trim());
      
      // Enhanced agency classification with confidence scoring
      const agencyPatterns = {
        self: [
          'i think', 'i will', 'i want', 'i need', 'i can', 'i should', 'i plan', 'i intend',
          'i believe', 'i prefer', 'i chose', 'i adjusted', 'i added', 'i modified', 'i created',
          'i feel confident', 'i can handle', 'i\'m going to', 'i just created', 'i\'ve been'
        ],
        proxy: [
          'i have no idea', 'not sure', 'okay', 'sounds good', 'i\'ll go with', 'i\'ll stick with',
          'i\'ll leave it up to', 'i\'ll rely on', 'i\'ll copy', 'i\'ll adopt', 'i\'ll default to',
          'i\'ll trust', 'whatever you recommend', 'if you say so', 'fine', 'alright', 'sure'
        ],
        collective: [
          'let\'s', 'we can', 'we could', 'we should', 'we might', 'we can work on',
          'can we try', 'how about we', 'what if we', 'why don\'t we', 'shall we',
          'together', 'collaboratively', 'jointly', 'as a team', 'co-create', 'co-design',
          'co-plan', 'co-author', 'partner on', 'iterate together'
        ]
      };

      // Classify each message with confidence scores
      const linePredictions: [string, string][] = teacherMessages.map(message => {
        const lowerMessage = message.toLowerCase();
        let maxScore = 0;
        let bestLabel = 'self';

        Object.entries(agencyPatterns).forEach(([label, patterns]) => {
          const score = patterns.reduce((total, pattern) => {
            return total + (lowerMessage.includes(pattern) ? 1 : 0);
          }, 0);
          
          if (score > maxScore) {
            maxScore = score;
            bestLabel = label;
          }
        });

        return [message, bestLabel] as [string, string];
      });

      // Calculate agency scores
      const totalMessages = teacherMessages.length;
      const agencyCounts = {
        self: linePredictions.filter(([, label]) => label === 'self').length,
        proxy: linePredictions.filter(([, label]) => label === 'proxy').length,
        collective: linePredictions.filter(([, label]) => label === 'collective').length
      };

      const agencyScores = {
        self: agencyCounts.self / totalMessages,
        proxy: agencyCounts.proxy / totalMessages,
        collective: agencyCounts.collective / totalMessages
      };

      // Generate agency indicators
      const agencyIndicators = {
        selfAgency: linePredictions.filter(([msg, label]) => label === 'self').map(([msg]) => msg),
        proxyAgency: linePredictions.filter(([msg, label]) => label === 'proxy').map(([msg]) => msg),
        collectiveAgency: linePredictions.filter(([msg, label]) => label === 'collective').map(([msg]) => msg)
      };

      const dominantAgency = Object.entries(agencyScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];

      const summary = `Analysis of ${teacherMessages.length} teacher messages shows:
• Dominant Agency: ${dominantAgency.charAt(0).toUpperCase() + dominantAgency.slice(1)} (${(agencyScores[dominantAgency as keyof typeof agencyScores] * 100).toFixed(1)}%)
• Self-Agency: ${(agencyScores.self * 100).toFixed(1)}% (${agencyIndicators.selfAgency.length} messages)
• Proxy Agency: ${(agencyScores.proxy * 100).toFixed(1)}% (${agencyIndicators.proxyAgency.length} messages)
• Collective Agency: ${(agencyScores.collective * 100).toFixed(1)}% (${agencyIndicators.collectiveAgency.length} messages)`;

      setAnalysisResult({
        sentiment: [],
        topics: [],
        agencyIndicators,
        summary,
        agencyScores,
        linePredictions
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const loadSampleData = (sampleKey: keyof typeof sampleChatHistories) => {
    setChatHistory(sampleChatHistories[sampleKey].content);
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
        <h1 className="text-4xl font-bold mb-4">NLP Analysis</h1>
        <p className="text-xl text-black leading-relaxed max-w-4xl">
          Using Natural Language Processing to analyze chat histories for signs of teacher agency.
        </p>
      </div>

      {/* Section Goal */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h2 className="text-2xl font-bold mb-6">Section 4: Using Natural Language Processing (NLP) to Analyze Chat Histories for Signs of Teacher Agency</h2>
          <h3 className="text-xl font-bold mb-4">Section Goal</h3>
          <p>
            This section introduces methods for using natural language processing (NLP) to analyze conversation logs between teachers and AI tools like ChatSEL. The goal is to identify psychological agency—such as confidence, reliance, or collaboration—by examining the words users choose, rather than relying solely on behavioral data or survey responses.
          </p>
          <p>
            By analyzing patterns in language, tone, and phrasing, NLP allows us to observe how teachers express agency in real time, as it emerges in the flow of interaction.
          </p>
        </div>
      </div>

      {/* What Can NLP Reveal About Agency? */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">What Can NLP Reveal About Agency?</h3>
          <p>
            Different types of psychological agency often manifest through distinct linguistic signals. While not definitive on their own, these patterns provide valuable indicators:
          </p>
          <ul className="space-y-2 ml-6">
            <li>• <strong>Self-agency</strong> is often reflected in a confident tone, the use of first-person pronouns ("I"), proactive language, and generally positive sentiment.</li>
            <li>• <strong>Proxy agency</strong> may appear through deferential or trust-oriented language (e.g., "I'll just use that," "That sounds good") and minimal elaboration.</li>
            <li>• <strong>Collective agency</strong> is typically marked by plural pronouns ("we"), collaborative phrasing ("can we try this?"), and back-and-forth dialogue where ideas are refined or co-developed.</li>
          </ul>
        </div>
      </div>

      {/* Example Analyses */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Example Analyses</h3>
          
          {/* Example 1: Self-Agency */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">🧠 Example 1: Self-Agency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Chat Excerpt</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Teacher:</strong> I've been thinking about doing a gratitude circle, but I'm not sure how to start.</p>
                  <p><strong>ChatSEL:</strong> One option is to have each student share something they're thankful for during morning meeting.</p>
                  <p><strong>Teacher:</strong> That sounds good. I think I'll try it next week, but add a drawing element to it.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interpretation</h4>
                <p className="text-sm">
                  This interaction shows signs of self-agency. The teacher initiates the idea, uses first-person statements indicating ownership ("I've been thinking," "I'll try it"), and modifies the chatbot's suggestion to suit their context.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Example 2: Proxy Agency */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">🤝 Example 2: Proxy Agency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Chat Excerpt</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Teacher:</strong> I have no idea what to do for SEL today.</p>
                  <p><strong>ChatSEL:</strong> How about a mindfulness breathing exercise called square breathing?</p>
                  <p><strong>Teacher:</strong> Okay, I'll go with that.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interpretation</h4>
                <p className="text-sm">
                  This is an example of proxy agency. The teacher begins with an expression of uncertainty and adopts the chatbot's suggestion without elaboration. The interaction reflects a reliance on the AI to generate direction.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Example 3: Collective Agency */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">🌐 Example 3: Collective Agency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Chat Excerpt</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Teacher:</strong> My students are acting out during transitions.</p>
                  <p><strong>ChatSEL:</strong> Want to try a "transition song" to signal changes in activities?</p>
                  <p><strong>Teacher:</strong> That's an interesting idea. What if we make it a student-led chant?</p>
                  <p><strong>ChatSEL:</strong> Great! Leading it can build ownership. Want help structuring it?</p>
                  <p><strong>Teacher:</strong> Yes, let's co-create one now.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interpretation</h4>
                <p className="text-sm">
                  This example reflects collective agency. The teacher builds on the bot's suggestion, introduces a collaborative idea ("What if we…"), and agrees to continue the creative process together ("Let's co-create one now"). The teacher positions the bot as a thought partner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Applying NLP Methods */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Applying NLP Methods</h3>
          <p>
            NLP techniques allow us to detect linguistic patterns that align with these agency types at scale. Below are three methods that can be used to extract meaningful indicators from chat histories.
          </p>
        </div>
      </div>

      {/* Interactive Analysis Tool */}
      <div className="mb-12">
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Interactive NLP Analysis Tool
            </CardTitle>
            <CardDescription>
              Analyze chat histories for sentiment, topics, and agency indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Chat History Input</h4>
                <div className="flex gap-2 flex-wrap">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => loadSampleData('sample1')}
                  >
                    Load Proxy Agency Sample
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => loadSampleData('sample2')}
                  >
                    Load Self-Agency Sample
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => loadSampleData('sample3')}
                  >
                    Load Collective Agency Sample
                  </Button>
                </div>
              </div>
              <Textarea
                value={chatHistory}
                onChange={(e) => setChatHistory(e.target.value)}
                placeholder="Paste your chat history here (format: Teacher: message, ChatSEL: response)... Maximum 1000 characters."
                className="min-h-[200px] resize-none"
                maxLength={1000}
              />
              <div className="text-xs text-gray-500 text-right">
                {chatHistory.length}/1000 characters
              </div>
              <Button 
                onClick={runAnalysis} 
                disabled={!chatHistory.trim() || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Run Analysis
                  </>
                )}
              </Button>
            </div>

            {/* Results Section */}
            {analysisResult && (
              <div className="space-y-6">
                                 <div className="flex gap-2">
                   <Button
                     variant={activeTab === "agency-scores" ? "default" : "outline"}
                     size="sm"
                     onClick={() => setActiveTab("agency-scores")}
                   >
                     <BarChart3 className="h-4 w-4 mr-2" />
                     Agency Scores
                   </Button>
                   <Button
                     variant={activeTab === "agency" ? "default" : "outline"}
                     size="sm"
                     onClick={() => setActiveTab("agency")}
                   >
                     <Users className="h-4 w-4 mr-2" />
                     Agency Indicators
                   </Button>
                   <Button
                     variant={activeTab === "predictions" ? "default" : "outline"}
                     size="sm"
                     onClick={() => setActiveTab("predictions")}
                   >
                     <MessageSquare className="h-4 w-4 mr-2" />
                     Line Predictions
                   </Button>
                 </div>

                                 {/* Agency Scores Results */}
                 {activeTab === "agency-scores" && analysisResult.agencyScores && (
                   <Card className="border border-gray-200">
                     <CardHeader>
                       <CardTitle className="text-lg">Agency Distribution</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="space-y-6">
                         {/* Agency Score Bars */}
                         <div className="space-y-4">
                           <div className="flex items-center justify-between">
                             <span className="text-sm font-medium">🧠 Self-Agency</span>
                             <span className="text-sm font-bold">{(analysisResult.agencyScores.self * 100).toFixed(1)}%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-3">
                             <div 
                               className="bg-green-500 h-3 rounded-full transition-all duration-300"
                               style={{ width: `${analysisResult.agencyScores.self * 100}%` }}
                             />
                           </div>
                           
                           <div className="flex items-center justify-between">
                             <span className="text-sm font-medium">🤝 Proxy Agency</span>
                             <span className="text-sm font-bold">{(analysisResult.agencyScores.proxy * 100).toFixed(1)}%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-3">
                             <div 
                               className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                               style={{ width: `${analysisResult.agencyScores.proxy * 100}%` }}
                             />
                           </div>
                           
                           <div className="flex items-center justify-between">
                             <span className="text-sm font-medium">🌐 Collective Agency</span>
                             <span className="text-sm font-bold">{(analysisResult.agencyScores.collective * 100).toFixed(1)}%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-3">
                             <div 
                               className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                               style={{ width: `${analysisResult.agencyScores.collective * 100}%` }}
                             />
                           </div>
                         </div>
                         
                         {/* Dominant Agency */}
                         <div className="p-4 bg-gray-50 rounded-lg">
                           <h4 className="font-semibold mb-2">Dominant Agency Type</h4>
                           <p className="text-sm">
                             The teacher primarily exhibits <strong>
                               {Object.entries(analysisResult.agencyScores).reduce((a, b) => a[1] > b[1] ? a : b)[0].charAt(0).toUpperCase() + 
                               Object.entries(analysisResult.agencyScores).reduce((a, b) => a[1] > b[1] ? a : b)[0].slice(1)} Agency
                             </strong> with {(Object.entries(analysisResult.agencyScores).reduce((a, b) => a[1] > b[1] ? a : b)[1] * 100).toFixed(1)}% of their messages.
                           </p>
                           
                           {/* Agency Score Explanations */}
                           <div className="mt-4 space-y-2 text-xs">
                             <h5 className="font-semibold">Why these scores?</h5>
                             {analysisResult.agencyScores.self > 0.3 && (
                               <p><strong>Self-Agency:</strong> High score indicates teacher uses "I think", "I will", "I want" - showing independent decision-making.</p>
                             )}
                             {analysisResult.agencyScores.proxy > 0.3 && (
                               <p><strong>Proxy Agency:</strong> High score shows reliance on ChatSEL with phrases like "okay", "sounds good", "no idea".</p>
                             )}
                             {analysisResult.agencyScores.collective > 0.3 && (
                               <p><strong>Collective Agency:</strong> High score reflects collaborative language like "let's", "we can", "together".</p>
                             )}
                           </div>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 )}

                 {/* Line Predictions Results */}
                 {activeTab === "predictions" && analysisResult.linePredictions && (
                   <Card className="border border-gray-200">
                     <CardHeader>
                       <CardTitle className="text-lg">Message-by-Message Analysis</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="space-y-3">
                         {analysisResult.linePredictions.map(([message, label], index) => (
                           <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                             <Badge 
                               variant="secondary" 
                               className={`${
                                 label === 'self' ? 'bg-green-100 text-green-800' :
                                 label === 'proxy' ? 'bg-blue-100 text-blue-800' :
                                 'bg-purple-100 text-purple-800'
                               }`}
                             >
                               {label.toUpperCase()}
                             </Badge>
                             <span className="text-sm flex-1">{message}</span>
                           </div>
                         ))}
                       </div>
                     </CardContent>
                   </Card>
                 )}

                {/* Agency Indicators Results */}
                {activeTab === "agency" && (
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Agency Indicators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2">🧠 Self-Agency</h5>
                          <div className="space-y-1">
                            {analysisResult.agencyIndicators.selfAgency.map((indicator, index) => (
                              <div key={index} className="text-sm bg-green-50 p-2 rounded">
                                "{indicator}"
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2">🤝 Proxy Agency</h5>
                          <div className="space-y-1">
                            {analysisResult.agencyIndicators.proxyAgency.map((indicator, index) => (
                              <div key={index} className="text-sm bg-blue-50 p-2 rounded">
                                "{indicator}"
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">🌐 Collective Agency</h5>
                          <div className="space-y-1">
                            {analysisResult.agencyIndicators.collectiveAgency.map((indicator, index) => (
                              <div key={index} className="text-sm bg-purple-50 p-2 rounded">
                                "{indicator}"
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                                         {/* Summary */}
                         <Card className="border border-gray-200">
                           <CardHeader>
                             <CardTitle className="text-lg">Analysis Summary</CardTitle>
                           </CardHeader>
                           <CardContent>
                             <div className="space-y-4">
                               {/* Agency Distribution Chart */}
                               <div className="grid grid-cols-3 gap-4">
                                 <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                                   <div className="text-2xl font-bold text-green-600">
                                     {(analysisResult.agencyScores?.self * 100).toFixed(0)}%
                                   </div>
                                   <div className="text-sm font-medium text-green-700">Self-Agency</div>
                                   <div className="text-xs text-green-600 mt-1">
                                     {analysisResult.agencyIndicators.selfAgency.length} messages
                                   </div>
                                 </div>
                                 <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                                   <div className="text-2xl font-bold text-blue-600">
                                     {(analysisResult.agencyScores?.proxy * 100).toFixed(0)}%
                                   </div>
                                   <div className="text-sm font-medium text-blue-700">Proxy Agency</div>
                                   <div className="text-xs text-blue-600 mt-1">
                                     {analysisResult.agencyIndicators.proxyAgency.length} messages
                                   </div>
                                 </div>
                                 <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
                                   <div className="text-2xl font-bold text-purple-600">
                                     {(analysisResult.agencyScores?.collective * 100).toFixed(0)}%
                                   </div>
                                   <div className="text-sm font-medium text-purple-700">Collective Agency</div>
                                   <div className="text-xs text-purple-600 mt-1">
                                     {analysisResult.agencyIndicators.collectiveAgency.length} messages
                                   </div>
                                 </div>
                               </div>
                               
                               {/* Dominant Agency Highlight */}
                               <div className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
                                 <div className="flex items-center gap-3">
                                   <div className="text-2xl">
                                     {Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[0] === 'self' ? '🧠' :
                                      Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[0] === 'proxy' ? '🤝' : '🌐'}
                                   </div>
                                   <div>
                                     <h4 className="font-semibold text-gray-800">
                                       Primary Agency Type: {Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[0].charAt(0).toUpperCase() + 
                                       Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[0].slice(1)} Agency
                                     </h4>
                                     <p className="text-sm text-gray-600">
                                       This teacher primarily exhibits {(Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[1] * 100).toFixed(1)}% {Object.entries(analysisResult.agencyScores || {}).reduce((a, b) => a[1] > b[1] ? a : b)[0]} agency patterns in their interactions.
                                     </p>
                                   </div>
                                 </div>
                               </div>
                               
                               {/* Key Insights */}
                               <div className="space-y-2">
                                 <h5 className="font-semibold text-gray-800">Key Insights:</h5>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                   {analysisResult.agencyScores?.self > 0.3 && (
                                     <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                       <span className="text-sm text-green-700">Shows independent decision-making</span>
                                     </div>
                                   )}
                                   {analysisResult.agencyScores?.proxy > 0.3 && (
                                     <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                       <span className="text-sm text-blue-700">Relies on ChatSEL guidance</span>
                                     </div>
                                   )}
                                   {analysisResult.agencyScores?.collective > 0.3 && (
                                     <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                       <span className="text-sm text-purple-700">Collaborates with the AI system</span>
                                     </div>
                                   )}
                                 </div>
                               </div>
                             </div>
                           </CardContent>
                         </Card>
               </div>
             )}

             {/* Python Script Panel */}
             <Card className="border border-gray-200">
               <CardHeader>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <FileCode className="h-5 w-5" />
                     <div>
                       <CardTitle>Python Analysis Script</CardTitle>
                       <CardDescription>
                         The machine learning code that performs agency classification
                       </CardDescription>
                     </div>
                   </div>
                   <Button
                     variant="ghost"
                     size="sm"
                     onClick={() => setIsPythonScriptExpanded(!isPythonScriptExpanded)}
                     className="p-2"
                   >
                     {isPythonScriptExpanded ? (
                       <ChevronDown className="h-4 w-4" />
                     ) : (
                       <ChevronRight className="h-4 w-4" />
                     )}
                   </Button>
                 </div>
               </CardHeader>
               {isPythonScriptExpanded && (
                 <CardContent>
                   <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-slate-700 shadow-lg">
                     <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-600">
                       <div className="flex gap-1">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <span className="text-xs text-slate-400">agency_classifier.py</span>
                     </div>
                     <pre className="text-slate-300 leading-relaxed">{`import random, re, os, numpy as np, pandas as pd
from sklearn.model_selection import StratifiedKFold, cross_val_predict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

RSEED = 42
random.seed(RSEED)

# --------------------------- 1. TRAINING DATA ---------------------------------
self_agency_examples = [
    "I think I'll try a gratitude circle next week.",
    "I've decided to adapt the activity for my class.",
    "I want to integrate drawing into the breathing exercise.",
    "I can handle the reflection session on my own.",
    "I need to tweak the timing to fit my schedule.",
    "I will experiment with shorter transitions tomorrow.",
    "I feel confident introducing this SEL kernel today.",
    "I plan to pair students for peer feedback.",
    "I've been brainstorming ways to improve engagement.",
    "I intend to track student mood daily.",
    "I'm going to rewrite the lesson to suit my students.",
    "I just created my own version of the chant.",
    "I should record observations after each session.",
    "I've set my goal to increase participation.",
    "I'll modify the prompt to fit remote learning.",
    "I believe this approach suits my classroom needs.",
    "I prefer to lead the activity myself.",
    "I chose to focus on empathy this week.",
    "I adjusted the activity length to 10 minutes.",
    "I added a drawing component for visualization."
]

proxy_agency_examples = [
    "I have no idea what to do for SEL today.",
    "Okay, I'll go with that.",
    "Sure, sounds good.",
    "Alright, I'll just use your suggestion.",
    "I'll stick with whatever you think is best.",
    "Not sure, maybe you can pick something for me.",
    "I'll leave it up to ChatSEL.",
    "Sounds fine, let's do that.",
    "I'm uncertain; please decide for me.",
    "I'll follow the template as is.",
    "That works, I'll use it.",
    "Fine, I'll take that approach.",
    "I'll rely on your guidance.",
    "I'll just copy the example provided.",
    "If you say so, I'll do it.",
    "Okay then, I'll implement it.",
    "I'll adopt the plan unchanged.",
    "Whatever you recommend is fine.",
    "I'll default to your suggestion.",
    "I'll trust your judgment on this."
]

collective_agency_examples = [
    "Let's co-create a transition chant.",
    "Can we try this together?",
    "We could build a student-led routine.",
    "How about we develop a shared checklist?",
    "Let's brainstorm alternatives as a team.",
    "We can refine the idea collaboratively.",
    "What if we involve students in the design?",
    "Let's iterate on the strategy together.",
    "We should prototype this approach together.",
    "Can we work on a script jointly?",
    "Why don't we draft it together?",
    "We might adapt the exercise collectively.",
    "Could we co-design a reflection prompt?",
    "Let's test this and revise as a team.",
    "We can co-plan the next lesson.",
    "Together, we can enhance engagement.",
    "Shall we fine-tune the activity collaboratively?",
    "Let's jointly create rubrics for assessment.",
    "We could co-author the classroom rules.",
    "Let's partner on setting learning goals."
]

texts = self_agency_examples + proxy_agency_examples + collective_agency_examples
labels = (["self"] * len(self_agency_examples) +
          ["proxy"] * len(proxy_agency_examples) +
          ["collective"] * len(collective_agency_examples))

# --------------------------- 2. MODEL PIPELINE --------------------------------
pipe = Pipeline([
    ("tfidf", TfidfVectorizer(lowercase=True,
                              ngram_range=(1, 2),
                              stop_words="english",
                              min_df=1)),
    ("clf", LogisticRegression(max_iter=1000,
                              class_weight="balanced",
                              multi_class="ovr"))
])

# --------------------------- 3. TRAIN MODEL ----------------------------------
pipe.fit(texts, labels)

# --------------------------- 4. ANALYSIS FUNCTIONS ---------------------------
teacher_line_re = re.compile(r"Teacher:\\s*(.*)", flags=re.I)

def extract_teacher_lines(chat: str):
    """Return list of teacher utterances from raw ChatSEL log."""
    return [m.group(1).strip() for m in teacher_line_re.finditer(chat)]

def analyze_chat_agency(chat: str):
    """Return (aggregate_stats, line-level list[(msg, label)])."""
    lines = extract_teacher_lines(chat)
    if not lines:
        return {"error": "No teacher messages found."}, []

    line_preds = pipe.predict(lines)
    line_probs = pipe.predict_proba(lines)

    # Aggregate counts + mean confidence per class
    agg = {"total_teacher_msgs": len(lines)}
    for class_idx, class_name in enumerate(pipe.classes_):
        mask = line_preds == class_name
        agg[class_name] = {
            "count": int(mask.sum()),
            "share": float(mask.mean()),  # proportion of teacher lines
            "avg_confidence": float(line_probs[mask, class_idx].mean() if mask.any() else 0.)
        }

    return agg, list(zip(lines, line_preds))

# --------------------------- 5. EXAMPLE USAGE --------------------------------
if __name__ == "__main__":
    demo_chat = """
    Teacher: I have no idea what to do for SEL today.
    ChatSEL: How about a mindfulness breathing exercise?
    Teacher: Okay, I'll go with that.
    ChatSEL: Great! Here's how to do it...
    Teacher: That sounds good. I think I'll try it next week.
    ChatSEL: Wonderful idea!
    Teacher: Let's co-create one now!
    """

    agg, lines = analyze_chat_agency(demo_chat)
    print("=== Aggregated Results ===")
    for k, v in agg.items():
        print(f"{k}: {v}")
    print("\\n=== Line-level Predictions ===")
    for msg, lab in lines:
        print(f"[{lab.upper():9}] {msg}")`}</pre>
                   </div>
                 </CardContent>
               )}
             </Card>
           </CardContent>
         </Card>
       </div>

      {/* Final Takeaway */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h3 className="text-xl font-bold mb-4">Final Takeaway</h3>
          <p>
            NLP allows researchers and designers to move beyond surface-level metrics and directly examine how users express psychological agency through language. While these methods are not definitive on their own, they offer a valuable complement to behavioral data and surveys. By combining these approaches, we can develop a more nuanced and real-time understanding of how tools like ChatSEL shape—and respond to—teacher agency in practice.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t pt-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link to="/tools/user-evaluation-metrics">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back: Building Survey Metrics
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/level4">
                Next: Level 4 - Impact Evaluation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/framework">
                <BookOpen className="w-4 h-4 mr-2" />
                Full AI Evaluation Playbook
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Chong et al. (2021)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEvaluationNLP; 