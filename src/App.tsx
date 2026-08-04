import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Auth & Onboarding
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import AcceptInvitation from "./pages/AcceptInvitation";
import InvitationExpired from "./pages/InvitationExpired";
import InvalidInvitation from "./pages/InvalidInvitation";
import Onboarding from "./pages/Onboarding";

// App
import Dashboard from "./pages/Dashboard";
import Suggestions from "./pages/Suggestions";
import DraftSuggestions from "./pages/DraftSuggestions";
import SuggestionDetails from "./pages/SuggestionDetails";
import ReviewWorkspace from "./pages/ReviewWorkspace";
import VerdictPage from "./pages/VerdictPage";
import Administration from "./pages/Administration";
import Notifications from "./pages/Notifications";
import Account from "./pages/Account";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/accept-invitation" element={<AcceptInvitation />} />
          <Route path="/invitation-expired" element={<InvitationExpired />} />
          <Route path="/invalid-invitation" element={<InvalidInvitation />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* App */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/suggestions/drafts" element={<DraftSuggestions />} />
          <Route path="/suggestions/:id" element={<SuggestionDetails />} />
          <Route path="/suggestions/:id/review" element={<ReviewWorkspace />} />
          <Route path="/suggestions/:id/verdict" element={<VerdictPage />} />
          <Route path="/admin" element={<Administration />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;