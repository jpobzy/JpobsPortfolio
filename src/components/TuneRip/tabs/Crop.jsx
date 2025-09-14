import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'antd';

export default function Crop() {
  return (
    <>
      <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
        <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/crop.mp4'} controls  />

        <div className='justify-center flex text-[20px]'>
          Crop images for album covers
        </div>           

        <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
          Upload an image, crop it to your liking, and save the result for reuse as album cover art. Perfect for keeping your music library visually consistent.
        </div>  
      </div>
    </>
  )
}
