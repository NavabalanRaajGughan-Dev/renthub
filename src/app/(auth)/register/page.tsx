"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signUpError } = await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setError(ctx.error.message);
        },
      }
    );

    setLoading(false);
  };

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-white">Create Account</h1>
      <p className="mb-8 text-neutral-400">
        Join RentHub and start renting
      </p>

      {error && (
        <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-neutral-300">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-neutral-900 border-neutral-800 text-white"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-300">
            Email
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-neutral-900 border-neutral-800 text-white"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-300">
            Password
          </label>
          <Input
            type="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="bg-neutral-900 border-neutral-800 text-white"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black hover:bg-neutral-200"
        >
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-400">
        Already have an account?{" "}
        <Link href="/login" className="text-white underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}