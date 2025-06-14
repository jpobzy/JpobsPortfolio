import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// import Dock from '../dock/Dock';
import Dock from '../dock/Dock.jsx'
import { VscHome, VscAccount,  VscSettingsGear } from 'react-icons/vsc';
import { GoRepoForked } from "react-icons/go";
import { MdOutlinePerson2 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";

function Footer() {
    const goToLink = (url) => {
    window.location.href = url;
    };

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => goToLink('/') },
    // { icon: <GoRepoForked size={18} />, label: 'Projects', onClick: () => goToLink('/#projects') },
    // { icon: <MdOutlinePerson2  size={18} />, label: 'Bio', onClick: () => alert('Profile!') },
    { icon: <FaFileAlt size={18} />, label: 'Resume', onClick: () => goToLink('JoeyPobleteJrResume.pdf')},


    // { icon: <IoShareSocial size={18} />, label: 'Socials', onClick: () => goToLink('/#socials') },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => goToLink('/https://www.linkedin.com/in/jpobletejr') },
    { icon: <FaGithub size={18} />, label: 'Github', onClick: () => goToLink('https://github.com/jpobzy') },
    // { icon: <MdOutlineEmail size={18} />, label: 'Email', onClick: () => goToLink('mailto:jnpobletejr@gmail.com') },
  

];


  return (
    <div >
        <div className="foot" style={{ position: 'fixed', bottom: 0,  width: '100%', zIndex: 9999}}>
            <Dock 
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
                
            />
        </div>

        
    </div>
  )
}

export default Footer;