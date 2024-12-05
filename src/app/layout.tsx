import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RateMyThock - Mechanical Keyboard Sound Ratings",
  description:
    "Discover and rate mechanical keyboard sounds. Compare different switches, cases, and mounting styles to find your perfect thock.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased ${inter.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-gray-100 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm text-gray-500">
                Built for keyboard enthusiasts. Share your sound.
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} RateMyThock. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
