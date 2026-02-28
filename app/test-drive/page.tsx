"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useTestDrive } from "@/context/TestDriveContext";
import { cars, getCarById } from "@/lib/cars";
import { Booking } from "@/lib/types";

const timeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00"];

export default function TestDrivePageWrapper() {
  return (
    <Suspense fallback={null}>
      <TestDrivePage />
    </Suspense>
  );
}

function TestDrivePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const { addBooking } = useTestDrive();

  const preselectedCarId = searchParams.get("car") || "";

  const [selectedCar, setSelectedCar] = useState(preselectedCarId);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(user?.phone || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<Booking | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (user?.phone) setPhone(user.phone);
  }, [user]);

  if (!isAuthenticated || !user) {
    return null;
  }

  if (confirmation) {
    return (
      <div
        className="page-enter"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "48px",
            }}
          >
            BOOKING CONFIRMED
          </div>

          <div className="spec-table" style={{ textAlign: "left", marginBottom: "48px" }}>
            <div className="spec-row">
              <span className="spec-label">BOOKING ID</span>
              <span className="spec-value">{confirmation.id}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">MODEL</span>
              <span className="spec-value">
                {confirmation.carBrand} {confirmation.carName}
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-label">DATE</span>
              <span className="spec-value">{confirmation.date}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">TIME</span>
              <span className="spec-value">{confirmation.time}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">STATUS</span>
              <span className="spec-value">{confirmation.status}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <button
              className="btn-primary"
              onClick={() => router.push("/profile")}
            >
              VIEW PROFILE
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                setConfirmation(null);
                setSelectedCar("");
                setDate("");
                setTime("");
                setMessage("");
              }}
            >
              BOOK ANOTHER
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedCar) {
      setError("PLEASE SELECT A MODEL");
      return;
    }
    if (!date) {
      setError("PLEASE SELECT A DATE");
      return;
    }
    if (!time) {
      setError("PLEASE SELECT A TIME SLOT");
      return;
    }
    if (!phone) {
      setError("PLEASE ENTER YOUR PHONE NUMBER");
      return;
    }

    const car = getCarById(selectedCar);
    if (!car) {
      setError("INVALID MODEL SELECTED");
      return;
    }

    const booking = addBooking({
      carId: car.id,
      carName: car.name,
      carBrand: car.brand,
      date,
      time,
      phone,
      message,
    });

    setConfirmation(booking);
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="page-enter" style={{ minHeight: "100vh" }}>
      <section
        style={{
          padding: "80px 24px 100px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          SCHEDULE YOUR EXPERIENCE
        </h1>
        <p
          style={{
            fontSize: "11px",
            color: "#767676",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          SELECT YOUR MODEL, DATE AND TIME
        </p>

        <form onSubmit={handleSubmit}>
          {/* Car Select */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "8px",
              }}
            >
              SELECT MODEL
            </label>
            <select
              className="apex-select"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
            >
              <option value="">-- SELECT A MODEL --</option>
              {cars.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.brand} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "8px",
              }}
            >
              PREFERRED DATE
            </label>
            <input
              type="date"
              className="apex-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
            />
          </div>

          {/* Time Slot */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "16px",
              }}
            >
              TIME SLOT
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={time === slot ? "btn-primary" : "btn-secondary"}
                  style={{
                    height: "36px",
                    padding: "0 20px",
                    fontSize: "11px",
                  }}
                  onClick={() => setTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Name (pre-filled) */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "8px",
              }}
            >
              NAME
            </label>
            <input
              type="text"
              className="apex-input"
              value={user.name}
              readOnly
              style={{ color: "#767676" }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "8px",
              }}
            >
              PHONE
            </label>
            <input
              type="tel"
              className="apex-input"
              placeholder="PHONE NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#767676",
                display: "block",
                marginBottom: "8px",
              }}
            >
              MESSAGE (OPTIONAL)
            </label>
            <textarea
              className="apex-input"
              style={{
                height: "80px",
                resize: "none",
                borderBottom: "1px solid #000",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
              }}
              placeholder="ANY SPECIFIC REQUESTS..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {error && (
            <div
              style={{
                fontSize: "11px",
                color: "#CC1111",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%" }}
          >
            CONFIRM BOOKING
          </button>
        </form>
      </section>
    </div>
  );
}
