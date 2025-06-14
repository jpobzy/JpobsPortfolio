import GradientText from "../components/gradient/GradientText"
import tango from '../components/projects/images/oldimages/devu/tango.png'
import controlflow from '../components/projects/images/oldimages/devu/controlFlow.png'
import ProjectShowcase from "../components/carousel/FlipArenaProjectShowcase"
import homeImg from '../components/projects/images/oldimages/lehax0rs/loggingin/welcome.png'

import multiplelobbys from '../components/projects/images/oldimages/lehax0rs/joinginglobby/multiple lobbies.png'
import originaldesign from '../components/projects/images/oldimages/lehax0rs/Setupnsheet.png'
import gameplay from '../components/projects/images/oldimages/lehax0rs/game working.mp4'

function FlipArena(){

    return (
        <div>
            <div className="mb-[200px]">
                <div className="   text-[150px] ml-[50px] -mt-[30px]">
                    <GradientText
                        colors={["#8EC5FC", "#E0C3FC", "#F9F3CC", "#FDCB82", "#FF8BA7", "#A9DEF9"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="custom-class"
                    >
                        FlipArena
                    </GradientText>
                </div>
            
 
            </div>

            <section className="info">
                <div className="mx-auto mt-[300px] w-[800px] text-center">
                    <div className="text-[40px]  mx-auto ">What is FlipArena?</div>
                    <div className="mt-[10px]">{"FlipArena is an innovative online platform that offers a unique player vs player coin flip toss game. Our goal is to create an engaging and interactive experience for users who enjoy casual gaming with friends or strangers online. With our user-friendly interface and responsive design, players can easily create and join games, track their wins and losses, and compete for the top spot on our leaderboard. We understand that players value fairness and security, which is why we utilize advanced algorithms and encryption protocols to ensure that our game is free from cheating and hacking. Whether you're looking for a quick diversion during your break or a competitive challenge against other players, Le_epic_hax0rs has got you covered."}</div>
                </div>

                <div className="mt-[60px]  mx-auto w-[900px] text-center">
                    <div className="mt-[100px] text-[40px] mx-auto ">Overview</div>
                    <div className="mt-[10px] mb-[20px]">{"The goal of my web applications course project was to design and develop a fully-functional website that incorporates websockets, a database, and user profile features. To achieve this, my team and I decided to use the Flask web framework and Pymongo to communicate with a MongoDB server. As a key contributor to the project, I focused on optimizing the website's use of cookies and collaborated closely with my team members to create, test, and refine them. I also provided support to my colleagues in their respective areas of development to ensure that the project was executed flawlessly. Overall, our team successfully delivered a high-quality web application that met all of the project's requirements."}</div>
                    
                    <div className="w-[900px] mx-auto mt-[100px] mb-[100px]">
                                <img src={homeImg} />
                    </div>     


                    <div className="mt-[100px] text-[55px] mx-auto ">Defining Our Problem Space:</div>

                    <div className="mt-[50px] text-[40px] mx-auto ">Game requirements</div>
                    <div className="mt-[10px] mb-[50px]">{"Make a multiplayer game with lobby support and leaderboards. The game itself can be very simple as you will be graded on the functionality of the 3 features below, however it must be a multiplier game. The game can run entirely in the browser via JavaScript while sending/receiving updates on the game state via WebSockets."}</div>
                    
                    <div className="mt-[50px] text-[40px] mx-auto ">{"[User accounts]"}</div>
                    <div className="mt-[10px] mb-[50px]">{"Each user's profile must track at least one value related to that user (e.g., display name, avatar, number of wins, etc.). Users must have a way to view this data for their own profile. They do not have to have a way to change this data (e.g., display name, avatar can be chosen at account creation and never change)."}</div>

                    <div className="mt-[50px] text-[40px] mx-auto ">{"[User Data] - Lobbies or MMO"}</div>
                    <div className="mt-[10px] mb-[50px]">{"If the number of players for your game is limited, multiple games must be able to occur simultaneously. You are free to design the way users start multiple games as long as it is intuitive. Players should be able to start a new game even when other games are already in progress (e.g., If you have a 2 player game, 10 users should be able to play 5 different games simultaneously). Alternatively, you may build an MMO (Massively Multiplayer Online) game when any number of users can play in the same game simultaneously."}</div>


                    <div className="mt-[50px] text-[40px] mx-auto ">{"[WebSockets] - Multiplayer"}</div>
                    <div className="mt-[10px] mb-[40px]">{"When users are playing the game, all moves and game state updates must be sent via WebSockets to enable a real-time multiplayer experience."}</div>



                    <div className="mt-[100px] text-[40px] mx-auto ">{""}</div>
                    <div className="mt-[10px] mb-[40px]">{""}</div>

                </div>

                <div className="mx-auto text-center border-4 border-white rounded-lg  w-[1000px]">
                    <img src={multiplelobbys} />
                </div>
            </section>  

            <section id="workflow">
                 <div className="mx-auto mt-[100px] w-[800px] text-center">
                    <div className="mt-[100px] text-[55px] mx-auto ">Creating our web app:</div>


                    <div className="text-[40px] mx-auto mt-[20px]">Designing our game:</div>                    
                </div>
                <img src={originaldesign} width="1400" className="mx-auto"/>
            </section>


            <section id="testing">
                <div className="mx-auto text-center w-[800px] mt-[20px] ">
                    <div className="text-[40px] mx-auto ">Developing our game</div>
                    <div className="mt-[10px]">{"For our game we decided to use CSS, HTML, and Javascript for the front end, while using Python, Flask, Flask-SocketIO, pymongo, and MongoDB. For the front end we used css and html to design the web page and javascript to handle the games functionality. On the backend we went with python since we already had knowledge on how to connect and use the MongoDB with Pymongo. We also used Flask and Flask-SocketIO to allow communication between clients and the server in real time as it defines several routes for different pages, such as the index, leaderboard, player profile, about, and contact information."}</div>
                    <div className="text-[40px] mx-auto mt-[20px]">Hosting our game</div>
                    <div className="mt-[10px]">{"To host our game, we decided to use DigitalOcean Droplets, which we accessed for free through the GitHub Education Pack. We containerized our application using Docker, running it within the Droplet. To manage incoming traffic, we utilized NGINX, running on the Droplet itself and configured it to route requests to the respective container. For domain registration, we opted for Google Domains to secure a domain name. To ensure a secure connection, we employed Certbot to obtain and install SSL/TLS certificates. By combining these tools and services, we successfully hosted our game, ensuring its accessibility, security, and smooth operation."}</div>
                    
                </div>
                <div className="text-[40px] mx-auto text-center mt-[40px]">Gameplay:</div>      
                <div className="mx-auto text-center ">
                    <video className='mx-auto border-4 border-white rounded-lg ' width="1000"  controls >
                        <source src={gameplay} type="video/mp4"/>
                    </video>
                </div>
            </section>


            <section id="projectImages" className="mb-[100px]">
                <div className="mx-auto">
                    <ProjectShowcase />
                </div>
            </section>

            <section id="takeaways" className="text-center h-[400px] w-[800px] mb-[200px] mx-auto">
                <div className="mx-auto">
                    <div className="text-[40px] ">Team collaboration:</div>
                    <div className="mt-[10px]">{"Throughout our project development, we implemented a highly collaborative workflow using regular Discord voice calls. Leveraging the screen-sharing feature, we actively supported each other by providing instant feedback, brainstorming solutions, and troubleshooting challenges in real-time. This interactive approach facilitated prompt issue resolution, ensured aligned efforts, and maintained a consistent development pace. Additionally, we implemented measures to keep each other accountable and minimize distractions, fostering productivity and task-focused work during our voice calls."}</div>

                    <div className="text-[40px] mt-[40px]">Takeaways:</div>
                    <div className="mt-[10px]">{"Being part of this project was a valuable learning experience for me. It helped me understand the complexity and challenges involved in developing a web app from scratch. Collaborating with my team through Discord voice calls and screen-sharing taught me the significance of effective communication, providing instant feedback, and resolving issues promptly. I gained hands-on experience in real-time communication, database integration, and front-end design, which broadened my skill set. This project also deepened my understanding of the iterative nature of development, emphasized the importance of teamwork, and allowed me to apply various technologies in a practical setting."}</div>
                </div>
            </section>

        </div>
    )
}

export default FlipArena