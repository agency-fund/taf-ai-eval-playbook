import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  BarChart3,
  Beaker,
  Brain,
  CheckCircle2,
  LineChart,
  Shuffle,
  Target,
  Info,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const DOMAINS = [
  "Modeling",
  "Practice Promotion",
  "Transfer Promotion",
  "Elaboration",
  "Validation",
] as const;

type Domain = typeof DOMAINS[number];

type EngagementParams = {
  sampleSize: number;
  durationWeeks: number;
  baselineEngagementRate: number; // 0-100
  mdePercent: number; // minimum detectable effect in percentage points
  variantAName: string;
  variantBName: string;
  featureChange: string;
};

type SelParams = {
  sampleSize: number;
  durationWeeks: number;
  emphasizeDomains: Record<Domain, boolean>;
  baselineScores: Record<Domain, number>; // 1-5 self-report
};

const defaultEngagement: EngagementParams = {
  sampleSize: 400,
  durationWeeks: 2,
  baselineEngagementRate: 45,
  mdePercent: 3,
  variantAName: "Current Prompting",
  variantBName: "Domain-Tagged Prompts",
  featureChange:
    "Tag recommendations by SEL pedagogy (Modeling, Practice, Transfer, Elaboration, Validation) to support teacher metacognition.",
};

const defaultSel: SelParams = {
  sampleSize: 120,
  durationWeeks: 4,
  emphasizeDomains: {
    Modeling: true,
    "Practice Promotion": true,
    "Transfer Promotion": true,
    Elaboration: true,
    Validation: true,
  },
  baselineScores: {
    Modeling: 3.2,
    "Practice Promotion": 3.0,
    "Transfer Promotion": 2.8,
    Elaboration: 3.1,
    Validation: 3.4,
  },
};

function seededRandom(seed: number) {
  // Simple deterministic PRNG for stable demo results
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const ABExperiments: React.FC = () => {
  const { toast } = useToast();
  const [tab, setTab] = useState("plan-engagement");
  const [engagement, setEngagement] = useState<EngagementParams>(defaultEngagement);
  const [sel, setSel] = useState<SelParams>(defaultSel);
  const [engResults, setEngResults] = useState<null | {
    aRate: number;
    bRate: number;
    diff: number; // percentage points
  }>(null);
  const [gateOverride, setGateOverride] = useState(false);
  const [selResults, setSelResults] = useState<null | {
    data: { domain: Domain; A: number; B: number }[];
    avgDiff: number;
  }>(null);

  // Basic SEO
  useEffect(() => {
    document.title = "A/B Experiments Workshop | Interactive Tools";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Plan A/B experiments for ChatSEL: user engagement and teacher SEL practice across modeling, practice, transfer, elaboration, validation."
    );

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  const runEngagement = () => {
    // deterministic-ish based on inputs
    const seed =
      engagement.sampleSize * 13 +
      engagement.durationWeeks * 7 +
      engagement.baselineEngagementRate * 5 +
      engagement.mdePercent * 3 +
      engagement.variantBName.length;

    const base = engagement.baselineEngagementRate / 100;
    const lift = (seededRandom(seed) - 0.4) * 0.08; // -3.2% to +4.8% absolute
    const aRate = Math.max(0, Math.min(1, base + (seededRandom(seed + 1) - 0.5) * 0.01));
    const bRate = Math.max(0, Math.min(1, base + lift));
    const diff = (bRate - aRate) * 100; // percentage points

    setEngResults({ aRate: +(aRate * 100).toFixed(1), bRate: +(bRate * 100).toFixed(1), diff: +diff.toFixed(1) });
    setSelResults(null); // reset downstream

    toast({
      title: "Engagement experiment complete",
      description: `Observed difference: ${diff.toFixed(1)} pp (${engagement.variantBName} vs ${engagement.variantAName})`,
    });

    setTab("engagement-results");
  };

  const engagementChart = useMemo(() => {
    if (!engResults) return [] as any[];
    return [
      { name: engagement.variantAName, Engagement: engResults.aRate },
      { name: engagement.variantBName, Engagement: engResults.bRate },
    ];
  }, [engResults, engagement.variantAName, engagement.variantBName]);

  const canProceedToSEL = useMemo(() => {
    if (!engResults) return false;
    return gateOverride || Math.abs(engResults.diff) < engagement.mdePercent;
  }, [engResults, engagement.mdePercent, gateOverride]);

  const runSEL = () => {
    const seed = sel.sampleSize * 11 + sel.durationWeeks * 17;

    const data = DOMAINS.map((domain, idx) => {
      const A = sel.baselineScores[domain];
      const emphasize = sel.emphasizeDomains[domain];
      const randomBump = (seededRandom(seed + idx) - 0.3) * 0.5; // -0.15 to +0.35 approx
      const targetedBonus = emphasize ? 0.25 : 0.05; // emphasize domains get more lift
      const B = Math.max(1, Math.min(5, A + targetedBonus + randomBump));
      return { domain, A: +A.toFixed(2), B: +B.toFixed(2) };
    });

    const avgDiff =
      data.reduce((sum, d) => sum + (d.B - d.A), 0) / data.length;

    setSelResults({ data, avgDiff: +avgDiff.toFixed(2) });

    toast({
      title: "SEL practice experiment complete",
      description: `Average self-report improvement: ${avgDiff.toFixed(2)} points (1-5 scale)`,
    });

    setTab("sel-results");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">A/B Experiments Workshop</h1>
        <p className="text-muted-foreground mt-2">
          Plan and simulate two experiment series for ChatSEL: first optimize user engagement,
          then focus on teacher SEL pedagogical practices across Modeling, Practice, Transfer, Elaboration, and Validation.
        </p>
      </header>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Hypotheses and Variants</CardTitle>
            <CardDescription>What each step tests and how variants differ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="font-semibold">Step 1 — Engagement hypothesis</div>
              <p className="text-sm text-muted-foreground">
                Variant B (domain‑tagged, metacognitive prompts) will increase teacher engagement in ChatSEL compared to
                Variant A (current prompting) by at least your MDE (minimum detectable effect) in percentage points.
              </p>
            </div>
            <div>
              <div className="font-semibold">Step 2 — SEL practice hypothesis</div>
              <p className="text-sm text-muted-foreground">
                Variant B will improve teachers’ self‑reported SEL pedagogical practices across the five domains (Modeling,
                Practice Promotion, Transfer Promotion, Elaboration, Validation) versus Variant A.
              </p>
            </div>
            <div>
              <div className="font-semibold">Variants</div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li><span className="font-medium">Variant A</span>: Current ChatSEL prompting and recommendations without explicit domain tags.</li>
                <li><span className="font-medium">Variant B</span>: Recommendations are explicitly tagged by SEL pedagogy to support teacher metacognition.</li>
              </ul>
            </div>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>About attrition vs. engagement data</AlertTitle>
              <AlertDescription>
                Engagement outcomes use on‑platform telemetry, so no survey attrition is expected. SEL practice outcomes rely on
                self‑report surveys—plan for attrition (e.g., 10–30%) in sample size and duration.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      <main>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="plan-engagement" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <Beaker className="mr-2 h-4 w-4" /> Plan Engagement A/B
            </TabsTrigger>
            <TabsTrigger value="engagement-results" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              <BarChart3 className="mr-2 h-4 w-4" /> Engagement Results & Gate
            </TabsTrigger>
            <TabsTrigger value="plan-sel" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary" disabled={!canProceedToSEL}>
              <Shuffle className="mr-2 h-4 w-4" /> Plan SEL Practice A/B
            </TabsTrigger>
            <TabsTrigger value="sel-results" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary" disabled={!selResults}>
              <LineChart className="mr-2 h-4 w-4" /> SEL Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan-engagement" className="mt-6">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Experiment Setup</CardTitle>
                  <CardDescription>
                    Configure a basic A/B to maximize user engagement in ChatSEL (e.g., % sessions with 5+ messages, or return rate).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="sampleSize">Sample size (teachers)</Label>
                        <Input
                          id="sampleSize"
                          type="number"
                          min={50}
                          value={engagement.sampleSize}
                          onChange={(e) => setEngagement((s) => ({ ...s, sampleSize: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="durationWeeks">Duration (weeks)</Label>
                        <Input
                          id="durationWeeks"
                          type="number"
                          min={1}
                          value={engagement.durationWeeks}
                          onChange={(e) => setEngagement((s) => ({ ...s, durationWeeks: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="baseline">Baseline engagement rate (%)</Label>
                        <Input
                          id="baseline"
                          type="number"
                          min={0}
                          max={100}
                          value={engagement.baselineEngagementRate}
                          onChange={(e) => setEngagement((s) => ({ ...s, baselineEngagementRate: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="mde">Minimum detectable effect (pp)</Label>
                        <Input
                          id="mde"
                          type="number"
                          min={1}
                          value={engagement.mdePercent}
                          onChange={(e) => setEngagement((s) => ({ ...s, mdePercent: Number(e.target.value) }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="variantA">Variant A label</Label>
                        <Input
                          id="variantA"
                          value={engagement.variantAName}
                          onChange={(e) => setEngagement((s) => ({ ...s, variantAName: e.target.value }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="variantB">Variant B label</Label>
                        <Input
                          id="variantB"
                          value={engagement.variantBName}
                          onChange={(e) => setEngagement((s) => ({ ...s, variantBName: e.target.value }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="feature">Feature change (Variant B)</Label>
                        <Input
                          id="feature"
                          value={engagement.featureChange}
                          onChange={(e) => setEngagement((s) => ({ ...s, featureChange: e.target.value }))}
                        />
                      </div>
                      <div className="pt-1">
                        <Badge variant="secondary">Outcome: Engagement</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>No attrition expected</AlertTitle>
                      <AlertDescription>
                        Engagement is measured from on‑platform data (e.g., sessions, return rate), so you typically will not see
                        survey‑related attrition.
                      </AlertDescription>
                    </Alert>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Tip: Use a clear primary metric (e.g., 7‑day return rate) and predefine your MDE.
                    </div>
                    <Button onClick={runEngagement} className="">Run Experiment</Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="engagement-results" className="mt-6">
            <section className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Results: Engagement</CardTitle>
                  <CardDescription>Compare observed engagement rates between variants.</CardDescription>
                </CardHeader>
                <CardContent>
                  {engResults ? (
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={engagementChart}>
                          <XAxis dataKey="name" />
                          <YAxis unit="%" />
                          <Tooltip formatter={(value: any) => `${value}%`} />
                          <Legend />
                          <Bar dataKey="Engagement" fill="hsl(var(--primary))" radius={[6,6,0,0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Run the experiment to see results.</p>
                  )}

                  {engResults && (
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-md border p-3">
                        <div className="text-muted-foreground">Observed difference</div>
                        <div className="text-lg font-semibold">{engResults.diff} pp</div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-muted-foreground">Decision threshold (MDE)</div>
                        <div className="text-lg font-semibold">{engagement.mdePercent} pp</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Decision Gate</CardTitle>
                  <CardDescription>
                    If the difference is smaller than your MDE, engagement is "good enough" and you can shift focus to SEL practice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {engResults ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <div className="font-medium">Gate status</div>
                          <p className="text-sm text-muted-foreground">
                            {Math.abs(engResults.diff) < engagement.mdePercent
                              ? "Below MDE → prioritize SEL practice experiments"
                              : "Above MDE → consider further engagement iterations"}
                          </p>
                        </div>
                        <CheckCircle2 className={`h-5 w-5 ${Math.abs(engResults.diff) < engagement.mdePercent ? "text-green-600" : "text-amber-600"}`} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Override to proceed</div>
                          <p className="text-sm text-muted-foreground">Manually proceed to SEL planning</p>
                        </div>
                        <Switch checked={gateOverride} onCheckedChange={setGateOverride} />
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setTab("plan-engagement")}>Edit parameters</Button>
                        <Button disabled={!canProceedToSEL} onClick={() => setTab("plan-sel")}>Proceed to SEL A/B</Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Run the engagement experiment to enable this step.</p>
                  )}
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="plan-sel" className="mt-6">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>SEL Practice Experiment Setup</CardTitle>
                  <CardDescription>
                    Compare standard recommendations vs domain‑tagged, metacognitive prompts aligned to SEL pedagogies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="selN">Sample size (teachers)</Label>
                        <Input
                          id="selN"
                          type="number"
                          min={40}
                          value={sel.sampleSize}
                          onChange={(e) => setSel((s) => ({ ...s, sampleSize: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="selWeeks">Duration (weeks)</Label>
                        <Input
                          id="selWeeks"
                          type="number"
                          min={2}
                          value={sel.durationWeeks}
                          onChange={(e) => setSel((s) => ({ ...s, durationWeeks: Number(e.target.value) }))}
                        />
                      </div>

                      <div className="pt-1">
                        <Badge variant="secondary">Outcome: Teacher self‑report (1‑5)</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="font-medium mb-2">Emphasize domains in Variant B</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {DOMAINS.map((d) => (
                            <label key={d} className="flex items-center gap-2 rounded-md border p-2">
                              <input
                                type="checkbox"
                                checked={sel.emphasizeDomains[d]}
                                onChange={(e) =>
                                  setSel((s) => ({
                                    ...s,
                                    emphasizeDomains: { ...s.emphasizeDomains, [d]: e.target.checked },
                                  }))
                                }
                              />
                              <span>{d}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-medium mb-2">Baseline self‑report scores (Variant A)</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {DOMAINS.map((d) => (
                            <div key={d} className="grid gap-1">
                              <Label htmlFor={`b-${d}`}>{d}</Label>
                              <Input
                                id={`b-${d}`}
                                type="number"
                                step="0.1"
                                min={1}
                                max={5}
                                value={sel.baselineScores[d]}
                                onChange={(e) =>
                                  setSel((s) => ({
                                    ...s,
                                    baselineScores: { ...s.baselineScores, [d]: Number(e.target.value) },
                                  }))
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Expect survey attrition</AlertTitle>
                      <AlertDescription>
                        SEL practice outcomes depend on self‑report surveys. Plan for attrition (e.g., 10–30%) when choosing sample size
                        and duration.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Variant A: Standard recommendations • Variant B: Domain‑tagged, metacognitive prompts
                    </div>
                    <Button onClick={runSEL}>Run SEL Experiment</Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="sel-results" className="mt-6">
            <section className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Results: Teacher SEL Practices (Self‑Report)</CardTitle>
                  <CardDescription>Average scores by domain (1‑5 scale)</CardDescription>
                </CardHeader>
                <CardContent>
                  {selResults ? (
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={selResults.data} margin={{ top: 10, right: 16, bottom: 32, left: 16 }}>
                          <XAxis
                            dataKey="domain"
                            interval={0}
                            tick={{ fontSize: 12 }}
                            angle={-12}
                            tickMargin={10}
                            height={50}
                          />
                          <YAxis domain={[1, 5]} label={{ value: "Score (1–5)", angle: -90, position: "insideLeft" }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="A" name="Variant A" fill="hsl(var(--muted-foreground))" radius={[6,6,0,0]} />
                          <Bar dataKey="B" name="Variant B" fill="hsl(var(--primary))" radius={[6,6,0,0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Run the SEL experiment to see results.</p>
                  )}
                </CardContent>
              </Card>

              {selResults && (
                <Card>
                  <CardHeader>
                    <CardTitle>Summary & Next Steps</CardTitle>
                    <CardDescription>Translate findings into product decisions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Average improvement</div>
                        <div className="text-xl font-semibold">{selResults.avgDiff} points</div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Strongest domains</div>
                        <div className="text-sm">
                          {selResults.data
                            .slice()
                            .sort((a, b) => (b.B - b.A) - (a.B - a.A))
                            .slice(0, 2)
                            .map((d) => `${d.domain} (+${(d.B - d.A).toFixed(2)})`)
                            .join(", ")}
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Recommendation</div>
                        <div className="text-sm">
                          Consider rolling out domain‑tagged prompts, starting with the domains showing the largest improvements.
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      Note: This workshop simulates outcomes for planning. Use proper sampling, randomization, and pre‑registration in real studies.
                    </div>
                  </CardContent>
                </Card>
              )}
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ABExperiments;
