import { faFacebookF, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from '../components/Navbar'
import { motion } from 'framer-motion'
import '../styles/css/Project-page.css'
import { faCode, faFolderOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'

export function EdenSupermarket () {
    const { ref : first, inView : firstIsVisible } = useInView({threshold:.7})
    const { ref : second, inView : secondIsVisible } = useInView({threshold:.7})
    const { ref : third, inView : thirdIsVisible } = useInView({threshold:.7})
    const { ref : fourth, inView : fourthIsVisible } = useInView({threshold:.7})
    const { ref : fifth, inView : fifthIsVisible } = useInView({threshold:.3})
    return (
        <>
        <Navbar/>

        <div className='project-page'>
            <div className='page-info'>
                <h1>EDEN SUPERMARKET</h1>
                <img loading='lazy' className='landing-pic' src='images/shopping app multiple devices.svg' alt='project pic' />
                <h2>Tools used in building this app include</h2>
                <div className='project-tools'><span>React js</span><span>SCSS</span><span>Javascript</span><span>Bootstrap</span></div>
                <p className='read-me'>
                    This is an e-commerce web application that consists of an admin section and a user section. The application is linked
                     to a backend API created by me which handles specific functions allocated to either admin or user.
                    There are some functions specific for just the admin and some for just the user. Let us go through some of these functionalities.
                </p>
                <div className='project-content'>
                    <motion.div initial={{opacity:0,x:'-100%'}} animate={firstIsVisible&&{opacity:1,x:0}} ref={first} className='details-right'>
                        <img src='images/macbook admin inventory.svg' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>INVENTORY</h3>
                                <p>The admin can delete products from the inventory and also update the quantity of products in the inventory.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity:0,x:'100%'}} animate={secondIsVisible&&{opacity:1,x:0}} ref={second} className='details-left'>
                        <img src='images/macbook admin create product.svg' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>CREATE PRODUCT</h3>
                                <p>This is where the store products are created. The admin enters the product name, price, tags, description and also the images of the product.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity:0,x:'-100%'}} animate={thirdIsVisible&&{opacity:1,x:0}} ref={third} className='details-right'>
                        <img src='images/macbook admin add product.svg' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>DISPLAY PRODUCTS ON HOME PAGE</h3>
                                <p>Four layouts curated for the admin to be able to display products on th home page.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity:0,x:'100%'}} animate={fourthIsVisible&&{opacity:1,x:0}} ref={fourth} className='details-left'>
                        <img src='images/macbook change password shopping.svg' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>CHANGE USERNAME OR PASSWORD</h3>
                                <p>The user is able to change their username, change their password and also delete their account if they see fit.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{opacity:0,x:'-100%'}} animate={fifthIsVisible&&{opacity:1,x:0}} ref={fifth} className='details-right'>
                        <img src='images/macbook paystack shopping.svg' alt='project-pic' />
                        <div className='content'>
                            <div>
                                <h3>CHECKOUT USING PAYSTACK</h3>
                                <p>The user is able to add items to cart and also checkout those items using a paystack test payment page.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div onClick={()=>window.location.assign('https://eden-shopping-app.herokuapp.com/')} whileHover={{scale:1.1}} className='visit-page'>Visit page</motion.div>
            </div>
            <FontAwesomeIcon icon={faCode} style={{fontSize:'clamp(7rem, 25vw, 25rem)', position:'absolute', opacity:'15%',left:'-10%',top:'10vh'}} />
            <FontAwesomeIcon icon={faFolderOpen} style={{fontSize:'clamp(5rem, 15vw, 20rem)', position:'absolute', opacity:'15%',right:'5%',top:'13%'}} />
            <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'clamp(10rem, 20vw, 20rem)', position:'absolute', opacity:'15%',left:'0%',top:'50%'}} />
        </div>


        <motion.div initial={{x:'-100%'}} animate={{x:0}} transition={{delay:2,type:'tween'}} className='rectangle'></motion.div>
        
        <div className='project-socials'>
            <FontAwesomeIcon onClick={()=>alert('No facebook account yet')} className='home-social-btn'  icon={faFacebookF} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://github.com/skizzy51')} className='home-social-btn' icon={faGithub} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://linkedin.com/in/obi-steve')} className='home-social-btn' icon={faLinkedinIn} />
            <FontAwesomeIcon onClick={()=>window.location.assign('https://api.whatsapp.com/send?phone=%2B2349074102991&text&app_absent=0')} className='home-social-btn' icon={faWhatsapp} />
        </div>
        </>
    )
}