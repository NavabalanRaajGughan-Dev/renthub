import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4">
      <h1 className="text-8xl font-bold text-neutral-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-neutral-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button className="bg-white text-black hover:bg-neutral-200">
            Go Home
          </Button>
        </Link>
        <Link href="/browse">
          <Button
            variant="outline"
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
          >
            Browse Items
          </Button>
        </Link>
      </div>
    </div>
  );
}