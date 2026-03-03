# IntelliToggle Website Implementation

This project implements the IntelliToggle landing page, focusing on pixel-perfect fidelity with the provided Figma design.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS
- **Fonts**: Satoshi (Primary), DM Sans, Merriweather Sans (Secondary)
- **Icons**: Pre-exported SVGs and inline SVGs

## Rationale

Nuxt 3 was chosen for its excellent performance, SEO capabilities, and integrated developer experience. Tailwind CSS was utilized to rapidly match the precise spacing, typography, gradients, and utility classes defined in the Figma handoff. The project heavily references the exact hex codes, padding schemas, and asset dimensions provided in the Figma Dev Mode.

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Pixelay Evidence & Review Guide

To evaluate the fidelity of this implementation against the Figma design using Pixelay or similar overlay tools:

1. **Resolution Settings**: Ensure your viewport width is set to `1920px` to match the desktop frame in Figma, or evaluate the max-width container (`1680px` max-width content centered) directly.
2. **Typography**: The layout uses precise font scaling exactly from Figma layout calculations.
3. **Spacing**: Padding, margins, and gaps have been translated to exact pixel constraints using Tailwind's arbitrary values (e.g., `lg:px-[120px]`, `py-[120px]`).
4. **Colors & Shadows**: Custom gradients (e.g., hero background, pricing card) and exact hex codes have been matched across text and borders.
5. **Interactive states**: Buttons include nuanced hover states mapping to the high-fidelity design goals (+ scale/shadow transitions).

_Note for reviewers: Please use an overlay extension like Pixelay and align the baseline to the top of the Navigation Bar._
