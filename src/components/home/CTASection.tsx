import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="border-t border-neutral-800 px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Start Renting?
        </h2>
        <p className="mt-4 text-lg text-neutral-400">
          Join our community of renters and owners. List your first item
          in minutes or find what you need today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register">
            <Button
              size="lg"
              className="w-full bg-white text-black hover:bg-neutral-200 sm:w-auto"
            >
              Create Free Account
            </Button>
          </Link>
          <Link href="/browse">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 sm:w-auto"
            >
              Browse Items
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          No credit card required. Free to join.
        </p>
      </div>
    </section>
  );
}