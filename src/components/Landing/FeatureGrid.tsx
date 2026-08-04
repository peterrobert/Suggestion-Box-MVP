import * as React from "react"
import { 
  ShieldCheck, 
  GitBranch, 
  Search, 
  Users, 
  History, 
  Bell 
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Transparent Decision Engine",
    description: "Every decision is recorded, timestamped, and permanently visible to the organization.",
    icon: ShieldCheck,
  },
  {
    title: "Structured Review Workflow",
    description: "Suggestions flow through Draft → Live → In Resolution → Verdict Ready → Complete stages.",
    icon: GitBranch,
  },
  {
    title: "Evidence-Based Decisions",
    description: "Reviewers evaluate structured evidence before publishing any verdict.",
    icon: Search,
  },
  {
    title: "Role-Based Permissions",
    description: "Admins, Reviewers, and Members each have tailored views and actions.",
    icon: Users,
  },
  {
    title: "Audit History",
    description: "Complete immutable log of every action, change, and decision made in the system.",
    icon: History,
  },
  {
    title: "Smart Notifications",
    description: "Personalized alerts based on your role, assignments and activity.",
    icon: Bell,
  },
]

export const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Everything You Need for Decisions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built for organizations that value transparency, accountability, and clarity in their decision-making process.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-primary/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}