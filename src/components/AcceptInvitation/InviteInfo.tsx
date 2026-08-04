import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface InviteInfoProps {
  orgName: string;
  role: string;
  inviterName: string;
  inviterAvatar?: string;
  note: string;
}

export const InviteInfo = ({
  orgName,
  role,
  inviterName,
  inviterAvatar,
  note
}: InviteInfoProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-20 w-20 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shadow-lg shadow-primary/20">
          {orgName.charAt(0)}
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            You've been invited to join
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {orgName}
          </h2>
          <div className="pt-1">
            <Badge variant="secondary" className="bg-accent text-accent-foreground border-none px-3 py-0.5 rounded-full font-semibold">
              {role}
            </Badge>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-background">
            <AvatarImage src={inviterAvatar} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
              {inviterName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm text-foreground">
            <span className="font-semibold">{inviterName}</span> invited you
          </p>
        </div>
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          "{note}"
        </p>
      </div>

      <Separator />
    </div>
  );
};