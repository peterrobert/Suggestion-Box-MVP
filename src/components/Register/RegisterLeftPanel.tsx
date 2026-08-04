import { CheckCircle2, Zap, BarChart3 } from "lucide-react";

export const RegisterLeftPanel = () => {
  const benefits = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-accent-foreground" />,
      title: "Streamline Feedback",
      description: "Centralize all organization suggestions in one place.",
    },
    {
      icon: <Zap className="h-5 w-5 text-accent-foreground" />,
      title: "Actionable Insights",
      description: "Turn raw ideas into structured decisions with AI assistance.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-accent-foreground" />,
      title: "Transparent Governance",
      description: "Keep everyone in the loop with clear progress tracking.",
    },
  ];

  return (
    <div className="hidden lg:flex lg:w-[40%] flex-col justify-between p-12 bg-gradient-to-br from-[#0F766E] to-[#134E4A] text-white overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Zap className="h-6 w-6 text-primary fill-primary" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Suggestion Box</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
            Create your organization
          </h1>
          <p className="text-teal-50/80 text-lg max-w-md">
            Empower your team to participate in the decision-making process with a transparent and collaborative suggestion platform.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{benefit.title}</h3>
                <p className="text-teal-50/60 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`h-1.5 w-8 rounded-full ${
                  step === 1 ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-teal-50/80 uppercase tracking-wider">
            Step 1 of 5 — Account
          </span>
        </div>
      </div>

      {/* Illustration / Decorative element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
      
      <div className="mt-auto relative z-10 pt-12">
        <img className="rounded-2xl shadow-2xl border border-white/10 w-full aspect-video object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9a15636519_7a710857947066b3.png" alt="Modern enterprise team collaborating on a digital interface showing transparent organizational decis" />
      </div>
    </div>
  );
};