import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const BLACK = '#0b0b0f';
const GOLD = '#b8984a';
const GOLD_SOFT = 'rgba(184, 152, 74, 0.45)';
const CREAM = 'rgba(230, 226, 218, 0.9)';
const CREAM_DIM = 'rgba(230, 226, 218, 0.25)';

const NUM_BARS = 9;
const BASELINE_Y_PCT = 0.58;
const BAR_WIDTH = 2;
const BAR_HEIGHT = 72;
const VISUAL_START_X = 0.52;
const VISUAL_END_X = 0.96;

const INITIAL_OFFSETS = [-42, 28, -38, 35, -48, 22, -32, 40, -45];

export const NomveraHeroMotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const duration = 300;
  const cycle = frame % duration;

  const baselineY = height * BASELINE_Y_PCT;
  const visualWidth = width * (VISUAL_END_X - VISUAL_START_X);
  const gap = visualWidth / (NUM_BARS + 1);

  const getBarOffset = (initialOffset: number) => {
    if (cycle < 100) {
      return interpolate(cycle, [0, 100], [initialOffset, 0], {
        extrapolateRight: 'clamp',
      });
    }
    if (cycle < 200) return 0;
    return interpolate(cycle, [200, duration], [0, initialOffset], {
      extrapolateRight: 'clamp',
    });
  };

  const baselineOpacity = interpolate(
    cycle,
    [0, 30, 100, 200, 270, duration],
    [0, 0.4, 0.7, 0.7, 0.4, 0],
    { extrapolateRight: 'clamp' }
  );

  const alignedPhase = cycle >= 98 && cycle <= 202;
  const lockPulse = alignedPhase
    ? 1 + 0.04 * Math.sin((frame / fps) * 3)
    : 1;

  const glowOpacity = 0.025 + 0.015 * Math.sin((frame / fps) * 0.4);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BLACK,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 40% 40% at ${((VISUAL_START_X + VISUAL_END_X) / 2) * 100}% ${BASELINE_Y_PCT * 100}%, rgba(184,152,74,${glowOpacity}) 0%, transparent 60%)`,
        }}
      />
      {INITIAL_OFFSETS.map((initial, i) => {
        const x = width * VISUAL_START_X + gap * (i + 1);
        const offset = getBarOffset(initial);
        const barY = baselineY - BAR_HEIGHT / 2 + offset;
        const aligned = Math.abs(offset) < 2;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x - BAR_WIDTH / 2,
              top: barY,
              width: BAR_WIDTH,
              height: BAR_HEIGHT,
              borderRadius: 1,
              transform: `scaleY(${aligned ? lockPulse : 1})`,
              transformOrigin: 'center center',
              background: aligned
                ? `linear-gradient(to top, ${GOLD_SOFT}, ${GOLD})`
                : `linear-gradient(to top, ${CREAM_DIM}, ${CREAM})`,
              boxShadow: aligned ? `0 0 24px rgba(184,152,74,0.25)` : 'none',
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          left: width * VISUAL_START_X,
          width: visualWidth,
          top: baselineY - 1,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: baselineOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
