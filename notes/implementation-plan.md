# Implementation Plan

## 1. Header Section Enhancements

### LED Indicator Enhancement

```tsx
// Create new component: src/app/components/LedIndicator.tsx
const LedIndicator = ({ active, color = "primary" }) => (
  <div
    className={`
    w-2 h-2 rounded-full 
    transition-all duration-300
    ${
      active
        ? `
      bg-${color} 
      shadow-[0_0_8px_rgba(var(--${color}-rgb),0.6),0_0_12px_rgba(var(--${color}-rgb),0.4)]
    `
        : "bg-muted"
    }
  `}
  />
);
```

### Technical Typography

```css
/* Add to globals.css */
.technical-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.measurement-text {
  font-family: var(--font-mono);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
```

### Panel Sections

```css
/* Add to globals.css */
.equipment-panel {
  background: linear-gradient(
    to bottom,
    hsl(var(--card) / 0.5) 0%,
    hsl(var(--card)) 100%
  );
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  box-shadow: inset 0 1px 0 hsl(var(--background)), 0 1px 3px hsl(var(
            --border
          ) / 0.1);
}
```

## 2. Layout Structure

### Technical Grid

```css
/* Update in globals.css */
.technical-grid {
  background-image: linear-gradient(
      to right,
      hsl(var(--border) / 0.1) 1px,
      transparent 1px
    ), linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: linear-gradient(
    to bottom,
    hsl(var(--background)) 90%,
    transparent 100%
  );
}

.measurement-grid {
  position: relative;
}

.measurement-grid::before {
  content: "";
  position: absolute;
  left: -24px;
  top: 0;
  width: 20px;
  height: 100%;
  background-image: repeating-linear-gradient(
    to bottom,
    hsl(var(--border) / 0.3) 0px,
    hsl(var(--border) / 0.3) 1px,
    transparent 1px,
    transparent 4px
  );
}
```

### Section Divisions

```tsx
// Create new component: src/app/components/SectionHeader.tsx
const SectionHeader = ({ title, count }) => (
  <div className="flex items-center gap-6 mb-8">
    <div className="flex items-center gap-3">
      <div className="h-3 w-px bg-primary" />
      <h2 className="technical-label">{title}</h2>
    </div>
    <div className="flex-1 h-px bg-border" />
    <div className="measurement-text text-xs text-muted-foreground">
      {count.toString().padStart(2, "0")} entries
    </div>
  </div>
);
```

## 3. Component Updates

### Keyboard Card Enhancement

```tsx
// Update src/app/components/keyboard-card.tsx
const KeyboardCard = ({ keyboard }) => (
  <div className="equipment-panel p-6 relative">
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <LedIndicator active />
      <span className="technical-label text-xs text-muted-foreground">REC</span>
    </div>

    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="technical-label">{keyboard.title}</h3>
        <div className="measurement-text text-sm text-muted-foreground">
          {keyboard.switches}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <span className="technical-label text-xs">Specifications</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="technical-label text-xs text-muted-foreground">
              Case
            </div>
            <div className="measurement-text text-sm">
              {keyboard.caseMaterial}
            </div>
          </div>
          <div className="space-y-1">
            <div className="technical-label text-xs text-muted-foreground">
              Mount
            </div>
            <div className="measurement-text text-sm">
              {keyboard.mountingStyle}
            </div>
          </div>
        </div>
      </div>

      <AudioPlayer url={keyboard.audioUrl} />
    </div>
  </div>
);
```

### Audio Controls

```tsx
// Update src/app/components/AudioPlayer.tsx
const AudioPlayer = ({ url }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <button className="vintage-button">
        <span className="sr-only">Play</span>
        <PlayIcon className="w-4 h-4" />
      </button>

      <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="measurement-text text-xs text-muted-foreground">
        00:00
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="space-y-1">
        <div className="technical-label text-xs text-muted-foreground">
          Level
        </div>
        <div className="flex gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                w-1 h-4 rounded-sm transition-all duration-300
                ${i < level ? "bg-primary" : "bg-border"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
```

## 4. Implementation Steps

1. Update Base Styles:

   - Add new CSS variables and utility classes to globals.css
   - Update tailwind.config.ts with new color values
   - Implement technical typography classes

2. Create New Components:

   - LedIndicator
   - SectionHeader
   - Enhanced AudioPlayer

3. Update Existing Components:

   - Modify KeyboardCard with new panel styling
   - Update page layout with proper grid and measurements
   - Enhance button and control styling

4. Add Technical Details:

   - Implement measurement lines
   - Add status indicators
   - Create technical readouts

5. Final Polish:
   - Add proper animations and transitions
   - Implement hover states
   - Fine-tune spacing and alignment

This implementation plan provides a structured approach to enhancing our interface with vintage audio equipment aesthetics while maintaining modern usability.
