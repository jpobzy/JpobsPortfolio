
import pythonlogo from './techstackicons/python-svgrepo-com.svg'
import scalalogo from './techstackicons/scala-svgrepo-com.svg'
// import typescriptlogo from './techstackicons/typescript-official-svgrepo-com.svg'
import javascriptlogo from './techstackicons/js-svgrepo-com.svg'
import reactlogo from './techstackicons/react-javascript-js-framework-facebook-svgrepo-com.svg'
import mongodblogo from './techstackicons/mongodb-svgrepo-com.svg'
import dockerlogo from './techstackicons/docker-svgrepo-com.svg'
import nodejslogo from './techstackicons/nodejs-svgrepo-com.svg'
import gitlogo from './techstackicons/git-svgrepo-com.svg'
import tailwindcsslogo from './techstackicons/tailwind-svgrepo-com.svg'

function TechStack(){
    
    return(
        <div className=''>
            <p className="w-fit mx-auto text-[50px]">Tech Stack</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-30 gap-[80px] mt-10 w-fit mx-auto text-[30px]">

                <div className="w-fit mx-auto">
                    <img src={pythonlogo} alt="Python" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Python</p>
                </div>
                

                <div className="w-fit mx-auto">
                    <img src={scalalogo} alt="Scala" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Scala</p>
                </div>
                
            

                <div className="w-fit mx-auto">
                    <img src={javascriptlogo} alt="JavaScript" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">JavaScript</p>
                </div>


                <div className="w-fit mx-auto">
                    <img src={reactlogo} alt="React" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">React</p>
                </div>
                
                <div className="w-fit mx-auto">
                    <img src={tailwindcsslogo} alt="Git" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Tailwind CSS</p>
                </div>      



                <div className="w-fit mx-auto">
                    <img src={mongodblogo} alt="MongoDB" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">MongoDB</p>
                </div>
                
                <div className="w-fit mx-auto">
                    <img src={dockerlogo} alt="Docker" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Docker</p>
                </div>
                

                <div className="w-fit mx-auto">
                    <img src={nodejslogo} alt="NodeJS" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">NodeJS</p>
                </div>
                
                <div className="w-fit mx-auto">
                    <img src={gitlogo} alt="Git" className="mx-auto w-[100px] " />
                    <p className="w-fit mx-auto">Git</p>
                </div>


            </div>
        </div>
    )
}

export default TechStack