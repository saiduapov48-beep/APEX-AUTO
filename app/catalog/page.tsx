"use client";

import { useState, useMemo } from "react";
import { cars, categories, type Category } from "@/lib/cars";
import CarCard from "@/components/CarCard";

type SortOption = "default" | "price-asc" | "price-desc" | "newest";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [sort, setSort] = useState<SortOption>("default");

  const filteredCars = useMemo(() => {
    let result =
      activeCategory === "all"
        ? [...cars]
        : cars.filter((c) => c.category === activeCategory);

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = result.filter((c) => c.isNew);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sort]);

  return (
    <div className="page-enter" style={{ minHeight: "100vh" }}>
      {/* Page Header */}
      <section
        style={{
          padding: "80px 24px 40px",
          maxWidth: "1200px",
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
          OUR FLEET
        </h1>
        <p
          style={{
            fontSize: "11px",
            color: "#767676",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {filteredCars.length} MODEL{filteredCars.length !== 1 ? "S" : ""}
        </p>
      </section>

      {/* Filter & Sort */}
      <section
        style={{
          padding: "0 24px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          borderBottom: "1px solid #e5e5e5",
          paddingBottom: "24px",
        }}
      >
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all" ? "ALL" : cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {(
            [
              { value: "default", label: "DEFAULT" },
              { value: "price-asc", label: "PRICE ASC" },
              { value: "price-desc", label: "PRICE DESC" },
              { value: "newest", label: "NEWEST" },
            ] as { value: SortOption; label: string }[]
          ).map((opt) => (
            <button
              key={opt.value}
              className={`filter-btn ${sort === opt.value ? "active" : ""}`}
              onClick={() => setSort(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Car Grid */}
      <section
        style={{
          padding: "48px 24px 100px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
            gap: "2px",
          }}
        >
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {filteredCars.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "100px 0",
              fontSize: "11px",
              color: "#767676",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            NO MODELS FOUND
          </div>
        )}
      </section>
    </div>
  );
}
