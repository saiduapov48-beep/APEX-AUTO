import { Car } from "./types";

export const cars: Car[] = [
  {
    id: "1",
    brand: "PORSCHE",
    name: "911 GT3 RS",
    category: "supercar",
    price: 243800,
    tagline: "The most focused 911 ever built.",
    isFeatured: true,
    isNew: true,
    specs: {
      engine: "4.0L Naturally Aspirated Flat-6",
      horsepower: 525,
      torque: "465 Nm",
      acceleration: "3.2s",
      topSpeed: "296 km/h",
      transmission: "7-Speed PDK",
      drivetrain: "RWD",
    },
    colors: [
      {
        name: "Guards Red",
        hex: "#CC1111",
        image:
          "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1280",
      },
      {
        name: "GT Silver",
        hex: "#C0C0C0",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280",
      },
      {
        name: "Black",
        hex: "#0A0A0A",
        image:
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1280",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280",
    ],
    description:
      "The 911 GT3 RS is the most track-focused road car Porsche has ever produced. Every element is optimized for one purpose: lap time.",
  },
  {
    id: "2",
    brand: "PORSCHE",
    name: "Taycan Turbo GT",
    category: "electric",
    price: 195150,
    tagline: "Electric performance. Porsche soul.",
    isFeatured: false,
    isNew: true,
    specs: {
      engine: "Dual Electric Motors",
      horsepower: 1092,
      torque: "1340 Nm",
      acceleration: "2.2s",
      topSpeed: "305 km/h",
      transmission: "2-Speed PDK",
      drivetrain: "AWD",
    },
    colors: [
      {
        name: "Frozen Blue",
        hex: "#4A7FA5",
        image:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1280",
      },
      {
        name: "Chalk",
        hex: "#E8E4DC",
        image:
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1280",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1280",
    ],
    description:
      "The Taycan Turbo GT redefines what an electric sports car can be — combining sustainable performance with the unmistakable Porsche driving experience.",
  },
  {
    id: "3",
    brand: "LAMBORGHINI",
    name: "Hurac\u00e1n STO",
    category: "supercar",
    price: 328000,
    tagline: "Super Trofeo Omologata. Born on the track.",
    isFeatured: true,
    isNew: false,
    specs: {
      engine: "5.2L Naturally Aspirated V10",
      horsepower: 640,
      torque: "565 Nm",
      acceleration: "3.0s",
      topSpeed: "310 km/h",
      transmission: "7-Speed LDF",
      drivetrain: "RWD",
    },
    colors: [
      {
        name: "Arancio Borealis",
        hex: "#FF6600",
        image:
          "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1280",
      },
      {
        name: "Blu Glauco",
        hex: "#1A4E8C",
        image:
          "https://images.unsplash.com/photo-1525609004556-c46c80848b5e?w=1280",
      },
      {
        name: "Bianco Monocerus",
        hex: "#F5F5F5",
        image:
          "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1280",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
    ],
    description:
      "The Hurac\u00e1n STO brings Super Trofeo racing DNA directly to the road. A machine that demands respect and rewards precision.",
  },
  {
    id: "4",
    brand: "LAMBORGHINI",
    name: "Revuelto",
    category: "supercar",
    price: 608000,
    tagline: "The V12 hybrid successor to the Aventador.",
    isFeatured: true,
    isNew: true,
    specs: {
      engine: "6.5L V12 + 3 Electric Motors",
      horsepower: 1015,
      torque: "725 Nm",
      acceleration: "2.5s",
      topSpeed: "350 km/h",
      transmission: "8-Speed DCT",
      drivetrain: "AWD",
    },
    colors: [
      {
        name: "Giallo Inti",
        hex: "#FFD700",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280",
      },
      {
        name: "Verde Scandal",
        hex: "#00CC44",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1280",
    ],
    description:
      "The Revuelto is the next chapter of Lamborghini\u2019s V12 legacy. Hybrid technology amplifies a naturally aspirated masterpiece.",
  },
  {
    id: "5",
    brand: "BUGATTI",
    name: "Chiron Super Sport",
    category: "hypercar",
    price: 3850000,
    tagline: "The most powerful, fastest and most luxurious Bugatti.",
    isFeatured: true,
    isNew: false,
    specs: {
      engine: "8.0L Quad-Turbocharged W16",
      horsepower: 1578,
      torque: "1600 Nm",
      acceleration: "2.4s",
      topSpeed: "440 km/h",
      transmission: "7-Speed DSG",
      drivetrain: "AWD",
    },
    colors: [
      {
        name: "Nocturne Black",
        hex: "#0D0D0D",
        image:
          "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=1280",
      },
      {
        name: "French Racing Blue",
        hex: "#002FA7",
        image:
          "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1280",
      },
      {
        name: "Blanc Pur",
        hex: "#F8F8F8",
        image:
          "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1280",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1280",
    ],
    description:
      "The Chiron Super Sport pushes the boundaries of what is technically possible. 1578 horsepower contained in the most aerodynamically refined body Bugatti has ever built.",
  },
  {
    id: "6",
    brand: "BUGATTI",
    name: "Tourbillon",
    category: "hypercar",
    price: 4600000,
    tagline: "A new era. Naturally aspirated. Electrified.",
    isFeatured: false,
    isNew: true,
    specs: {
      engine: "8.3L Naturally Aspirated V16 + 3 Electric Motors",
      horsepower: 1800,
      torque: "1800 Nm",
      acceleration: "2.0s",
      topSpeed: "445 km/h",
      transmission: "8-Speed DCT",
      drivetrain: "AWD",
    },
    colors: [
      {
        name: "Argent Atlantique",
        hex: "#B0B8C1",
        image:
          "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1280",
      },
      {
        name: "Noir Absolu",
        hex: "#080808",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1280",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280",
    ],
    description:
      "The Tourbillon introduces Bugatti\u2019s first naturally aspirated V16 \u2014 a new engine philosophy for a new era of hypercars.",
  },
  {
    id: "7",
    brand: "KOENIGSEGG",
    name: "Jesko Absolut",
    category: "hypercar",
    price: 3400000,
    tagline: "Designed for one purpose: 330 mph.",
    isFeatured: true,
    isNew: false,
    specs: {
      engine: "5.0L Twin-Turbo V8",
      horsepower: 1600,
      torque: "1500 Nm",
      acceleration: "2.5s",
      topSpeed: "531 km/h",
      transmission: "9-Speed Light Speed Transmission",
      drivetrain: "RWD",
    },
    colors: [
      {
        name: "White Carbon",
        hex: "#F0F0F0",
        image:
          "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1280",
      },
      {
        name: "Ghost",
        hex: "#E8E8E0",
        image:
          "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1280",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1280",
    ],
    description:
      "The Jesko Absolut is the fastest Koenigsegg ever conceived. Every surface, every component exists to reach and maintain 531 km/h.",
  },
  {
    id: "8",
    brand: "KOENIGSEGG",
    name: "CC850",
    category: "supercar",
    price: 4100000,
    tagline: "50 cars. A lifetime of legacy.",
    isFeatured: false,
    isNew: true,
    specs: {
      engine: "5.0L Twin-Turbo V8",
      horsepower: 1385,
      torque: "1385 Nm",
      acceleration: "2.8s",
      topSpeed: "440 km/h",
      transmission: "6-Speed Engage Shift System",
      drivetrain: "RWD",
    },
    colors: [
      {
        name: "Candy Apple Red",
        hex: "#CC1111",
        image:
          "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
      },
      {
        name: "Satin Black",
        hex: "#1A1A1A",
        image:
          "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280",
    ],
    description:
      "The CC850 celebrates 50 years of Christian von Koenigsegg\u2019s passion for automotive perfection. Only 50 will ever be built.",
  },
];

export function getCarById(id: string): Car | undefined {
  return cars.find((c) => c.id === id);
}

export function getRelatedCars(id: string, limit: number = 3): Car[] {
  const car = getCarById(id);
  if (!car) return [];
  return cars
    .filter((c) => c.id !== id)
    .sort((a, b) => {
      if (a.category === car.category && b.category !== car.category) return -1;
      if (b.category === car.category && a.category !== car.category) return 1;
      return 0;
    })
    .slice(0, limit);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((c) => c.isFeatured);
}

export const categories = [
  "all",
  "supercar",
  "hypercar",
  "electric",
] as const;

export type Category = (typeof categories)[number];
