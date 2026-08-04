import * as React from "react"
import { 
  Pencil, 
  Globe, 
  Search, 
  CheckSquare, 
  CheckCircle,
  ChevronRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    name: "Draft",
    description: "Private idea generation",
    icon: Pencil,
    active: 12,
  },
  {
    name: "Live",
    description: "Public feedback gathering",
    icon: Globe,
    active: 8,
  },
  {
    name: "In Resolution",
    description: "Evidence evaluation",
    icon: Search,
    active: 5,
  },
  {
    name: "Verdict Ready",
    description: "Reviewer consensus",
    icon: CheckSquare,
    active: 3,
  },
  {
    name: "Complete",
    description: "Decision published",
    icon: CheckCircle,
    active: 145,
  },
]

export const WorkflowSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            From Idea to Decision, Every Step Visible
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our structured pipeline ensures no suggestion gets lost and every decision is backed by evidence.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={step.name} className="relative bg-background lg:bg-transparent p-6 rounded-2xl lg:p-0 flex flex-col items-center text-center group">
                <div className="mb-6 relative">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border-4 border-background group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center border-2 border-background">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{step.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 px-4">{step.description}</p>
                
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10">
                  {step.active} active
                </Badge>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-4 h-0 items-center justify-center">
                    <ChevronRight className="h-6 w-6 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}