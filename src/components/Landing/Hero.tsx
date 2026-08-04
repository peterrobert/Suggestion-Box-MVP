import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              Trusted by 500+ organizations worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              Every Suggestion. <br />
              Every Decision. <br />
              <span className="text-primary">Complete Transparency.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
              Collect ideas, review them through a structured workflow, evaluate evidence, 
              and publish transparent decisions your entire organization can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/register">Start for $1</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                <Link to="/dashboard">Book a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative rounded-2xl border bg-card p-2 shadow-2xl animate-in zoom-in-95 duration-700">
              <img className="rounded-xl w-full h-auto aspect-[4/3] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_514be357c9_fc94a03f1e66334d.png" alt="Polished enterprise dashboard showing a suggestion workflow with stages like Draft, Live, In Resolut" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
    </section>
  )
}