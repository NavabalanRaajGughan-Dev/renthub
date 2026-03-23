import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Renter",
    text: "Saved $500 by renting a camera kit for my vacation instead of buying one. The owner was super helpful with tips too!",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Item Owner",
    text: "I've made over $2,000 renting out my camping gear on weekends. My equipment pays for itself now!",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Renter",
    text: "Needed a formal suit for one event. Rented a beautiful designer suit for a fraction of the price. Perfect fit!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            What Our Community Says
          </h2>
          <p className="mt-2 text-neutral-400">
            Join thousands of happy renters and owners
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="border-neutral-800 bg-neutral-900/50 p-6"
            >
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}