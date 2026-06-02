import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle, Zap, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: 'Explorer',
      price: { monthly: 0, annual: 0 },
      description: 'For solo PMs getting started with structured research.',
      badge: null,
      features: [
        '3 surveys / month',
        '100 responses / survey',
        'AI Survey Builder',
        'Email delivery',
        '7-day response history',
        'CSV export',
        'Community support',
      ],
      missing: ['Signal Scout', 'CRM integrations', 'Slack delivery', 'AI synthesis'],
      cta: 'Get started free',
      ctaVariant: 'outline' as const,
    },
    {
      name: 'Builder',
      price: { monthly: 99, annual: 79 },
      description: 'For product teams running continuous customer research.',
      badge: 'Most popular',
      features: [
        'Unlimited surveys',
        '2,000 responses / month',
        'Signal Scout™ AI targeting',
        'AI-synthesized insights',
        'Email + Slack + in-app delivery',
        'Nexus CRM & Orion sync',
        'Pulsara & Datavolt integration',
        'Decision tracking',
        '5 team seats',
        'Priority email support',
      ],
      missing: ['SSO / SAML', 'Custom integrations'],
      cta: 'Start 14-day trial',
      ctaVariant: 'default' as const,
    },
    {
      name: 'Scale',
      price: { monthly: 399, annual: 299 },
      description: 'For scaling orgs with serious research operations.',
      badge: 'Enterprise ready',
      features: [
        'Everything in Builder',
        'Unlimited responses',
        'Unlimited team seats',
        'SSO / SAML',
        'Custom integrations (API)',
        'Advanced Signal Scout models',
        'Dedicated Customer Success',
        'SLA guarantee',
        'Custom data residency',
        'Audit logs',
        'White-glove onboarding',
      ],
      missing: [],
      cta: 'Talk to sales',
      ctaVariant: 'outline' as const,
    },
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Start free. Scale when you're ready. No hidden seats fees, no surprise overages.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-lg p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                !annual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2',
                annual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              )}
            >
              Annual
              <Badge variant="accent" className="text-[10px] px-1.5 py-0">Save 20%</Badge>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={cn(
                'relative flex flex-col',
                i === 1 && 'border-primary shadow-lg ring-2 ring-primary/20'
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="font-mono text-xs">{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  {i === 1 && <Zap className="h-4 w-4 text-primary" />}
                  {plan.name}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.annual > 0 && (
                    <span className="text-muted-foreground text-sm ml-1">/mo</span>
                  )}
                  {plan.price.annual > 0 && annual && (
                    <div className="text-xs text-muted-foreground mt-1">billed annually</div>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-6">
                <Button variant={plan.ctaVariant} className="w-full" size="lg">
                  {plan.cta}
                  {i === 1 && <ArrowRight className="h-4 w-4" />}
                </Button>

                <div className="space-y-2">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.missing.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground/50">
                      <div className="h-4 w-4 shrink-0 flex items-center justify-center">
                        <div className="h-px w-3 bg-muted-foreground/30" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What counts as a "response"?',
                a: 'A response is a completed survey submission. Partial completions and previews do not count. Responses reset monthly on your billing date.'
              },
              {
                q: 'How does Signal Scout find respondents?',
                a: "Signal Scout connects to your product analytics, CRM, and communication tools. It analyzes behavioral patterns — like users who hit a paywall, churned last week, or abandoned a key feature — and scores them by likely insight value. No personal data leaves your connected tools unless you explicitly approve outreach."
              },
              {
                q: 'Can I import my existing Typeform surveys?',
                a: 'Yes. Our migration tool imports your Typeform surveys, logic branches, and historical response data in one click. Most teams are fully migrated in under 30 minutes.'
              },
              {
                q: 'What integrations are included?',
                a: 'Builder and Scale plans include native integrations with Nexus CRM, Orion, Pulsara, Datavolt, Connectly, team chat, sprint boards, Trackflow, and Pagewise. Custom integrations via REST API are available on Scale.'
              },
              {
                q: 'Is there a free trial?',
                a: "All paid plans include a 14-day free trial with full feature access. No credit card required. If you're evaluating for a large team, contact us for an extended trial."
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
