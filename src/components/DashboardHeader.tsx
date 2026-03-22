import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MobileSidebar } from "@/components/DashboardSidebar";
import { LogoutButton } from "@/components/LogoutButton";

export async function DashboardHeader() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-neutral-400 sm:block">
          {session?.user?.email}
        </span>
        <LogoutButton />
      </div>
    </header>
  );
}