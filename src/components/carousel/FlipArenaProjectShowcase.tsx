import Carousel from 'react-bootstrap/Carousel';
import './FlipArenaProjectShowcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import login1 from '../../components/projects/images/oldimages/lehax0rs/loggingin/welcome.png'
import login2 from '../../components/projects/images/oldimages/lehax0rs/loggingin/login.png'
import login3 from '../../components/projects/images/oldimages/lehax0rs/loggingin/main menu.png'

import join1 from '../../components/projects/images/oldimages/lehax0rs/joinginglobby/multiple lobbies.png'
import join2 from '../../components/projects/images/oldimages/lehax0rs/joinginglobby/joining a room.png'
import join3 from '../../components/projects/images/oldimages/lehax0rs/joinginglobby/waiting for other user to join lobby.png'
import join4 from '../../components/projects/images/oldimages/lehax0rs/joinginglobby/waiting for other user to ready up.png'
import join5 from '../../components/projects/images/oldimages/lehax0rs/joinginglobby/waiting for other user to ready up second message.png'



import gameplay1 from '../../components/projects/images/oldimages/lehax0rs/gameplay/choosing heads.png'
import gameplay2 from '../../components/projects/images/oldimages/lehax0rs/gameplay/choosing tails.png'
import gameplay3 from '../../components/projects/images/oldimages/lehax0rs/gameplay/game start.png'
import gameplay4 from '../../components/projects/images/oldimages/lehax0rs/gameplay/game chat.png'
import gameplay5 from '../../components/projects/images/oldimages/lehax0rs/gameplay/chris losing.png'

import extra1 from '../../components/projects/images/oldimages/lehax0rs/extra/app on ios.png'
import extra2 from '../../components/projects/images/oldimages/lehax0rs/extra/app on ios2.png'
import extra3 from '../../components/projects/images/oldimages/lehax0rs/extra/contact page.png'
import extra4 from '../../components/projects/images/oldimages/lehax0rs/extra/game info.png'
import extra5 from '../../components/projects/images/oldimages/lehax0rs/extra/leaderboard page.png'
import extra6 from '../../components/projects/images/oldimages/lehax0rs/extra/player information.png'


function FlipArenaProjectShowcase() {
  return (
    <div>
        <Tabs className="mt-[90px]">
            <div className='mx-auto w-[900px]'>
                <div className="text-[40px] mx-auto text-center mb-[20px]">{"App functionality:"}</div>
            <TabList>
                <Tab>Logging in</Tab>
                <Tab>Joining a lobby</Tab>
                <Tab>Gameplay</Tab>
                <Tab>Extra Features</Tab>
            </TabList>                
            </div>

            <TabPanel>
                <div className="text-[40px] mx-auto text-center mb-[20px]">{"Creating an authenticated user account in Postman:"}</div>
                <Carousel className='mx-auto w-[900px] overflow-visible' indicators={true} interval={null}>
                    <Carousel.Item>
                        <img className="mx-auto scale-[1.25]" src={login1} />
                        <Carousel.Caption className="!mt-[203px]">
                            <div className="!-mb-[200px]">Landing page</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={login2} className='mx-auto scale-[1.35]'/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>Login screen</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={login3} className='mx-auto '/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>Main menu</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>
            
            <TabPanel>
                <Carousel className='mx-auto overflow-visible join' indicators={true} interval={null}>
                <Carousel.Item>
                <div className="relative overflow-visible">
                    <img src={join1} className="mx-auto overflow-visible w-[1300px]" />
                </div>
                    <Carousel.Caption className='!mt-[203px]'>
                        <div className='!-mb-[200px]'>{"Lobbys available to join"}</div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={join2} className="mx-auto scale-[1.2]"/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Join a lobby with the room code"}</div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={join3} className=''/>
                    <Carousel.Caption>
                        <div className='!-mb-[900px]'>{"Waiting for other user to join"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={join4}/>
                    <Carousel.Caption>
                        <div className='!-mb-[300px]'>{"Ready up screen"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={join5}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Ready up screen 2"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

             
                </Carousel>
            </TabPanel>
            <TabPanel>

                <Carousel className='mx-auto gameplay' indicators={true} interval={null}>
                    <Carousel.Item>
                    <img className="h-full w-full object-contain " src={gameplay1}/>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px]'>{"User chose heads"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={gameplay2}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"User chose tails"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={gameplay3}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Both users chose, game starts"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={gameplay4}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Both users lose the game"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={gameplay5} className='w-[1300px] mx-auto'/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Winning and losing screens"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </TabPanel>
            {/* <TabPanel>
                <div className="text-[40px] mx-auto text-center ">{"TESTING SUBMISSIONS ENTITY:"}</div>
                <Carousel className='mx-auto w-[900px]' indicators={true} interval={null}>
                    <Carousel.Item>
                    <img className="h-full w-full object-contain " src={submissionsimg1}/>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px]'>{"Retrieve a List of Courses with an Empty Library (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={submissionsimg2}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create a New Course with Missing Information (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={submissionsimg3}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Establish a Fully Informed Course (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg4}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Adjust the End Date of an Existing Course to a Random Year (PUT Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg5}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Verify the Successful Update of a Specific Course (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg6}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create an Additional Course, with the ID Automatically Incremented to the Next Available Number (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg7}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Fetch an Overview of All Courses in the Library (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel> */}
        </Tabs>
    </div>

  );
}

export default FlipArenaProjectShowcase;