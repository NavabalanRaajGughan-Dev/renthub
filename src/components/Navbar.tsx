"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          🏠 RentHub
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-8 w-20 animate-pulse rounded bg-neutral-800" />
          ) : session ? (
            <>
              <span className="text-sm text-neutral-400">
                Hi, {session.user.name}
              </span>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                >
                  Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-300 hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-neutral-200"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}