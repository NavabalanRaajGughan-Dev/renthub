# RentHub

> **Rent anything from your neighbors.**

A modern peer-to-peer rental marketplace where people can list, discover, and rent items within their local community — from tools and equipment to cameras, furniture, and beyond.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Database ORM | Prisma |
| Backend-as-a-Service | Supabase |
| Authentication | Better Auth |
| Payments | Stripe |
| Image Hosting | Cloudinary |
| Maps | Leaflet + React Leaflet |
| Email | Resend + React Email |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| State Management | Zustand |
| Notifications | Sonner |

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/renthub.git
cd renthub

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
# Database
DATABASE_URL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Resend
RESEND_API_KEY=
```

### Database Setup

```bash
# Push schema to your database
pnpm prisma db push

# Or run migrations
pnpm prisma migrate dev
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
renthub/
├── src/
│   ├── app/               # Next.js App Router pages & layouts
│   ├── components/
│   │   └── ui/            # Reusable shadcn/ui components
│   └── lib/               # Utility functions and shared logic
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

---

## Features (Planned)

- [ ] User authentication (sign up, login, OAuth)
- [ ] Item listings with image upload
- [ ] Location-based search with map view
- [ ] Booking calendar & availability management
- [ ] Stripe-powered payments & payouts
- [ ] In-app messaging between renters and owners
- [ ] Reviews and ratings
- [ ] Owner and renter dashboards with analytics

---

## Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

---

## License

MIT
