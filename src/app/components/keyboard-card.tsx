import { Keyboard } from "../types";
import { AudioPlayer } from "./audio-player";
import { LedIndicator } from "./led-indicator";
import { SoundDescriptors } from "./sound-descriptors";

interface KeyboardCardProps {
  keyboard: Keyboard;
  index: number;
}

export function KeyboardCard({ keyboard, index }: KeyboardCardProps) {
  return (
    <div className="equipment-panel relative">
      {/* Header */}
      <div className="border-b border-border/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <LedIndicator active color="primary" />
            <h3 className="technical-label">{keyboard.title.toUpperCase()}</h3>
          </div>
          <div className="flex items-center gap-2">
            <LedIndicator active={true} color="secondary" size="sm" />
            <span className="measurement-text text-xs text-muted-foreground">
              #{(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="measurement-text text-sm text-muted-foreground">
          {keyboard.switches}
        </div>
      </div>

      {/* Specifications */}
      <div className="border-b border-border/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-1 rounded-full bg-primary/30" />
          <span className="technical-label text-xs">SPECIFICATIONS</span>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <div className="technical-label text-xs text-muted-foreground">
              CASE MATERIAL
            </div>
            <div className="measurement-text text-sm">
              {keyboard.caseMaterial}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="technical-label text-xs text-muted-foreground">
              MOUNTING STYLE
            </div>
            <div className="measurement-text text-sm">
              {keyboard.mountingStyle}
            </div>
          </div>
        </div>
      </div>

      {/* Sound Profile */}
      <div className="border-b border-border/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-secondary/30" />
            <span className="technical-label text-xs">SOUND PROFILE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="measurement-text text-[11px] text-muted-foreground">
              ANALYSIS
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="equipment-panel p-4 bg-card/50">
            <SoundDescriptors initialCounts={keyboard.descriptors} />
          </div>
          <AudioPlayer audioUrl={keyboard.audioUrl} />
        </div>
      </div>

      {/* Technical Grid */}
      <div className="px-6 py-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LedIndicator active={true} color="primary" size="sm" />
            <span className="technical-label text-xs text-muted-foreground">
              ANALYSIS COMPLETE
            </span>
          </div>
          <div className="measurement-text text-xs text-muted-foreground">
            ID: {keyboard.id.toString().padStart(4, "0")}
          </div>
        </div>
      </div>

      {/* Measurement Lines */}
      <div className="absolute -left-[2px] top-0 h-full w-[2px] flex flex-col justify-between py-6">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`
              w-full h-[1px] bg-border/50
              ${i === 0 || i === 4 ? "w-[4px]" : "w-[2px]"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
