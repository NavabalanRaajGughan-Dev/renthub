import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Card } from "@/components/ui/card";
import { Package, CalendarCheck, DollarSign, Star } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-white">
        Welcome back, {session?.user?.name}! 👋
      </h1>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-neutral-800 bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-500/10 p-3">
              <Package className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">My Items</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </Card>

        <Card className="border-neutral-800 bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-green-500/10 p-3">
              <CalendarCheck className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Active Bookings</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </Card>

        <Card className="border-neutral-800 bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-yellow-500/10 p-3">
              <DollarSign className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Total Earnings</p>
              <p className="text-2xl font-bold text-white">$0.00</p>
            </div>
          </div>
        </Card>

        <Card className="border-neutral-800 bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-500/10 p-3">
              <Star className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Avg Rating</p>
              <p className="text-2xl font-bold text-white">--</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Recent Activity
        </h2>
        <Card className="border-neutral-800 bg-neutral-900 p-8">
          <p className="text-center text-neutral-500">
            No activity yet. Start by listing your first item!
          </p>
        </Card>
      </div>
    </div>
  );
}