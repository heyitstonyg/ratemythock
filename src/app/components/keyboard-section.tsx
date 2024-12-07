"use client";

import { LedIndicator } from "./led-indicator";
import { KeyboardCard } from "./keyboard-card";
import { Keyboard } from "../types";

interface KeyboardSectionProps {
  title: string;
  description?: string;
  keyboards: Keyboard[];
  indicator?: {
    color: "primary" | "secondary" | "destructive";
    pulse?: boolean;
  };
}

export function KeyboardSection({
  title,
  description,
  keyboards,
  indicator = { color: "primary" },
}: KeyboardSectionProps) {
  return (
    <section className="relative pb-24">
      {/* Technical Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 technical-grid opacity-5" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        />
      </div>

      {/* Section Header */}
      <div className="equipment-panel bg-card">
        <div className="py-10 px-8 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-5">
                <LedIndicator
                  active
                  color={indicator.color}
                  pulse={indicator.pulse}
                  size="md"
                />
                <h2 className="font-mono text-3xl font-bold tracking-wide text-foreground uppercase">
                  {title.toUpperCase()}
                </h2>
              </div>
              {description && (
                <div className="flex items-center gap-3 pl-6">
                  <div className="h-1 w-1 rounded-full bg-primary/30" />
                  <p className="measurement-text text-sm text-foreground/60">
                    {description}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="equipment-panel px-4 py-2 bg-background/90">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-secondary/30" />
                  <div className="measurement-text text-xs text-muted-foreground">
                    {keyboards.length.toString().padStart(2, "0")} entries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Readout */}
        <div className="px-6 py-3 bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-secondary/30" />
            <span className="technical-label text-[11px] text-muted-foreground">
              SORTED BY SOUND
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LedIndicator active color={indicator.color} size="sm" />
            <span className="measurement-text text-[11px] text-muted-foreground">
              VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* Content Area with Vertical Line */}
      <div className="relative mt-8">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-r from-border/80 to-border/60" />

        {/* Keyboard Grid */}
        <div className="pl-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {keyboards.map((keyboard, index) => (
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
      </div>
    </section>
  );
}
