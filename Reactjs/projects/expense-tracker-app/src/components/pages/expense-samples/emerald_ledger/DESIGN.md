# Design System Document: The Sovereign Financial Experience

## 1. Overview & Creative North Star: "The Architectural Ledger"
This design system moves away from the cluttered, line-heavy aesthetic of traditional banking apps to embrace **The Architectural Ledger**. The North Star is a vision of financial management that feels like an editorial spread: quiet, authoritative, and spacious. 

We break the "template" look by utilizing intentional asymmetry—placing high-contrast `display` typography against expansive `surface` areas. By replacing rigid 1px borders with tonal layering and "Ghost Borders," we create a UI that feels carved from a single block of marble rather than assembled from parts. The goal is to transform "expense tracking" from a chore into a curated, premium experience.

---

## 2. Colors: Tonal Depth over Structural Lines
Our palette is anchored in **Deep Emerald (`primary`)** to evoke the heritage of currency and the growth of wealth, balanced by a sophisticated hierarchy of greys.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. Use `surface-container-low` for large background sections and `surface-container-lowest` (pure white) for high-priority cards.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use a "Nested Elevation" strategy:
- **Base Layer:** `surface` (#f7f9fb)
- **Sub-Section:** `surface-container-low` (#f2f4f6)
- **Primary Card:** `surface-container-lowest` (#ffffff)
- **Active Overlay:** `surface-bright` (#f7f9fb) with Glassmorphism.

### The "Glass & Gradient" Rule
To add "soul" to the financial data:
- **Hero CTA:** Use a subtle linear gradient from `primary` (#003527) to `primary_container` (#064e3b).
- **Floating Elements:** Use `surface_variant` at 70% opacity with a `20px` backdrop-blur to create a "frosted glass" effect for navigation bars or quick-action sheets.

---

## 3. Typography: Editorial Authority
We utilize a pairing of **Manrope** (for high-impact data and headlines) and **Inter** (for high-density financial legibility).

| Level | Token | Font | Size | Weight | Character |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | 700 | Dramatic, used for total balances. |
| **Headline**| `headline-md` | Manrope | 1.75rem| 600 | Used for section themes (e.g., "Monthly Spend"). |
| **Title**   | `title-md` | Inter | 1.125rem| 500 | Transaction names and category labels. |
| **Body**    | `body-md` | Inter | 0.875rem| 400 | The workhorse for metadata. |
| **Label**   | `label-sm` | Inter | 0.6875rem| 600 | Uppercase for micro-data (e.g., DATE). |

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are a last resort, not a default.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background to create a "Natural Lift."
- **Ambient Shadows:** For floating action buttons or modal sheets, use the `on-surface` color (#191c1e) at **4% opacity** with a **32px blur** and **8px Y-offset**. It should feel like a soft glow, not a drop shadow.
- **The "Ghost Border" Fallback:** If a container sits on an identical color background, use the `outline-variant` (#bfc9c3) at **15% opacity**. Never use a 100% opaque border.
- **Glassmorphism:** Navigation headers should use `surface` at 80% opacity with a blur effect, allowing the deep emerald tones of the content to peak through as the user scrolls.

---

## 5. Components: Precision & Tactility

### Buttons
- **Primary:** `primary` background with `on-primary` text. `xl` (1.5rem) roundedness.
- **Interaction:** On tap, apply a **gentle scale effect (0.96x)** to mimic a physical button press.
- **Secondary:** `secondary_container` background. No border.

### Cards & Lists
- **Rule:** **Strictly forbid divider lines.** 
- **Execution:** Use `0.75rem` (md) vertical spacing between list items. Use a `surface-container-highest` background on a selected list item to indicate state, rather than a checkbox or border.
- **Nesting:** Financial data points (like merchant name and amount) should be vertically stacked with a `4px` gap, using `title-md` and `body-sm` respectively.

### Input Fields
- **Style:** Background set to `surface-container-highest` with `md` roundedness. 
- **States:** On focus, the background transitions to `primary_fixed` (#b0f0d6) at 30% opacity with a Ghost Border of the `primary` color.

### Financial Visualization (The "Signature" Component)
- **The Progress Rail:** Use `surface-container-highest` for the track and a gradient of `primary` to `primary_fixed` for the progress fill. No rounded caps on the bar—use `none` (0px) for a more architectural, precise look.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `display-lg` typography for the primary currency amount on a screen. Make the money the hero.
- **Do** use `xl` (1.5rem) rounded corners for main dashboard cards to soften the "industrial" feel of financial data.
- **Do** use smooth `slide-in` animations (300ms, Cubic Bezier 0.4, 0, 0.2, 1) when transitioning between expense categories.

### Don’t
- **Don't** use pure black (#000000). Use `on-surface` (#191c1e) for all text to maintain the premium, softer feel.
- **Don't** use red for negative balances unless it is a critical error. Use `tertiary` (#4f1f19) for a more sophisticated "muted" warning.
- **Don't** crowd the screen. If a screen feels full, increase the `surface` spacing. White space is a functional asset, not empty space.