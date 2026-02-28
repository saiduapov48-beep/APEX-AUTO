"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="apex-footer">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            APEX AUTO
          </div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#767676",
              lineHeight: 2,
            }}
          >
            <p>42 BOULEVARD DES CAPUCINES</p>
            <p>75009 PARIS, FRANCE</p>
            <p>+33 1 42 68 00 00</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link href="/catalog">MODELS</Link>
            <Link href="/test-drive">TEST DRIVE</Link>
            <Link href="/profile">PROFILE</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YOUTUBE
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              X / TWITTER
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid #333",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "11px",
          color: "#767676",
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
        }}
      >
        <span>{"APEX AUTO \u00A9 2026"}</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}
