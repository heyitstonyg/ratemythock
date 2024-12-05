"use client";

import Image from "next/image";
import { AudioPlayer } from "./components/AudioPlayer";
import { KeyboardIcon } from "./components/KeyboardIcon";
import { SoundDescriptors } from "./components/SoundDescriptors";
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

function KeyboardCard({
  keyboard,
  index,
}: {
  keyboard: Keyboard;
  index: number;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-[#e5e7eb]/30 bg-white/50 backdrop-blur-sm transition-all hover:border-[#d1d5db]/50 hover:bg-white hover:shadow-sm animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative p-6">
        {/* Content */}
        <div className="relative space-y-8">
          {/* Header with Image */}
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
              <Image
                src={keyboard.imageUrl}
                alt={keyboard.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index === 0}
              />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-50/80 transition-all duration-500 group-hover:bg-purple-100 group-hover:scale-105">
                  <KeyboardIcon className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <h3 className="text-base font-medium text-gray-900 truncate transition-colors duration-300 group-hover:text-purple-600">
                  {keyboard.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-500">
                <span>{keyboard.switches}</span>
                <span>•</span>
                <span>{keyboard.caseMaterial}</span>
                <span>•</span>
                <span>{keyboard.mountingStyle}</span>
              </div>
            </div>
          </div>

          {/* Audio player */}
          <div>
            <AudioPlayer audioUrl={keyboard.audioUrl} />
          </div>

          {/* Sound Descriptors */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                Sound Profile
              </h4>
              <span className="text-[11px] text-gray-400">Click to rate</span>
            </div>
            <SoundDescriptors initialCounts={keyboard.descriptors} />
          </div>
        </div>
      </div>
    </div>
  );
}

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
