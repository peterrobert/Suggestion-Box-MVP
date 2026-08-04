import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-primary rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-24 text-center text-primary-foreground shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to build transparent decisions?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-10">
              Join hundreds of organizations making better decisions with Suggestion Box.
              Start your 14-day trial for just $1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/register">Start Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <Link to="/dashboard">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}