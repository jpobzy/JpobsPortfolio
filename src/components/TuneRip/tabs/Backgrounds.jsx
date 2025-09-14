import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'antd';

export default function Backgrounds() {
  return (
  <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
    <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/backgrounds.mp4'} controls  />

    <div className='justify-center flex text-[20px]'>
      Change the apps background
    </div>           

    <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
      Personalize the app with 14 customizable backgrounds from ReactBits. Easily switch between styles to match your mood or workflow and make the interface truly your own
    </div>  
  </div>
  )
}
