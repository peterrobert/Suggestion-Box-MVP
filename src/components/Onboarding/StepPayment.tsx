import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Lock, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StepPaymentProps {
  form: UseFormReturn<any>;
}

export const StepPayment: React.FC<StepPaymentProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
        <div className="flex items-center gap-3">
          <CreditCard className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Payment Method</p>
            <p className="text-xs text-muted-foreground">Secure encrypted payment</p>
          </div>
        </div>
        <Badge variant="secondary" className="font-mono">TEST MODE</Badge>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="cardHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cardholder Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="0000 0000 0000 0000"
                    className="pr-10"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                      field.onChange(value);
                    }}
                    maxLength={19}
                  />
                  <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="expiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="MM/YY"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').replace(/^(\d{2})/, '$1/').substring(0, 5);
                      field.onChange(value);
                    }}
                    maxLength={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123"
                    {...field}
                    type="password"
                    maxLength={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="text-sm font-semibold mb-4">Billing Address</h4>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="billingAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="billingCity"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billingZip"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="ZIP / Postcode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground mt-4">
        <Lock className="w-3 h-3" />
        <span>Your payment information is processed securely by Stripe.</span>
      </div>
    </div>
  );
};