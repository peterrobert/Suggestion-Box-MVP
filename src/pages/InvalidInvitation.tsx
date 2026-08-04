import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, XCircle, CheckCircle, Mail, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InvalidInvitation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="bg-card shadow-lg rounded-xl overflow-hidden border border-border">
          {/* Illustration Area */}
          <div className="bg-muted/50 p-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-16 h-16 text-destructive" />
              </div>
              <div className="absolute -bottom-2 -right-2">
                 <img className="w-20 h-20 rounded-lg shadow-md" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_49478a3187_ae05305dabf68b59.png" alt="invalid revoked access error illustration, minimal flat design, red and gray tones" />
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-2 text-center">
              <Badge variant="destructive" className="px-3 py-1 font-semibold">
                Invalid
              </Badge>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                This invitation is no longer valid
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This invitation link has been revoked or is invalid. This can happen if the invitation was cancelled by an administrator or if the link has already been used.
              </p>
            </div>

            {/* Possible reasons section */}
            <div className="bg-muted/30 rounded-lg border border-border p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Possible Reasons
              </p>
              <div className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                <span className="text-sm text-foreground/80">The invitation was revoked by an administrator</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground/80">The invitation link was already used</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-foreground/80">The invitation was sent to a different email address</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button asChild className="w-full h-11 text-base bg-primary hover:bg-primary/90">
                <Link to="/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Link>
              </Button>
              <Button variant="outline" className="w-full h-11 text-base">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Administrator
              </Button>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                Need assistance? Contact us at{" "}
                <a href="mailto:support@suggestionbox.com" className="font-medium text-primary hover:underline">
                  support@suggestionbox.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom breadcrumb / Branding */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-60">
          <Link to="/landing" className="flex items-center gap-2 transition-opacity hover:opacity-100">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
               <span className="text-[10px] font-bold text-primary-foreground">SB</span>
            </div>
            <span className="font-semibold text-sm tracking-tight text-foreground">Suggestion Box</span>
          </Link>
          <span className="text-xs text-muted-foreground">
            © 2025 Suggestion Box. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvalidInvitation;