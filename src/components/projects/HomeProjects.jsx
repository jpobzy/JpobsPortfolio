import './HomeProjects.css'
import githubicon from './github.svg'

function HomeProjects(){

    return(
        <div className='mt-[30px]'>
            <p className="w-fit mx-auto text-[50px]">Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-[30px] w-fit mx-auto  text-[20px]">  

    
                <div>
                    <a href="/JpobsPortfolio/tunerip.html">
                        <div className="mx-auto project tunerip w-[400px] h-[200px] rounded-lg" >
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto" >
                                TuneRip
                            </div>
                        </div>
                    </a>
                    <div className="flex items-center justify-center">
                        <img src={githubicon} alt="Python" className="github w-[40px] text-center mr-[10px]" onClick={()=> location.href='https://github.com/jpobzy/TuneRip'}/>
                        <div className='text-center'>
                             Youtube video to MP3 converter
                        </div>
                    </div>
                </div>




                <div>
                    <a href="/JpobsPortfolio/syncify.html">
                        <div className="mx-auto project syncify w-[400px] h-[200px] rounded-lg" >
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto" >
                                Syncify
                            </div>
                        </div>
                    </a>
                    <div className="flex items-center justify-center ">
                        <img src={githubicon} alt="Python" className="github w-[40px] text-center lg:ml-[20px] ml-[10px]" onClick={()=> location.href='https://github.com/jpobzy/Syncify'}/>
                        <div className='text-center lg:w-[400px] lg:-ml-[15px]'>
                            A web app that transfers music playlists between Spotify and Apple Music
                        </div>
                    </div>
                </div>



                <div>
                    <a href="/JpobsPortfolio/fliparena.html">
                        <div className="mx-auto project fliparena w-[400px] h-[200px] rounded-lg ">
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                                FlipArena
                            </div>
                        </div>
                    </a>
                    <div className="flex items-center justify-center">
                        <img src={githubicon} alt="Python" className="github w-[40px] text-center  " onClick={()=> location.href='https://github.com/jpobzy/FlipArena'}/>
                        <div className='text-center lg:w-[400px] lg:-ml-[15px]  ml-[10px]'>
                             A web app heads or tails coin flip game.
                        </div>
                    </div>
                </div>



                <div>
                    <a href="/JpobsPortfolio/devu.html">
                        <div className="mx-auto project devu w-[400px] h-[200px] rounded-lg">
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                                DevU
                            </div>
                        </div>
                    </a>      
                    <div className="flex items-center justify-center">
                        <img src={githubicon} alt="Python" className="mr-[10px] github w-[40px] text-center " onClick={()=> location.href='https://github.com/makeopensource/devU'}/>
                        <div className='text-center lg:w-[400px] lg:-ml-[35px]'>
                            An automated code grading platform     
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default HomeProjects;