import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
  badge?: string;
}

export const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaLink,
  highlighted = false,
  badge,
}: PricingCardProps) => {
  return (
    <Card className={`flex flex-col h-full transition-all duration-300 ${highlighted ? 'border-primary shadow-lg ring-1 ring-primary' : 'shadow-card border-border hover:shadow-card-hover'}`}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {badge && (
            <Badge className="bg-primary hover:bg-primary text-primary-foreground">
              {badge}
            </Badge>
          )}
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="text-sm font-medium text-muted-foreground">{period}</span>
        </div>
        <CardDescription className="pt-4 text-base min-h-[48px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm text-foreground/80 leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Link to={ctaLink} className="w-full">
          <Button
            className={`w-full h-12 font-semibold ${highlighted ? 'bg-primary hover:bg-primary/90' : 'border-primary/20 hover:border-primary/40'}`}
            variant={highlighted ? 'default' : 'outline'}
          >
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};