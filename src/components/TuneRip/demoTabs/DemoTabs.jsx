import React, { useState } from 'react'
import { Button, Tabs } from "antd"
import './DemoTabs.css'
import AudioTrimmer from '@components/TuneRip/tabs/AudioTrimmer'
import Backgrounds from '@components/TuneRip/tabs/Backgrounds'
import ChannelCard from '@components/TuneRip/tabs/ChannelCard'
import Download from '@components/TuneRip/tabs/Download'
import Crop from '@components/TuneRip/tabs/Crop'
import EditMetaData from '@components/TuneRip/tabs/EditMetaData'

export default function DemoTabs() {
    const [tab, setTab] = useState(null)

    const onChange = key => {
    console.log(key);
    };

    const items = [
    {
        key: 'download',
        label: 'Download demo',
        children: <Download />,
    },

    {
        key: 'audioTrimmer',
        label: 'Audio Trimmer',
        children: <AudioTrimmer />,
    },
    {
        key: 'backgrounds',
        label: 'Backgrounds',
        children: <Backgrounds/>,
    },
    {
        key: 'channelCard',
        label: 'Channel Card',
        children: <ChannelCard />,
    },
    {
        key: 'crop',
        label: 'Crop',
        children: <Crop/>,
    },
    {
        key: 'editMetaData',
        label: 'Edit Meta Data',
        children: <EditMetaData/>,
    },
    ];

  return (
    <>
        <div className='flex justify-center '>
            <div className="  mb-[700px] flex justify-center mx-auto "> 
                <Tabs defaultActiveKey="download" items={items} onChange={onChange} destroyOnHidden={true}/> 
            </div>            
        </div>

    </>
  )
}
