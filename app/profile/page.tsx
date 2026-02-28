"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { useTestDrive } from "@/context/TestDriveContext";
import { getCarById } from "@/lib/cars";

function getMemberTier(bookingCount: number): string {
  if (bookingCount >= 5) return "ELITE";
  if (bookingCount >= 2) return "PREFERRED";
  return "STANDARD";
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const { wishlist, toggleWishlist } = useWishlist();
  const { bookings, cancelBooking } = useTestDrive();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const tier = getMemberTier(bookings.filter((b) => b.status !== "CANCELLED").length);

  const wishlistCars = wishlist
    .map((id) => getCarById(id))
    .filter((c) => c !== undefined);

  return (
    <div className="page-enter" style={{ minHeight: "100vh" }}>
      {/* Profile Header */}
      <section
        style={{
          padding: "80px 24px 40px",
          maxWidth: "800px",
          margin: "0 auto",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 300,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "16px",
          }}
        >
          {user.name}
        </h1>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span className="tier-badge">{tier}</span>
          <span
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            MEMBER
          </span>
        </div>
      </section>

      {/* Account Info */}
      <section
        style={{
          padding: "48px 24px",
          maxWidth: "800px",
          margin: "0 auto",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div className="section-title" style={{ marginBottom: "32px" }}>
          ACCOUNT INFORMATION
        </div>
        <div className="spec-table">
          <div className="spec-row">
            <span className="spec-label">NAME</span>
            <span className="spec-value">{user.name}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">EMAIL</span>
            <span className="spec-value">{user.email}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">PHONE</span>
            <span className="spec-value">{user.phone}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">TIER</span>
            <span className="spec-value">{tier}</span>
          </div>
        </div>
      </section>

      {/* My Test Drives */}
      <section
        style={{
          padding: "48px 24px",
          maxWidth: "800px",
          margin: "0 auto",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div className="section-title" style={{ marginBottom: "32px" }}>
          MY TEST DRIVES
        </div>
        {bookings.length === 0 ? (
          <div
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "32px 0",
            }}
          >
            NO TEST DRIVES SCHEDULED
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        marginBottom: "8px",
                      }}
                    >
                      {booking.carBrand} {booking.carName}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#767676",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {booking.date} AT {booking.time}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#767676",
                        letterSpacing: "0.08em",
                        marginTop: "4px",
                      }}
                    >
                      BOOKING ID: {booking.id}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span className={`booking-status ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                    {booking.status === "SCHEDULED" && (
                      <button
                        className="btn-secondary"
                        style={{ height: "32px", fontSize: "10px", padding: "0 16px" }}
                        onClick={() => cancelBooking(booking.id)}
                      >
                        CANCEL
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Wishlist */}
      <section
        style={{
          padding: "48px 24px",
          maxWidth: "800px",
          margin: "0 auto",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div className="section-title" style={{ marginBottom: "32px" }}>
          WISHLIST
        </div>
        {wishlistCars.length === 0 ? (
          <div
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "32px 0",
            }}
          >
            NO SAVED MODELS
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {wishlistCars.map((car) => (
              <div
                key={car.id}
                style={{
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "0 24px 0 0",
                }}
              >
                <div style={{ position: "relative", width: "120px", height: "80px" }}>
                  <Image
                    src={car.colors[0].image}
                    alt={`${car.brand} ${car.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Link
                    href={`/car/${car.id}`}
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    {car.brand} {car.name}
                  </Link>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#767676",
                      marginTop: "4px",
                    }}
                  >
                    {"FROM $" + car.price.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className="btn-secondary"
                  style={{ height: "32px", fontSize: "10px", padding: "0 16px" }}
                >
                  REMOVE
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sign Out */}
      <section
        style={{
          padding: "48px 24px 100px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <button
          className="btn-secondary"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          SIGN OUT
        </button>
      </section>
    </div>
  );
}
