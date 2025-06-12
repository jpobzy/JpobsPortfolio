import githublogo from './icons/github-142-svgrepo-com.svg'
import linkedinlogo from './icons/linkedin-svgrepo-com.svg'
import maillogo from './icons/mail-alt-svgrepo-com (1).svg'

function Footer(){

    return(
        <div className="">
            <div className="flex justify-center items-center gap-4 -mb-[90px]">
                <div className="">
                    <a href="https://github.com/jpobzy" target="_blank" rel="noopener noreferrer">
                    <img src={githublogo} alt="Github" className="w-[50px]" />
                    </a>
                </div>

                <div className="">
                    <a href="https://www.linkedin.com/in/jpobletejr" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinlogo} alt="Github" className="w-[50px]" />
                    </a>
                </div>

                <div className="">
                    <a href="mailto:jnpobletejr@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={maillogo} alt="Github" className="w-[50px]" />
                    </a>
                </div>
            </div>

        </div>
    )
}



export default Footer