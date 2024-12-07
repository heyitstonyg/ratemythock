"use client";

import { useState, useMemo } from "react";
import { DESCRIPTORS, DescriptorCount } from "../types";
import { LedIndicator } from "./led-indicator";

interface SoundDescriptorsProps {
  initialCounts?: DescriptorCount;
  readOnly?: boolean;
}

export function SoundDescriptors({
  initialCounts = {},
  readOnly = false,
}: SoundDescriptorsProps) {
  const [userSelections, setUserSelections] = useState<Set<string>>(new Set());
  const [counts, setCounts] = useState<DescriptorCount>(initialCounts);
  const [showAll, setShowAll] = useState(false);

  const toggleDescriptor = (descriptor: string) => {
    if (readOnly) return;

    const newSelections = new Set(userSelections);
    const newCounts = { ...counts };

    if (userSelections.has(descriptor)) {
      newSelections.delete(descriptor);
      newCounts[descriptor] = (newCounts[descriptor] || 1) - 1;
      if (newCounts[descriptor] === 0) {
        delete newCounts[descriptor];
      }
    } else {
      newSelections.add(descriptor);
      newCounts[descriptor] = (newCounts[descriptor] || 0) + 1;
    }

    setUserSelections(newSelections);
    setCounts(newCounts);
  };

  // Sort descriptors by count, then alphabetically
  const sortedDescriptors = useMemo(() => {
    return [...DESCRIPTORS].sort((a, b) => {
      const countA = counts[a] || 0;
      const countB = counts[b] || 0;
      if (countB !== countA) {
        return countB - countA;
      }
      return a.localeCompare(b);
    });
  }, [counts]);

  // Filter descriptors based on counts and showAll state
  const visibleDescriptors = useMemo(() => {
    if (showAll) {
      return sortedDescriptors;
    }
    return sortedDescriptors.filter(
      (descriptor) => counts[descriptor] && counts[descriptor] > 0
    );
  }, [sortedDescriptors, counts, showAll]);

  const maxCount = Math.max(...Object.values(counts));

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {visibleDescriptors.map((descriptor) => {
          const isSelected = userSelections.has(descriptor);
          const count = counts[descriptor] || 0;
          const hasCount = count > 0;
          const percentage = hasCount ? (count / maxCount) * 100 : 0;

          return (
            <div
              key={descriptor}
              className={`
                equipment-panel group relative px-3 py-2
                ${!readOnly && "hover:scale-[1.02] cursor-pointer"}
                ${isSelected ? "border-primary/30" : "border-border/50"}
                transition-all
              `}
              onClick={() => toggleDescriptor(descriptor)}
              role={readOnly ? "presentation" : "button"}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <LedIndicator
                    active={isSelected || hasCount}
                    color={isSelected ? "primary" : "secondary"}
                    size="sm"
                  />
                  <span className="technical-label text-[11px]">
                    {descriptor.toUpperCase()}
                  </span>
                </div>
                {hasCount && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary/30" />
                    <span className="measurement-text text-[11px] text-muted-foreground">
                      {count.toString().padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className={`
                    h-full transition-all duration-300
                    ${isSelected ? "bg-primary" : "bg-secondary"}
                  `}
                  style={{
                    width: `${percentage}%`,
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
                    backgroundSize: "10px 10px",
                  }}
                />
              </div>

              {/* Measurement lines */}
              <div className="absolute -left-[2px] top-0 h-full w-[2px] flex flex-col justify-between py-2">
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
        })}
      </div>

      {!readOnly && (
        <>
          {!showAll &&
            sortedDescriptors.some(
              (descriptor) => !counts[descriptor] || counts[descriptor] === 0
            ) && (
              <button
                onClick={() => setShowAll(true)}
                className="vintage-button w-full flex items-center justify-center gap-2"
              >
                <LedIndicator active size="sm" />
                <span className="technical-label text-[11px]">
                  MORE OPTIONS
                </span>
              </button>
            )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="vintage-button w-full flex items-center justify-center gap-2"
            >
              <LedIndicator active size="sm" />
              <span className="technical-label text-[11px]">SHOW LESS</span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
