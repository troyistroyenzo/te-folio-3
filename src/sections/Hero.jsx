import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
// import Button from '../components/Button.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-[#C2B498] text-center">
          hi, I am Troy <span className="waving-hand">👋</span>
        </p>
        <h1 className="hero_tag text-[#C2B498]">I build brand and startups</h1>    
        <p className="sm:text-3xl text-xl font-medium text-white text-center">
        I empower creators and founders to turn their struggles into success 
        </p>

      </div>
     
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 50]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            {/* <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group> */}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* <div className="absolute flex flex-row justify-center items-center  bottom-7 left-0 right-0 gap-4 mt-5 w-full z-10 c-space">
        <a href="https://poplme.co/hash/JjvF98f1/1/s" target="_blank">
          <Button name="Contact Me" isBeam containerClass="bg-zinc-900 sm:w-fit w-full sm:min-w-96" />
        </a>
        <a href="https://calendly.com/troyenzo/30min" target="_blank">
          <Button name="Book a call" containerClass="bg-[#C2B498] sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
