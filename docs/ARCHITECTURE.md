# Architecture: 14-react-blog-template

## Overview
A high-impact editorial blog template built with React 19 and Vite 6. Designed for thought leadership in tech, it emphasizes massive typography, fluid motion orchestrations, and a minimalist design system.

## Tech Stack
-   **Framework**: React 19
-   **Build Tool**: Vite 6
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion 12 (Real AnimatePresence implementation)
-   **Icons**: Lucide React
-   **Routing**: React Router 7 (Pre-configured)

## Core Logic
-   **Scroll-Linked Motion**: Real-time reading progress bar using Framer Motion's `useScroll`.
-   **Editorial Grid**: Dynamic article layout with grayscale-to-color transitions.
-   **Interactive Newsletter**: High-contrast CTA section with backdrop-blur effects.
-   **Branding Engine**: Integrated logo and typography tokens for "The Modern Developer" theme.

## Performance
-   Optimized for sub-second page loads via Vite 6.
-   Grayscale image filtering performed in GPU via CSS for zero performance overhead.
-   Tree-shaken icon library and optimized production bundling.
