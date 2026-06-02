import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Target, Brain, Send, BarChart3, RefreshCw,
  MessageSquare, CheckCircle, ArrowRight,
  GitBranch, Sparkles, Activity, Shield
} from 'lucide-react'

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4 font-mono text-xs">
                <Sparkles className="h-3 w-3 mr-1" />
                Now with Signal Scout AI
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Stop waiting for{' '}
                <span className="text-primary">customers</span>{' '}
                to answer surveys.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Scryify finds the right customers at the right moment and asks exactly the right questions — automatically. Built for product managers who need signal, not noise.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="font-medium" asChild>
                  <Link to="/pricing">
                    Start for free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Watch demo
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                No credit card required · 14-day trial · 5 min setup
              </p>
            </div>

            {/* Terminal mockup */}
            <div className="relative">
              <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-2/60" />
                  <span className="ml-2 text-xs text-muted-foreground">signal-scout · live</span>
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="text-muted-foreground">$ scryify scan --trigger=churn-risk --window=7d</div>
                  <div className="text-primary">▶ Scanning behavioral signals...</div>
                  <div className="text-muted-foreground pl-2">✓ Connected: Pulsara, Datavolt, Nexus CRM</div>
                  <div className="text-muted-foreground pl-2">✓ Analyzed 14,203 user events</div>
                  <div className="text-foreground pl-2 mt-2">Found 47 high-signal respondents:</div>
                  {[
                    { name: 'sarah.chen@nexacorp.io', signal: 'Churned after 3 failed exports', score: 94 },
                    { name: 'marcos.v@trackflow.io', signal: 'Hit plan limit 4x this week', score: 89 },
                    { name: 'priya.k@payaxis.io', signal: 'Abandoned onboarding step 3', score: 87 },
                  ].map((r, i) => (
                    <div key={i} className="pl-2 flex items-start gap-2">
                      <span className="text-chart-2">→</span>
                      <div>
                        <span className="text-foreground">{r.name}</span>
                        <span className="text-muted-foreground ml-2 text-[10px]">{r.signal}</span>
                        <span className="ml-2 text-primary text-[10px]">score:{r.score}</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-primary mt-2 animate-pulse">▶ Generating personalized surveys...</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-mono font-bold shadow-lg">
                3.2× response rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8 font-mono">
            Trusted by product teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Pulsara', 'Datavolt', 'Connectly', 'Pagewise', 'Trackflow', 'Buildpad', 'Deployly', 'Payaxis'].map(co => (
              <span key={co} className="text-muted-foreground/60 font-semibold text-sm tracking-tight hover:text-muted-foreground transition-colors">
                {co}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Scout Feature Callout */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-accent/30 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <Badge variant="accent" className="mb-4 font-mono text-xs">
                  <Target className="h-3 w-3 mr-1" />
                  Signal Scout™ — Scryify exclusive
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  AI that finds your survey respondents
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every other survey tool waits passively for responses. Signal Scout actively mines your product data, CRM, and behavioral analytics to identify <em>exactly</em> which customers have the highest-value perspective right now — then reaches out at the optimal moment.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Detects churn signals, feature abandonment, and upgrade intent',
                    'Scores respondents by insight value, not just availability',
                    "Auto-personalizes survey content based on each user's history",
                    'Reaches out via their preferred channel: email, Slack, or in-app',
                    'Closes the loop: maps feedback to specific product decisions',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button>
                  See Signal Scout in action
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-card/50 p-8 lg:p-12 border-l border-border flex flex-col justify-center">
                <div className="space-y-4">
                  {[
                    { label: 'Avg response rate', value: '68%', sub: 'vs 12% industry avg', positive: true },
                    { label: 'Time to first insight', value: '< 4h', sub: 'from survey creation', positive: true },
                    { label: 'Respondent quality score', value: '9.1/10', sub: 'PM-rated relevance', positive: true },
                    { label: 'Manual targeting effort', value: '~0 hrs', sub: 'fully automated', positive: true },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                      <div>
                        <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                        <div className="font-bold text-xl">{stat.value}</div>
                      </div>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything a PM needs to close the loop</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From finding respondents to shipping decisions — Scryify is the only survey platform built ground-up for product teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Signal Scout™',
                desc: 'AI scans your product data to surface the most valuable survey respondents automatically. No manual list building.'
              },
              {
                icon: Brain,
                title: 'AI Survey Builder',
                desc: 'Describe your research goal in plain English. Our AI generates validated, bias-free surveys optimized for your audience segment.'
              },
              {
                icon: Send,
                title: 'Smart Delivery',
                desc: 'Send surveys via email, Slack DM, or in-app. AI selects the channel and timing most likely to get a response from each user.'
              },
              {
                icon: BarChart3,
                title: 'Real-time Analysis',
                desc: 'Quantitative summaries, sentiment clusters, and action recommendations appear as responses come in — no pivot tables required.'
              },
              {
                icon: RefreshCw,
                title: 'CRM & Analytics Sync',
                desc: 'Two-way sync with Nexus CRM, Orion, Pulsara, Datavolt, and 30+ tools. Responses enrich your existing data, not replace it.'
              },
              {
                icon: GitBranch,
                title: 'Decision Tracking',
                desc: 'Link survey insights directly to sprint tickets, issue boards, or roadmap docs. Know which data drove which decision, months later.'
              },
              {
                icon: Shield,
                title: 'GDPR & SOC2 Ready',
                desc: 'Built-in consent management, data residency controls, and role-based access. Enterprise security without the enterprise headache.'
              },
              {
                icon: Activity,
                title: 'Continuous Pulse',
                desc: 'Set automated recurring surveys triggered by product events — no manual scheduling. Always have fresh signal when you need it.'
              },
              {
                icon: MessageSquare,
                title: 'Slack-native Alerts',
                desc: "Summaries and alerts posted directly to your team's chat. Research lives where decisions get made, not in a dashboard nobody checks."
              },
            ].map((feature, i) => (
              <Card key={i} className="group hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From signal to insight in minutes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Three steps. Zero manual work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect your stack',
                desc: "Plug in your product analytics, CRM, and communication tools. Takes 5 minutes. Scryify starts learning your users immediately.",
                icon: RefreshCw,
              },
              {
                step: '02',
                title: 'Define your research goal',
                desc: "Tell Scryify what you're trying to learn — \"why are users churning after week 2?\" — and Signal Scout finds who to ask and what to ask them.",
                icon: Brain,
              },
              {
                step: '03',
                title: 'Get actionable insights',
                desc: 'Responses come in, AI synthesizes them into themes, quotes, and recommended next actions. Linked to your roadmap tools automatically.',
                icon: Sparkles,
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="font-mono font-bold text-primary text-sm">{step.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%+1rem)] w-8 h-px border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Typeform comparison */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why PMs switch from Typeform</h2>
            <p className="text-muted-foreground">Typeform is beautiful. But it was built for form responses, not product research.</p>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
              <div className="p-4 text-sm font-medium text-muted-foreground">Feature</div>
              <div className="p-4 text-sm font-bold text-center border-l border-border">
                <span className="font-mono text-primary">scryify</span>
              </div>
              <div className="p-4 text-sm font-medium text-center text-muted-foreground border-l border-border">Typeform</div>
            </div>
            {[
              ['Automatically finds respondents', true, false],
              ['AI-generated surveys', true, false],
              ['Behavioral signal targeting', true, false],
              ['Native CRM sync', true, 'Manual'],
              ['Slack/in-app delivery', true, false],
              ['AI-synthesized insights', true, false],
              ['Decision tracking', true, false],
              ['Product analytics integration', true, false],
              ['Beautiful form UX', true, true],
              ['Logic branching', true, true],
            ].map(([feature, scryify, tf], i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 0 ? '' : 'bg-muted/20'}`}>
                <div className="p-4 text-sm">{feature as string}</div>
                <div className="p-4 text-center border-l border-border">
                  {scryify === true ? (
                    <CheckCircle className="h-4 w-4 text-primary mx-auto" />
                  ) : (
                    <span className="text-xs text-muted-foreground">{scryify as string}</span>
                  )}
                </div>
                <div className="p-4 text-center border-l border-border">
                  {tf === true ? (
                    <CheckCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                  ) : tf === false ? (
                    <span className="text-muted-foreground/40 text-lg">—</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">{tf as string}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stop guessing. Start knowing.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join 1,200+ product teams using Scryify to run faster, smarter customer research.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/pricing">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Book a demo
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground font-mono">
            Free 14-day trial · No credit card · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
