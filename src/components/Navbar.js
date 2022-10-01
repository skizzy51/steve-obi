import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import '../styles/css/App.css'

export function Navbar () {
    const [sideNavOpen, setSideNavOpen] = useState(false)

    function SideNav () {
        return (
            <motion.div
            initial={{x:'100vw'}}
            animate={{x:0}}
            exit={{x:'100vw'}}
            transition={{type:'tween'}}
            className='sidenav'
            >
                <div className='close-nav'>
                    <FontAwesomeIcon onClick={()=>setSideNavOpen(false)} icon={faTimes} />
                </div>
                {
                    window.location.pathname === '/' &&
                    <div className='sidenav-links'>
                        <a onClick={()=>setSideNavOpen(false)} href='#projects'>MY WORK</a>
                        <a onClick={()=>setSideNavOpen(false)} href='#about'>ABOUT</a>
                        <a onClick={()=>setSideNavOpen(false)} href='#contact'>CONTACT ME</a>
                    </div>
                }
                <div className='sidenav-socials'>
                    <div>
                        <FontAwesomeIcon onClick={()=>alert('No facebook account yet')} className='socials' icon={faFacebookF} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://github.com/skizzy51')} className='socials' icon={faGithub} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://linkedin.com/in/obi-steve')} className='socials' icon={faLinkedinIn} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://api.whatsapp.com/send?phone=%2B2349074102991&text&app_absent=0')} className='socials' icon={faWhatsapp} />
                    </div>
                </div>
            </motion.div>
        )
    }

    return useMemo(()=>{
        return (
            <>
            <div className="navbar">
                <div className="navbar-cont">
                    <img onClick={()=>window.location.assign('/')} src='images/logo.svg' className='logo' alt='logo'/>
                    {
                        window.location.pathname === '/' &&
                        <div className="navbar-links">
                            <a href='#projects'>MY WORK</a>
                            <a href='#about'>ABOUT</a>
                            <a href='#contact'>CONTACT ME</a>
                        </div>
                    }
                    <FontAwesomeIcon onClick={()=>setSideNavOpen(true)} className='menu-btn' icon={faBars}/>
                </div>
            </div>
    
            <AnimatePresence>
                {sideNavOpen && <SideNav/>}
            </AnimatePresence>
            </>
        )
    }, [sideNavOpen])
}