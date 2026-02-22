import { Composition } from 'remotion';
import { NomveraHeroMotion } from './NomveraHeroMotion';

const FPS = 30;
const DURATION_FRAMES = 300; // 10 seconds loop

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="NomveraHeroMotion"
      component={NomveraHeroMotion}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  </>
);
