import './HomeProjects.css'


function HomeProjects(){

    return(
        <div className='mt-[30px]'>
            <p className="w-fit mx-auto text-[50px]">Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[30px] w-fit mx-auto">  

    
                <div>
                    <a href="/JpobsPortfolio/tunerip.html">
                        <div className="project tunerip w-[400px] h-[200px] rounded-lg" >
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto" >
                                TuneRip
                            </div>
                        </div>
                    </a>
                    <div className="mx-auto text-center">
                        Youtube video to MP3 converter
                    </div>
                </div>


                <div>
                    <a href="/JpobsPortfolio/syncify.html">
                        <div className="project syncify w-[400px] h-[200px] rounded-lg" >
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto" >
                                Syncify
                            </div>
                        </div>
                    </a>
                    <div className="mx-auto text-center w-[400px]">
                        A web app that transfers music playlists between Spotify and Apple Music
                    </div>
                </div>

                <div>
                    <a href="/JpobsPortfolio/fliparena.html">
                        <div className="project fliparena w-[400px] h-[200px] rounded-lg">
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                                FlipArena
                            </div>
                        </div>
                    </a>
                    <div className="mx-auto text-center">
                        A web-based heads or tails coin flip game.
                    </div>          
                </div>

                <div>
                    <a href="/JpobsPortfolio/devu.html">
                        <div className="project devu w-[400px] h-[200px] rounded-lg">
                            <div className="projname w-fit text-[50px] h-[20px] mx-auto">
                                DevU
                            </div>
                        </div>
                    </a>      
                    <div className="mx-auto text-center">
                    An automated code grading platform                    
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default HomeProjects;