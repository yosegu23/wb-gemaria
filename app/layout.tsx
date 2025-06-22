import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gemaria Elektronik | Toko Elektronik Terlengkap & Terpercaya",
  description:
    "Gemaria Elektronik menyediakan berbagai produk elektronik rumah tangga berkualitas seperti TV, kulkas, mesin cuci, dan lainnya. Belanja mudah, harga bersaing, dan pelayanan terbaik untuk kebutuhan elektronik Anda.",
  keywords: [
    "Gemaria",
    "Gemaria Elektronik",
    "Toko Gemaria",
    "Gemaria Cianjur",
    "Gemaria Elektronik Cianjur",
    "Toko Elektronik Cianjur",
    "Toko Elektronik Terpercaya",
    "Toko Elektronik Terlengkap",
    "Elektronik Rumah Tangga",
    "Elektronik Cianjur"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
