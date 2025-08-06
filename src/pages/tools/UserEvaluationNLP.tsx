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
  FileCode
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
}

const UserEvaluationNLP = () => {
  const [chatHistory, setChatHistory] = useState("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("sentiment");

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
      // Call the Python analysis through Supabase function
      const { data, error } = await supabase.functions.invoke('nlp-analysis', {
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

      const sentimentScores = data.sentiment_scores || [];
      const topics = data.topics || [];
      const agencyIndicators = {
        selfAgency: data.self_agency || [],
        proxyAgency: data.proxy_agency || [],
        collectiveAgency: data.collective_agency || []
      };

      const summary = `Analysis of ${teacherMessages.length} teacher messages shows:
• Sentiment trend: ${sentimentScores.length > 1 && sentimentScores[0] < sentimentScores[sentimentScores.length - 1] ? 'Increasing' : 'Decreasing'} positivity
• Primary topics: ${topics.slice(0, 3).join(', ')}
• Agency pattern: ${agencyIndicators.selfAgency.length > 0 ? 'Self-agency' : ''} ${agencyIndicators.collectiveAgency.length > 0 ? 'Collective agency' : ''} ${agencyIndicators.proxyAgency.length > 0 ? 'Proxy agency' : ''}`;

      setAnalysisResult({
        sentiment: sentimentScores,
        topics,
        agencyIndicators,
        summary
      });
    } catch (error) {
      console.error('Error running analysis:', error);
      
      // Fallback to simulated analysis if API fails
      const lines = chatHistory.split('\n').filter(line => line.trim());
      const teacherMessages = lines.filter(line => line.startsWith('Teacher:')).map(line => line.replace('Teacher:', '').trim());
      
      // Simple sentiment analysis based on positive/negative words
      const positiveWords = ['good', 'great', 'wonderful', 'perfect', 'excellent', 'love', 'like', 'want', 'think', 'will'];
      const negativeWords = ['no idea', 'not sure', 'struggling', 'difficult', 'hard', 'confused', 'worried'];
      
      const sentimentScores = teacherMessages.map(message => {
        const lowerMessage = message.toLowerCase();
        let score = 0;
        positiveWords.forEach(word => {
          if (lowerMessage.includes(word)) score += 0.2;
        });
        negativeWords.forEach(word => {
          if (lowerMessage.includes(word)) score -= 0.3;
        });
        return Math.min(1, Math.max(-1, score));
      });

      // Simple topic extraction
      const allText = teacherMessages.join(' ').toLowerCase();
      const words = allText.match(/\b\w+\b/g) || [];
      const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them']);
      const filteredWords = words.filter(word => !stopWords.has(word) && word.length > 3);
      const wordCounts = {};
      filteredWords.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      });
      const topics = Object.entries(wordCounts)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 5)
        .map(([word]) => word);

      // Agency indicators
      const agencyIndicators = {
        selfAgency: teacherMessages.filter(msg => 
          msg.toLowerCase().includes('i think') || 
          msg.toLowerCase().includes('i will') || 
          msg.toLowerCase().includes('i want')
        ),
        proxyAgency: teacherMessages.filter(msg => 
          msg.toLowerCase().includes('okay') || 
          msg.toLowerCase().includes('sounds good') || 
          msg.toLowerCase().includes('no idea')
        ),
        collectiveAgency: teacherMessages.filter(msg => 
          msg.toLowerCase().includes('let\'s') || 
          msg.toLowerCase().includes('we can') || 
          msg.toLowerCase().includes('together')
        )
      };

      const summary = `Analysis of ${teacherMessages.length} teacher messages shows:
• Sentiment trend: ${sentimentScores.length > 1 && sentimentScores[0] < sentimentScores[sentimentScores.length - 1] ? 'Increasing' : 'Decreasing'} positivity
• Primary topics: ${topics.slice(0, 3).join(', ')}
• Agency pattern: ${agencyIndicators.selfAgency.length > 0 ? 'Self-agency' : ''} ${agencyIndicators.collectiveAgency.length > 0 ? 'Collective agency' : ''} ${agencyIndicators.proxyAgency.length > 0 ? 'Proxy agency' : ''}`;

      setAnalysisResult({
        sentiment: sentimentScores,
        topics,
        agencyIndicators,
        summary
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
                    variant={activeTab === "sentiment" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("sentiment")}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Sentiment Analysis
                  </Button>
                  <Button
                    variant={activeTab === "topics" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("topics")}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    Topic Modeling
                  </Button>
                  <Button
                    variant={activeTab === "agency" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("agency")}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Agency Indicators
                  </Button>
                </div>

                {/* Sentiment Analysis Results */}
                {activeTab === "sentiment" && (
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Trajectory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Negative</span>
                              <span>Positive</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-4">
                              {analysisResult.sentiment.map((score, index) => (
                                <div
                                  key={index}
                                  className="bg-taf-blue h-4 rounded-full transition-all duration-300"
                                  style={{
                                    width: `${((score + 1) / 2) * 100}%`,
                                    marginTop: `${index * 8}px`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Average Sentiment:</strong> {(analysisResult.sentiment.reduce((a, b) => a + b, 0) / analysisResult.sentiment.length).toFixed(2)}
                          </div>
                          <div>
                            <strong>Trend:</strong> {analysisResult.sentiment[0] < analysisResult.sentiment[analysisResult.sentiment.length - 1] ? 'Increasing' : 'Decreasing'}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Topic Modeling Results */}
                {activeTab === "topics" && (
                  <Card className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Topic Clusters</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {analysisResult.topics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Badge variant="secondary">{index + 1}</Badge>
                            <span className="text-sm">{topic}</span>
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
                    <p className="text-sm whitespace-pre-wrap">{analysisResult.summary}</p>
                  </CardContent>
                                 </Card>
               </div>
             )}

             {/* Python Script Panel */}
             <Card className="border border-gray-200">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <FileCode className="h-5 w-5" />
                   Python Analysis Script
                 </CardTitle>
                 <CardDescription>
                   The actual Python code that performs the NLP analysis
                 </CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                   <pre>{`import re
from textblob import TextBlob
from collections import Counter
import numpy as np

def analyze_chat_history(chat_text):
    """Analyze chat history for sentiment, topics, and agency indicators."""
    
    # Extract teacher messages
    teacher_messages = []
    for line in chat_text.split('\\n'):
        if line.strip().startswith('Teacher:'):
            message = line.replace('Teacher:', '').strip()
            if message:
                teacher_messages.append(message)
    
    # Sentiment Analysis
    sentiment_scores = []
    for message in teacher_messages:
        blob = TextBlob(message)
        sentiment_scores.append(blob.sentiment.polarity)
    
    # Topic Modeling (simplified)
    all_text = ' '.join(teacher_messages).lower()
    words = re.findall(r'\\b\\w+\\b', all_text)
    
    # Remove common stop words
    stop_words = {'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'}
    filtered_words = [word for word in words if word not in stop_words and len(word) > 3]
    
    # Count word frequencies
    word_counts = Counter(filtered_words)
    topics = [word for word, count in word_counts.most_common(5)]
    
    # Agency Indicators
    self_agency_indicators = []
    proxy_agency_indicators = []
    collective_agency_indicators = []
    
    for message in teacher_messages:
        message_lower = message.lower()
        
        # Self-agency indicators
        if any(phrase in message_lower for phrase in ['i think', 'i will', 'i want', 'i need', 'i can', 'i should']):
            self_agency_indicators.append(message)
        
        # Proxy agency indicators
        if any(phrase in message_lower for phrase in ['okay', 'sounds good', 'i\'ll go with', 'i have no idea', 'not sure']):
            proxy_agency_indicators.append(message)
        
        # Collective agency indicators
        if any(phrase in message_lower for phrase in ['let\'s', 'we can', 'what if we', 'together', 'co-create']):
            collective_agency_indicators.append(message)
    
    return {
        'sentiment_scores': sentiment_scores,
        'topics': topics,
        'self_agency': self_agency_indicators,
        'proxy_agency': proxy_agency_indicators,
        'collective_agency': collective_agency_indicators
    }

# Example usage:
# result = analyze_chat_history(chat_history_text)
# print(f"Sentiment scores: {result['sentiment_scores']}")
# print(f"Topics: {result['topics']}")
# print(f"Self-agency indicators: {result['self_agency']}")`}</pre>
                 </div>
               </CardContent>
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