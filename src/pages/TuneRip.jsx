import GradientText from "../components/gradient/GradientText"
import TuneRipShowcase from "../components/carousel/TuneRipShowcase"
import { Button, List } from "antd"
import DemoTabs from "@components/TuneRip/demoTabs/DemoTabs"
import TechStack from "@components/TuneRip/techStack/TechStack"

export default function TuneRip(){
    const formatListData = (e) => 
        <>
            <div className="text-white">
            - {e}
            </div>,        
        </>

        const takeawaysData = [
            formatListData('Learned how to build a cross-platform desktop app using Electron + Vite'),
            formatListData('Improved at combining UI frameworks (React, Tailwind, Ant Design, ReactBits) with functional backend tools'),
            formatListData('Practiced debugging and configuring a multi-tool environment'),
            formatListData('Saw how small design details (like backgrounds and channel cards) improved user experience'),
        ];


    return (
        <>
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
                <div className="mx-auto -mt-[500px] w-[400px] lg:w-[800px] text-center text-white mb-[100px]">
                {/* <div className="mx-auto -mt-[100px] w-[400px] lg:w-[800px] text-center"> */}
                    <div className="text-[40px]  mx-auto ">What is TuneRip?</div>
                    <div className="mt-[10px]">{"TuneRip is a desktop application designed to convert YouTube videos into MP3 files. Users can customize their downloads by choosing their own cover art, track title, genre, and artist information. In addition to downloading individual videos, TuneRip also supports bulk downloading from playlists and entire YouTube channels, making it easy to build and organize a personal music library."}</div>
                </div>
            </section>  

            <section id="demos">
                <div className="text-white text-[40px] mx-auto text-center">
                    Demos
                </div>
                <div className="w-full">
                   <DemoTabs />  
                </div>
            </section>

            <section className="end">
                <div className="mx-auto  text-center text-white text-white">
                    <div>
                        <div className="text-[40px] mt-[40px] tex-white ">
                            Tech stack
                        </div>
                        <TechStack/>
                        <div>

                        </div>
                    </div>

                    <div>
                        <div className="text-[40px] mt-[40px]">
                            Takeaways
                        </div>
                        <div className="text-white w-[500px] mx-auto mt-[10px]">
                            <List
                            size="small"
                            bordered
                            dataSource={takeawaysData}
                            renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </div>
                    </div>

                    <div className="mt-[15px]">
                        Explore the project by visiting the {<a href="https://github.com/jpobzy/TuneRip">Github Repository!</a>}
                    </div>
                </div>
            </section>         
        </>
    )
}