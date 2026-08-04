import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuggestionsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="mb-6">
        <img className="w-64 h-64 object-contain mx-auto" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_aeb716067d_fa402d495f29fe48.png" alt="empty suggestions box illustration, minimal, teal" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">No suggestions found</h3>
      <p className="text-muted-foreground max-w-sm mb-8">
        Try adjusting your filters or create your first suggestion to get the conversation started.
      </p>
      <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-full px-6">
        <Plus className="w-4 h-4 mr-2" />
        Create Suggestion
      </Button>
    </div>
  );
}