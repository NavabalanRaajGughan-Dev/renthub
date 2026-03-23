"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/browse");
    }
  };

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-950" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-sm text-neutral-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          500+ items available near you
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Rent Anything
          <br />
          <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            From Your Neighbors
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          Why buy when you can rent? Cameras, camping gear, tools, formal wear
          — save money and reduce waste by sharing with your community.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 p-2 backdrop-blur-sm"
        >
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="h-4 w-4 text-neutral-500" />
            <Input
              type="text"
              placeholder="What do you want to rent?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 bg-transparent text-white placeholder:text-neutral-500 focus-visible:ring-0"
            />
          </div>
          <Button
            type="submit"
            className="bg-white text-black hover:bg-neutral-200"
          >
            Search
          </Button>
        </form>

        {/* Popular searches */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500">
          <span>Popular:</span>
          {["Camera", "Tent", "Drill", "Suit", "Guitar"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                router.push(`/browse?q=${item}`);
              }}
              className="rounded-full border border-neutral-800 px-3 py-1 transition-colors hover:border-neutral-600 hover:text-neutral-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
          <div>
            <p className="text-2xl font-bold text-white">1,000+</p>
            <p className="text-sm text-neutral-500">Items Listed</p>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-sm text-neutral-500">Active Renters</p>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div>
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-sm text-neutral-500">Avg Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}