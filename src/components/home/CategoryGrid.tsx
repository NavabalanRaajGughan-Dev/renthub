import Link from "next/link";
import {
  Camera,
  Tent,
  Shirt,
  Wrench,
  Laptop,
  Dumbbell,
  Music,
  Car,
  PartyPopper,
  Home,
  BookOpen,
  Package,
} from "lucide-react";

const categories = [
  { name: "Cameras", slug: "cameras", icon: Camera, color: "text-blue-400" },
  { name: "Camping", slug: "camping", icon: Tent, color: "text-green-400" },
  { name: "Formal Wear", slug: "formal-wear", icon: Shirt, color: "text-pink-400" },
  { name: "Tools", slug: "tools", icon: Wrench, color: "text-yellow-400" },
  { name: "Electronics", slug: "electronics", icon: Laptop, color: "text-cyan-400" },
  { name: "Sports", slug: "sports", icon: Dumbbell, color: "text-orange-400" },
  { name: "Musical", slug: "musical", icon: Music, color: "text-purple-400" },
  { name: "Vehicles", slug: "vehicles", icon: Car, color: "text-red-400" },
  { name: "Party", slug: "party", icon: PartyPopper, color: "text-amber-400" },
  { name: "Home & Garden", slug: "home-garden", icon: Home, color: "text-emerald-400" },
  { name: "Books", slug: "books", icon: BookOpen, color: "text-indigo-400" },
  { name: "Other", slug: "other", icon: Package, color: "text-neutral-400" },
];

export function CategoryGrid() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Browse by Category
          </h2>
          <p className="mt-2 text-neutral-400">
            Find exactly what you need from our wide selection
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/browse?category=${cat.slug}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div className="rounded-lg bg-neutral-800/50 p-3 transition-colors group-hover:bg-neutral-800">
                <cat.icon className={`h-6 w-6 ${cat.color}`} />
              </div>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}