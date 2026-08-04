import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead",
    company: "TechFlow",
    quote: "Suggestion Box transformed how we prioritize our roadmap. The transparency built into the tool has made our decision-making process much smoother.",
  },
  {
    name: "Marcus Thorne",
    role: "Operations Director",
    company: "Global Scale",
    quote: "The audit trail is a game changer for compliance. We finally have a clear history of why every major organizational decision was made.",
  },
  {
    name: "Elena Rodriguez",
    role: "CEO",
    company: "InnovaSoft",
    quote: "Our team feels more heard than ever. Even if an idea isn't implemented, the review process ensures everyone understands the reasoning.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Trusted by Decision Makers</h2>
          <p className="mt-4 text-muted-foreground">
            Teams around the world are using Suggestion Box to build transparency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};