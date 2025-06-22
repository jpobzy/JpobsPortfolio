import './Bio.css'
import avatar from './avatar.jpg'
function Bio(){
    return (
    <div className="mb-[]">
                <div className="flex justify-center items-center ">
                    <div className="avatar">
                        <div className="w-[200px] rounded-full ring ring-primary ring-offset-2 overflow-hidden mx-auto ">
                        <img src={avatar} alt="avatar"   />
                        </div>
                    </div>
                </div>
        <section className="info">
            <div className="mx-auto -mt-[590px] lg:w-[800px] w-[400px] text-center">
                <div className="text-[40px]  mx-auto ">About me</div>
                <div className="mt-[10px] text-[20px]">{"I'm a software developer with a background in computer science and a passion for building clean, functional tools. Whether it's a web app, automation script, or full-stack platform, I enjoy turning ideas into code that solves real problems. Currently exploring React, JavaScript, and Python-based backends."}</div>
            </div>
        </section>  
    </div> 
    )
}

export default Bio;