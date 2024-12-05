"use client";

import { useState, useMemo } from "react";
import { DESCRIPTORS, DescriptorCount } from "../types";

export function SoundDescriptors({
  initialCounts = {},
}: {
  initialCounts?: DescriptorCount;
}) {
  const [userSelections, setUserSelections] = useState<Set<string>>(new Set());
  const [counts, setCounts] = useState<DescriptorCount>(initialCounts);
  const [showAll, setShowAll] = useState(false);

  const toggleDescriptor = (descriptor: string) => {
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

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {visibleDescriptors.map((descriptor) => {
          const isSelected = userSelections.has(descriptor);
          const count = counts[descriptor] || 0;
          const hasCount = count > 0;

          return (
            <button
              key={descriptor}
              onClick={() => toggleDescriptor(descriptor)}
              className={`
                group relative px-2 py-1 rounded-md text-[11px] font-medium 
                transition-all hover:scale-105
                ${
                  isSelected
                    ? "bg-purple-50 text-purple-600"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span className="relative z-10">{descriptor}</span>
              {hasCount && (
                <span
                  className={`
                    ml-1 text-[10px]
                    ${isSelected ? "text-purple-500" : "text-gray-400"}
                  `}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}

        {!showAll &&
          sortedDescriptors.some(
            (descriptor) => !counts[descriptor] || counts[descriptor] === 0
          ) && (
            <button
              onClick={() => setShowAll(true)}
              className="px-2 py-1 rounded-md text-[11px] font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
            >
              more options
            </button>
          )}
      </div>

      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
        >
          Show less
        </button>
      )}
    </div>
  );
}
