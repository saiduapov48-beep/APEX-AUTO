"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { href: "/catalog", label: "MODELS" },
    { href: "/test-drive", label: "TEST DRIVE" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="apex-nav">
        <Link href="/" className="apex-nav-brand" style={{ textDecoration: "none" }}>
          APEX AUTO
        </Link>

        <div className="apex-nav-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`apex-nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="apex-nav-right">
          <Link
            href="/profile"
            className={`apex-nav-link ${pathname === "/profile" ? "active" : ""}`}
            style={{ display: "inline-flex", gap: "4px" }}
          >
            WISHLIST{wishlistCount > 0 ? ` (${wishlistCount})` : ""}
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className={`apex-nav-link ${pathname === "/profile" ? "active" : ""}`}
              >
                PROFILE
              </Link>
              <button
                onClick={logout}
                className="apex-nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`apex-nav-link ${pathname === "/login" ? "active" : ""}`}
            >
              LOGIN
            </Link>
          )}
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}>
        <Link href="/" className="mobile-menu-link" onClick={closeMobile}>
          HOME
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/profile" className="mobile-menu-link" onClick={closeMobile}>
          WISHLIST{wishlistCount > 0 ? ` (${wishlistCount})` : ""}
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              href="/profile"
              className="mobile-menu-link"
              onClick={closeMobile}
            >
              PROFILE
            </Link>
            <button
              onClick={() => {
                logout();
                closeMobile();
              }}
              className="mobile-menu-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="mobile-menu-link"
            onClick={closeMobile}
          >
            LOGIN
          </Link>
        )}
      </div>
    </>
  );
}
