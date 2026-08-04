import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const plans = [
  {
    name: "Basic",
    price: "$1",
    period: "/month",
    description: "Perfect for small teams and non-profits starting their transparency journey.",
    features: [
      "Up to 5 seats",
      "Unlimited suggestions",
      "Standard review workflow",
      "Public decision board",
      "Email support",
    ],
    cta: "Get Started",
    href: "/register",
    popular: false,
  },
  {
    name: "Pro",
    price: "Custom",
    period: "",
    description: "Enterprise-grade features for organizations that need full control and scale.",
    features: [
      "Unlimited seats",
      "Private Suggestion Groups",
      "Custom Review Panels",
      "Priority 24/7 Support",
      "Advanced Audit Export",
      "SSO & SAML Integration",
    ],
    cta: "Contact Sales",
    href: "/register",
    popular: true,
  },
]

export const PricingPreview = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your organization's scale. Start small, grow as you build trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-md ${
                plan.popular ? "border-primary bg-primary/[0.02]" : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={`w-full h-12 text-base ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                asChild
              >
                <Link to={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}