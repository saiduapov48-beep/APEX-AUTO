"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    router.push("/profile");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("ALL FIELDS ARE REQUIRED");
      return;
    }

    if (password !== confirmPassword) {
      setError("PASSWORDS DO NOT MATCH");
      return;
    }

    if (password.length < 6) {
      setError("PASSWORD MUST BE AT LEAST 6 CHARACTERS");
      return;
    }

    const success = register(name, email, phone, password);
    if (success) {
      router.push("/profile");
    } else {
      setError("AN ACCOUNT WITH THIS EMAIL ALREADY EXISTS");
    }
  };

  return (
    <div
      className="page-enter"
      style={{
        minHeight: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          zIndex: 0,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920"
          alt="Luxury car background"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            background: "#fff",
            padding: "60px 40px",
          }}
        >
          <h1
            style={{
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            CREATE ACCOUNT
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "24px" }}>
              <input
                type="text"
                className="apex-input"
                placeholder="FULL NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <input
                type="email"
                className="apex-input"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <input
                type="tel"
                className="apex-input"
                placeholder="PHONE"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <input
                type="password"
                className="apex-input"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <input
                type="password"
                className="apex-input"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
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
                  textAlign: "center",
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
              CREATE ACCOUNT
            </button>
          </form>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link
              href="/login"
              style={{
                fontSize: "11px",
                color: "#767676",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid #e5e5e5",
                paddingBottom: "2px",
              }}
            >
              ALREADY HAVE AN ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
