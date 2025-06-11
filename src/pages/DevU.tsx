import GradientText from "../components/gradient/GradientText"
import { useState } from "react"


function DevU(){

    return (
        <div>
            <div className="relative">
                <div className="text-[120px] -mt-20">
                <GradientText
                    colors={["#FFD1BA", "#FF8C42", "#FF6B6B", "#FF5DA2", "#8F5EFF", "#3D348B"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    DevU
                </GradientText>
                </div>

                <div className="mb-[500px]">
                    <div className="mb-[]">Role</div>
                    <div className="text-[35px] ">Back-end Software Developer</div>
       
                </div>

                <div className=" mb-[50px]">
                    <div className="mb-[]">Role</div>
                    <div className="text-[35px] ">Back-end Software Developer</div>
       
                </div>
                {/* <p className="mb-[200px]">Duration</p>
                <p>May 2021 - Auguest 2021</p>

                <p>Tools</p>
                <p>Node, Docker, Typescript, Express, TypeORM, Visual Studio Code, Postman, Docker Desktop</p>


                <p>Team</p>
                <p>Undergraduate Students, IT Staff, University Instructors, Industry consultants</p>
 */}

                
            </div>

        </div>
    )
}

export default DevU