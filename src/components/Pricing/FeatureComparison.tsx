import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const comparisonData = [
  {
    category: 'Core Features',
    features: [
      { name: 'Decision Engine', basic: true, pro: true },
      { name: 'Workflow Stages', basic: 'Up to 3', pro: 'Unlimited' },
      { name: 'Dashboard', basic: true, pro: true },
      { name: 'Notifications', basic: true, pro: true },
      { name: 'Audit History', basic: '30 days', pro: 'Full History' },
    ],
  },
  {
    category: 'Collaboration',
    features: [
      { name: 'Groups', basic: false, pro: true },
      { name: 'Review Panels', basic: false, pro: true },
      { name: 'Evidence Management', basic: true, pro: true },
      { name: 'Discussion Threads', basic: true, pro: true },
    ],
  },
  {
    category: 'Administration',
    features: [
      { name: 'Role Management', basic: 'Standard', pro: 'Advanced' },
      { name: 'Member Invitations', basic: 'Up to 5', pro: 'Unlimited' },
      { name: 'Advanced Permissions', basic: false, pro: true },
      { name: 'Organization Settings', basic: true, pro: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Community Support', basic: true, pro: true },
      { name: 'Email Support', basic: true, pro: true },
      { name: 'Priority Support', basic: false, pro: true },
      { name: 'Dedicated CSM', basic: false, pro: true },
    ],
  },
];

export const FeatureComparison = () => {
  return (
    <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Compare Features</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Detailed comparison to help you choose the right plan.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-1/3 py-6 font-bold text-foreground">Feature</TableHead>
              <TableHead className="w-1/3 py-6 font-bold text-foreground">Basic</TableHead>
              <TableHead className="w-1/3 py-6 font-bold text-foreground">Pro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((group) => (
              <React.Fragment key={group.category}>
                <TableRow className="bg-muted/30">
                  <TableCell colSpan={3} className="py-3 font-semibold text-primary uppercase tracking-wider text-xs">
                    {group.category}
                  </TableCell>
                </TableRow>
                {group.features.map((feature) => (
                  <TableRow key={feature.name} className="hover:bg-accent/5 transition-colors">
                    <TableCell className="py-4 font-medium">{feature.name}</TableCell>
                    <TableCell className="py-4">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground/30" />
                      ) : (
                        <span className="text-sm font-medium">{feature.basic}</span>
                      )}
                    </TableCell>
                    <TableCell className="py-4">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground/30" />
                      ) : (
                        <span className="text-sm font-medium">{feature.pro}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};