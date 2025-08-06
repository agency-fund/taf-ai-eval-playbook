import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserEvaluationBehavioral = () => {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const behavioralIndicators = {
    selfAgency: [
      {
        id: "query-frequency",
        title: "Query frequency and depth",
        pros: [
          "High frequency of queries over time may reflect sustained engagement and proactive exploration.",
          "Increasing question complexity, from general to specific, may indicate learning, goal orientation, and growing confidence."
        ],
        cons: [
          "High frequency alone may also signal confusion or frustration, especially if queries are repetitive or vague.",
          "Query depth may be constrained by time, literacy, or familiarity with the tool, not just agency."
        ]
      },
      {
        id: "language-complexity",
        title: "Language complexity",
        pros: [
          "More precise and elaborated language may suggest cognitive engagement and self-efficacy."
        ],
        cons: [
          "Language complexity is not always a reliable proxy, as it is influenced by users' communication style, literacy level, and familiarity with formal written language.",
          "Detecting shifts in complexity requires NLP analysis; raw logs alone will not reveal these patterns."
        ]
      },
      {
        id: "session-duration",
        title: "Session duration and return visits",
        pros: [
          "Longer sessions and voluntary return visits may reflect purposeful, motivated use.",
          "Return visits following real-world implementation may indicate intentional reflection and continued goal pursuit."
        ],
        cons: [
          "Long sessions may also result from confusion, friction, or task overload.",
          "Return visits could reflect habit rather than agency, depending on context."
        ]
      },
      {
        id: "selective-feature",
        title: "Selective feature use",
        pros: [
          "Choosing to engage with certain suggestions while skipping or modifying others may signal discernment and user control."
        ],
        cons: [
          "Avoidance of features may also reflect lack of awareness, usability issues, or technical barriers—not necessarily agency."
        ]
      }
    ],
    proxyAgency: [
      {
        id: "high-acceptance",
        title: "High acceptance of suggestions",
        pros: [
          "Frequent acceptance of chatbot-generated strategies without user edits may indicate deference and trust in the tool."
        ],
        cons: [
          "It is difficult to distinguish between active trust and passive resignation—users might accept suggestions due to confidence or simply to move on."
        ]
      },
      {
        id: "low-depth-high-frequency",
        title: "Low-depth but high-frequency queries",
        pros: [
          "Repeated, brief prompts (e.g., \"help,\" \"ideas\") may suggest dependence on the chatbot to initiate or lead the interaction."
        ],
        cons: [
          "This behavior could also reflect early-stage experimentation or unfamiliarity with the platform, rather than a stable pattern of proxy agency."
        ]
      },
      {
        id: "rapid-implementation",
        title: "Rapid implementation of suggestions",
        pros: [
          "A short time lag between receiving and acting on a suggestion may indicate automatic acceptance of the chatbot's advice."
        ],
        cons: [
          "Without contextual data, we cannot know whether the teacher critically evaluated the suggestion or simply clicked through out of urgency."
        ]
      }
    ],
    collectiveAgency: [
      {
        id: "conversational-co-creation",
        title: "Conversational co-creation patterns",
        pros: [
          "Use of collaborative language (e.g., \"we,\" \"let's try,\" \"can we tweak this?\") suggests that the teacher sees the chatbot as a partner in thinking."
        ],
        cons: [
          "Identifying these patterns requires NLP or manual coding. Behavioral logs alone won't distinguish between collaborative intent and superficial politeness."
        ]
      },
      {
        id: "follow-up-questions",
        title: "High rate of follow-up questions",
        pros: [
          "Follow-up queries that refine or extend earlier ideas may reflect a desire to iterate with the chatbot in a shared process."
        ],
        cons: [
          "Follow-up questions might also result from unclear responses or user confusion, rather than a sense of collaboration."
        ]
      },
      {
        id: "return-visits-application",
        title: "Return visits after real-world application",
        pros: [
          "Coming back to ChatSEL to report on or build from prior experiences (e.g., \"That routine worked—what's next?\") suggests the user sees the chatbot as a continuous partner in practice."
        ],
        cons: [
          "These behaviors are rare and hard to track unless usage data is linked to offline implementation events, which may not be available."
        ]
      }
    ]
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
        <h1 className="text-4xl font-bold mb-4">On-Platform Behavioral Proxies</h1>
        <p className="text-xl text-black leading-relaxed max-w-4xl">
          Exploring how observable behavior in ChatSEL can indicate different forms of psychological agency.
        </p>
      </div>

      {/* Section Goal */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h2 className="text-2xl font-bold mb-6">Section Goal</h2>
          <p>
            This section explores how teachers' observable behavior while using ChatSEL, such as the frequency of queries, the depth of questions, or how they respond to suggestions, may serve as indicators of different forms of psychological agency. We focus on three types of agency: self-agency, proxy agency, and collective agency. For each type, we identify potential behavioral proxies and discuss what these digital traces can and cannot tell us about a user's mindset or experience.
          </p>
        </div>
      </div>

      {/* Agency Types Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="self-agency" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="self-agency" className="text-sm">
              🧠 Self-Agency
            </TabsTrigger>
            <TabsTrigger value="proxy-agency" className="text-sm">
              🤝 Proxy Agency
            </TabsTrigger>
            <TabsTrigger value="collective-agency" className="text-sm">
              🌐 Collective Agency
            </TabsTrigger>
          </TabsList>

          {/* Self-Agency Tab */}
          <TabsContent value="self-agency" className="mt-6">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-black">
                <h3 className="text-xl font-bold mb-4">Self-Agency</h3>
                <p>
                  Self-agency reflects a user's intention, initiative, and autonomy in using ChatSEL to pursue their own goals. This form of agency is associated with curiosity, discernment, and independent adaptation of chatbot suggestions.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-4">Potential behavioral indicators:</h4>
              </div>
              
              <div className="space-y-4">
                {behavioralIndicators.selfAgency.map((indicator) => (
                  <Card key={indicator.id} className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{indicator.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Pros */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-pros`)}
                          className="flex items-center gap-2 p-0 h-auto text-green-600 hover:text-green-700"
                        >
                          {expandedCards[`${indicator.id}-pros`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-semibold">Pros</span>
                        </Button>
                        {expandedCards[`${indicator.id}-pros`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.pros.map((pro, index) => (
                              <p key={index} className="text-green-700">{pro}</p>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Cons */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-cons`)}
                          className="flex items-center gap-2 p-0 h-auto text-red-600 hover:text-red-700"
                        >
                          {expandedCards[`${indicator.id}-cons`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <XCircle className="h-4 w-4" />
                          <span className="font-semibold">Cons</span>
                        </Button>
                        {expandedCards[`${indicator.id}-cons`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.cons.map((con, index) => (
                              <p key={index} className="text-red-700">{con}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Proxy Agency Tab */}
          <TabsContent value="proxy-agency" className="mt-6">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-black">
                <h3 className="text-xl font-bold mb-4">Proxy Agency</h3>
                <p>
                  Proxy agency occurs when users rely on ChatSEL to act or decide on their behalf, often due to time constraints, limited expertise, or low confidence. In this mode, the chatbot becomes a trusted (or default) decision-maker.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-4">Potential behavioral indicators:</h4>
              </div>
              
              <div className="space-y-4">
                {behavioralIndicators.proxyAgency.map((indicator) => (
                  <Card key={indicator.id} className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{indicator.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Pros */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-pros`)}
                          className="flex items-center gap-2 p-0 h-auto text-green-600 hover:text-green-700"
                        >
                          {expandedCards[`${indicator.id}-pros`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-semibold">Pros</span>
                        </Button>
                        {expandedCards[`${indicator.id}-pros`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.pros.map((pro, index) => (
                              <p key={index} className="text-green-700">{pro}</p>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Cons */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-cons`)}
                          className="flex items-center gap-2 p-0 h-auto text-red-600 hover:text-red-700"
                        >
                          {expandedCards[`${indicator.id}-cons`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <XCircle className="h-4 w-4" />
                          <span className="font-semibold">Cons</span>
                        </Button>
                        {expandedCards[`${indicator.id}-cons`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.cons.map((con, index) => (
                              <p key={index} className="text-red-700">{con}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Collective Agency Tab */}
          <TabsContent value="collective-agency" className="mt-6">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-black">
                <h3 className="text-xl font-bold mb-4">Collective Agency</h3>
                <p>
                  Collective agency describes a mode of interaction in which the teacher views ChatSEL as a collaborator, engaging in co-creation and shared problem-solving. This form of agency suggests mutual influence and a sense of partnership.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-4">Potential behavioral indicators:</h4>
              </div>
              
              <div className="space-y-4">
                {behavioralIndicators.collectiveAgency.map((indicator) => (
                  <Card key={indicator.id} className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{indicator.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Pros */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-pros`)}
                          className="flex items-center gap-2 p-0 h-auto text-green-600 hover:text-green-700"
                        >
                          {expandedCards[`${indicator.id}-pros`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-semibold">Pros</span>
                        </Button>
                        {expandedCards[`${indicator.id}-pros`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.pros.map((pro, index) => (
                              <p key={index} className="text-green-700">{pro}</p>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Cons */}
                      <div>
                        <Button
                          variant="ghost"
                          onClick={() => toggleCard(`${indicator.id}-cons`)}
                          className="flex items-center gap-2 p-0 h-auto text-red-600 hover:text-red-700"
                        >
                          {expandedCards[`${indicator.id}-cons`] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <XCircle className="h-4 w-4" />
                          <span className="font-semibold">Cons</span>
                        </Button>
                        {expandedCards[`${indicator.id}-cons`] && (
                          <div className="mt-3 pl-6 space-y-2">
                            {indicator.cons.map((con, index) => (
                              <p key={index} className="text-red-700">{con}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Summary */}
      <div className="mb-12">
        <div className="prose prose-lg max-w-none text-black space-y-6">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <p>
            Behavioral data can offer meaningful signals about how users relate to AI tools like ChatSEL. When interpreted carefully, these signals can help identify different forms of agency—whether the user is acting autonomously, relying on the system, or engaging collaboratively. However, every behavioral measure has limitations. Without context, we risk misinterpreting engagement as agency or compliance as trust.
          </p>
          <p>
            In the next section, we will examine how embedded micro-surveys and NLP-based analysis can complement behavioral data, helping us capture not just what users do, but how they feel, think, and make meaning during their interactions with AI.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t pt-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link to="/tools/user-evaluation-introduction">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back: Introduction to Agency Measurement
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/tools/user-evaluation-metrics">
                Next: Building Survey Metrics
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

export default UserEvaluationBehavioral; 