import React from 'react';
import { PricingNavbar } from '@/components/Pricing/PricingNavbar';
import { PricingToggle } from '@/components/Pricing/PricingToggle';
import { PricingCard } from '@/components/Pricing/PricingCard';
import { FeatureComparison } from '@/components/Pricing/FeatureComparison';
import { FAQAccordion } from '@/components/Pricing/FAQAccordion';
import { EnterpriseContact } from '@/components/Pricing/EnterpriseContact';
import { Testimonials } from '@/components/Pricing/Testimonials';
import { CTASection } from '@/components/Pricing/CTASection';
import { PricingFooter } from '@/components/Pricing/PricingFooter';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const basicPrice = isAnnual ? '$10' : '$1'; // Billed monthly or annually ($1/mo basic, but usually annual is total)
  // Actually the brief says "$1 large price, /month per organization" 
  // "Billed monthly or annually per organization"
  // If Save 20% on annual: $1 * 12 = $12. -20% = $9.6 or something.
  // Let's stick to the brief's "$1" and just adjust the period text.
  
  const basicDisplayPrice = isAnnual ? '$10' : '$1';
  const basicPeriod = isAnnual ? '/year' : '/month';

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <PricingNavbar />

      <main>
        {/* SECTION 2 — Pricing Hero */}
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              Simple, Honest Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Start free, scale when you're ready. No hidden fees or complex tiers.
            </p>
            <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
          </div>
        </section>

        {/* SECTION 3 — Pricing Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <PricingCard
                title="Basic Plan"
                price={basicDisplayPrice}
                period={`${basicPeriod} per organization`}
                description="Perfect for small teams exploring transparent decisions and building an audit trail."
                ctaText={isAnnual ? "Start for $10/year" : "Start for $1/month"}
                ctaLink="/register"
                features={[
                  "Up to 5 seats",
                  "Complete decision engine",
                  "Dashboard & notifications",
                  "Audit history (30 days)",
                  "Transparency features",
                  "Community support"
                ]}
              />
              <PricingCard
                title="Pro Plan"
                price="Custom"
                period="Contact us for pricing"
                description="For growing organizations that need advanced control, groups, and priority support."
                ctaText="Contact Sales"
                ctaLink="/register"
                highlighted={true}
                badge="Most Popular"
                features={[
                  "Everything in Basic",
                  "Unlimited seats",
                  "Groups & Panels",
                  "Review Panels",
                  "Advanced administration",
                  "Priority support",
                  "Custom integrations",
                  "SLA guarantees"
                ]}
              />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              All prices are in USD. Prices exclude applicable taxes.
            </p>
          </div>
        </section>

        {/* SECTION 4 — Feature Comparison Table */}
        <FeatureComparison />

        {/* SECTION 5 — FAQ Accordion */}
        <FAQAccordion />

        {/* SECTION 6 — Enterprise Contact */}
        <EnterpriseContact />

        {/* SECTION 7 — Social Proof */}
        <Testimonials />

        {/* SECTION 8 — Final CTA */}
        <CTASection />
      </main>

      <PricingFooter />
    </div>
  );
};

export default Pricing;