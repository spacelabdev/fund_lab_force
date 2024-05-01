import { useState } from 'react'
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Logo from "../../../public/assets/spacelab.svg"
import './Navbar.css'

// Navbar is animated to disappear during a scroll-down action. It reappears during a scroll-up action
// Navbar becomes a hamburger menu at 760px screen width and below

export default function Navbar() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [active, setActive] = useState(false)

    const toggleActiveClass = () => {
        setActive(!active)
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav 
        variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
            duration: 0.35,
            ease: "easeInOut",
        }}
        className="Navbar">
            <div className="nav-logo-container">
                <img src={Logo} alt="logo" className='nav-logo'/>
            </div>
            <div 
                className='hamburger'
                onClick={toggleActiveClass}
            >
                <span className='bar' />
                <span className='bar' />
                <span className='bar' />
            </div>
            <div className={active ? 'nav-links active' : 'nav-links'}>
                <ul>
                    <li>About</li>
                    <li>
                        <Link 
                            className={'nav-link'} 
                            to={'https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C'} 
                            style={{textDecoration: 'none'}}
                        >
								Donate
						</Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}