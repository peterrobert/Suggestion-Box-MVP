import React, { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, X, UserPlus, Shield, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StepInviteProps {
  form: UseFormReturn<any>;
}

export const StepInvite: React.FC<StepInviteProps> = ({ form }) => {
  const [emailInput, setEmailInput] = useState('');
  const [roleInput, setRoleInput] = useState('member');

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'invitees',
  });

  const addInvitee = () => {
    if (emailInput && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      append({ email: emailInput, role: roleInput });
      setEmailInput('');
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Shield className="w-3 h-3 mr-1" />;
      case 'reviewer': return <UserPlus className="w-3 h-3 mr-1" />;
      default: return <User className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="teammate@company.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInvitee())}
            />
          </div>
          <div className="w-[120px]">
            <Select value={roleInput} onValueChange={setRoleInput}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="reviewer">Reviewer</SelectItem>
                <SelectItem value="member">Member</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="button" variant="outline" onClick={addInvitee}>
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>

        {fields.length > 0 && (
          <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center justify-between p-3 bg-card hover:bg-muted/30 transition-colors">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{(field as any).email}</span>
                  <div className="flex items-center mt-1">
                    <Badge variant="secondary" className="text-[10px] py-0 h-4 flex items-center">
                      {getRoleIcon((field as any).role)}
                      {(field as any).role}
                    </Badge>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => remove(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {fields.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-border rounded-lg bg-muted/20">
            <UserPlus className="h-8 w-8 text-muted-foreground/50 mb-2" />
            <p className="text-sm text-muted-foreground text-center">
              No team members added yet. Invite your colleagues to collaborate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};