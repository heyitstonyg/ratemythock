"use client";

import { KeyboardIcon } from "./components/keyboard-icon";
import { KeyboardCard } from "./components/keyboard-card";
import { Keyboard } from "./types";

// Sample data for initial development
const sampleKeyboards: Keyboard[] = [
  {
    id: 1,
    title: "GMMK Pro Build",
    switches: "Gateron Black Inks",
    caseMaterial: "Aluminum",
    mountingStyle: "Gasket Mount",
    audioUrl: "/samples/gmmk-pro.mp3",
    imageUrl: "/keyboards/placeholder.svg",
    descriptors: {
      Thocky: 8,
      Bassy: 5,
      "Low-Pitched": 6,
      Muted: 3,
      Polished: 2,
      Creamy: 4,
    },
  },
  {
    id: 2,
    title: "Tofu60 Custom",
    switches: "Holy Pandas",
    caseMaterial: "Aluminum",
    mountingStyle: "Tray Mount",
    audioUrl: "/samples/tofu60.mp3",
    imageUrl: "/keyboards/placeholder.svg",
    descriptors: {
      Clacky: 12,
      Snappy: 7,
      "High-Pitched": 4,
      Sharp: 3,
      Bouncy: 5,
      Resonant: 6,
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#e5e7eb]/30">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="relative z-10 mx-auto max-w-xl text-center">
            <div className="animate-float">
              <h1 className="animate-fade-in bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-4xl font-medium tracking-tight text-transparent">
                RateMyThock
              </h1>
              <p
                className="mt-4 text-sm text-gray-500 animate-fade-in"
                style={{ animationDelay: "150ms" }}
              >
                Discover and rate mechanical keyboard sounds. Find your perfect
                thock.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sampleKeyboards.map((keyboard, index) => (
            <KeyboardCard key={keyboard.id} keyboard={keyboard} index={index} />
          ))}
        </div>
      </main>

      {/* Upload CTA */}
      <div
        className="fixed bottom-6 right-6 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        <button className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-xs text-white shadow-md transition-all hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:scale-105">
          <KeyboardIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
          <span>Add Keyboard</span>
        </button>
      </div>
    </div>
  );
}
