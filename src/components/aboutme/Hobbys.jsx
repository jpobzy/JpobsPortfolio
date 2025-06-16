import musiclogo from './hobbysicons/sounds-between-headphones-svgrepo-com.svg'
import longboardlogo from './hobbysicons/longboard-svgrepo-com.svg'
import pcbuildinglogo from './hobbysicons/gaming-pc-svgrepo-com.svg'
import gaminglogo from './hobbysicons/game-svgrepo-com.svg'
import billiardslogo from './hobbysicons/billiard-svgrepo-com.svg'
import bowlinglogo from './hobbysicons/bowling-svgrepo-com.svg'
import grillinglogo from './hobbysicons/grilling-svgrepo-com.svg'
import cookinglogo from './hobbysicons/cooking-svgrepo-com.svg'
function Hobbys(){
    
    return(
        <div>
            <p className="w-fit mx-auto text-[50px]">Hobbys</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-y-20 gap-y-10 mt-10 w-fit mx-auto text-[30px] text-center">

                <div>
                    <img src={musiclogo} alt="Listing to Music" className="mx-auto w-[100px]" />
                    <p>Listing to Music</p>
                </div>

                <div>
                    <img src={longboardlogo} alt="Longboarding" className="mx-auto w-[100px] " />
                    <p>Longboarding</p>
                </div>

                <div>
                    <img src={pcbuildinglogo} alt="PC building" className="mx-auto w-[100px] " />
                    <p>PC building</p>
                </div>

                <div>
                    <img src={gaminglogo} alt="Gaming" className="mx-auto w-[100px] " />
                    <p>Gaming</p>
                </div>

                <div>
                    <img src={billiardslogo} alt="Pool" className=" mx-auto w-[100px] " />
                    <p>Playing 8 ball pool</p>
                </div>

                <div>
                    <img src={bowlinglogo} alt="Bowling" className="mx-auto w-[100px] " />
                    <p>Bowling</p>
                </div>

                <div>
                    <img src={grillinglogo} alt="Grilling" className="mx-auto w-[100px] " />
                    <p>Grilling</p>
                </div>

                <div>
                    <img src={cookinglogo} alt="Cooking" className="mx-auto w-[100px] " />
                    <p>Cooking</p>

                </div>
            </div>
        </div>
    )}

export default Hobbys
 