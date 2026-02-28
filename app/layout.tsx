import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { TestDriveProvider } from "@/context/TestDriveContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "APEX AUTO — Engineered Beyond Limits",
  description:
    "Premium luxury car dealership. Porsche, Lamborghini, Bugatti, Koenigsegg. Experience automotive excellence.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <AuthProvider>
          <WishlistProvider>
            <TestDriveProvider>
              <CustomCursor />
              <Header />
              <main style={{ paddingTop: "44px" }}>{children}</main>
              <Footer />
            </TestDriveProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
