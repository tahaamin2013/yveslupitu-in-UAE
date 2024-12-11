import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "YVES LUPITU Official Site I Discover our New Collection",
  description: "Shop the YVES LUPITU Official Site. Discover the latest Men´s and Women's ready to Wear , T Shirts, Hoodies, Sweater, Pants, Short, Leggings and Accessories Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#E5E5E5] font-impact antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
