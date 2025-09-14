import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'antd';

export default function Download() {
  return (
    <>
        <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
            <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/downloadDemo.mp4'} controls  />
            
            <div className='justify-center flex text-[20px]'>
              Download videos from channels, playlists or individual tracks.
            </div>           

            <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
              Easily customize your downloads with full control over metadata. Edit details such as album title, cover art, artist, and genre, and even adjust track titles for individual downloads. This ensures your music library stays consistent and organized the way you want it.
            </div>  
            
        </div>
    </>
  )
}
