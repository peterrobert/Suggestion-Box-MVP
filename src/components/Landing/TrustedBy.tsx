import * as React from "react"

const partners = [
  "Acme Corp",
  "Nexus",
  "Meridian",
  "Orbis",
  "Vertex",
  "Cascadia",
]

export const TrustedBy = () => {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by forward-thinking organizations
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 lg:justify-between items-center opacity-60 grayscale">
          {partners.map((partner) => (
            <span key={partner} className="text-2xl font-bold text-muted-foreground whitespace-nowrap">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}