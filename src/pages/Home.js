import { faBootstrap, faCss3Alt, faFacebookF, faGitAlt, faGithub, faHtml5, faJs, faLinkedinIn, faNodeJs, faPython, faReact, faSass, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useInView } from 'react-intersection-observer'
import '../styles/css/Home.css'

export function Home () {
    const [introHide, setIntroHide] = useState(true)
    const { ref : secondSection, inView : secondSectionVisible } = useInView({threshold : .05})
    const { ref : fourthSection, inView : fourthSectionVisible } = useInView({threshold: .5})
    const { ref : firstProject, inView : firstProjectVisible } = useInView({threshold : .3})
    const { ref : secondProject, inView : secondProjectVisible } = useInView({threshold : .3})
    const { ref : thirdProject, inView : thirdProjectVisible } = useInView({threshold : .3})
    const { ref : fourthProject, inView : fourthProjectVisible } = useInView({threshold : .3})
    const { ref : aboutContent, inView : aboutContentVisible } = useInView({threshold : .4})

    function stopLoading() {
        setTimeout(() => {
            setIntroHide(false)
        }, 3500);
    }

    return (
        <div style={!introHide ? {height:'auto'} : {height:'100vh',overflowY:'hidden'}}>
            <div className="intro" id="#intro">
                <motion.img
                initial={window.innerWidth > 768 ? {height:'100vh',x:0} : {height:'80vh',x:0}}
                animate={!introHide ? window.innerWidth > 768 ? {height:'80vh', x:'15vw'} : {height:'50vh', x:'35vw'} : {}}
                transition={{duration:2.5}}
                src='images/standing pic.png'
                className='intro-pic'
                onLoad={stopLoading}
                alt='pic of steve'
                />

                <AnimatePresence>
                    {introHide &&
                    <motion.img
                    initial={{opacity:0}}
                    animate={{y:'30vh',opacity:1}}
                    transition={{duration:3}}
                    exit={{y:'100vh',opacity:0}}
                    className='intro-loading'
                    src='images/loading....svg'
                    />}
                </AnimatePresence>
                
                {
                    !introHide &&
                    <>
                        <Navbar/>

                        <motion.img
                        className='intro-bg-txt'
                        src='images/STEVE.svg'
                        alt='bg-txt'
                        initial={{top:'5rem', left:'-3rem'}}
                        animate={{x:'10rem'}}
                        transition={{duration:15, repeat:Infinity, repeatType:'reverse', ease:'easeOut'}}
                        />
                        <motion.img
                        className='intro-bg-txt'
                        src='images/OBI.svg'
                        alt='bg-txt'
                        initial={{bottom:'0', right:'-3rem'}}
                        animate={{right:'6rem'}}
                        transition={{duration:15, repeat:Infinity, repeatType:'reverse', ease:'easeOut'}}
                        />

                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className='intro-info'>
                            <p>Hi, my name is</p>
                            <p>Steve Obi</p>
                            <p>I am a full stack developer</p>
                            <p>A Nigerian based full stack developer who specializes in building responsive, full stack applications for the web.</p>
                            <div className='intro-btn' onClick={()=>window.location.href = '#contact'}>Contact me</div>
                        </motion.div>

                        <div className='home-rectangle'></div>

                        {
                            !fourthSectionVisible &&
                            <div className='home-socials'>
                                <FontAwesomeIcon onClick={()=>alert('No facebook account yet')} className={secondSectionVisible ? 'home-social-btn-1' : 'home-social-btn-2'} icon={faFacebookF} />
                                <FontAwesomeIcon onClick={()=>window.location.assign('https://github.com/skizzy51')} className={secondSectionVisible ? 'home-social-btn-1' : 'home-social-btn-2'} icon={faGithub} />
                                <FontAwesomeIcon onClick={()=>window.location.assign('https://linkedin.com/in/obi-steve')} className={secondSectionVisible ? 'home-social-btn-1' : 'home-social-btn-2'} icon={faLinkedinIn} />
                                <FontAwesomeIcon onClick={()=>window.location.assign('https://api.whatsapp.com/send?phone=%2B2349074102991&text&app_absent=0')} className={secondSectionVisible ? 'home-social-btn-1' : 'home-social-btn-2'} icon={faWhatsapp} />
                            </div>
                        }
                    </>
                }
            </div>

            {/* second section */}

            <div ref={secondSection} className='second-section' id='projects'>
                <img src='images/dotted square.svg' alt='dotted square' style={{position:'absolute', top:'50%', right:'-10vw', width:'clamp(8rem, 23vw, 22rem)',zIndex:1}} />
                <div className='second-section-head'>
                    <h1>My work</h1>
                    <p>These applications show the basic core abilities of a full stack developer to be able to design responsive user interfaces on the frontend and also create or connect to functional backend APIs.</p>
                </div>
                <div className='second-section-info'>
                    <motion.div ref={firstProject}
                    initial={{opacity:0,x:'-100%'}}
                    animate={firstProjectVisible && {opacity:1,x:0}}
                    whileHover={{scale:1.02,cursor:'pointer'}}
                    className='info-cont-right'
                    onClick={()=>window.location.assign('/eden-supermarket')}
                    >
                        <img src='images/products page imac.jpg' className='second-section-img' alt='project' />
                        <div className='second-section-text'>
                            <div>
                                <h4>A FULL-STACK E-COMMERCE APP WITH TWO ROLES</h4>
                                <p>
                                    An application which consists of an admin section where the business owner
                                    can create products and control store inventory, and a customer section where
                                    he customer can login, checkout, add to favorites and many more functions
                                </p>
                                <span>Click to view</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    ref={secondProject}
                    initial={{opacity:0,x:'100%'}}
                    animate={secondProjectVisible && {opacity:1,x:0}}
                    whileHover={{scale:1.02,cursor:'pointer'}}
                    className='info-cont-left'
                    onClick={()=>window.location.assign('/steve-betting')}
                    >
                        <img src='images/horse selection ipad keyboard.jpg' className='second-section-img' alt='project' />
                        <div className='second-section-text'>
                            <div>
                                <h4>STEVE BET - A VIRTUAL BETTING WEB APP</h4>
                                <p>
                                An app created using reactjs, sass, and framer motion.
                                All event results are randomly generated using the Math.random() function in JavaScript.
                                The race and football simulations are visually animated with the help of the framer motion library
                                </p>
                                <span>Click to view</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    ref={thirdProject}
                    initial={{opacity:0,x:'-100%'}}
                    animate={thirdProjectVisible && {opacity:1,x:0}}
                    whileHover={{scale:1.02,cursor:'pointer'}}
                    className='info-cont-right'
                    onClick={()=>window.location.assign('/shopping-backend')}
                    >
                        <img src='images/shopping backend screenshot.svg' className='second-section-img' alt='project' />
                        <div className='second-section-text'>
                            <div>
                                <h4>E-COMMERCE API</h4>
                                <p>
                                    A Nodejs api that uses express, mongodb, multer, JSON WEB TOKEN, and other packages
                                    to handle user authentication, file upload, database storage and all other functionalities
                                    meant for the e-commerce app.
                                </p>
                                <span>Click to view</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    ref={fourthProject}
                    initial={{opacity:0,x:'100%'}}
                    animate={fourthProjectVisible && {opacity:1,x:0}}
                    whileHover={{scale:1.02,cursor:'pointer'}}
                    className='info-cont-left'
                    onClick={()=>window.location.assign('/betting-backend')}
                    >
                        <img src='images/betting backend screenshot.svg' className='second-section-img' alt='project' />
                        <div className='second-section-text'>
                            <div>
                                <h4>BETTING APP API</h4>
                                <p>
                                    A Nodejs api that uses express, mongodb, multer, JSON WEB TOKEN, and other packages
                                    to handle user authentication, file upload, database storage and all other functionalities
                                    meant for the e-commerce app.
                                </p>
                                <span>Click to view</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* third section */}
            
            <div className='third-section' id='about'>
                <FontAwesomeIcon icon={faPython} style={{position:'absolute',opacity:'15%',fontSize:'clamp(10rem,30vw,30rem)',left:'-5vw'}} />
                <FontAwesomeIcon icon={faGitAlt} style={{position:'absolute',opacity:'15%',fontSize:'clamp(5rem,10vw,10rem)',left:'70vw'}} />
                <FontAwesomeIcon icon={faReact} style={{position:'absolute',opacity:'15%',fontSize:'clamp(8.5rem,20vw,20rem)',right:'-5vw',top:'20vh'}} />
                <FontAwesomeIcon icon={faJs} style={{position:'absolute',opacity:'15%',fontSize:'clamp(8rem,19vw,19rem)',left:'15vw',top:'75vh'}} />
                <FontAwesomeIcon icon={faSass} style={{position:'absolute',opacity:'15%',fontSize:'clamp(5rem,10vw,11rem)',right:'5vw',bottom:'5vh'}} />
                <div className='third-section-info'>
                    <h2>ABOUT ME</h2>
                    <div className='content' ref={aboutContent}>
                        <motion.p initial={{opacity:0,x:'-100vh'}} animate={aboutContentVisible && {opacity:1,x:0}}>
                            Hello. My name is Steve Obi and I love anything that comprises art and
                            technology. Currently a student of the University of Lagos, my interest in
                            programming started when I saw some colleagues of mine typing what I 
                            thought at the time to be 'magic' on their keyboard.
                            Fast forward 2 years later and I am now very well versed in writing and
                            interpreting a bunch of those 'magic' languages.
                            As a full stack developer, my skills consists of both frontend development and backend development.
                        </motion.p>
                        <motion.div initial={{opacity:0,x:'100vh'}} animate={aboutContentVisible && {opacity:1,x:0}} className='image-cont'>
                            <motion.img whileHover={window.innerWidth > 768 && {bottom:0,right:0}} src='images/face pic.png' alt='pic of steve'/>
                        </motion.div>
                    </div>
                    <h1>MY SKILLS</h1>
                    <div className='skill-list'>
                        <div><FontAwesomeIcon icon={faHtml5} />&nbsp; HTML</div>
                        <div><FontAwesomeIcon icon={faCss3Alt} />&nbsp; CSS</div>
                        <div><FontAwesomeIcon icon={faJs} />&nbsp; Javascript</div>
                        <div><FontAwesomeIcon icon={faPython} />&nbsp; Python</div>
                        <div><FontAwesomeIcon icon={faReact} />&nbsp; React</div>
                        <div><FontAwesomeIcon icon={faGitAlt} />&nbsp; Git</div>
                        <div><FontAwesomeIcon icon={faNodeJs} />&nbsp; Node js</div>
                        <div><FontAwesomeIcon icon={faBootstrap} />&nbsp; Bootstrap</div>
                        <div><FontAwesomeIcon icon={faSass} />&nbsp; SCSS</div>
                        <div>Mongo Db</div>
                        <div>express js</div>
                    </div>
                </div>
            </div>

            {/* fourth section */}

            <div className='fourth-section' ref={fourthSection} id='contact'>
                <motion.img initial={{opacity:0,y:'-100vh'}} animate={fourthSectionVisible && {opacity:1,y:0}} transition={{duration:1.5}} src='images/wired telephone.svg' alt='phone' />
                <div className='fourth-section-info'>
                    <h1>CONTACT</h1>
                    <div className='contact-cont'>
                        <div className='contact-info'>
                            <div>
                                <h2>STEVE OBI</h2>
                                <span>Full stack developer</span>
                                <p style={{marginTop:'2rem'}}>E-mail : <b>obisteve81@gmail.com</b></p>
                                <p>Phone : <b>+2349074102991</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='socials-cont'>
                        <FontAwesomeIcon onClick={()=>alert('No facebook account yet')} className='socials' icon={faFacebookF} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://github.com/skizzy51')} className='socials' icon={faGithub} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://linkedin.com/in/obi-steve')} className='socials' icon={faLinkedinIn} />
                        <FontAwesomeIcon onClick={()=>window.location.assign('https://api.whatsapp.com/send?phone=%2B2349074102991&text&app_absent=0')} className='socials' icon={faWhatsapp} />
                    </div>
                </div>
            </div>
        </div>
    )
}