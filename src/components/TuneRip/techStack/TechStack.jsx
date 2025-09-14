import React from 'react'
import AnimatedList from '@components/animatedList/AnimatedList'
import electronViteLogo from '@assets/electronViteLogo.svg'
import flaskLogo from '@assets/flask-svgrepo-com.svg'
import jsLogo from '@assets/js-svgrepo-com.svg'
import pythonLogo from '@assets/python-svgrepo-com.svg'
import reactLogo from '@assets/react-javascript-js-framework-facebook-svgrepo-com.svg'
import sqliteLogo from '@assets/sqlite.svg'
import tailwindLogo from '@assets/tailwind-svgrepo-com.svg'
import cssLogo from '@assets/css-3-svgrepo-com.svg'


export default function TechStack() {
    const AnimateListItem = (logo, title, titleTailwindSettings)=> <>
        <div className='text-center mx-auto flex justify-center'>
            {logo &&
                <div className='flex w-[40px]'>
                    <img src={logo}/>  
                </div>            
            }

            <div className={`flex text-[20px] ${titleTailwindSettings && titleTailwindSettings} ${logo && 'ml-[10px]'}`}>
               {title} 
            </div>
            
        </div>
    </>

    const items = [
        AnimateListItem(null, 'Front-end', 'text-[25px]'), AnimateListItem(electronViteLogo, 'Electron-vite'), AnimateListItem(jsLogo, 'JavaScript'), AnimateListItem(reactLogo, 'React'), AnimateListItem(tailwindLogo, 'Tailwind'), AnimateListItem(cssLogo, 'CSS'), 
        AnimateListItem(null, 'Back-end', 'text-[25px]'), AnimateListItem(pythonLogo, 'Python'), AnimateListItem(flaskLogo, 'Flask'), AnimateListItem(sqliteLogo, 'SQLite')
    ]; 
        
    return (
        <>
            <div className='w-[800px] mx-auto pointer-events-none'>
                <AnimatedList
                items={items}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                />
            </div>
        </>

  )
}
