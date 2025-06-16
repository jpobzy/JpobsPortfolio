import Carousel from 'react-bootstrap/Carousel';
import './DevuProjectShowcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TuneRipShowcase.css'

import chooseAlbumCover from '../projects/images/tunerip/albumcover choice.png'
import downloadShowcase2 from '../projects/images/tunerip/download page 2.png'
import downloadShowcase1 from '../projects/images/tunerip/download page.png'
import adjustDownloadSettings from '../projects/images/tunerip/download settings.png'
// import homeimg from '../projects/images/tunerip/home page.png'
import shrunkHomeWindow from '../projects/images/tunerip/smaller home page.png'
// import oldDownloadShowcase from '../projects/images/tunerip/tracks downloaded.png'


import tracksDatabase from '../projects/images/tunerip/database/tracks.png'
import userDatabase from '../projects/images/tunerip/database/users.png'


import tracksDownloadHistory1 from '../projects/images/tunerip/download history/download history 1.png'
import tracksDownloadHistory2 from '../projects/images/tunerip/download history/download history 2.png'
import tracksDownloadHistory3 from '../projects/images/tunerip/download history/download history 3.png'

import trackInAppleMusic from '../projects/images/tunerip/track in platforms/track in apple music.png'
import trackInSpotify from '../projects/images/tunerip/track in platforms/track in spotify.png'
import trackInMP3Tag from '../projects/images/tunerip/track in platforms/track in mp3 tag.png'


// import spotifyTrackAddedConfirmation from '../projects/images/tunerip/mobile/track confirmed added to playlist in spotify.png'
// import spotifyTrack from '../projects/images/tunerip/mobile/track found in spotify.png'
// import trackInSpotifyPlaylist from '../projects/images/tunerip/mobile/track in playlist in spotify.png'
import trackPlayingInSpotify from '../projects/images/tunerip/mobile/track in spotify.png'

import lockScreen from '../projects/images/tunerip/mobile/track on lock screen.png'

// import trackOptionsInAppleMusic from '../projects/images/tunerip/mobile/track options in playlist in apple music.png'
import trackPlayingInAppleMusic from '../projects/images/tunerip/mobile/track playing in apple music.png'
// import trackSavedInAppleMusic from '../projects/images/tunerip/mobile/track saved in apple music.png'
// import trackAlbumInAppleMusic from "../projects/images/tunerip/mobile/track's album in apple music.png"


function TuneRipShowcase() {
  return (
    <div >

        <Tabs className="mt-[90px]">
            <div className='mx-auto text-center lg:w-[900px]'>
                <TabList>
                    <Tab>Download Process</Tab>
                    <Tab>Database</Tab>
                    <Tab>Tracks download history</Tab>
                    <Tab>Track in other platforms</Tab>
                    <Tab>Track on mobile</Tab> 
                </TabList>                
            </div>

            <TabPanel>
                <Carousel className='mx-auto overflow-visible process' indicators={true} interval={null}>

                    <Carousel.Item>
                        <img src={shrunkHomeWindow} className='mx-auto w-[600px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'>{"Select a user or add a new one"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img className='mx-auto lg:w-[1200px]' src={adjustDownloadSettings}/>
                        <Carousel.Caption className=''>
                            <div className='lg:-mb-[100px] -mb-[30px]'>Optional setting to change download settings</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={chooseAlbumCover} className='mx-auto w-[600px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'>Choose an album cover for the track to have or upload your own</div>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item>
                        <img src={downloadShowcase1} className='mx-auto w-[700px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'>{"What the download screen will look like (still in progress)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    

                    <Carousel.Item>
                        <img src={downloadShowcase2} className='mx-auto w-[700px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]]'>{"New version"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>

            <TabPanel>
                <Carousel className='mx-auto overflow-visible join' indicators={true} interval={null}>
                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={tracksDatabase} className="mx-auto overflow-visible w-[1200px]" />
                        </div>
                        <div className='mb-[0px]'>
                            <Carousel.Caption className=''>
                                <div className='lg:-mb-[100px] -mb-[30px]'>{"What tracks look like in the database"}</div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>                    
                    <Carousel.Item>
                    <div className="relative overflow-visible">
                        <img src={userDatabase} className="mx-auto overflow-visible w-[1200px]" />
                    </div>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px]'>{"What users look like in the database"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>
            
            <TabPanel>
                <Carousel className='mx-auto overflow-visible history' indicators={true} interval={null}>
                    <Carousel.Item>
                    <div className="relative overflow-visible">
                        <img src={tracksDownloadHistory2} className="mx-auto overflow-visible w-[1200px]" />
                    </div>
                        <Carousel.Caption className=''>
                            <div className='lg:-mb-[100px] -mb-[30px]'>{"Download history in full screen"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={tracksDownloadHistory1} className='mx-auto w-[700px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'>{"Only 1 track downloaded"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={tracksDownloadHistory3} className='mx-auto w-[700px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>

            <TabPanel>
                <Carousel className='mx-auto overflow-visible platforms' indicators={true} interval={null}>
                    <Carousel.Item>
                    <div className="relative overflow-visible">
                        <img src={trackInAppleMusic} className="mx-auto overflow-visible w-[1200px]" />
                    </div>
                        <Carousel.Caption className=''>
                            <div className='lg:-mb-[100px] -mb-[30px] caption'>{"Apple Music"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={trackInSpotify} className='mx-auto w-[1200px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px]'>{"Spotify"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={trackInMP3Tag} className='mx-auto w-[1000px]'/>
                        <Carousel.Caption>
                            <div className='lg:-mb-[100px] -mb-[30px] caption'>{"MP3 Tag (MP3 file editor)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>



            <TabPanel>
                <Carousel className='mx-auto overflow-visible mobile' indicators={true} interval={null}>
                    <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={lockScreen} className="mx-auto overflow-visible w-[300px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] '>{"Track shown in lock screen"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className="relative overflow-visible ">
                            <img src={trackPlayingInSpotify} className="mx-auto overflow-visible w-[300px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] '>{"Track playing in Spotify"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="relative overflow-visible">
                            <img src={trackPlayingInAppleMusic} className="mx-auto overflow-visible w-[300px]" />
                        </div>
                        <Carousel.Caption className=''>
                            <div className='!-mb-[200px] '>{"Track playing in Apple Music"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>


        </Tabs>
    </div>

  );
}

export default TuneRipShowcase;