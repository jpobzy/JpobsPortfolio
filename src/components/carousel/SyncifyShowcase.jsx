import Carousel from 'react-bootstrap/Carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './SyncifyShowcase.css'

import landingpage from '../projects/images/syncify/starting/app landing page.png'
import console from '../projects/images/syncify/starting/console running.png'
import cert1 from '../projects/images/syncify/starting/create cert1.png'
import cert2 from '../projects/images/syncify/starting/create cert2.png'
import key1 from '../projects/images/syncify/starting/create key1.png'
import key2 from '../projects/images/syncify/starting/create key2.png'
import key3 from '../projects/images/syncify/starting/create key3.png'
import key4 from '../projects/images/syncify/starting/create key4.png'
import spotifyapp from '../projects/images/syncify/starting/create spotify app.png'
import spotifyclient from '../projects/images/syncify/starting/spotify client id.png'



import access1 from '../projects/images/syncify/give access/confirm access to AM.png'
import access2 from '../projects/images/syncify/give access/confirm access to spotify.png'
import access3 from '../projects/images/syncify/give access/sign in to AM request.png'


import homepage from '../projects/images/syncify/functionality/after signing in.png'
import yttransfer1 from '../projects/images/syncify/functionality/transfer a playlist link.png'
import yttransfer2 from '../projects/images/syncify/functionality/transfer a playlist link2.png'
import am2spotify from '../projects/images/syncify/functionality/transfer playlist from AM to spotify.png'
import spotify2am from '../projects/images/syncify/functionality/transfer playlist from S to AM.png'
import transfersuccess1 from '../projects/images/syncify/functionality/transfer working/Transfer from AM to Spotify.png'
// import landingpage from '../projects/images/syncify/functionality/transfer working/Transfer from spotify to AM 1.png'
// import landingpage from '../projects/images/syncify/functionality/transfer working/Transfer from spotify to AM 2.png'
import transfersuccess2 from '../projects/images/syncify/functionality/transfer working/Transfer from spotify to AM 3.png'
// import landingpage from '../projects/images/syncify/functionality/'
// import landingpage from '../projects/images/syncify/functionality/'



function TuneRipShowcase() {
  return (
    <div >

        <Tabs className="mt-[90px]">
            <div className='mx-auto text-center lg:w-[900px]'>
                <TabList>
                    <Tab>App setup</Tab>
                    <Tab>Running the app</Tab>
                    <Tab>Transfer</Tab>
                </TabList>                
            </div>

            <TabPanel>
                <Carousel className='mx-auto overflow-visible process' indicators={true} interval={null}>



                    <Carousel.Item>
                        <img src={cert1} className='mx-auto w-[700px] text-black'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] text-black -mb-[30px]'>Creating an identifier</div>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item>
                        <img src={cert2} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] text-black -mb-[30px]'>{"Identifier created"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    

                    <Carousel.Item>
                        <img src={key1} className='mx-auto w-[700px] '/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Creating a key"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={key2} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Using identifier to create key"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={key3} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Register key page"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={key4} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Key created"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={spotifyapp} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Creating an app in Spotify web developer"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={spotifyclient} className='mx-auto w-[900px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Spotify app created"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>

            <TabPanel>
                <Carousel className='mx-auto overflow-visible app' indicators={true} interval={null}>

                    <Carousel.Item>
                    <div className="relative overflow-visible">
                        <img src={access3} className="mx-auto overflow-visible w-[700px]" />
                    </div>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px] text-black'>{"Apple Music sign in request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={access1} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <div className='mb-[0px]'>
                            <Carousel.Caption className=''>
                                <div className='lg:-mb-[100px] -mb-[30px] text-black'>{"Apple Music access request"}</div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>   
                                     
                    <Carousel.Item>
                    <div className="relative overflow-visible">
                        <img src={access2} className="mx-auto overflow-visible w-[700px]" />
                    </div>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='mb-[20px]'>{"Spotify access request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </TabPanel>
            



            <TabPanel>
                <Carousel className='mx-auto overflow-visible ' indicators={true} interval={null}>
                    <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={homepage} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] text-black'>{"Signed in landing page"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    {/* <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={yttransfer1} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] '>{"Track playing in Spotify"}</div>
                        </Carousel.Caption>
                    </Carousel.Item> */}

                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={yttransfer2} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] text-black'>{"Transfer from youtube to either platforms option"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                {/* </Carousel>
            </TabPanel>

            <TabPanel>
                        <Carousel className='mx-auto overflow-visible mobile' indicators={true} interval={null}> */}
                    <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={am2spotify} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] text-black'>{"Available playlists in Apple Music to transfer"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={transfersuccess1} className="mx-auto overflow-visible w-[1200px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className=' text-gray-400'>{"Transfer from Apple Music to Spotify completed"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={spotify2am} className="mx-auto overflow-visible w-[700px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] text-black'>{"Available playlists in Spotify to transfer"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={transfersuccess2} className="mx-auto overflow-visible w-[1200px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] text-gray-400'>{"Transfer from Spotify to Apple Music completed"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>
        </Tabs>
    
    </div>

  );
}

export default TuneRipShowcase;