"use client";

import { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  audioUrl: string;
}

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("ended", () =>
          setIsPlaying(false)
        );
      }
    };
  }, []);

  const updateProgress = () => {
    if (audioRef.current) {
      const value =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value);
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

  return (
    <div className="relative">
      <audio ref={audioRef} src={audioUrl} />

      {/* Progress bar */}
      <div className="absolute inset-x-0 -top-2 h-[1px]">
        <div className="h-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500/30 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={togglePlayback}
        className={`
          relative w-full py-3 rounded-lg text-xs font-medium transition-all
          ${
            isPlaying
              ? "bg-purple-50 text-purple-600 hover:bg-purple-100"
              : "bg-purple-500/5 text-purple-600 hover:bg-purple-500/10"
          }
        `}
      >
        <span className="flex items-center justify-center gap-1.5">
          {isPlaying ? (
            <>
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="6"
                  y="4"
                  width="4"
                  height="16"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="14"
                  y="4"
                  width="4"
                  height="16"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
              Stop
            </>
          ) : (
            <>
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z"
                />
              </svg>
              Play Sound
            </>
          )}
        </span>
      </button>
    </div>
  );
}
