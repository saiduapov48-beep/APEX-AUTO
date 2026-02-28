"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { Booking } from "@/lib/types";

interface TestDriveContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id" | "status">) => Booking;
  cancelBooking: (id: string) => void;
  getBookings: () => Booking[];
}

const TestDriveContext = createContext<TestDriveContextType | undefined>(
  undefined
);

export function TestDriveProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("apex_bookings");
    if (stored) {
      try {
        setBookings(JSON.parse(stored));
      } catch {
        localStorage.removeItem("apex_bookings");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("apex_bookings", JSON.stringify(bookings));
    }
  }, [bookings, mounted]);

  const addBooking = useCallback(
    (data: Omit<Booking, "id" | "status">): Booking => {
      const newBooking: Booking = {
        ...data,
        id: `TD-${Date.now()}`,
        status: "SCHEDULED",
      };
      setBookings((prev) => [...prev, newBooking]);
      return newBooking;
    },
    []
  );

  const cancelBooking = useCallback((id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "CANCELLED" as const } : b))
    );
  }, []);

  const getBookings = useCallback(() => bookings, [bookings]);

  return (
    <TestDriveContext.Provider
      value={{ bookings, addBooking, cancelBooking, getBookings }}
    >
      {children}
    </TestDriveContext.Provider>
  );
}

export function useTestDrive(): TestDriveContextType {
  const context = useContext(TestDriveContext);
  if (!context)
    throw new Error("useTestDrive must be used within TestDriveProvider");
  return context;
}
