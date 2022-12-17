import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from '../components/Navbar'
import { motion } from 'framer-motion'
import '../styles/css/Project-page.css'
import { faCode, faFolderOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export function SteveBetting () {
    return (
        <>
        <Navbar/>
        
        <div className='project-page'>
            <div className='page-info'>
                <h1>STEVE BET</h1>
                <motion.img initial={{opacity:0,y:'-100%'}} animate={{opacity:1,y:0}} transition={{duration:2}} className='landing-pic' src='images/betting app multiple devices.png' alt='project pic' />
                <h2>Tools used in building this app include</h2>
                <div className='project-tools'><span>React js</span><span>SCSS</span><span>Javascript</span><span>Framer motion</span></div>
                <p className='read-me'>
                    An application where a user places bets on virtual randomly simulated games. The bet categories are divided into
                    two which are horse racing and football. The results of each simulation are randomly selected by the computer using the
                    Math.random() function in Javascript.
                </p>
                <div className='project-content'>
                    <div className='details-right'>
                        <img src='images/macbook horse bet type.png' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>HORSE RACING TYPES</h3>
                                <p>
                                    Horse racing consists of two types. Single placement, where you place bets on the horse you think would win the race, and 
                                    Overall placement, where you place bets on the different positions you think a horse would take.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='details-left'>
                        <img src='images/macbook horse race sim.png' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>RACE SIMULATION</h3>
                                <p>
                                    After the bets have been placed and the results randomly selected, the simulation of
                                    the race is visually presented with the use of framer motion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='details-right'>
                        <img src='images/macbook team bet select.png' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>FOOTBALL</h3>
                                <p>Given a list of teams, the matchups, odds, and the winners of the matches have been randomly selected using the Math.random() function in Javascript./</p>
                            </div>
                        </div>
                    </div>
                    <div className='details-left'>
                        <img src='images/macbook betting paystack.png' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>PAYSTACK API</h3>
                                <p>With the use of the use of the paystack api, the user is able to deposit cash into their bet account. Fake cash of course. Lol</p>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div onClick={()=>window.location.assign('https://react-betting-app.vercel.app/')} whileHover={{scale:1.1}} className='visit-page'>Visit page</motion.div>
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