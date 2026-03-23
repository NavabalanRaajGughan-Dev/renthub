import { Search, CalendarCheck, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find What You Need",
    description:
      "Browse thousands of items available for rent in your area. Filter by category, price, and location.",
    step: "01",
  },
  {
    icon: CalendarCheck,
    title: "Book & Pay Securely",
    description:
      "Select your rental dates, pay securely through Stripe, and coordinate pickup with the owner.",
    step: "02",
  },
  {
    icon: PackageCheck,
    title: "Enjoy & Return",
    description:
      "Use the item for your rental period, then return it. Leave a review and get your deposit back.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-neutral-800 bg-neutral-900/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">How It Works</h2>
          <p className="mt-2 text-neutral-400">
            Renting from your neighbors is easy as 1-2-3
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-neutral-800 md:block" />
              )}

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-neutral-800/50" />
                <step.icon className="relative h-8 w-8 text-white" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}