
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out': {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.8',
					},
				},
				'scroll-down': {
					'0%': {
						transform: 'translateY(0)',
						opacity: '0.8',
					},
					'100%': {
						transform: 'translateY(12px)',
						opacity: '0',
					},
				},
				'scale-up': {
					'0%': {
						transform: 'scale(0.96)',
						opacity: '0',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
				},
				'background-shimmer': {
					'0%': {
						backgroundPosition: '200% 0',
					},
					'100%': {
						backgroundPosition: '-200% 0',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-20px)',
					},
				},
				'float-delay': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'background-shimmer': 'background-shimmer 8s infinite linear',
				'float': 'float 6s ease-in-out infinite',
				'float-delay': 'float-delay a4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
			},
			fontFamily: {
				sans: ['Inter var', 'Inter', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'sans-serif'],
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
			transformStyle: {
				'3d': 'preserve-3d',
			},
			backfaceVisibility: {
				'hidden': 'hidden',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
