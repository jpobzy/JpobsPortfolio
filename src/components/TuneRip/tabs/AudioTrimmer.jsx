import React, { useEffect, useState } from 'react'
import video from '@assets/TuneRipDemos/audioTrimmer.mp4'
import ReactPlayer from "react-player";
import { Button } from 'antd';


export default function AudioTrimmer() {

    return (
        <>  
        <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
            <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/audioTrimmer.mp4'} controls  />

            <div className='justify-center flex text-[20px]'>
                Trim audio from the beginning or end of a track with precision
            </div>           

            <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
              Drag the handles to adjust, and hold them down to zoom in for fine-tuned editing. When saving, you can create a new file that preserves all original metadata, including filename, track number, artist, album title, cover art, and genre.
            </div>  
        </div>

        </>
    )
}
