import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";

const placeholderItems = [
  {
    id: "1",
    title: "Canon EOS R5 Camera Kit",
    price: 45,
    rating: 4.9,
    reviews: 23,
    location: "Colombo",
    category: "Cameras",
    image: "📷",
  },
  {
    id: "2",
    title: "4-Person Camping Tent",
    price: 25,
    rating: 4.7,
    reviews: 15,
    location: "Kandy",
    category: "Camping",
    image: "⛺",
  },
  {
    id: "3",
    title: "DeWalt Power Drill Set",
    price: 15,
    rating: 4.8,
    reviews: 31,
    location: "Galle",
    category: "Tools",
    image: "🔧",
  },
  {
    id: "4",
    title: "Men's Formal Suit (Black)",
    price: 35,
    rating: 5.0,
    reviews: 8,
    location: "Negombo",
    category: "Formal Wear",
    image: "🤵",
  },
  {
    id: "5",
    title: "Yamaha Acoustic Guitar",
    price: 20,
    rating: 4.6,
    reviews: 12,
    location: "Colombo",
    category: "Musical",
    image: "🎸",
  },
  {
    id: "6",
    title: "DJI Mavic 3 Drone",
    price: 60,
    rating: 4.9,
    reviews: 19,
    location: "Matara",
    category: "Electronics",
    image: "🚁",
  },
];

export function FeaturedItems() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Featured Items
            </h2>
            <p className="mt-2 text-neutral-400">
              Popular rentals in your area
            </p>
          </div>
          <Link
            href="/browse"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderItems.map((item) => (
            <Link key={item.id} href={`/items/${item.id}`}>
              <Card className="group cursor-pointer border-neutral-800 bg-neutral-900/50 transition-all hover:border-neutral-700 hover:bg-neutral-900">
                {/* Image placeholder */}
                <div className="flex h-48 items-center justify-center rounded-t-lg bg-neutral-800/50 text-6xl">
                  {item.image}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-neutral-700 text-neutral-400"
                    >
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                      <span className="text-white">{item.rating}</span>
                      <span className="text-neutral-500">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-3 font-semibold text-white group-hover:text-neutral-200">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1 text-sm text-neutral-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </div>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white">
                      ${item.price}
                    </span>
                    <span className="text-sm text-neutral-500">/ day</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}