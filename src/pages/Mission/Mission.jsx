// import ValuesMissionVision from '../../components/ValuesMissionVision/ValuesMissionVision'
import ParallaxContent from '../../components/ParallaxContent/ParallaxContent'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import './Mission.css'

export default function Mission () {
    return (
        <section className="Mission">
            {/* <ValuesMissionVision /> */}
            <div className='parallax-container'> 
            {/* ^^^ THIS SHOULD BE IT'S OWN COMPONENT! ^^^ */}
                <ParallaxContent
                    img="./assets/Images/parallax-1.jpg"
                    subheading="Check out what we have to say..."
                    heading="Values"
                ></ParallaxContent>
                <ParallaxContent
                    img="./assets/Images/parallax-2.jpg"
                    subheading="Check out what we have to say..."
                    heading="Mission"
                ></ParallaxContent>
                <ParallaxContent
                    img="./assets/Images/parallax-3.jpg"
                    subheading="Check out what we have to say..."
                    heading="Vision"
                ></ParallaxContent>
                {/* Turn this stuff into a .json, add content prop as well, instead of children */}
                {/* Find videos for this instead of photos? */}
            </div>
        </section>
    )
}