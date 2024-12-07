import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)", "system-ui", "sans-serif"],
  			mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			equipment: '`\n          0 2px 4px rgba(0, 0, 0, 0.02),\n          0 1px 0 rgba(255, 255, 255, 0.06),\n          inset 0 1px 0 rgba(255, 255, 255, 0.1)\n        `',
  			'equipment-hover': '`\n          0 4px 8px rgba(0, 0, 0, 0.04),\n          0 1px 0 rgba(255, 255, 255, 0.06),\n          inset 0 1px 0 rgba(255, 255, 255, 0.1)\n        `'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'led-pulse': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.5'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out forwards',
  			'led-pulse': 'led-pulse 2s ease-in-out infinite'
  		},
  		backgroundImage: {
  			'technical-grid': '`\n          linear-gradient(to right, hsl(var(--border) / 0.1) 1px, transparent 1px),\n          linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px)\n        `',
  			'equipment-gradient': '`\n          linear-gradient(\n            to bottom,\n            hsl(var(--card) / 0.5) 0%,\n            hsl(var(--card)) 100%\n          )\n        `'
  		},
  		gridTemplateColumns: {
  			'16': 'repeat(16, minmax(0, 1fr))'
  		},
  		letterSpacing: {
  			technical: '0.1em'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
