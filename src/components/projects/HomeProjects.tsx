import TiltedCard from "./titledCard/TitledCard"
import SpotlightCard from "./spotlightCard/SpotlightCard"
import './HomeProjects.css'
import React, { useState } from 'react';
import StarBorder from "./starBorder/StarBorder"
import { Link } from 'react-router-dom'

function HomeProjects(){

    return(
        <div>
            
        {/* <ProjectCard /> */}
        


        <p className="w-fit mx-auto text-[50px]">Projects</p>
        <div className="grid grid-cols-2 gap-10  w-fit mx-auto">  

   
            <a href="/projects/tunerip">
                <div className="project tunerip w-[400px] h-[200px] rounded-lg" >
                    <div className="projname w-fit text-[50px] h-[20px] mx-auto" >
                        TuneRip
                    </div>
                </div>
            </a>

            <a href="/projects/fliparena">
                <div className="project fliparena w-[400px] h-[200px] rounded-lg">
                    <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                        FlipArena
                    </div>
                </div>
            </a>

            <a href="/projects/devu">
                <div className="project devu w-[400px] h-[200px] rounded-lg">
                    <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                        DevU
                    </div>
                </div>
            </a>
            </div>
        </div>
    )
}

export default HomeProjects