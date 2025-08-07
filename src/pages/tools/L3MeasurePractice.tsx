import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, BookOpen, Users, Target, MessageSquare, Heart, Eye, FileText } from 'lucide-react';

const L3MeasurePractice: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<string[]>(['modeling']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const pedagogyData = [
    {
      id: 'modeling',
      title: 'Modeling',
      description: 'Enacting SEL behaviors that demonstrate effective interactions, learning, engagement, or responses, including those that are internal (e.g., thoughts).',
      examples: [
        'Demonstrating SEL strategies (e.g., acting out skill)',
        'Expressing emotions effectively',
        'Engaging in effective social interaction (e.g., validation)',
        'Showing emotional vulnerability',
        'Narration and sharing thoughts as they arise (e.g., think aloud, self-talk)'
      ],
      icon: Eye,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'practice',
      title: 'Practice Promotion',
      description: 'Providing opportunities for students to repeatedly engage in SEL behaviors.',
      examples: [
        'Rituals (e.g., mindful moments, pain in body vs. feelings check-in)',
        'Routines (e.g., feelings check-in)',
        'Rehearsal (e.g., recitation of SEL acronym)',
        'Behavior practice (e.g., role-play)',
        'Imaginary practice (e.g., visualization)',
        'Opportunities to respond (e.g., choral responding)'
      ],
      icon: Target,
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'transfer',
      title: 'Transfer Promotion',
      description: 'Supporting or providing opportunities for students to consider and apply SEL with multiple people, across multiple contexts, and in different emotional states.',
      examples: [
        'Brainstorming situations where SEL skills are applicable',
        'Practicing skills with multiple people or in multiple situations',
        'Visualizing using skill in another context',
        'Support using skill in the moment (e.g., cueing student)',
        'Integrating SEL into content areas (e.g., feelings check-in before large writing assignment)'
      ],
      icon: Users,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'elaboration',
      title: 'Elaboration',
      description: 'Providing, or eliciting from students, meaningful and nuanced information about the social and emotional context, concepts, or content.',
      examples: [
        'Context/background through discussion, drawing, or writing (e.g., storyboarding)',
        'Social/emotion/mind/mental states talk (e.g., storytelling)',
        'Questioning to illuminate nuance (e.g., identifying cause, emotion, physical experience, behavior, after-effect)',
        'Recasting, paraphrasing, or extending (e.g., reflective listening)'
      ],
      icon: MessageSquare,
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: 'validation',
      title: 'Validation',
      description: 'Engaging in behaviors that make space for, demonstrate interest in, or legitimize diverse preferences, perspectives, emotions, ideas, and opinions.',
      examples: [
        'Treating all emotions as understandable and legitimate',
        'Acknowledgment (e.g., talking stick, reflective listening)',
        'Eliciting multiple perspectives (e.g., point of view)',
        'Holding space for perspectives of those not present',
        'Wait time, pauses (allowing students to respond fully)',
        'Providing true choice'
      ],
      icon: Heart,
      color: 'bg-pink-50 border-pink-200'
    }
  ];

  const measureData = {
    modeling: {
      selfReport: [
        'I model SEL strategies for my students (e.g., acting out skills, sharing feelings).',
        'I narrate my own thinking and feelings to help students understand SEL.',
        'I show vulnerability by expressing my emotions during class.',
        'I intentionally demonstrate SEL behaviors even if I don\'t call them out.'
      ],
      observation: [
        'Teacher demonstrates SEL skills explicitly (e.g., modeling a deep breath, naming emotions).',
        'Teacher uses narration or self-talk to make internal SEL processes visible.',
        'Teacher expresses own emotions authentically (e.g., "I\'m feeling nervous today").',
        'Teacher implicitly models SEL through consistent behavior (e.g., calm responses to conflict).'
      ]
    },
    practice: {
      selfReport: [
        'I provide students with routines to regularly practice SEL.',
        'I give students the chance to role-play or rehearse SEL skills.',
        'I encourage students to visualize using SEL skills in real-life situations.',
        'I use call-and-response or repetition to reinforce SEL concepts.'
      ],
      observation: [
        'Teacher uses rituals like feelings check-ins, mindful moments, or repeated routines.',
        'Students are observed engaging in role-play or behavioral rehearsal.',
        'Teacher guides students through visualization or mental practice of SEL.',
        'Evidence of verbal SEL repetition (e.g., chants, acronyms, SEL scripts).'
      ]
    },
    transfer: {
      selfReport: [
        'I help students think about how SEL skills apply in different settings (e.g., home, playground).',
        'I encourage students to use SEL skills in real-life moments (e.g., during conflict).',
        'I help students practice SEL skills with different people or in varied contexts.',
        'I guide students to transfer SEL skills across emotional states (e.g., from calm to stressed).'
      ],
      observation: [
        'Teacher prompts discussion on applying SEL in new or varied situations.',
        'Teacher cues students in real time to use SEL strategies (e.g., breathing, perspective-taking).',
        'Students are observed using SEL skills in multiple settings or with diverse peers.',
        'Teacher supports SEL use during emotionally charged moments (e.g., co-regulation).'
      ]
    },
    elaboration: {
      selfReport: [
        'I ask students to explain their emotions or perspectives.',
        'I encourage students to reflect on the causes and effects of their emotions.',
        'I connect SEL content to students\' life experiences or cultural contexts.',
        'I use art, storytelling, or writing to deepen understanding of SEL topics.'
      ],
      observation: [
        'Teacher uses open-ended questions to explore student thinking.',
        'Teacher facilitates discussions linking emotions to experiences and behavior.',
        'SEL is linked to students\' backgrounds through stories, examples, or materials.',
        'Students engage in multimodal activities to elaborate on emotions or relationships.'
      ]
    },
    validation: {
      selfReport: [
        'I treat all student emotions as valid and understandable.',
        'I affirm students\' unique perspectives and experiences.',
        'I make an effort to validate students who may feel left out or unheard.',
        'I avoid saying things that could invalidate students\' feelings or identities.'
      ],
      observation: [
        'Teacher acknowledges student emotions without minimizing or dismissing.',
        'Teacher invites and holds space for multiple viewpoints.',
        'Teacher provides voice to underrepresented students or emotions.',
        'Teacher refrains from dismissive or judgmental language.'
      ]
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">L3: Measure Practice</h1>
        <p className="text-xl text-black mb-6">
          Measuring Teacher Pedagogical Practices as a result of using ChatSEL
        </p>
        
        {/* Citation Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-black">
                  <strong>Citation:</strong> Zieher, A. K., Bailey, C. S., Cipriano, C., McNaboe, T., Smith, K., & Strambler, M. J. (2024). 
                  <a href="https://www.sciencedirect.com/science/article/pii/S2773233924000044" 
                     className="text-blue-600 hover:text-blue-800 underline">
                    Considering the "How" of SEL: A framework for the pedagogies of social and emotional learning
                  </a>. 
                  <em>Social and Emotional Learning: Research, Practice, and Policy</em>, <em>3</em>, 100030.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-taf-yellow data-[state=active]:text-taf-blue">
            Framework Overview
          </TabsTrigger>
          <TabsTrigger value="pedagogies" className="data-[state=active]:bg-taf-yellow data-[state=active]:text-taf-blue">
            Pedagogies of SEL
          </TabsTrigger>
          <TabsTrigger value="measures" className="data-[state=active]:bg-taf-yellow data-[state=active]:text-taf-blue">
            Example Measures
          </TabsTrigger>
        </TabsList>

        {/* Framework Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-black">Framework Overview</CardTitle>
              <CardDescription className="text-black">
                Understanding how to measure teacher pedagogical practices in SEL
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">What We Measure</h3>
                  <p className="text-black">
                    This framework helps evaluate how teachers implement SEL pedagogies in their classrooms 
                    as a result of using ChatSEL. We focus on five key pedagogical approaches that 
                    demonstrate effective SEL instruction.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Key Insight</h4>
                    <p className="text-black text-sm">
                      The "how" of SEL instruction matters as much as the "what" - the pedagogical 
                      approaches teachers use significantly impact student SEL outcomes.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">Measurement Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-taf-yellow text-taf-blue">Self-Report</Badge>
                      <span className="text-black">Teacher surveys (1-5 scale)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="bg-taf-blue text-white">Observation</Badge>
                      <span className="text-black">Classroom observation rubrics (0-3 scale)</span>
                    </div>
                  </div>
                  <p className="text-black text-sm">
                    Both measurement approaches provide complementary insights into teacher practices 
                    and their impact on student SEL development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pedagogies of SEL Tab */}
        <TabsContent value="pedagogies" className="mt-6">
          <div className="space-y-6">
            {pedagogyData.map((pedagogy) => {
              const IconComponent = pedagogy.icon;
              const isExpanded = expandedSections.includes(pedagogy.id);
              
              return (
                <Card key={pedagogy.id} className={`${pedagogy.color} border-2`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 text-taf-blue" />
                        <CardTitle className="text-xl text-black">{pedagogy.title}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(pedagogy.id)}
                        className="text-taf-blue hover:text-taf-blue/80"
                      >
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </Button>
                    </div>
                    <CardDescription className="text-black">
                      {pedagogy.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-black">Examples:</h4>
                        <div className="grid gap-2">
                          {pedagogy.examples.map((example, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-taf-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-black">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Example Measures Tab */}
        <TabsContent value="measures" className="mt-6">
          <div className="space-y-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-2">Measurement Scales</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-black">Self-Report (Teachers):</strong>
                  <p className="text-black">1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always</p>
                </div>
                <div>
                  <strong className="text-black">Observation Rubric (Observers):</strong>
                  <p className="text-black">0 = Not Observed, 1 = Observed Once, 2 = Observed Occasionally, 3 = Consistently Observed</p>
                </div>
              </div>
            </div>

            {pedagogyData.map((pedagogy) => {
              const measures = measureData[pedagogy.id as keyof typeof measureData];
              const isExpanded = expandedSections.includes(pedagogy.id);
              const IconComponent = pedagogy.icon;
              
              return (
                <Card key={pedagogy.id} className={`${pedagogy.color} border-2`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 text-taf-blue" />
                        <CardTitle className="text-xl text-black">{pedagogy.title} Measures</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(pedagogy.id)}
                        className="text-taf-blue hover:text-taf-blue/80"
                      >
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b-2 border-gray-300">
                              <th className="text-left p-3 bg-gray-100 text-black font-semibold">Self-Report (Teacher)</th>
                              <th className="text-left p-3 bg-gray-100 text-black font-semibold">Classroom Observation (Rater)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {measures.selfReport.map((item, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="p-3 text-black">{item}</td>
                                <td className="p-3 text-black">{measures.observation[index]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Navigation Footer */}
      <div className="flex justify-between mt-12">
        <Button variant="outline" className="border-taf-blue text-taf-blue hover:bg-taf-blue hover:text-white">
          ← Back to User Evaluation Workshop
        </Button>
        <Button className="bg-taf-blue hover:bg-taf-blue/90 text-white">
          Next: Implementation Guide →
        </Button>
      </div>
    </div>
  );
};

export default L3MeasurePractice; 