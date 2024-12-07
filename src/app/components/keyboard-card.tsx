"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowsMaximize, IconHeart, IconStars } from "@tabler/icons-react";
import { Keyboard } from "../types";
import { AudioPlayer } from "./audio-player";
import { LedIndicator } from "./led-indicator";
import { SoundDescriptors } from "./sound-descriptors";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";

interface KeyboardCardProps {
  keyboard: Keyboard;
  index: number;
}

export function KeyboardCard({ keyboard, index }: KeyboardCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Get the top 2 sound descriptors
  const [firstDescriptor, secondDescriptor] = Object.entries(
    keyboard.descriptors
  )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(([descriptor]) => descriptor);

  return (
    <Dialog>
      {/* Basic Card */}
      <div className="equipment-panel relative transition-all duration-300 hover:shadow-equipment-hover group">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LedIndicator active color="primary" />
              <h3 className="technical-label text-sm text-muted-foreground">
                {keyboard.title.toUpperCase()}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <LedIndicator active={true} color="secondary" size="sm" />
              <span className="measurement-text text-xs text-muted-foreground">
                #{(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Image and Sound Profile */}
          <div className="grid grid-cols-2 gap-6">
            <div
              className="equipment-panel p-1 bg-card/50 overflow-hidden"
              style={{ height: 80 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={keyboard.imageUrl}
                  alt={keyboard.title}
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="technical-label text-xs text-muted-foreground">
                SOUND PROFILE
              </div>
              <div className="measurement-text text-sm text-foreground/70">
                {firstDescriptor} and {secondDescriptor}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <DialogTrigger asChild>
              <button className="vintage-button flex-1 group flex items-center justify-center gap-2 px-3 py-1.5">
                <IconArrowsMaximize className="h-3 w-3" />
                <span className="technical-label text-[11px]">EXPAND</span>
              </button>
            </DialogTrigger>

            <button className="vintage-button flex-1 group flex items-center justify-center gap-2 px-3 py-1.5">
              <IconStars className="h-3 w-3" />
              <span className="technical-label text-[11px]">RATE</span>
            </button>

            <button
              className={`vintage-button flex-1 group flex items-center justify-center gap-2 px-3 py-1.5 ${
                isLiked ? "text-red-500 hover:text-red-600" : ""
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <IconHeart
                className="h-3 w-3"
                fill={isLiked ? "currentColor" : "none"}
              />
              <span className="technical-label text-[11px]">LIKE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Content */}
      <DialogContent className="max-w-4xl p-0">
        <div className="equipment-panel">
          {/* Header with Title and Description */}
          <DialogHeader className="border-b border-border/50 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <LedIndicator active color="primary" />
                <DialogTitle className="technical-label text-lg">
                  {keyboard.title.toUpperCase()}
                </DialogTitle>
              </div>
              <div className="flex items-center gap-2">
                <LedIndicator active={true} color="secondary" size="sm" />
                <span className="measurement-text text-xs text-muted-foreground">
                  #{(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            <DialogDescription className="technical-label text-xs text-muted-foreground">
              {keyboard.switches} • {keyboard.mountingStyle} •{" "}
              {keyboard.caseMaterial}
            </DialogDescription>

            {/* Image */}
            <div className="flex justify-center mt-6">
              <div
                className="equipment-panel p-2 bg-card/50 overflow-hidden"
                style={{ width: 480, height: 320 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={keyboard.imageUrl}
                    alt={keyboard.title}
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Sound Analysis */}
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

          {/* Technical Details */}
          <div className="border-b border-border/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full bg-primary/30" />
              <span className="technical-label text-xs">TECHNICAL DETAILS</span>
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

          {/* Footer */}
          <div className="px-6 py-4 bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LedIndicator active={true} color="primary" size="sm" />
                <span className="technical-label text-xs text-muted-foreground">
                  FULL ANALYSIS
                </span>
              </div>
              <div className="measurement-text text-xs text-muted-foreground">
                ID: {keyboard.id.toString().padStart(4, "0")}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
