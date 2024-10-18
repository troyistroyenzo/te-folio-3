import { useState } from 'react';
// import Globe from 'react-globe.gl';
import MaxWidthWrapper from '../components/MaxWidthWrapper'

// import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <>
    <MaxWidthWrapper className='flex flex-col items-center justify-center text-center font-inter'>
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1716715012/SEAN_KEN_3_hbrv9i.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Builder.</p>
              <p className="grid-subtext">
              I help build and scale early-stage startups in the crypto and gaming sectors. With over 5 years of experience, I specialize in developing scalable web applications. I have successfully supported multiple startups in gaming, Web3, and AI, delivering efficient solutions tailored to their needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1716711169/5_tq73qo.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Venture</p>
              <p className="grid-subtext">
              I venture into different startups, projects and businesses. My goal is to provide value and solve particular problems in the industry.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1716711169/4_gu0iba.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Create</p>
              <p className="grid-subtext">
              I create content through visuals & stoyytelling, mainly on instagram
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="https://res.cloudinary.com/dlgyqy69b/image/upload/v1716707622/SEAN_KEN_2_xsf0kr.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Train</p>
              <p className="grid-subtext">
              I train like as if there will be a war tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Digital Nomad</p>
              <p className="grid-subtext">Based anywhere, anytime.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" url='https://google/com' />
            </div>
          </div>
        </div> */}

        {/* <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yortozne@gmail.com</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>

    </MaxWidthWrapper>
    
    </>
    
  );
};

export default About;
