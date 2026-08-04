import * as React from "react"
import { Navbar } from "@/components/Landing/Navbar"
import { Hero } from "@/components/Landing/Hero"
import { TrustedBy } from "@/components/Landing/TrustedBy"
import { FeatureGrid } from "@/components/Landing/FeatureGrid"
import { WorkflowSection } from "@/components/Landing/WorkflowSection"
import { PricingPreview } from "@/components/Landing/PricingPreview"
import { SecuritySection } from "@/components/Landing/SecuritySection"
import { FinalCTA } from "@/components/Landing/FinalCTA"
import { Footer } from "@/components/Landing/Footer"

const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <FeatureGrid />
        <WorkflowSection />
        <PricingPreview />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Landing