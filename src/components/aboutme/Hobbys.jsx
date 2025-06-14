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
            <div className="grid grid-cols-4 gap-x-10 gap-y-20 mt-10 w-fit mx-auto text-[30px]">

                <div className="w-fit mx-auto">
                    <img src={musiclogo} alt="Listing to Music" className="mx-auto w-[100px]" />
                    <p className="w-fit mx-auto">Listing to Music</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={longboardlogo} alt="Longboarding" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Longboarding</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={pcbuildinglogo} alt="PC building" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">PC building</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={gaminglogo} alt="Gaming" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Gaming</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={billiardslogo} alt="Pool" className=" mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Playing 8 ball pool</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={bowlinglogo} alt="Bowling" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Bowling</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={grillinglogo} alt="Grilling" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Grilling</p>
                </div>

                <div className="w-fit mx-auto">
                    <img src={cookinglogo} alt="Cooking" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Cooking</p>

                </div>
            </div>
        </div>
    )}

export default Hobbys
 