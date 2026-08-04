import * as React from "react"
import { Shield, Lock, FileText, Database } from "lucide-react"

const securityPillars = [
  {
    title: "Role-Based Permissions",
    description: "Fine-grained control over who can view, suggest, review, and decide within your organization.",
    icon: Shield,
  },
  {
    title: "Audit Logs",
    description: "Every action is logged with a permanent timestamp and user ID for complete accountability.",
    icon: FileText,
  },
  {
    title: "Immutable Decision Records",
    description: "Once a verdict is published, it becomes a permanent part of your organization's decision history.",
    icon: Database,
  },
  {
    title: "Enterprise-Grade Security",
    description: "Data encrypted at rest and in transit with industry-standard protocols and regular security audits.",
    icon: Lock,
  },
]

export const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-muted-foreground mb-8">
              We understand that trust starts with security. Suggestion Box is built to meet the most rigorous 
              standards for organizational data protection and transparency.
            </p>
            <div className="flex items-center gap-4 text-primary font-semibold">
              <Shield className="h-6 w-6" />
              <span>SOC2 Type II Compliant</span>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {securityPillars.map((pillar) => (
              <div key={pillar.title} className="p-6 bg-background rounded-2xl border shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}