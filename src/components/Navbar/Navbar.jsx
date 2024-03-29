import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Logo from "../../../public/assets/spacelab.svg"
import './Navbar.css'

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
                    <li>Donate</li>
                </ul>
            </div>
        </motion.nav>
    )
}

// Animated hamburger
// Dropdown to menu from hamburger
// Disappear on scroll