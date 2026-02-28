<div align="center">

# ◆ APEX AUTO

### A high-end luxury car dealership — built with Next.js + TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

<br/>

> Engineered beyond limits.
> A frontend luxury car dealership platform inspired by Balenciaga — pure black and white, Helvetica, zero decoration, radical minimalism.

<br/>

</div>

---

## ✦ What is this?

Apex Auto is a luxury car dealership website featuring editorial car showcases, a full catalog with filtering, detailed spec pages with color configurators, test drive booking, and a personal profile with booking history.

Built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 |
| UI Components | shadcn/ui + Radix UI |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod |
| State | Context API (Auth, Wishlist, TestDrive) |
| Data | Local TypeScript (lib/cars.ts) |
| Icons | Lucide React |

---

## ✦ Pages

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home — hero, stat counters, model lineup | No |
| `/catalog` | All Models — filter by category, sort | No |
| `/car/[id]` | Car Detail — specs, color configurator, gallery | Login to book |
| `/test-drive` | Test Drive Booking | ✓ Yes |
| `/login` | Login | No |
| `/register` | Register | No |
| `/profile` | Profile, bookings, wishlist | ✓ Yes |

---

## ✦ Features

### 🚗 Dealership
- Editorial homepage with animated stat counters (HP, 0–100, top speed)
- Horizontal model lineup scroll
- Full catalog with category filter: ALL · SUPERCAR · GRAND TOURER · SUV · ELECTRIC · HYPERCAR
- Car detail with full technical specs table
- Color configurator — click swatch to swap car image
- Interior gallery horizontal scroll

### 🔐 Auth
- Register & Login with form validation (Zod)
- Protected routes — redirect to `/login` if not authenticated
- User state persisted in localStorage via Context

### 👤 Profile
- Account info: name, email, phone, member tier
- My Test Drives: car, date, time, status (SCHEDULED / COMPLETED / CANCELLED), cancel option
- Wishlist: saved cars grid
- Member tier: STANDARD / PREFERRED / ELITE based on booking count

### 🚘 Cars
- **Porsche** — 911 GT3 RS, Taycan Turbo GT
- **Lamborghini** — Huracán STO, Revuelto
- **Bugatti** — Chiron Super Sport, Tourbillon
- **Koenigsegg** — Jesko Absolut, CC850

---

## ✦ Project Structure

```
apex-auto/
│
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home
│   ├── catalog/page.tsx        # All Models
│   ├── car/[id]/page.tsx       # Car Detail
│   ├── test-drive/page.tsx     # Test Drive Booking
│   ├── login/page.tsx          # Login
│   ├── register/page.tsx       # Register
│   ├── profile/page.tsx        # Profile
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CarCard.tsx
│   ├── StatCounter.tsx
│   ├── CustomCursor.tsx
│   └── ui/                     # shadcn/ui components
│
├── context/
│   ├── AuthContext.tsx
│   ├── WishlistContext.tsx
│   └── TestDriveContext.tsx
│
├── lib/
│   ├── cars.ts                 # All car data with specs + image URLs
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts
│
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
│
└── styles/
    └── globals.css
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm start
```

---

## ✦ Design System

Inspired by **balenciaga.com**:

- **Background:** `#FFFFFF` pure white / `#000000` pure black
- **Text:** `#000000` primary · `#767676` secondary
- **Borders:** `#E5E5E5`
- **Typography:** Helvetica Neue, Arial — system fonts only
- **border-radius: 0** everywhere — no rounded corners
- **Buttons:** 44px height, ALL CAPS, letter-spacing: 0.1em
- **Nav hover:** 1px underline slides in left to right
- **Cursor:** custom crosshair `+` follows mouse

---

<div align="center">

**Apex Auto** — built with Next.js + TypeScript

</div>
