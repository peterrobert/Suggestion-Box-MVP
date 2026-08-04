import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, CheckCircle2, TrendingUp, Users, Lightbulb } from "lucide-react";

const invoices = [
  { id: "INV-2025-002", date: "Feb 1, 2025", amount: "$1.00", status: "Paid" },
  { id: "INV-2025-001", date: "Jan 1, 2025", amount: "$1.00", status: "Paid" },
  { id: "INV-2024-012", date: "Dec 1, 2024", amount: "$1.00", status: "Paid" },
];

export function BillingTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <TrendingUp className="w-24 h-24" />
          </div>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Basic Plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">$1</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00a396]" />
                <span>Up to 5 organization members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00a396]" />
                <span>Unlimited suggestions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00a396]" />
                <span>Standard review workflow</span>
              </div>
            </div>
            <div className="pt-4 flex gap-3">
              <Button className="bg-[#00a396] hover:bg-[#008f84]">Upgrade Plan</Button>
              <Button variant="outline">Manage Subscription</Button>
            </div>
          </CardContent>
          <div className="bg-muted/50 p-4 border-t text-xs text-muted-foreground flex justify-between">
            <span>Next renewal: Mar 1, 2025</span>
            <span className="font-medium text-foreground">4 / 5 seats used</span>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Primary method used for your subscription.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center border">
                <CreditCard className="w-6 h-6 text-slate-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/2026</p>
              </div>
              <Button variant="ghost" size="sm" className="text-[#00a396]">Edit</Button>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Usage Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/30 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-xs uppercase font-semibold">Active Seats</span>
                  </div>
                  <p className="text-xl font-bold">4 / 5</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span className="text-xs uppercase font-semibold">Decisions</span>
                  </div>
                  <p className="text-xl font-bold">18</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm pt-2">
                <span className="text-muted-foreground">Transparency Score</span>
                <span className="font-bold text-[#00a396]">82%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#00a396] w-[82%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>Download past invoices for your records.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}