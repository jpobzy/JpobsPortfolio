import GradientText from "../components/gradient/GradientText"
import TuneRipShowcase from "../components/carousel/TuneRipShowcase"

function TuneRip(){

    return (
        <div>
            <div className="h-screen lg:-mt-[200px]  flex  flex-col text-center items-center justify-center  ">
                <div className="text-[80px] -mt-[400px] lg:text-[100px] ">
                    <GradientText
                        colors={["#FFD1BA", "#FF8C42", "#FF6B6B", "#FF5DA2", "#8F5EFF", "#3D348B"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        TuneRip
                    </GradientText>
                </div>
            
 
            </div>

            <section className="info">
                <div className="mx-auto -mt-[500px] w-[400px] lg:w-[800px] text-center">
                {/* <div className="mx-auto -mt-[100px] w-[400px] lg:w-[800px] text-center"> */}
                    <div className="text-[40px]  mx-auto ">What is TuneRip?</div>
                    <div className="mt-[10px]">{"TuneRip is a desktop application designed to convert YouTube videos into MP3 files. Users can customize their downloads by choosing their own cover art, track title, genre, and artist information. In addition to downloading individual videos, TuneRip also supports bulk downloading from playlists and entire YouTube channels, making it easy to build and organize a personal music library."}</div>
                </div>
            </section>  


            <section id="projectImages" className="">
                <div className="mx-auto">
                    <TuneRipShowcase />
                </div>
            </section>

            <section id="howItWorks" className="text-center  mt-[50px] lg:w-[800px] mx-auto">
                <div className="mx-auto">
                    <div className="text-[40px] mx-auto">How it works:</div>
                    <div className="mt-[10px]">{"TuneRip is built with an Electron + Vite + React frontend styled using Tailwind CSS, and a Python Flask backend connected to a MongoDB database via PyMongo. The stack enables a fast, responsive desktop experience with seamless data handling and persistent storage."}</div>
                    
                    <div className="text-[40px] mt-[40px]  mx-auto">Whats next?</div>
                    <div className="mt-[10px]">{"I'm currently exploring ways to integrate AI to automatically parse and embed lyrics into MP3 metadata, making them accessible in music players that support lyric display. Upcoming features also include a filter system to skip unwanted tracks before downloading and tools to edit previously saved files so that users can chaneg album art, title, genre, and artist information."}</div>
                    <div className="mt-[10px]">{"Explore our project by visiting the "}{<a href="https://github.com/jpobzy/TuneRip">Github Repository!</a>}</div>
                </div>
            </section>


                <div className='h-[50px]'></div>

        </div>
    )
}

export default TuneRip