"use client";

import { KeyboardIcon } from "./components/keyboard-icon";
import { KeyboardCard } from "./components/keyboard-card";
import { LedIndicator } from "./components/led-indicator";
import { Keyboard } from "./types";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-[#e5e7eb]/10">
        <div className="technical-grid" />
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="relative z-10">
            <div className="equipment-panel p-8">
              <div className="flex flex-col items-center gap-6">
                {/* Status Indicators */}
                <div className="flex items-center gap-4">
                  <LedIndicator active color="primary" label="SYSTEM" />
                  <LedIndicator active color="secondary" pulse label="REC" />
                </div>

                {/* Title */}
                <div className="text-center space-y-4">
                  <h1 className="measurement-text text-4xl font-medium tracking-tight">
                    RateMyThock
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="technical-label text-muted-foreground">
                      SOUND ANALYSIS SYSTEM
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                </div>

                {/* Technical Readout */}
                <div className="w-full max-w-md">
                  <div className="measurement-grid p-4 bg-card/50 rounded-lg">
                    <div className="technical-label text-xs text-muted-foreground mb-2">
                      SYSTEM STATUS
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="technical-label text-xs text-muted-foreground">
                          KEYBOARDS
                        </div>
                        <div className="measurement-text">
                          {sampleKeyboards.length.toString().padStart(2, "0")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="technical-label text-xs text-muted-foreground">
                          STATUS
                        </div>
                        <div className="measurement-text text-primary">
                          ACTIVE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <div className="equipment-panel p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <LedIndicator active size="sm" />
                <h2 className="technical-label">Featured Keyboards</h2>
              </div>
              <div className="measurement-text text-xs text-muted-foreground">
                {sampleKeyboards.length.toString().padStart(2, "0")} entries
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sampleKeyboards.map((keyboard, index) => (
            <div
              key={keyboard.id}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: "fadeIn 0.5s ease-out forwards",
              }}
            >
              <KeyboardCard keyboard={keyboard} index={index} />
            </div>
          ))}
        </div>
      </main>

      {/* Record Button */}
      <div className="fixed bottom-6 right-6">
        <button className="vintage-button group flex items-center gap-3">
          <div className="relative">
            <KeyboardIcon className="h-4 w-4" />
            <LedIndicator
              active={true}
              size="sm"
              className="absolute -right-1 -top-1"
            />
          </div>
          <span className="technical-label">Record Sound</span>
        </button>
      </div>
    </div>
  );
}
