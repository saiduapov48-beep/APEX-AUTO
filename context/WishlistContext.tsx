"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (carId: string) => void;
  isWishlisted: (carId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("apex_wishlist");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        localStorage.removeItem("apex_wishlist");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("apex_wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, mounted]);

  const toggleWishlist = useCallback((carId: string) => {
    setWishlist((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  }, []);

  const isWishlisted = useCallback(
    (carId: string) => wishlist.includes(carId),
    [wishlist]
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
