# Nomvera AI - Remotion Motion

The hero section uses a Remotion-rendered background video for subtle ambient motion.

## Composition

- **NomveraHeroMotion** - Product-led hero loop: **calibration to the rubric**. Nine vertical bars (annotators) start out of alignment, then move into alignment on a horizontal baseline (your rubric / gold standard). When aligned they turn gold and hold with a subtle pulse; then the cycle resets. Directly illustrates Nomvera’s promise: inter-annotator agreement and calibration before you see a single file. Palette: #0b0b0f, #b8984a, #e6e2da.

## Commands

```bash
# Preview in Remotion Studio
npm start

# Render MP4 for production
npm run build
```

Output: `out/Nomvera-hero-motion.mp4`

## Files

- `src/Root.tsx` - Composition registration
- `src/NomveraHeroMotion.tsx` - Hero motion composition
