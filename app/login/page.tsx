"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (isAuthenticated) {
    router.push("/profile");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("ALL FIELDS ARE REQUIRED");
      return;
    }

    const success = login(email, password);
    if (success) {
      router.push("/profile");
    } else {
      setError("INVALID CREDENTIALS");
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
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          zIndex: 0,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920"
          alt="Luxury car background"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </div>

      {/* Form */}
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
            ACCESS ACCOUNT
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "32px" }}>
              <input
                type="email"
                className="apex-input"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <input
                type="password"
                className="apex-input"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
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
              ACCESS ACCOUNT
            </button>
          </form>

          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
            }}
          >
            <Link
              href="/register"
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
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
