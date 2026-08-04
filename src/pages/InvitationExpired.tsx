import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, Mail, Building2, User2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const InvitationExpired = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6">
        <Card className="border-none shadow-modal rounded-xl overflow-hidden">
          <div className="bg-muted/50 p-8 flex justify-center">
            <div className="relative">
               <img className="w-48 h-48 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c78ad3fe84_d101b67ce1af38c9.png" alt="expired invitation hourglass illustration, minimal flat design, teal and gray palette" />
            </div>
          </div>
          
          <CardHeader className="text-center pt-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-warning))] bg-opacity-10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[hsl(var(--brand-warning))]" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Invitation Expired</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              This invitation link is no longer valid. Invitation links expire after 7 days for security reasons.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-muted rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Invited to:</span>
                <span className="font-medium text-foreground ml-auto">Acme Corporation</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Invited by:</span>
                <span className="font-medium text-foreground ml-auto">Sarah Chen</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[hsl(var(--brand-warning))]">
                <Clock className="w-4 h-4" />
                <span>Expired:</span>
                <span className="font-medium ml-auto">3 days ago</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-[hsl(var(--brand-hover))] text-white font-semibold h-11">
                Request New Invitation
              </Button>
              <p className="text-[11px] text-center text-muted-foreground px-4">
                We'll notify the organization admin to send a fresh invite.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col border-t bg-muted/30 p-0">
            <Link 
              to="/login" 
              className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Login
            </Link>
          </CardFooter>
        </Card>

        <div className="px-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="help" className="border-none">
              <AccordionTrigger className="text-sm text-muted-foreground hover:no-underline py-2">
                Need help?
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-background border flex items-center justify-center shrink-0">
                    <User2 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Contact the organization admin</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Reach out to the person who invited you to request a direct link.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-background border flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Email Support</p>
                    <a href="mailto:support@suggestionbox.com" className="text-[11px] text-primary hover:underline">
                      support@suggestionbox.com
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default InvitationExpired;