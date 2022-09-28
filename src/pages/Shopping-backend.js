import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from '../components/Navbar'
import { motion } from 'framer-motion'
import '../styles/css/Project-page.css'
import { faCode, faFolderOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export function ShoppingBackend () {
    return (
        <>
        <Navbar/>
        
        <div className='project-page'>
            <div className='page-info'>
                <h1>E-COMMERCE API</h1>
                <motion.img initial={{opacity:0,y:'-100%'}} animate={{opacity:1,y:0}} transition={{duration:2}} className='landing-pic' src='images/shopping backend screenshot.svg' alt='project pic' />
                <h2>Tools used in building this app include</h2>
                <div className='project-tools'><span>Node js</span><span>Express js</span><span>JSON-WEB-TOKEN</span><span>Mongo db</span><span>Multer</span></div>
                <p className='read-me'>
                    This is an API that handles the user authentiication on an e-commerce app, handles creation and deletion of products, 
                    image file upload using multer, updating store inventory, and even handle user account update like favorite and unfavorite items.
                </p>
                <div className='view-backend'>
                    <div onClick={()=>window.location.assign('https://documenter.getpostman.com/view/21652321/2s83f5ouWX')}>View API documentation</div>
                    <div onClick={()=>window.location.assign('https://github.com/skizzy51/react-eden-backend')}>View Github repo</div>
                </div>
            </div>
            <FontAwesomeIcon icon={faCode} style={{fontSize:'clamp(7rem, 25vw, 25rem)', position:'absolute', opacity:'15%',left:'-10%',top:'10vh'}} />
            <FontAwesomeIcon icon={faFolderOpen} style={{fontSize:'clamp(5rem, 15vw, 20rem)', position:'absolute', opacity:'15%',right:'5%',top:'13%'}} />
            <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'clamp(10rem, 20vw, 20rem)', position:'absolute', opacity:'15%',left:'0%',top:'50%'}} />
        </div>

        <motion.div initial={{x:'-100%'}} animate={{x:0}} transition={{delay:2,type:'tween'}} className='rectangle'></motion.div>
        
        <div className='project-socials'>
            <FontAwesomeIcon onClick={()=>alert('No facebook account yet')} className='home-social-btn' icon={faFacebookF} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://github.com/skizzy51')} className='home-social-btn' icon={faGithub} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://linkedin.com/in/obi-steve')} className='home-social-btn' icon={faLinkedinIn} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://api.whatsapp.com/send?phone=%2B2349074102991&text&app_absent=0')} className='home-social-btn' icon={faWhatsapp} />
        </div>
        </>
    )
}