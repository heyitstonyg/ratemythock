import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";

// Load JetBrains Mono for technical text
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Load DM Sans for general text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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
    <html
      lang="en"
      className={`antialiased ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-border py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm text-muted-foreground">
                Built for keyboard enthusiasts. Share your sound.
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} RateMyThock. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
