import './miniAboutMe.css'

function MiniAboutMe(){
    return (      
        <div className='w-fit mx-auto'>
            <div className='bg-gray-800 flex justify-center font-mono text-[35px] mb-10'>
                <h1>about-me.json</h1>
            </div>
            <div className="font-mono text-[20px] bg-gray-900 -mt-10">
                <p className=' text-green-400'>"skills": {'{'}</p>          
                    <span className="indent text-blue-200">"front-end":</span> ["JavaScript", "React", "TypeScript"],
                    <br></br>
                    <span className="indent text-blue-200">"back-end":</span> ["Python", "Scala", "MongoDB", "SQL"]   
                <p className=' text-green-400'> {'},'}</p>
                <p className=' text-green-400'>"interests": {'{'}</p>          
                    <span className="indent text-blue-200">"programming":</span> ["software engineering","fullstack development"],
                    <br></br>
                    <span className="indent text-blue-200">"hobbies":</span> ["Listing to Music", "MCU movies", "games", "PC building"]
                <p className=' text-green-400'> {'},'}</p>
                <p className=' text-green-400'>"socials": {'{'}</p>          
                    <span className="indent text-blue-200">"LinkedIn":</span> <a className='link' href="https://www.linkedin.com/in/jpobletejr">https://www.linkedin.com/in/jpobletejr,</a>
                    <br></br>
                    <span className="indent text-blue-200">"GitHub":</span> <a className='link' href="https://github.com/jpobzy">https://github.com/jpobzy,</a>
                    <br></br>
                    <span className="indent text-blue-200">"resume":</span> <a className='link' href='./JoeyPobleteJrResume.pdf' target="_blank">download resume</a>
                <p className=' text-green-400'> {'},'}</p>
                <p className=' text-green-400'>"education": {'{'}</p>          
                    <span className="indent text-blue-200">"school":</span> "University at Buffalo",
                    <br></br>
                    <span className="indent text-blue-200">"major":</span> "Computer Science"
                <p className=' text-green-400'> {'}'}</p>
            </div>
        </div>
    )

}

export default MiniAboutMe