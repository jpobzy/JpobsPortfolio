import { useState, useRef, useEffect } from 'react'
import GradientText from '../components/gradient/GradientText'
import RotatingText from '../components/rotatingText/RotatingText'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HomeProjects from '../components/projects/HomeProjects'
import TechStack from '../components/aboutme/TechStack';
import Hobbys from '../components/aboutme/Hobbys';
import Bio from '../components/aboutme/Bio';
// import { LottiePlayer } from './Test';
import Lottie from "lottie-react";
import animationData from "../assets/test.json";

function Home(){
      //  const myRef = useRef<HTMLDivElement>(null);
       const myRef = useRef(null);
      const [hovered, setHovered] = useState(false)
    
      const scrolldown = ()=> {
       myRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

    return (
         <>
      <div className='content-center items-center'>
       <section id='home'>
        <div className="h-screen -mt-50 flex flex-col   items-center justify-center">
          <div className="text-[100px] flex items-center">
            <p className="mr-3">Hi, I'm</p>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Joey
            </GradientText>
          </div>
          <div className='flex '>
            <div className='mt-2 text-[26px]' >
                I'm a
            </div>
          <div className='text-[25px]'>
            <RotatingText
                texts={['Software Developer', 'Software Engineer', 'Backend Developer', 'Full stack Developer!']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-black-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              </div>  
          </div>
          </div> 
            <div className='content-center items-center mx-auto -mt-[120px] mb-[200px]'  
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrolldown}
            style={{ width: 100, height: 100 }}>
              <Lottie
              animationData={animationData}
              loop={hovered}
              autoplay={hovered}
              style={{ height: 100, width: 100 }}
            />

          
        </div>      
       </section>


       <section id='miniabout' className='h-200 mt-[20]'>
        <div ref={myRef} className=''>
          <br></br>
        </div>
        <div className='mt-[20px]'>
          <TechStack />
        </div>
       </section>

       <section id='projects'>
        <HomeProjects />
       </section>


      {/* <section id='hobbys' className='mt-[100px] mb-[90px]'>
        <Bio />
      </section> */}
        

      <section id='hobbys' className='mt-[100px] mb-[90px]'>
        <Hobbys />
      </section>
        
      </div>
    </>
    )
    

}
export default Home