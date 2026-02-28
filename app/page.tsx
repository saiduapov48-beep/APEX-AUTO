"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import StatCounter from "@/components/StatCounter";
import { cars, getFeaturedCars } from "@/lib/cars";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = cars.find((c) => c.id === "5"); // Bugatti Chiron
  const lineupCars = getFeaturedCars();

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="page-enter">
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920"
          alt="Luxury car silhouette"
          fill
          style={{ objectFit: "cover", opacity: 0.4 }}
          priority
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(40px, 8vw, 80px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            ENGINEERED
            <br />
            BEYOND LIMITS
          </h1>
          <Link
            href="/catalog"
            className="btn-primary"
            style={{
              marginTop: "40px",
              background: "#fff",
              color: "#000",
            }}
          >
            VIEW ALL MODELS
          </Link>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ padding: "0 24px" }}>
        <div className="stat-strip" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <StatCounter end={2.4} suffix="s" decimals={1} label="0-100 KM/H" />
          <StatCounter end={847} label="HORSEPOWER" />
          <StatCounter end={340} suffix=" KM/H" label="TOP SPEED" />
        </div>
      </section>

      {/* FEATURED MODEL */}
      {featured && (
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className="section-title"
              style={{ marginBottom: "48px", textAlign: "center" }}
            >
              FEATURED MODEL
            </div>
            <div
              style={{
                display: "flex",
                gap: "48px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1 1 500px", position: "relative", minHeight: "400px" }}>
                <Image
                  src={featured.colors[0].image}
                  alt={`${featured.brand} ${featured.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: "1 1 300px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#767676",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {featured.brand}
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                  }}
                >
                  {featured.name}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#767676",
                    lineHeight: 1.8,
                    marginBottom: "32px",
                  }}
                >
                  {featured.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "32px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "24px", fontWeight: 300 }}>
                      {featured.specs.horsepower}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#767676",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      HP
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "24px", fontWeight: 300 }}>
                      {featured.specs.acceleration}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#767676",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      0-100
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "24px", fontWeight: 300 }}>
                      {featured.specs.topSpeed}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#767676",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      TOP SPEED
                    </div>
                  </div>
                </div>
                <Link href={`/car/${featured.id}`} className="btn-primary">
                  EXPLORE MODEL
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MODEL LINEUP - HORIZONTAL SCROLL */}
      <section
        style={{
          padding: "100px 0",
          borderTop: "1px solid #e5e5e5",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "48px",
            }}
          >
            <div className="section-title">MODEL LINEUP</div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={scrollLeft}
                className="btn-secondary"
                style={{ width: "44px", padding: 0 }}
                aria-label="Scroll left"
              >
                {"<"}
              </button>
              <button
                onClick={scrollRight}
                className="btn-secondary"
                style={{ width: "44px", padding: 0 }}
                aria-label="Scroll right"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "2px",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {lineupCars.map((car) => (
            <Link
              key={car.id}
              href={`/car/${car.id}`}
              style={{
                flex: "0 0 360px",
                background: "#000",
                textDecoration: "none",
                display: "block",
                position: "relative",
              }}
            >
              <div style={{ position: "relative", height: "240px" }}>
                <Image
                  src={car.colors[0].image}
                  alt={`${car.brand} ${car.name}`}
                  fill
                  style={{ objectFit: "cover", opacity: 0.85 }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#767676",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
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
                  }}
                >
                  {car.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#767676",
                    marginTop: "8px",
                    fontWeight: 400,
                  }}
                >
                  {"FROM $" + car.price.toLocaleString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* THE EXPERIENCE */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="section-title"
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            THE EXPERIENCE
          </div>
          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                title: "TEST DRIVE",
                desc: "Experience the raw power and precision of our vehicles on roads built for legends.",
                link: "/test-drive",
              },
              {
                title: "BESPOKE CONFIG",
                desc: "Every detail, your choice. Configure color, interior, and performance to your exact specification.",
                link: "/catalog",
              },
              {
                title: "SERVICE",
                desc: "White-glove maintenance and care. Your vehicle receives the same attention it was built with.",
                link: "/catalog",
              },
            ].map((item) => (
              <div key={item.title} style={{ flex: "1 1 280px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #e5e5e5",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#767676",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                  }}
                >
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="apex-nav-link"
                  style={{ fontSize: "11px" }}
                >
                  LEARN MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
