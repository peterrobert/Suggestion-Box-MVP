import { useParams } from "react-router-dom";
import AppShell from "@/components/AppShell";
import { VerdictHeader } from "@/components/VerdictPage/VerdictHeader";
import { EvidenceCard } from "@/components/VerdictPage/EvidenceCard";
import { DecisionHistory } from "@/components/VerdictPage/DecisionHistory";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  TrendingUp, 
  BookOpen, 
  Copy, 
  Share2,
  Clock,
  Layout,
  ExternalLink
} from "lucide-react";

export default function VerdictPage() {
  const { id = "SB-0042" } = useParams<{ id: string }>();

  return (
    <AppShell 
      pageTitle="Verdict — Redesign Customer Onboarding Flow" 
      breadcrumb="Suggestions"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <VerdictHeader id={id} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (2/3) */}
          <div className="lg:col-span-8 space-y-10 pb-20">
            {/* Section 1: Verdict Statement */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded-full bg-brand-success/10">
                  <CheckCircle2 className="w-6 h-6 text-brand-success" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Decision</h2>
              </div>
              
              <div className="bg-brand-bg border-l-4 border-brand-success rounded-r-lg p-6 shadow-sm">
                <p className="text-lg font-medium text-brand-text leading-relaxed">
                  This suggestion has been <span className="font-bold text-brand-success">Approved</span>. 
                  The organization will proceed with the redesign of the customer onboarding flow in Q2 2025.
                </p>
                <div className="mt-4 pt-4 border-t border-brand-border/50 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm">
                  <div>
                    <span className="text-muted-foreground">Authorized by:</span>
                    <span className="ml-2 font-semibold text-foreground">James Park (Reviewer)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>
                    <span className="ml-2 font-semibold text-foreground">Feb 15, 2025</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Reasoning */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Reasoning</h3>
              <p className="text-muted-foreground leading-relaxed">
                The current onboarding flow has a drop-off rate of 42%, significantly higher than the industry average of 25%. 
                The proposed redesign simplifies the data collection phase and introduces progressive disclosure, 
                which our user testing indicates will reduce friction. Furthermore, the integration with external 
                data providers will automate 30% of the manual input required from users.
              </p>
            </section>

            {/* Section 3: Evidence Summary */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Evidence Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <EvidenceCard 
                  title="Q4 Onboarding Analytics" 
                  type="Data Report" 
                  quality="Strong" 
                  verified={true} 
                />
                <EvidenceCard 
                  title="User Interviews (12 pts)" 
                  type="Qualitative" 
                  quality="Medium" 
                  verified={true} 
                />
                <EvidenceCard 
                  title="Competitor Analysis" 
                  type="Research" 
                  quality="Strong" 
                  verified={true} 
                />
              </div>
            </section>

            {/* Section 4: Conditions */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Conditions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50">
                  <Checkbox id="cond-1" checked className="mt-1" />
                  <label htmlFor="cond-1" className="text-sm font-medium leading-tight cursor-pointer">
                    1. Completion of the detailed technical architecture review by the Engineering leadership.
                    <p className="text-xs text-muted-foreground mt-1 font-normal">Fulfilled on Feb 12, 2025</p>
                  </label>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50">
                  <Checkbox id="cond-2" className="mt-1" />
                  <label htmlFor="cond-2" className="text-sm font-medium leading-tight cursor-pointer">
                    2. Approval of the revised privacy policy regarding external data provider integration.
                    <p className="text-xs text-muted-foreground mt-1 font-normal">Pending Legal Review</p>
                  </label>
                </div>
              </div>
            </section>

            {/* Section 5: Trade-offs */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Trade-offs Acknowledged</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">Timeline Extension</h5>
                    <p className="text-xs text-muted-foreground">Initial implementation will take 6 weeks instead of 4.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">Design Consistency</h5>
                    <p className="text-xs text-muted-foreground">Deviates from legacy patterns but aligns with new brand guidelines.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Lessons Learned */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                Lessons Learned
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "Early involvement of the compliance team during the suggestion phase would have accelerated the resolution process. 
                Moving forward, all onboarding changes should include a privacy impact assessment by default."
              </p>
            </section>

            {/* Section 7: Next Step */}
            <section>
              <div className="bg-brand-success/5 border border-brand-success/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-success font-bold text-sm uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    Recommended Next Step
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Project Kickoff & Resource Allocation</h4>
                  <p className="text-sm text-muted-foreground max-w-lg">
                    Finalize the project team roster and schedule the kickoff meeting for the first week of April.
                  </p>
                </div>
                <Button className="bg-brand-success hover:bg-brand-success/90 text-white shrink-0">
                  Initiate Kickoff
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar (1/3) */}
          <aside className="lg:col-span-4 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Decision History</CardTitle>
                <CardDescription>Timeline of the verdict process</CardDescription>
              </CardHeader>
              <CardContent>
                <DecisionHistory />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex justify-between items-center text-sm py-2 border-b border-border">
                  <span className="text-muted-foreground">Suggestion ID</span>
                  <span className="font-mono font-bold text-foreground">#SB-0042</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-border">
                  <span className="text-muted-foreground">Created by</span>
                  <span className="font-medium text-foreground">Sarah Chen</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-border">
                  <span className="text-muted-foreground">Reviewed by</span>
                  <span className="font-medium text-foreground">James Park</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-border">
                  <span className="text-muted-foreground">Group</span>
                  <span className="font-medium text-foreground">Marketing</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-muted-foreground">Review Duration</span>
                  <span className="font-medium text-foreground">36 days</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold">Share this verdict</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    value={`https://app.acme.com/verdict/${id}`} 
                    readOnly 
                    className="h-9 text-xs bg-muted" 
                  />
                  <Button size="icon" variant="outline" className="h-9 w-9 shrink-0">
                    <Copy className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Share2 className="w-3.5 h-3.5 mr-2" />
                    Internal Link
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    External URL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Footer Notice */}
        <footer className="mt-12 mb-20 p-6 bg-muted/30 border-l-4 border-teal-500 rounded-r-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-teal-600 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-foreground">Immutability Notice</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                This decision record is permanent and cannot be modified. It forms part of this organization's official decision history. 
                Any further adjustments must be recorded as a new suggestion or amendment record.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AppShell>
  );
}