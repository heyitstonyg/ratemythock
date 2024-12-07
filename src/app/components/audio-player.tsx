"use client";

import { useRef, useState, useEffect } from "react";
import { LedIndicator } from "./led-indicator";

interface AudioPlayerProps {
  audioUrl: string;
  minimal?: boolean;
}

export function AudioPlayer({ audioUrl, minimal = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [levels, setLevels] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
      audioRef.current.addEventListener("loadedmetadata", updateDuration);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("ended", () =>
          setIsPlaying(false)
        );
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, []);

  // Simulate VU meter levels
  useEffect(() => {
    if (isPlaying && !minimal) {
      const interval = setInterval(() => {
        const newLevels = Array.from({ length: 16 }, () =>
          Math.floor(Math.random() * 8)
        );
        setLevels(newLevels);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setLevels([]);
    }
  }, [isPlaying, minimal]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const value =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value);
      setCurrentTime(formatTime(audioRef.current.currentTime));
    }
  };

  const updateDuration = () => {
    if (audioRef.current) {
      setDuration(formatTime(audioRef.current.duration));
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (minimal) {
    return (
      <div className="flex items-center gap-4">
        <audio ref={audioRef} src={audioUrl} />
        <button
          onClick={togglePlayback}
          className="vintage-button group flex items-center gap-2 min-w-[90px] justify-center"
        >
          <LedIndicator active={isPlaying} pulse={isPlaying} size="sm" />
          <span className="technical-label text-[11px]">
            {isPlaying ? "STOP" : "PLAY"}
          </span>
        </button>

        {/* Simple Progress Bar */}
        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>

        {/* Time Display */}
        <div className="measurement-text text-xs text-muted-foreground">
          {currentTime}
        </div>
      </div>
    );
  }

  return (
    <div className="equipment-panel p-4 space-y-4">
      <audio ref={audioRef} src={audioUrl} />

      {/* Transport Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlayback}
          className="vintage-button group flex items-center gap-2 min-w-[90px] justify-center"
        >
          <LedIndicator active={isPlaying} pulse={isPlaying} size="sm" />
          <span className="technical-label text-[11px]">
            {isPlaying ? "STOP" : "PLAY"}
          </span>
        </button>

        {/* Time Display */}
        <div className="equipment-panel px-3 py-1.5">
          <div className="measurement-text text-xs">
            {currentTime} <span className="text-muted-foreground">/</span>{" "}
            {duration}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="absolute -left-[2px] top-0 h-full w-[2px] flex flex-col justify-between py-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`
                w-full h-[1px] bg-border/50
                ${i === 0 || i === 2 ? "w-[4px]" : "w-[2px]"}
              `}
            />
          ))}
        </div>
        <div className="h-2 bg-muted rounded-sm overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>
      </div>

      {/* VU Meter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LedIndicator active={isPlaying} color="secondary" size="sm" />
            <span className="technical-label text-[11px] text-muted-foreground">
              LEVEL
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-primary/30" />
            <span className="technical-label text-[11px] text-muted-foreground">
              VU
            </span>
          </div>
        </div>
        <div className="grid grid-cols-16 gap-px h-4">
          {(levels.length ? levels : Array(16).fill(0)).map((level, i) => (
            <div key={i} className="flex flex-col justify-end space-y-px">
              {[...Array(8)].map((_, j) => (
                <div
                  key={j}
                  className={`
                    w-full h-full transition-colors duration-150
                    ${
                      j < level
                        ? j >= 6
                          ? "bg-destructive"
                          : j >= 4
                          ? "bg-primary"
                          : "bg-secondary"
                        : "bg-muted"
                    }
                  `}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
