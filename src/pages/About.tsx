import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Target, Heart, Code2, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function About() {
  const team = [
    {
      name: 'Priya Nair',
      role: 'CEO & Co-founder',
      bio: 'Former PM at Pixelcraft for 6 years. Ran 200+ customer interviews. Built Scryify after spending two weeks chasing 8 responses to a critical churn survey.',
      initials: 'PN',
    },
    {
      name: 'Tomás Reyes',
      role: 'CTO & Co-founder',
      bio: "Ex-Staff Engineer at Payaxis. Built data pipelines at scale. Designed Signal Scout's behavioral inference engine from the ground up.",
      initials: 'TR',
    },
    {
      name: 'Yuki Tanaka',
      role: 'Head of Product',
      bio: 'Previously PM at Trackflow and Deployly. Obsessed with making research feel like a superpower, not a chore.',
      initials: 'YT',
    },
    {
      name: 'Amara Osei',
      role: 'Head of Design',
      bio: 'Design systems veteran. Led design at Vidcast before joining Scryify. Believes the best UI is one you forget is there.',
      initials: 'AO',
    },
    {
      name: 'Dev Khanna',
      role: 'Lead AI Engineer',
      bio: 'PhD in NLP from CMU. Built fine-tuned models for survey analysis that identify signal-to-noise patterns invisible to keyword search.',
      initials: 'DK',
    },
    {
      name: 'Sophie Laurent',
      role: 'Head of Growth',
      bio: 'Grew two B2B SaaS products from 0 to Series B. Runs every growth experiment with the same rigor Scryify brings to customer research.',
      initials: 'SL',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 font-mono text-xs">
            <Zap className="h-3 w-3 mr-1 text-primary" />
            Founded 2023 · San Francisco
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            We think product teams deserve better research infrastructure
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Scryify was born from a simple observation: product managers spend enormous effort designing surveys but almost no tooling exists to help them find the right people to talk to. We're fixing that.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">The problem we're solving</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2022, our CEO Priya was a PM at Pixelcraft running a critical survey to understand why users churned during their first week. She crafted a thoughtful 8-question survey, set it up in a generic form tool, and sent it to a segment of recently-churned users.
                </p>
                <p>
                  Two weeks later, she had 7 responses. From 3,000 sent emails.
                </p>
                <p>
                  The problem wasn't the survey. The problem was the targeting and timing were completely manual, the delivery was generic, and there was no intelligence behind who should receive it or when.
                </p>
                <p>
                  She recruited Tomás — who had spent years building behavioral inference systems at Payaxis — and they set out to build the survey tool they wished existed.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="font-mono text-xs text-muted-foreground mb-3">// the insight</div>
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The survey is the easy part. Finding the right person, at the right moment, with the right context — that's where 90% of the value is."
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">— Priya Nair, CEO</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1,200+', label: 'product teams' },
                  { value: '4.8M', label: 'surveys sent' },
                  { value: '68%', label: 'avg response rate' },
                  { value: '$12M', label: 'Series A (2024)' },
                ].map(stat => (
                  <div key={stat.label} className="rounded-lg border border-border bg-muted/30 p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">How we operate</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Signal over noise',
                desc: 'We apply the same philosophy to our own work that Signal Scout applies to research: ruthlessly filter for what matters. Move fast on the important things, ignore the rest.'
              },
              {
                icon: Code2,
                title: 'Engineering-grade research',
                desc: 'We treat research infrastructure with the same care engineers treat data infrastructure. Repeatability, reliability, and interpretability are not optional.'
              },
              {
                icon: Heart,
                title: 'Respect respondent time',
                desc: "Every survey sent through Scryify should be worth the recipient's time. We build features that make surveys shorter, smarter, and more respectful."
              },
              {
                icon: Globe,
                title: 'Radically transparent',
                desc: 'We publish our pricing, our roadmap, and our thinking. No dark patterns, no artificial urgency, no bait-and-switch. We want customers who choose us eyes open.'
              },
              {
                icon: Users,
                title: 'PM-first, always',
                desc: 'We design for product managers specifically. Not marketers, not researchers, not HR. Deep focus beats broad applicability every time.'
              },
              {
                icon: Zap,
                title: 'Ship and learn',
                desc: "We use Scryify internally to run customer research on Scryify. If a feature doesn't survive our own Signal Scout pass, it doesn't ship."
              },
            ].map(v => (
              <Card key={v.title} className="border-border">
                <CardContent className="p-6">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">The team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              18 people. All remote. All obsessed with making product research faster and smarter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-mono font-bold text-primary text-sm border border-primary/20">
                      {member.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-xs text-primary font-mono mb-2">{member.role}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 font-mono text-xs">We're hiring</Badge>
          <h2 className="text-2xl font-bold mb-4">Join us</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We're a small team with high ambition. If you want to work on hard technical problems that directly help product teams ship better products, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button>View open roles</Button>
            <Button variant="outline">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
