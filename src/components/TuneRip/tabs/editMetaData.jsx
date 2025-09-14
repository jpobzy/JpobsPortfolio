import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'antd';

export default function Download() {
  return (
    <>
      <div className='text-white absolute w-[1000px] font-[20px] justify-center -ml-[150px]'>
        <video src={'https://github.com/jpobzy/JpobsPortfolio/releases/download/TuneRipDemos/editMetaData.mp4'} controls  />

        <div className='justify-center flex text-[20px]'>
          Edit meta data for downloads
        </div>           

        <div className='w-[600px] mx-auto mt-[10px]  text-[15px] justify-center flex  text-center '>
          Edit metadata across tracks stored in your music download subfolders, or make changes to individual files. Update details like title, artist, album, genre, and more to keep your collection consistent.
        </div>  
      </div>
    </>
  )
}
