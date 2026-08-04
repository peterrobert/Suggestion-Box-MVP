import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <h2 className="relative z-10 text-3xl font-bold tracking-tight sm:text-5xl mb-6">
          Ready to build a transparent culture?
        </h2>
        <p className="relative z-10 mx-auto max-w-2xl text-lg text-primary-foreground/80 mb-10">
          Join hundreds of organizations making better, more inclusive decisions every day with Suggestion Box.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 h-14 text-lg font-bold">
              Start Your Workspace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/landing">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 px-8 h-14 text-lg font-bold">
              View Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};