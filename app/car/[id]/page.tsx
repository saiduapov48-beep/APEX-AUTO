"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCarById, getRelatedCars } from "@/lib/cars";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";

export default function CarDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const car = getCarById(id);
  const relatedCars = getRelatedCars(id, 3);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!car) {
    return (
      <div
        className="page-enter"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          MODEL NOT FOUND
        </div>
        <Link href="/catalog" className="btn-primary">
          BACK TO CATALOG
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(car.id);
  const currentImage = car.colors[selectedColor]?.image || car.colors[0].image;

  const specRows = [
    { label: "ENGINE", value: car.specs.engine },
    { label: "HORSEPOWER", value: `${car.specs.horsepower} HP` },
    { label: "TORQUE", value: car.specs.torque },
    { label: "0-100 KM/H", value: car.specs.acceleration },
    { label: "TOP SPEED", value: car.specs.topSpeed },
    { label: "TRANSMISSION", value: car.specs.transmission },
    { label: "DRIVETRAIN", value: car.specs.drivetrain },
  ];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "80vh",
          background: "#000",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src={currentImage}
          alt={`${car.brand} ${car.name}`}
          fill
          style={{
            objectFit: "cover",
            opacity: 0.6,
            transition: "opacity 0.5s ease",
          }}
          priority
          key={currentImage}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "60px 24px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {car.brand}
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 400,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            {car.name}
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#999",
              fontWeight: 300,
            }}
          >
            {car.tagline}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section
        style={{
          padding: "16px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            HOME
          </Link>
          <span style={{ color: "#e5e5e5", fontSize: "11px" }}>/</span>
          <Link
            href="/catalog"
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            CATALOG
          </Link>
          <span style={{ color: "#e5e5e5", fontSize: "11px" }}>/</span>
          <span
            style={{
              fontSize: "11px",
              color: "#000",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {car.name}
          </span>
        </div>
      </section>

      {/* Technical Specs */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "48px" }}>
          TECHNICAL SPECIFICATIONS
        </div>
        <div className="spec-table">
          {specRows.map((row) => (
            <div key={row.label} className="spec-row">
              <span className="spec-label">{row.label}</span>
              <span className="spec-value">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color Configurator */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: "1px solid #e5e5e5",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div className="section-title" style={{ marginBottom: "48px" }}>
          EXTERIOR COLORS
        </div>
        <div
          style={{
            position: "relative",
            height: "500px",
            background: "#f5f5f5",
            marginBottom: "24px",
            overflow: "hidden",
          }}
        >
          <Image
            src={currentImage}
            alt={`${car.name} in ${car.colors[selectedColor]?.name}`}
            fill
            style={{
              objectFit: "cover",
              transition: "opacity 0.5s ease",
            }}
            key={`config-${currentImage}`}
          />
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {car.colors.map((color, idx) => (
            <button
              key={color.name}
              className={`color-swatch ${selectedColor === idx ? "active" : ""}`}
              style={{ background: color.hex }}
              onClick={() => setSelectedColor(idx)}
              aria-label={`Select ${color.name}`}
            />
          ))}
          <span
            style={{
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginLeft: "12px",
            }}
          >
            {car.colors[selectedColor]?.name}
          </span>
        </div>
      </section>

      {/* Gallery */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <div className="section-title" style={{ marginBottom: "48px" }}>
            GALLERY
          </div>
        </div>
        <div className="gallery-scroll" style={{ paddingLeft: "24px" }}>
          {car.gallery.map((img, idx) => (
            <div
              key={idx}
              style={{
                flex: "0 0 600px",
                height: "400px",
                position: "relative",
              }}
            >
              <Image
                src={img}
                alt={`${car.name} gallery ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#767676",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              STARTING FROM
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 300,
              }}
            >
              {"$" + car.price.toLocaleString()}
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              className="btn-primary"
              onClick={() => {
                if (isAuthenticated) {
                  router.push(`/test-drive?car=${car.id}`);
                } else {
                  router.push("/login");
                }
              }}
            >
              REQUEST TEST DRIVE
            </button>
            <button
              className="btn-secondary"
              onClick={() => toggleWishlist(car.id)}
            >
              {wishlisted ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
            </button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "800px",
          margin: "0 auto",
          borderTop: "1px solid #e5e5e5",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#767676",
            lineHeight: 2,
            textAlign: "center",
          }}
        >
          {car.description}
        </p>
      </section>

      {/* Also Consider */}
      {relatedCars.length > 0 && (
        <section
          style={{
            padding: "80px 24px 100px",
            borderTop: "1px solid #e5e5e5",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="section-title" style={{ marginBottom: "48px" }}>
              ALSO CONSIDER
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "2px",
              }}
            >
              {relatedCars.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/car/${rc.id}`}
                  style={{
                    background: "#000",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <div style={{ position: "relative", height: "220px" }}>
                    <Image
                      src={rc.colors[0].image}
                      alt={`${rc.brand} ${rc.name}`}
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
                      {rc.brand}
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
                      {rc.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#767676",
                        marginTop: "8px",
                      }}
                    >
                      {"FROM $" + rc.price.toLocaleString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
