export interface CarColor {
  name: string;
  hex: string;
  image: string;
}

export interface CarSpecs {
  engine: string;
  horsepower: number;
  torque: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  drivetrain: string;
}

export interface Car {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: number;
  tagline: string;
  isFeatured: boolean;
  isNew: boolean;
  specs: CarSpecs;
  colors: CarColor[];
  gallery: string[];
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Booking {
  id: string;
  carId: string;
  carName: string;
  carBrand: string;
  date: string;
  time: string;
  phone: string;
  message: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
}
