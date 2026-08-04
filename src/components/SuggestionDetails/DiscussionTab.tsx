import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, Reply, MoreHorizontal } from "lucide-react";

const comments = [
  {
    id: 1,
    user: { name: "James Park", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg", initials: "JP" },
    text: "I've reviewed the current drop-off metrics. The technical setup indeed seems to be the biggest hurdle. The proposal for interactive tooltips is solid.",
    time: "2 hours ago",
    likes: 4,
    replies: 2,
  },
  {
    id: 2,
    user: { name: "Maria Garcia", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg", initials: "MG" },
    text: "Should we also consider adding a video tutorial for the more complex parts of the setup?",
    time: "5 hours ago",
    likes: 2,
    replies: 0,
  },
  {
    id: 3,
    user: { name: "Alex Chen", avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg", initials: "AC" },
    text: "I can help with the 'Quick Start' templates. We already have some internal scripts that could be repurposed for this.",
    time: "Yesterday",
    likes: 8,
    replies: 1,
  },
];

export function DiscussionTab() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-3xl">
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={comment.user.avatar} />
              <AvatarFallback>{comment.user.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-foreground">{comment.user.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{comment.time}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{comment.text}</p>
              <div className="flex items-center gap-4 pt-2">
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  {comment.likes} Likes
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Reply className="w-3.5 h-3.5" />
                  Reply
                </button>
                {comment.replies > 0 && (
                  <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-4 mt-8">
        <div className="flex gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>
          <Textarea 
            placeholder="Add a comment or feedback..." 
            className="flex-1 bg-white resize-none min-h-[100px]"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button size="sm">Comment</Button>
        </div>
      </div>
    </div>
  );
}