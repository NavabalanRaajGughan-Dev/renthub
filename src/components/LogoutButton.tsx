"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
    setLoading(false);
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      variant="outline"
      className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
    >
      {loading ? "Signing out..." : "Sign Out"}
    </Button>
  );
}