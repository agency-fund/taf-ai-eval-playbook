import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Brain, 
  Heart, 
  Activity, 
  Users, 
  Bot, 
  Globe,
  MessageSquare,
  BarChart3,
  Settings,
  BookOpen,
  ChevronDown,
  ChevronRight,
  User,
  UserCheck,
  UserX,
  FileText,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";

const UserEvaluation = () => {
  const [selectedTeacher, setSelectedTeacher] = useState("maria");
  const [activeVersion, setActiveVersion] = useState("A");
  const [selectedMetricType, setSelectedMetricType] = useState("cognitive");
  const [customMetrics, setCustomMetrics] = useState<string[]>([]);

  const teacherProfiles = {
    maria: {
      name: "Maria",
      age: 23,
      role: "ECOS fellow teaching 10th grade",
      engagement: "High ChatSEL engagement",
      agency: "Relies heavily on bot coaching",
      agencyType: "proxy",
      goals: "Improve student engagement with SEL activities",
      usagePattern: "Daily morning check-ins, evening reflections",
      bio: "Maria is a passionate young teacher who finds ChatSEL's structured guidance invaluable for implementing SEL in her classroom."
    },
    luis: {
      name: "Luis",
      age: 35,
      role: "Experienced teacher in rural school",
      engagement: "Low chatbot use",
      agency: "Prefers independent planning",
      agencyType: "self",
      goals: "Develop personalized SEL strategies",
      usagePattern: "Weekly consultations, crisis moments only",
      bio: "Luis has years of teaching experience and prefers to adapt ChatSEL's suggestions to his own teaching style."
    },
    camila: {
      name: "Camila",
      age: 28,
      role: "Teacher coordinator",
      engagement: "Moderate ChatSEL use",
      agency: "Uses both ChatSEL and peer support groups",
      agencyType: "collective",
      goals: "Build collaborative SEL practices across grade levels",
      usagePattern: "Group planning sessions, individual practice",
      bio: "Camila leads teacher collaboration and uses ChatSEL as a resource alongside peer learning groups."
    }
  };

  const chatLogs = {
    maria: [
      {
        session: 1,
        messages: [
          { speaker: "teacher", text: "I'm really struggling with getting my students to open up about their feelings", sentiment: 0.1, complexity: 0.7, followUp: false },
          { speaker: "bot", text: "That's a common challenge! Let's start with creating a safe space. What activities have you tried so far?", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "I tried asking them to share in a circle, but they seemed uncomfortable", sentiment: 0.2, complexity: 0.6, followUp: false },
          { speaker: "bot", text: "Great first step! Sometimes students need more structure. Have you considered using 'feeling cards' or starting with anonymous sharing?", sentiment: 0.9, complexity: 0.8, followUp: false },
          { speaker: "teacher", text: "That's helpful, but what if they still don't participate? I want them to feel safe", sentiment: 0.4, complexity: 0.7, followUp: true }
        ]
      },
      {
        session: 2,
        messages: [
          { speaker: "teacher", text: "The feeling cards worked really well! My students are starting to open up", sentiment: 0.9, complexity: 0.7, followUp: false },
          { speaker: "bot", text: "Excellent progress! How did you introduce the activity? What made it successful?", sentiment: 0.9, complexity: 0.8, followUp: false },
          { speaker: "teacher", text: "I think the key was making it optional and showing them I was participating too", sentiment: 0.8, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "That's a powerful insight! Modeling vulnerability builds trust. What's your next goal?", sentiment: 0.9, complexity: 0.8, followUp: false },
          { speaker: "teacher", text: "I want to help them develop empathy skills. Can you suggest activities for that?", sentiment: 0.8, complexity: 0.8, followUp: true }
        ]
      }
    ],
    luis: [
      {
        session: 1,
        messages: [
          { speaker: "teacher", text: "I need some quick ideas for SEL activities that fit my teaching style", sentiment: 0.5, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "I can help! What's your typical classroom dynamic like?", sentiment: 0.7, complexity: 0.6, followUp: false },
          { speaker: "teacher", text: "I prefer hands-on activities and group work. My students respond well to practical exercises", sentiment: 0.6, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "Perfect! Here are three activity ideas that might work for your style...", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "Thanks, I'll adapt these to my curriculum. Any tips for assessment?", sentiment: 0.7, complexity: 0.8, followUp: true }
        ]
      },
      {
        session: 2,
        messages: [
          { speaker: "teacher", text: "The role-play activity worked great. Students were really engaged", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "bot", text: "That's wonderful! What specific aspects made it successful?", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "I think it was the real-world scenarios I created based on their experiences", sentiment: 0.8, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "Excellent adaptation! How did you handle the debrief?", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "I used your reflection prompts but modified them for my context", sentiment: 0.8, complexity: 0.8, followUp: true }
        ]
      }
    ],
    camila: [
      {
        session: 1,
        messages: [
          { speaker: "teacher", text: "I'm coordinating SEL across three grade levels. How can I get other teachers on board?", sentiment: 0.6, complexity: 0.9, followUp: false },
          { speaker: "bot", text: "That's a great initiative! What's the current level of buy-in from your colleagues?", sentiment: 0.7, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "Mixed reactions. Some are excited, others worry about time constraints", sentiment: 0.5, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "That's typical. Have you considered starting with a pilot program?", sentiment: 0.7, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "Good idea! I could start with one grade level and share results", sentiment: 0.7, complexity: 0.8, followUp: true }
        ]
      },
      {
        session: 2,
        messages: [
          { speaker: "teacher", text: "The pilot was successful! Other teachers are asking to join", sentiment: 0.9, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "Fantastic! What made the pilot so compelling to them?", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "The student feedback was really positive, and they saw concrete improvements", sentiment: 0.9, complexity: 0.8, followUp: false },
          { speaker: "bot", text: "That's powerful evidence! How are you planning to scale this?", sentiment: 0.8, complexity: 0.7, followUp: false },
          { speaker: "teacher", text: "I'm thinking of creating a teacher learning community around SEL", sentiment: 0.8, complexity: 0.9, followUp: true }
        ]
      }
    ]
  };

  const abTestResults = {
    A: {
      sentiment: 0.65,
      queryFrequency: 2.1,
      queryDepth: 0.6
    },
    B: {
      sentiment: 0.82,
      queryFrequency: 3.4,
      queryDepth: 0.8
    }
  };

  const prewrittenMetrics = {
    cognitive: [
      "I feel more confident teaching SEL.",
      "I understood the SEL concept clearly.",
      "I learned a new strategy today."
    ],
    affective: [
      "This session made me feel supported.",
      "I feel motivated to try new approaches.",
      "I feel less overwhelmed about SEL implementation."
    ],
    behavioral: [
      "I plan to try the strategy shared by ChatSEL.",
      "I will incorporate this into my lesson plan.",
      "I will share this with my colleagues."
    ]
  };

  const addCustomMetric = (metric: string) => {
    if (metric.trim() && !customMetrics.includes(metric.trim())) {
      setCustomMetrics([...customMetrics, metric.trim()]);
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
        <h1 className="text-4xl font-bold mb-4">User Evaluation Workshop</h1>
        <p className="text-xl text-black leading-relaxed max-w-4xl">
          A hypothetical case study for Level 3 - User Evaluation based on ChatSEL, an open-source AI-powered teacher coaching chatbot for diverse SEL programming in low-resource settings.
        </p>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="framework" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="framework" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Guiding Framework
          </TabsTrigger>
          <TabsTrigger value="surveys" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Building Survey Metrics
          </TabsTrigger>
          <TabsTrigger value="nlp" className="flex items-center gap-2">
            <BarChart className="w-4 h-4" />
            NLP Analysis
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Guiding Framework */}
        <TabsContent value="framework" className="space-y-16">
          {/* Paper Summary */}
          <div>
            <Card className="border-0 shadow-card bg-taf-yellow/10">
              <CardHeader>
                <CardTitle className="text-2xl">📚 Guiding Framework: Agency in AI-Chatbot Design</CardTitle>
                <CardDescription>
                  Based on "AI-chatbots on the services frontline: addressing the challenges and opportunities of agency" (Chong et al., 2021)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Why this study matters</h4>
                  <p className="text-black">
                    Organisations are racing to deploy chatbots, yet adoption stalls when customers doubt bots' competence or employees see them as threats. 
                    Chong et al. argue the missing ingredient is agency—the sense of capability and control people feel when interacting with human or non-human partners. 
                    Using Social Cognitive Theory, they treat chatbots as "actors" whose design can expand or erode users' self-beliefs and, ultimately, service value.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">A three-level chatbot design framework</h4>
                  <p className="text-black mb-3">
                    The authors synthesise practice and theory into a 3-part taxonomy that determines how much agency a chatbot can confer:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-2 text-left">Design layer</th>
                          <th className="border border-gray-300 p-2 text-left">Key options</th>
                          <th className="border border-gray-300 p-2 text-left">Agency impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Anthropomorphic role</td>
                          <td className="border border-gray-300 p-2">Assistant (task helper), Coach (advisor), Co-worker (full team member)</td>
                          <td className="border border-gray-300 p-2">Boosts self-, proxy-, or collective agency respectively</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Appearance</td>
                          <td className="border border-gray-300 p-2">Human-like vs. robot-like avatars, names, voice</td>
                          <td className="border border-gray-300 p-2">Shapes trust and expectations; can mitigate "uncanny valley" reactions</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Interactivity</td>
                          <td className="border border-gray-300 p-2">Scripted commands → natural-language dialogue; task- vs. social-oriented style</td>
                          <td className="border border-gray-300 p-2">Determines perceived competence and social presence</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Complementarities of agency</h4>
                  <p className="text-black mb-3">
                    Chatbot design only delivers value when its agency complements that of users and human staff.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Assistants</strong> handle routine tasks, extending users' capabilities and strengthening self-agency.</li>
                    <li>• <strong>Coaches</strong> provide guidance; users cede some control, so proxy agency must feel trustworthy—yet over-reliance risks the "proxy-agency dilemma" (dependence that stunts self-development).</li>
                    <li>• <strong>Co-workers</strong> join human employees in blended teams, raising collective agency but also tensions over roles, job security and seamless hand-offs.</li>
                  </ul>
                </div>
                
                <div className="bg-taf-yellow/10 p-4 rounded-lg">
                  <p className="text-black">
                    <strong>Why we use this framework:</strong> Agency provides a powerful lens for understanding how AI chatbots affect user cognition, 
                    affect, and behavior. By examining how different design choices (role, appearance, interactivity) influence users' sense of capability 
                    and control, we can better evaluate whether AI products are truly supporting human development or creating dependency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Intro to Level 3 Evaluation */}
          <div>
            <Card className="border-0 shadow-card bg-taf-yellow/10">
              <CardHeader>
                <CardTitle className="text-2xl">📚 Intro to Level 3 Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold">
                  Level 3 user evaluation asks: Is your AI product positively shaping how users think, feel, or act?
                </p>
                <p>
                  Unlike model accuracy or user retention, Level 3 focuses on early evidence of impact:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Are users gaining knowledge?</li>
                  <li>• Do they feel supported or motivated?</li>
                  <li>• Are they applying what they've learned?</li>
                </ul>
                <p>
                  This section walks through a worked example using <em>ChatSEL</em>, a WhatsApp bot for teachers in rural Colombia. 
                  You'll explore real behavioral proxies, cognitive signals, and affective metrics—and even design your own.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* User Personas */}
          <div>
            <h2 className="text-3xl font-bold mb-8">👥 User Personas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(teacherProfiles).map(([key, teacher]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedTeacher === key 
                      ? "border-taf-blue shadow-lg" 
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedTeacher(key)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        teacher.agencyType === 'self' ? 'bg-blue-100 text-blue-600' :
                        teacher.agencyType === 'proxy' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {teacher.agencyType === 'self' ? <UserCheck className="w-6 h-6" /> :
                         teacher.agencyType === 'proxy' ? <User className="w-6 h-6" /> :
                         <Users className="w-6 h-6" />}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{teacher.name}</CardTitle>
                        <CardDescription>{teacher.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black mb-3">{teacher.engagement}</p>
                    <p className="text-sm text-black mb-3">{teacher.agency}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{teacher.agencyType} agency</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Selected Teacher Detail */}
            <div className="mt-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {teacherProfiles[selectedTeacher as keyof typeof teacherProfiles].name} - Detailed Profile
                  </CardTitle>
                  <CardDescription>
                    {teacherProfiles[selectedTeacher as keyof typeof teacherProfiles].role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Bio</h4>
                    <p className="text-sm text-black">
                      {teacherProfiles[selectedTeacher as keyof typeof teacherProfiles].bio}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Goals</h4>
                    <p className="text-sm text-black">
                      {teacherProfiles[selectedTeacher as keyof typeof teacherProfiles].goals}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Usage Patterns</h4>
                    <p className="text-sm text-black">
                      {teacherProfiles[selectedTeacher as keyof typeof teacherProfiles].usagePattern}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Building Survey Metrics */}
        <TabsContent value="surveys" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">📋 Building Survey Metrics</h2>
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Metric Builder</CardTitle>
                <CardDescription>
                  Design custom evaluation metrics for cognitive, affective, and behavioral outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Button 
                    variant={selectedMetricType === "cognitive" ? "default" : "outline"}
                    onClick={() => setSelectedMetricType("cognitive")}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Cognitive
                  </Button>
                  <Button 
                    variant={selectedMetricType === "affective" ? "default" : "outline"}
                    onClick={() => setSelectedMetricType("affective")}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Affective
                  </Button>
                  <Button 
                    variant={selectedMetricType === "behavioral" ? "default" : "outline"}
                    onClick={() => setSelectedMetricType("behavioral")}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Behavioral
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Prewritten Options</h4>
                  <div className="grid gap-2">
                    {prewrittenMetrics[selectedMetricType as keyof typeof prewrittenMetrics].map((metric, index) => (
                      <Button 
                        key={index}
                        variant="outline"
                        className="justify-start text-left h-auto p-3"
                        onClick={() => addCustomMetric(metric)}
                      >
                        {metric}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Your Custom Metrics</h4>
                  <div className="space-y-2">
                    {customMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <span className="flex-1">{metric}</span>
                        <Badge variant="secondary">{selectedMetricType}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* A/B Test Simulation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">🧪 Simulate A/B Test Results</h2>
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Version Comparison</CardTitle>
                <CardDescription>
                  Compare how different ChatSEL tones affect the three key metrics: sentiment, query frequency, and query depth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Button 
                    variant={activeVersion === "A" ? "default" : "outline"}
                    onClick={() => setActiveVersion("A")}
                  >
                    Version A: Default ChatSEL (Mechanic Tone)
                  </Button>
                  <Button 
                    variant={activeVersion === "B" ? "default" : "outline"}
                    onClick={() => setActiveVersion("B")}
                  >
                    Version B: Default ChatSEL + Human-like Tone
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-taf-blue">
                        {abTestResults[activeVersion as keyof typeof abTestResults].sentiment.toFixed(2)}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Average sentiment (0-1 scale)
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Query Frequency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-taf-blue">
                        {abTestResults[activeVersion as keyof typeof abTestResults].queryFrequency}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Follow-up questions per session
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Query Depth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-taf-blue">
                        {abTestResults[activeVersion as keyof typeof abTestResults].queryDepth.toFixed(1)}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Average complexity score (0-1)
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Why these metrics matter:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Sentiment:</strong> Indicates emotional engagement and satisfaction with the AI interaction</li>
                    <li>• <strong>Query Frequency:</strong> Shows curiosity and willingness to explore topics further</li>
                    <li>• <strong>Query Depth:</strong> Reflects cognitive engagement and knowledge-seeking behavior</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 3: NLP Analysis */}
        <TabsContent value="nlp" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">💬 NLP Analysis</h2>
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>NLP Analysis Overlay</CardTitle>
                <CardDescription>
                  Analyze how different personas interact with ChatSEL using three key metrics: sentiment, query frequency, and query depth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Metrics Definitions:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium mb-1">Sentiment</h5>
                      <p className="text-sm text-gray-600">
                        Calculated using VADER sentiment analysis, scores range from -1 (negative) to +1 (positive)
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium mb-1">Query Frequency</h5>
                      <p className="text-sm text-gray-600">
                        Number of follow-up questions per session, indicating engagement and curiosity
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium mb-1">Query Depth</h5>
                      <p className="text-sm text-gray-600">
                        Average complexity score (0-1) based on vocabulary diversity and sentence structure
                      </p>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="session1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="session1">Session 1 (Initial)</TabsTrigger>
                    <TabsTrigger value="session2">Session 2 (Follow-up)</TabsTrigger>
                  </TabsList>
                  
                  {chatLogs[selectedTeacher as keyof typeof chatLogs].map((session, index) => (
                    <TabsContent key={session.session} value={`session${session.session}`}>
                      <div className="space-y-4">
                        {session.messages.map((message, msgIndex) => (
                          <div 
                            key={msgIndex}
                            className={`p-4 rounded-lg ${
                              message.speaker === 'teacher' 
                                ? 'bg-blue-50 border-l-4 border-blue-400' 
                                : 'bg-gray-50 border-l-4 border-gray-400'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold capitalize">{message.speaker}</span>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs">
                                  Sentiment: {message.sentiment > 0.5 ? '😊' : message.sentiment > 0.3 ? '😐' : '😔'}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Depth: {Math.round(message.complexity * 10)}/10
                                </Badge>
                                {message.followUp && (
                                  <Badge variant="secondary" className="text-xs">
                                    Follow-up
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-black">{message.text}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer Navigation */}
      <div className="border-t pt-8 mt-16">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link to="/level2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Level 2: Engagement Metrics
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/level4">
                Next: Level 4 – Long-Term Development Outcomes
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

export default UserEvaluation; 