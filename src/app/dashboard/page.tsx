import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Welcome, {session.user.name}! 🎉
        </h1>
        <p className="mt-4 text-neutral-400">
          You are logged in as {session.user.email}
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Day 2 — Authentication Working ✅
        </p>
      </div>
    </div>
  );
}