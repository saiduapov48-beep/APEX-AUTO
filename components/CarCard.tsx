"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { Car } from "@/lib/types";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [hovered, setHovered] = useState(false);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(car.id);

  return (
    <div
      style={{
        position: "relative",
        background: "#000",
        border: hovered ? "1px solid #333" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wishlist button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(car.id);
        }}
        className="wishlist-btn"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={wishlisted ? "#fff" : "none"}
          stroke="#fff"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {car.isNew && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "#fff",
            color: "#000",
            fontSize: "9px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "4px 8px",
            zIndex: 2,
            fontWeight: 400,
          }}
        >
          NEW
        </div>
      )}

      <Link
        href={`/car/${car.id}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          style={{
            position: "relative",
            height: "280px",
            overflow: "hidden",
          }}
        >
          <Image
            src={car.colors[0].image}
            alt={`${car.brand} ${car.name}`}
            fill
            style={{
              objectFit: "cover",
              filter: hovered ? "brightness(1.1)" : "brightness(0.85)",
              transition: "filter 0.5s ease, opacity 0.5s ease",
            }}
          />
          {car.gallery[1] && (
            <Image
              src={car.gallery[1]}
              alt={`${car.brand} ${car.name} alternate`}
              fill
              style={{
                objectFit: "cover",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            />
          )}
        </div>

        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {car.brand}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#fff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 400,
              marginBottom: "12px",
            }}
          >
            {car.name}
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "16px",
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
            }}
          >
            <span>{car.specs.horsepower} HP</span>
            <span>{car.specs.acceleration}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#fff",
                fontWeight: 400,
              }}
            >
              {"FROM $" + car.price.toLocaleString()}
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "#fff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid #fff",
                paddingBottom: "2px",
              }}
            >
              VIEW MODEL
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
