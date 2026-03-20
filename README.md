<div align="center">

# 🏠 RentHub

### **Peer-to-Peer Rental Marketplace**

*Rent anything from your neighbors — tools, cameras, furniture, and beyond.*

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Architecture](#-architecture) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure)

</div>

---

## 📌 About

**RentHub** is a full-stack peer-to-peer rental marketplace that enables users to list, discover, and rent items within their local community. Think of it as Airbnb — but for everyday items. Whether it's a power drill, a camera lens, or camping gear, RentHub connects owners with renters nearby, reducing waste and building community.

This project demonstrates proficiency in **modern full-stack development**, including real-time payments processing, geospatial search, authentication flows, and scalable application architecture.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure sign-up, login, and OAuth via Better Auth |
| 📦 **Item Listings** | Create, edit, and manage rental listings with multi-image upload |
| 🗺️ **Location-Based Search** | Interactive map view with Leaflet to discover items nearby |
| 📅 **Booking System** | Calendar-based availability management and reservation flow |
| 💳 **Payments & Payouts** | Stripe-powered secure payments, split payouts to item owners |
| 💬 **In-App Messaging** | Real-time chat between renters and owners |
| ⭐ **Reviews & Ratings** | Trust-building review system for completed rentals |
| 📊 **Analytics Dashboard** | Owner and renter dashboards with Recharts visualizations |
| 📧 **Transactional Emails** | Booking confirmations, reminders, and receipts via Resend |
| 🌙 **Dark Mode** | Full dark/light theme support with next-themes |

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) (App Router) | React framework with SSR, ISR & server actions |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development across the entire codebase |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with design tokens |
| [shadcn/ui](https://ui.shadcn.com/) + Radix UI | Accessible, customizable component library |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Performant forms with schema-based validation |
| [Zustand](https://zustand.docs.pmnd.rs/) | Lightweight, scalable state management |
| [Recharts](https://recharts.org/) | Composable charting for analytics dashboards |
| [Leaflet](https://leafletjs.com/) + React Leaflet | Interactive maps for location-based discovery |

### Backend & Infrastructure
| Technology | Purpose |
|---|---|
| [Supabase](https://supabase.com/) | PostgreSQL database, real-time subscriptions & storage |
| [Prisma](https://www.prisma.io/) | Type-safe ORM with auto-generated client |
| [Better Auth](https://www.better-auth.com/) | Flexible authentication with session management |
| [Stripe](https://stripe.com/) | Payment processing, subscriptions & webhook handling |
| [Cloudinary](https://cloudinary.com/) | Optimized image upload, transformation & CDN delivery |
| [Resend](https://resend.com/) + React Email | Transactional emails with React-based templates |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (Browser)                   │
│         Next.js App Router · React 19 · Zustand         │
└──────────────────────┬──────────────────────────────────┘
                       │
          ┌────────────▼────────────┐
          │    Next.js Server       │
          │  (API Routes + Server   │
          │     Actions + RSC)      │
          └────┬────┬────┬────┬────┘
               │    │    │    │
    ┌──────────▼┐ ┌─▼──┐ │  ┌▼──────────┐
    │  Supabase │ │Stripe│ │  │Cloudinary │
    │  (DB +    │ │(Pay- │ │  │ (Images)  │
    │  Auth)    │ │ments)│ │  └───────────┘
    └───────────┘ └─────┘  │
                     ┌─────▼──────┐
                     │   Resend   │
                     │  (Emails)  │
                     └────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** (package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/NavabalanRaajGughan-Dev/renthub.git
cd renthub

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

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

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
renthub/
├── src/
│   ├── app/                  # Next.js App Router — pages, layouts, API routes
│   ├── components/
│   │   └── ui/               # Reusable shadcn/ui components
│   └── lib/                  # Utility functions, helpers, and shared logic
├── prisma/                   # Database schema & migrations
├── public/                   # Static assets (images, icons, fonts)
├── .env.local                # Environment variables (not committed)
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Lint the codebase with ESLint |

---

## 🗺️ Roadmap

- [x] Project scaffolding & configuration
- [x] UI component library setup (shadcn/ui)
- [ ] User authentication (email, OAuth)
- [ ] Item listing CRUD with image upload
- [ ] Location-based search with interactive map
- [ ] Booking calendar & availability engine
- [ ] Stripe payment integration & owner payouts
- [ ] In-app messaging system
- [ ] Reviews & ratings
- [ ] Owner/renter analytics dashboards
- [ ] Email notifications (booking confirmations, reminders)
- [ ] Production deployment & CI/CD pipeline

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Navabalan Raaj Gughan](https://github.com/NavabalanRaajGughan-Dev)**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NavabalanRaajGughan-Dev)

</div>