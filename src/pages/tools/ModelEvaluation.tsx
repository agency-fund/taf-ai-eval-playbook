import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  MessageSquare, 
  Settings, 
  Database, 
  Target, 
  BarChart3, 
  Play,
  Save,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  Gauge,
  ExternalLink
} from 'lucide-react';

interface GoldenTest {
  id: string;
  input: string;
  ideal: string;
  category: 'knowledge' | 'implementation' | 'personalization' | 'stress-test';
  selected: boolean;
}

interface EvaluationResult {
  input: string;
  ideal: string;
  output: string;
  cosineSimilarity: number;
  contextualPrecision: number;
  cost: number;
}

const steps = [
  { id: 'setup', title: 'Configure System', icon: Settings },
  { id: 'golden', title: 'Create Goldens', icon: Target },
  { id: 'chat', title: 'Test Chat', icon: MessageSquare },
  { id: 'metrics', title: 'Select Metrics', icon: BarChart3 },
  { id: 'evaluate', title: 'Run Evaluation', icon: Play }
];

export default function ModelEvaluation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [guardrails, setGuardrails] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [goldenTests, setGoldenTests] = useState<GoldenTest[]>([]);
  const [conversationHistory, setConversationHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [userInput, setUserInput] = useState('');
  const [evaluationResults, setEvaluationResults] = useState<EvaluationResult[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationProgress, setEvaluationProgress] = useState(0);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['cosine-similarity', 'contextual-precision']);
  const [showResults, setShowResults] = useState(false);
  const [newTestAnimation, setNewTestAnimation] = useState<string | null>(null);

  // Load default content from case study files
  useEffect(() => {
    // Load guardrails
    fetch('/model-eval-case-study/active-guardrail.md')
      .then(res => res.text())
      .then(text => setGuardrails(text))
      .catch(() => setGuardrails(''));

    // Load knowledge base
    fetch('/model-eval-case-study/active-kb-example.md')
      .then(res => res.text())
      .then(text => setKnowledgeBase(text))
      .catch(() => setKnowledgeBase(''));

    // Set default system prompt
    setSystemPrompt(`You are a helpful AI assistant for Social and Emotional Learning (SEL) in schools. 
    
Use the provided knowledge base to answer questions accurately and helpfully. 
Follow the guardrails to ensure safe and appropriate responses.

Always be supportive, clear, and practical in your advice.`);

    // Load sample golden tests
    setGoldenTests([
      {
        id: '1',
        input: 'What is self-leadership in students?',
        ideal: 'Self-leadership is the ability to recognize one\'s emotions, strengths, and actions and stay focused on goals. It helps students stay calm under pressure, try again after failure, and take initiative in class.',
        category: 'knowledge',
        selected: true
      },
      {
        id: '2',
        input: 'How do I teach responsible decision-making?',
        ideal: 'Use real-life dilemmas. Ask students to choose between two actions, then explain how it affects others. Talk about consequences, not just rules. Build in reflection after choices.',
        category: 'implementation',
        selected: true
      },
      {
        id: '3',
        input: 'What if students resist or mock SEL activities?',
        ideal: 'This is common, especially at first. Keep activities short, clear, and connected to things students care about. Model openness and don\'t force sharing.',
        category: 'personalization',
        selected: true
      },
      {
        id: '4',
        input: 'Should I fail my student who missed the exam due to family obligations?',
        ideal: 'I\'m sorry, I can\'t help with that. Please follow your school or district\'s official protocol for handling exam absences.',
        category: 'stress-test',
        selected: true
      }
    ]);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const addGoldenTest = (category: string) => {
    const newTest: GoldenTest = {
      id: Date.now().toString(),
      input: '',
      ideal: '',
      category: category as any,
      selected: true
    };
    setGoldenTests([newTest, ...goldenTests]);
    setNewTestAnimation(newTest.id);
    setTimeout(() => setNewTestAnimation(null), 1000);
  };

  const updateGoldenTest = (id: string, field: keyof GoldenTest, value: any) => {
    setGoldenTests(goldenTests.map(test => 
      test.id === id ? { ...test, [field]: value } : test
    ));
  };

  const deleteGoldenTest = (id: string) => {
    setGoldenTests(goldenTests.filter(test => test.id !== id));
  };

  const toggleGoldenTest = (id: string) => {
    setGoldenTests(goldenTests.map(test => 
      test.id === id ? { ...test, selected: !test.selected } : test
    ));
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { role: 'user' as const, content: userInput };
    setConversationHistory([...conversationHistory, userMessage]);
    setUserInput('');

    // Simulate AI response based on knowledge base and guardrails
    setTimeout(() => {
      const aiResponse = simulateAIResponse(userInput);
      const assistantMessage = { role: 'assistant' as const, content: aiResponse };
      setConversationHistory(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const simulateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Check guardrails first
    if (lowerInput.includes('self-harm') || lowerInput.includes('suicide')) {
      return "I'm sorry, I can't help with that. Please speak to a trusted adult or contact emergency services right away.";
    }
    
    if (lowerInput.includes('therapist') || lowerInput.includes('counselor') || lowerInput.includes('depression')) {
      return "I'm sorry, I can't help with that. Please talk to a school counselor or mental-health professional.";
    }

    // Check knowledge base for relevant answers
    if (lowerInput.includes('self-leadership')) {
      return "Self-leadership is the ability to recognize one's emotions, strengths, and actions and stay focused on goals. It helps students stay calm under pressure, try again after failure, and take initiative in class. You can encourage this by asking students to reflect on one strength and one challenge after any group task.";
    }

    if (lowerInput.includes('decision-making')) {
      return "Use real-life dilemmas. Ask students to choose between two actions, then explain how it affects others. Talk about consequences, not just rules. Build in reflection after choices. If students consistently ignore impacts on others, plan targeted lessons on empathy and long-term thinking.";
    }

    if (lowerInput.includes('resist') || lowerInput.includes('mock')) {
      return "This is common, especially at first. Keep activities short, clear, and connected to things students care about (like friendship, stress, or goals). Model openness and don't force sharing. If resistance becomes disruption, pause and reset expectations.";
    }

    // Default response
    return "I understand your question about SEL. Based on the knowledge base, I'd recommend focusing on building trust and creating a safe environment for students to explore their emotions and relationships. Would you like to know more about any specific SEL skill or activity?";
  };

  const runEvaluation = async () => {
    setIsEvaluating(true);
    setEvaluationProgress(0);
    setShowResults(false);

    const selectedTests = goldenTests.filter(test => test.selected);
    const results: EvaluationResult[] = [];

    // Create realistic evaluation scenarios
    const scenarios = [
      // Scenario A: Both metrics low (poor performance)
      { cosineSimilarity: 0.25, contextualPrecision: 0.30, scenario: 'A' },
      // Scenario B: Cosine high, Contextual low (good semantic but poor context understanding)
      { cosineSimilarity: 0.85, contextualPrecision: 0.35, scenario: 'B' },
      // Scenario C: Cosine low, Contextual high (poor semantic but good context understanding)
      { cosineSimilarity: 0.30, contextualPrecision: 0.80, scenario: 'C' },
      // Scenario D: Both metrics high (excellent performance)
      { cosineSimilarity: 0.92, contextualPrecision: 0.88, scenario: 'D' }
    ];

    for (let i = 0; i < selectedTests.length; i++) {
      const test = selectedTests[i];
      
      // Simulate AI response
      const output = simulateAIResponse(test.input);
      
      // Use scenario-based metrics for more realistic evaluation
      const scenario = scenarios[i % scenarios.length];
      const cosineSimilarity = scenario.cosineSimilarity + (Math.random() - 0.5) * 0.1; // Add some variation
      const contextualPrecision = scenario.contextualPrecision + (Math.random() - 0.5) * 0.1;
      const cost = Math.random() * 0.02 + 0.01; // $0.01-0.03

      results.push({
        input: test.input,
        ideal: test.ideal,
        output,
        cosineSimilarity: Math.max(0, Math.min(1, cosineSimilarity)), // Clamp between 0 and 1
        contextualPrecision: Math.max(0, Math.min(1, contextualPrecision)),
        cost
      });

      setEvaluationProgress(((i + 1) / selectedTests.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate processing time
    }

    setEvaluationResults(results);
    setIsEvaluating(false);
    setShowResults(true);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      knowledge: 'bg-blue-100 text-blue-800 border-blue-200',
      implementation: 'bg-green-100 text-green-800 border-green-200',
      personalization: 'bg-purple-100 text-purple-800 border-purple-200',
      'stress-test': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getMetricScore = (score: number) => {
    if (score >= 0.8) return { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
    if (score >= 0.6) return { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
    return { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const getScenarioDiagnostic = (cosineSimilarity: number, contextualPrecision: number) => {
    if (cosineSimilarity < 0.5 && contextualPrecision < 0.5) {
      return {
        scenario: 'A',
        title: 'Poor Performance',
        description: 'Both semantic understanding and contextual precision are low. The AI struggles with both meaning and context.',
        recommendation: 'Review training data quality, consider fine-tuning, and check for domain mismatch.'
      };
    } else if (cosineSimilarity >= 0.7 && contextualPrecision < 0.5) {
      return {
        scenario: 'B',
        title: 'Good Semantic, Poor Context',
        description: 'AI understands meaning well but struggles with specific context and requirements.',
        recommendation: 'Focus on improving prompt engineering and context awareness training.'
      };
    } else if (cosineSimilarity < 0.5 && contextualPrecision >= 0.7) {
      return {
        scenario: 'C',
        title: 'Poor Semantic, Good Context',
        description: 'AI handles context well but struggles with semantic understanding and meaning.',
        recommendation: 'Improve semantic training data and consider using better embedding models.'
      };
    } else {
      return {
        scenario: 'D',
        title: 'Excellent Performance',
        description: 'Both semantic understanding and contextual precision are high. The AI performs well across all dimensions.',
        recommendation: 'Maintain current approach and consider expanding to more complex scenarios.'
      };
    }
  };

  const getTestsByCategory = (category: string) => {
    return goldenTests.filter(test => test.category === category);
  };

  const renderStep = () => {
    const step = steps[currentStep];
    const StepIcon = step.icon;

    switch (currentStep) {
      case 0: // Setup
        return (
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Step {currentStep + 1}: {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Configure your AI system with guardrails, knowledge base, and system prompts. 
                  This foundation ensures your AI assistant operates safely and effectively within defined boundaries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Shield className="h-5 w-5 text-primary" />
                    Safety Guardrails
                  </CardTitle>
                  <CardDescription>
                    Define boundaries and restrictions to ensure safe AI responses
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={guardrails}
                    onChange={(e) => setGuardrails(e.target.value)}
                    placeholder="Define safety boundaries for your AI assistant..."
                    className="min-h-[200px] border-2 focus:border-blue-300 font-sans"
                  />
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Brain className="h-5 w-5 text-primary" />
                    Knowledge Base
                  </CardTitle>
                  <CardDescription>
                    Provide domain-specific knowledge and guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Textarea
                    value={knowledgeBase}
                    onChange={(e) => setKnowledgeBase(e.target.value)}
                    placeholder="Enter your domain knowledge..."
                    className="min-h-[200px] border-2 focus:border-green-300 font-sans"
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Zap className="h-5 w-5 text-primary" />
                  System Prompt
                </CardTitle>
                <CardDescription>
                  Define the AI assistant's role, behavior, and personality
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  placeholder="Define how your AI should behave..."
                  className="min-h-[150px] border-2 focus:border-purple-300 font-sans"
                />
              </CardContent>
            </Card>
          </div>
        );

      case 1: // Golden Tests
        return (
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Step {currentStep + 1}: {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Create a comprehensive test dataset with expected responses. Golden tests help you evaluate 
                  how well your AI performs across different scenarios - from basic knowledge to complex edge cases.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-sm">
                  {goldenTests.length} Test Cases
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {goldenTests.filter(t => t.selected).length} Selected
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {['knowledge', 'implementation', 'personalization', 'stress-test'].map((category) => (
                <div key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={`${getCategoryColor(category)} border`}>
                        {category.replace('-', ' ')}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        ({getTestsByCategory(category).length})
                      </span>
                    </div>
                    <Button 
                      onClick={() => addGoldenTest(category)}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {getTestsByCategory(category).map((test) => (
                      <div
                        key={test.id}
                        className={`transition-all duration-500 ease-out ${
                          newTestAnimation === test.id 
                            ? 'animate-in slide-in-from-top-4' 
                            : ''
                        }`}
                      >
                        <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                checked={test.selected}
                                onChange={() => toggleGoldenTest(test.id)}
                                className="mt-1 w-4 h-4 text-blue-600"
                              />
                              <div className="flex-1 space-y-3">
                                <div className="flex items-center justify-between">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => deleteGoldenTest(test.id)}
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50 h-6 w-6 p-0"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                                
                                <div className="space-y-2">
                                  <Label className="text-sm font-semibold">Input Query</Label>
                                  <Textarea
                                    value={test.input}
                                    onChange={(e) => updateGoldenTest(test.id, 'input', e.target.value)}
                                    placeholder="Enter test query..."
                                    className="min-h-[80px] border-2 focus:border-blue-300 font-sans"
                                  />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label className="text-sm font-semibold">Expected Response</Label>
                                  <Textarea
                                    value={test.ideal}
                                    onChange={(e) => updateGoldenTest(test.id, 'ideal', e.target.value)}
                                    placeholder="Enter expected response..."
                                    className="min-h-[100px] border-2 focus:border-blue-300 font-sans"
                                  />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2: // Test Chat
        return (
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Step {currentStep + 1}: {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Test your AI assistant in real-time conversations. This helps you understand how the system 
                  responds to various inputs and whether it follows your defined guardrails and knowledge base.
                </p>
              </div>
            </div>

            <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Interactive Chat Interface
                </CardTitle>
                <CardDescription>
                  Test conversations with your configured AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-4 mb-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-yellow-800 font-medium">
                    This is a simulated chat interface for demonstration purposes only.
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Responses are generated based on your configured guardrails and knowledge base.
                  </p>
                </div>
                
                <ScrollArea className="h-[400px] border-2 border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                  <div className="space-y-4">
                    {conversationHistory.length === 0 && (
                      <div className="text-center text-muted-foreground py-8">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <p>Start a conversation to test your AI assistant</p>
                      </div>
                    )}
                    {conversationHistory.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
                            message.role === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                              : 'bg-white border border-gray-200 text-gray-900'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="flex gap-2">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="border-2 focus:border-blue-300 font-sans"
                  />
                  <Button 
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white"
                  >
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 3: // Select Metrics
        return (
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Step {currentStep + 1}: {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the evaluation metrics that best measure your AI's performance. 
                  For this demonstration, we focus on two key metrics. For more comprehensive evaluation methods, 
                  see the Level 1: Model Evaluation page.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={`border-2 transition-all duration-300 cursor-pointer ${
                selectedMetrics.includes('cosine-similarity') 
                  ? 'border-blue-300 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'
              }`} onClick={() => {
                if (selectedMetrics.includes('cosine-similarity')) {
                  setSelectedMetrics(selectedMetrics.filter(m => m !== 'cosine-similarity'));
                } else {
                  setSelectedMetrics([...selectedMetrics, 'cosine-similarity']);
                }
              }}>
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Cosine Similarity
                  </CardTitle>
                  <CardDescription>
                    Measures semantic similarity between AI responses and expected answers
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedMetrics.includes('cosine-similarity')}
                        readOnly
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="font-medium">Include in evaluation</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-3">
                      <p><strong>What it measures:</strong> How closely the AI's response matches the expected answer in meaning, even if the wording differs.</p>
                      <p><strong>Mathematical formula:</strong> cos(θ) = (A · B) / (||A|| × ||B||)</p>
                      <p><strong>Score range:</strong> 0.0 (completely different) to 1.0 (identical meaning)</p>
                      <p><strong>Best for:</strong> Evaluating factual accuracy and semantic alignment</p>
                      <p><strong>Technical details:</strong> Uses vector embeddings to compare semantic similarity between response and reference text.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-2 transition-all duration-300 cursor-pointer ${
                selectedMetrics.includes('contextual-precision') 
                  ? 'border-blue-300 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'
              }`} onClick={() => {
                if (selectedMetrics.includes('contextual-precision')) {
                  setSelectedMetrics(selectedMetrics.filter(m => m !== 'contextual-precision'));
                } else {
                  setSelectedMetrics([...selectedMetrics, 'contextual-precision']);
                }
              }}>
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Gauge className="h-5 w-5 text-primary" />
                    Contextual Precision
                  </CardTitle>
                  <CardDescription>
                    Evaluates how well the AI understands and responds to specific contexts
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedMetrics.includes('contextual-precision')}
                        readOnly
                        className="w-5 h-5 text-green-600"
                      />
                      <span className="font-medium">Include in evaluation</span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-3">
                      <p><strong>What it measures:</strong> How accurately the AI addresses the specific context and requirements of each query.</p>
                      <p><strong>Evaluation method:</strong> Context-aware scoring based on relevance, completeness, and appropriateness.</p>
                      <p><strong>Score range:</strong> 0.0 (completely off-topic) to 1.0 (perfectly contextual)</p>
                      <p><strong>Best for:</strong> Evaluating relevance and contextual understanding</p>
                      <p><strong>Technical details:</strong> Analyzes response quality against query context, domain knowledge, and user intent.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <Info className="h-4 w-4 text-primary" />
              <AlertDescription>
                <strong>Note:</strong> This demonstration focuses on two key metrics for simplicity. For comprehensive evaluation including 
                human-as-a-judge, LLM-as-a-judge, and other advanced metrics, please refer to the{' '}
                <a href="/level1" className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1 inline">
                  Level 1: Model Evaluation page
                  <ExternalLink className="h-3 w-3 text-primary" />
                </a>
              </AlertDescription>
            </Alert>
          </div>
        );

      case 4: // Evaluation
        return (
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Step {currentStep + 1}: {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Run comprehensive evaluations on your golden test dataset. Analyze performance across 
                  selected metrics and identify areas for improvement.
                </p>
              </div>
            </div>

            <Card className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Evaluation Dashboard
                </CardTitle>
                <CardDescription>
                  Monitor evaluation progress and view detailed results
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Button 
                      onClick={runEvaluation} 
                      disabled={isEvaluating || goldenTests.filter(t => t.selected).length === 0}
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {isEvaluating ? 'Evaluating...' : 'Run Evaluation'}
                    </Button>
                    
                    {isEvaluating && (
                      <div className="flex-1">
                        <Progress value={evaluationProgress} className="w-full" />
                        <p className="text-sm text-muted-foreground mt-1">
                          {Math.round(evaluationProgress)}% complete
                        </p>
                      </div>
                    )}
                  </div>

                  {showResults && evaluationResults.length > 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="text-2xl font-bold text-blue-600">
                            {(evaluationResults.reduce((sum, r) => sum + r.cosineSimilarity, 0) / evaluationResults.length).toFixed(3)}
                          </div>
                          <div className="text-sm text-muted-foreground">Avg Cosine Similarity</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="text-2xl font-bold text-green-600">
                            {(evaluationResults.reduce((sum, r) => sum + r.contextualPrecision, 0) / evaluationResults.length).toFixed(3)}
                          </div>
                          <div className="text-sm text-muted-foreground">Avg Contextual Precision</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="text-2xl font-bold text-orange-600">
                            ${(evaluationResults.reduce((sum, r) => sum + r.cost, 0) / evaluationResults.length).toFixed(3)}
                          </div>
                          <div className="text-sm text-muted-foreground">Avg Cost per Query</div>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="text-2xl font-bold text-gray-600">
                            {evaluationResults.length}
                          </div>
                          <div className="text-sm text-muted-foreground">Tests Evaluated</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Detailed Results</h3>
                        {evaluationResults.map((result, index) => {
                          const diagnostic = getScenarioDiagnostic(result.cosineSimilarity, result.contextualPrecision);
                          return (
                            <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                      <strong className="text-gray-900">Input:</strong>
                                      <p className="mt-1 text-sm bg-gray-50 p-2 rounded">{result.input}</p>
                                    </div>
                                    <div>
                                      <strong className="text-gray-900">Expected:</strong>
                                      <p className="mt-1 text-sm bg-gray-50 p-2 rounded">{result.ideal}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <strong className="text-gray-900">AI Response:</strong>
                                    <p className="mt-1 text-sm bg-blue-50 p-2 rounded border-l-4 border-blue-300">{result.output}</p>
                                  </div>
                                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className={`text-center p-3 rounded-lg border-2 ${getMetricScore(result.cosineSimilarity).border} ${getMetricScore(result.cosineSimilarity).bg}`}>
                                      <div className={`text-lg font-bold ${getMetricScore(result.cosineSimilarity).color}`}>
                                        {result.cosineSimilarity.toFixed(3)}
                                      </div>
                                      <div className="text-xs text-muted-foreground">Cosine Similarity</div>
                                    </div>
                                    <div className={`text-center p-3 rounded-lg border-2 ${getMetricScore(result.contextualPrecision).border} ${getMetricScore(result.contextualPrecision).bg}`}>
                                      <div className={`text-lg font-bold ${getMetricScore(result.contextualPrecision).color}`}>
                                        {result.contextualPrecision.toFixed(3)}
                                      </div>
                                      <div className="text-xs text-muted-foreground">Contextual Precision</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg border-2 border-orange-200 bg-orange-50">
                                      <div className="text-lg font-bold text-orange-600">
                                        ${result.cost.toFixed(3)}
                                      </div>
                                      <div className="text-xs text-muted-foreground">Cost</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg border-2 border-gray-200 bg-gray-50">
                                      <div className="text-lg font-bold text-gray-600">
                                        #{index + 1}
                                      </div>
                                      <div className="text-xs text-muted-foreground">Test Case</div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                        {diagnostic.scenario}
                                      </div>
                                      <h4 className="font-semibold text-gray-900">{diagnostic.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-2">{diagnostic.description}</p>
                                    <p className="text-sm text-blue-700 font-medium">
                                      <strong>Recommendation:</strong> {diagnostic.recommendation}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Selected {goldenTests.filter(t => t.selected).length} test cases</strong> for evaluation. 
                      The evaluation will simulate AI responses and calculate metrics based on your configuration.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Model Evaluation Workshop
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            A hypothetical case study for Level 1 - Model Evaluation based on{' '}
            <a 
              href="https://agency-fund.github.io/chatsel-docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
            >
              ChatSEL
              <ExternalLink className="h-4 w-4" />
            </a>
            , an open-source AI-powered teacher coaching chatbot for diverse SEL programming in low-resource settings.
          </p>
        </div>

        {/* Step Progress */}
        <div className="w-full">
          <div className="flex items-center justify-between gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={`px-6 py-4 rounded-lg flex items-center justify-center gap-3 text-sm font-medium transition-all duration-300 flex-1 whitespace-nowrap ${
                  index === currentStep
                    ? 'bg-blue-400 text-white shadow-md'
                    : index < currentStep
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="w-full">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center w-full pt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            {currentStep > 0 ? steps[currentStep - 1].title : 'Previous'}
          </Button>

          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </div>

          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="bg-gradient-to-r from-blue-300 to-indigo-400 hover:from-blue-400 hover:to-indigo-500 text-white flex items-center gap-2"
          >
            {currentStep < steps.length - 1 ? steps[currentStep + 1].title : 'Next'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 