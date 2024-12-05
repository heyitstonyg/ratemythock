"use client";

import Image from "next/image";
import { AudioPlayer } from "./audio-player";
import { KeyboardIcon } from "./keyboard-icon";
import { SoundDescriptors } from "./sound-descriptors";
import { Keyboard } from "@/app/types";

interface KeyboardCardProps {
  keyboard: Keyboard;
  index: number;
}

export function KeyboardCard({ keyboard, index }: KeyboardCardProps) {
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
