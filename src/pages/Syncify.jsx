import GradientText from "../components/gradient/GradientText"
import SyncifyShowcase from "../components/carousel/SyncifyShowcase"

function Syncify(){

    return (
        <div>
            <div className="h-screen lg:-mt-[200px]  flex  flex-col text-center items-center justify-center  ">
                <div className="text-[80px] -mt-[400px] lg:text-[100px] ">
                    <GradientText
                        colors={["#FA233B", "#FF5733", "#FFB72B", "#A6E22E", "#1DB954"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Syncify
                    </GradientText>
                </div>
            
 
            </div>

            <section className="info">
                <div className="mx-auto -mt-[500px] w-[400px] lg:w-[800px] text-center">
                {/* <div className="mx-auto -mt-[100px] w-[400px] lg:w-[800px] text-center"> */}
                    <div className="text-[40px]  mx-auto ">What is Syncify?</div>
                    <div className="mt-[10px]">{"Syncify is a lightweight web app that helps users convert their Apple Music playlists to Spotify and vice versa. Built with barebones HTML and CSS for simplicity, Syncify offers a straightforward interface for seamless playlist transfers between platforms. The backend is powered by Flask and runs in a Docker container, making it easy to deploy and manage. Whether you're switching services or just keeping your libraries in sync, Syncify makes the process fast and hassle-free."}</div>
                </div>
            </section>  


            <section id="projectImages" className="">
                <div className="mx-auto">
                    <SyncifyShowcase />
                </div>
            </section>

            <section id="howItWorks" className="text-center  mt-[50px] lg:w-[800px] mx-auto">
                <div className="mx-auto">
                    <div className="text-[40px] mx-auto">Why I built it:</div>
                    <div className="mt-[10px]">{"I use Apple Music on my iPhone and Spotify on my PC and I wanted an easy way to keep my playlists in sync across both platforms. I also built it so I could share playlists with friends regardless of which service they use. One of my friends wanted to listen to one of my playlists on Apple Music but didn't have Apple Music premium but Syncify makes that possible."}</div>
                    
                    <div className="text-[40px] mt-[40px]  mx-auto">Whats next?</div>
                    <div className="mt-[10px]">{"In the future, I plan to revisit this project and rebuild it as an Electron + Vite desktop app, so users can easily download and run it without needing Docker and command-line setup. I would also like to redesign the UI since it is currently just barebones HTML/CSS and make it more intuitive and user-friendly."}</div>
                    <div className="mt-[10px]">{"Explore the project by visiting the "}{<a href="https://github.com/jpobzy/Syncify">Github Repository!</a>}</div>
                </div>
            </section>


                <div className='h-[50px]'></div>

        </div>
    )
}

export default Syncify