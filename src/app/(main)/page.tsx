import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4">
      <div className="text-center">
        {/* Badge */}
        <div className="mb-6 inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm text-neutral-400">
          ✨ The community rental marketplace
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
          Rent Anything
          <br />
          <span className="text-neutral-500">From Your Neighbors</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-lg text-lg text-neutral-400">
          Cameras, camping gear, tools, formal wear, and more.
          Save money and reduce waste by sharing with your community.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200"
            >
              Start Renting
            </Button>
          </Link>
          <Link href="/browse">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            >
              Browse Items
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-12 text-center">
          <div>
            <p className="text-2xl font-bold text-white">1,000+</p>
            <p className="text-sm text-neutral-500">Items Listed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-sm text-neutral-500">Active Renters</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-sm text-neutral-500">Avg Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}