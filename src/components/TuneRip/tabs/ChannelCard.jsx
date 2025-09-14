import React, { useEffect, useState } from 'react'
import video from '@assets/TuneRipDemos/channelCard.mp4'
import ReactPlayer from "react-player";
import { Button } from 'antd';

export default function ChannelCard() {
  return (
    <>
      <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
        <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/channelCard.mp4'} controls  />

        <div className='justify-center flex text-[20px]'>
          Change how the channel cards look
        </div>           

        <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
          Customize the look of your channel cards by adjusting their colors and style. You can also toggle the ReactBits electric border effect on or off for a more dynamic or minimal appearance.
        </div>  
      </div>
    </>
  )
}
