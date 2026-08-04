import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Zap, Headphones, Share2 } from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Custom SLA',
    description: 'Guaranteed uptime and support response times tailored to your needs.'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'SSO & Security',
    description: 'SAML SSO, SCIM provisioning, and advanced security controls.'
  },
  {
    icon: <Headphones className="h-6 w-6 text-primary" />,
    title: 'Dedicated Support',
    description: 'A dedicated customer success manager to help you scale.'
  },
  {
    icon: <Share2 className="h-6 w-6 text-primary" />,
    title: 'Custom Integrations',
    description: 'Connect with your existing tools via our enterprise API.'
  }
];

export const EnterpriseContact = () => {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Enterprise</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Need more control and security? Our enterprise plan provides the tools and support required for large organizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-modal border">
            <h3 className="text-2xl font-bold mb-6">Contact Sales</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Team Size</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50-100 members</SelectItem>
                      <SelectItem value="101-500">101-500 members</SelectItem>
                      <SelectItem value="501-1000">501-1000 members</SelectItem>
                      <SelectItem value="1000+">1000+ members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your organization's needs..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};