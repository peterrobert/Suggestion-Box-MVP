import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "What is a seat?",
    a: "A seat is a unique user account in your organization. This includes contributors, reviewers, and administrators."
  },
  {
    q: "Can I change plans?",
    a: "Yes, you can upgrade or downgrade at any time. Changes will be reflected in your next billing cycle."
  },
  {
    q: "Is there a free trial?",
    a: "Our Basic plan is only $1/month, which we believe is accessible for everyone to explore the platform with no long-term commitment."
  },
  {
    q: "How does billing work?",
    a: "We offer both monthly and annual billing options. Annual billing includes a 20% discount."
  },
  {
    q: "What happens if I exceed 5 seats?",
    a: "If you need more than 5 seats, you'll need to upgrade to our Pro plan, which offers unlimited seats and advanced collaboration features."
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use enterprise-grade encryption and immutable records to ensure all decision data is safe and auditable."
  },
  {
    q: "Can I export my data?",
    a: "Yes, you can export all your decisions, discussion history, and audit logs in standardized formats at any time."
  },
  {
    q: "Do you offer discounts?",
    a: "Yes, we offer special pricing for registered non-profits and educational institutions. Please contact our sales team for details."
  }
];

export const FAQAccordion = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about Suggestion Box.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border bg-card px-6 rounded-lg shadow-sm">
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};