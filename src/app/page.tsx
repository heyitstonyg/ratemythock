"use client";

import { KeyboardIcon } from "./components/keyboard-icon";
import { LedIndicator } from "./components/led-indicator";
import { KeyboardSection } from "./components/keyboard-section";
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
        <div className="technical-grid opacity-30" />
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="relative z-10">
            <div className="equipment-panel p-8 space-y-8">
              {/* Status Indicators */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <LedIndicator active color="primary" label="LIVE" />
                  <LedIndicator
                    active
                    color="secondary"
                    pulse
                    label="COMMUNITY"
                  />
                </div>
                <div className="measurement-text text-xs text-muted-foreground">
                  ID: {sampleKeyboards.length.toString().padStart(4, "0")}
                </div>
              </div>

              {/* Title and Tagline */}
              <div className="space-y-6 text-center">
                <h1 className="measurement-text text-5xl font-medium tracking-tight">
                  Rate My Thock
                </h1>
                <div className="flex items-center gap-4 max-w-xl mx-auto">
                  <div className="h-px flex-1 bg-border" />
                  <span className="technical-label text-lg text-muted-foreground whitespace-nowrap">
                    KEYBOARD SOUND COMMUNITY
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p className="technical-label text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Find your sound. Share your thock. Build your dream keyboard.
                </p>
              </div>

              {/* Community Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="stats-panel p-6">
                  <div className="space-y-2">
                    <div className="technical-label text-xs text-muted-foreground">
                      KEYBOARDS
                    </div>
                    <div className="stats-value">
                      {sampleKeyboards.length.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <div className="stats-panel p-6">
                  <div className="space-y-2">
                    <div className="technical-label text-xs text-muted-foreground">
                      COMMUNITY
                    </div>
                    <div className="stats-value text-primary">ACTIVE</div>
                  </div>
                </div>
                <div className="stats-panel p-6">
                  <div className="space-y-2">
                    <div className="technical-label text-xs text-muted-foreground">
                      STATUS
                    </div>
                    <div className="stats-value text-secondary">READY</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <button className="vintage-button group flex items-center gap-3 px-10 py-4 text-lg">
                  <KeyboardIcon className="h-5 w-5" />
                  <span className="technical-label">Explore Sounds</span>
                </button>
                <button className="vintage-button secondary group flex items-center gap-3 px-10 py-4 text-lg">
                  <LedIndicator active size="sm" />
                  <span className="technical-label">Share Yours</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 space-y-16">
        {/* Latest Submissions */}
        <KeyboardSection
          title="Latest Submissions"
          description="Recently added to our sound library"
          keyboards={sampleKeyboards}
          indicator={{ color: "primary", pulse: true }}
        />

        {/* Thocky Collection */}
        <KeyboardSection
          title="Thocky Collection"
          description="Deep, satisfying sounds that define thock"
          keyboards={sampleKeyboards.filter((k) => k.descriptors.Thocky)}
          indicator={{ color: "secondary" }}
        />

        {/* Community Favorites */}
        <KeyboardSection
          title="Community Favorites"
          description="Most appreciated by our community"
          keyboards={sampleKeyboards}
          indicator={{ color: "primary" }}
        />

        {/* Premium Builds */}
        <KeyboardSection
          title="Premium Builds"
          description="High-end keyboards with exceptional sound"
          keyboards={sampleKeyboards}
          indicator={{ color: "secondary" }}
        />
      </main>
    </div>
  );
}
