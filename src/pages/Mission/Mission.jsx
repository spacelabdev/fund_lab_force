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
                >
                    <div className='temp'>
                        <h2>This is cool!</h2>
                        <p>
                            At the heart of our organization lies a deep appreciation of the awesome power of diversity in problem-solving. We firmly believe that when individuals from varied backgrounds come together, their collective wisdom and perspectives lead to innovative and impactful solutions that address the unique needs of all. Grounded in principles of equity, inclusion, and belonging, we strive to create an environment where every voice is not only heard but celebrated. Join us in our journey to champion diversity, equity, and inclusion in data science, technology, and STEM fields like astronomy, as we work tirelessly to create a brighter and more inclusive future.
                        </p> {/* Turn this into its own styled component */}
                    </div>
                </ParallaxContent>
                <ParallaxContent
                    img="./assets/Images/parallax-2.jpg"
                    subheading="Check out what we have to say..."
                    heading="Mission"
                >
                    <div className='temp'>
                        <h2>This is cool!</h2>
                        <p>
                            At the heart of our organization lies a deep appreciation of the awesome power of diversity in problem-solving. We firmly believe that when individuals from varied backgrounds come together, their collective wisdom and perspectives lead to innovative and impactful solutions that address the unique needs of all. Grounded in principles of equity, inclusion, and belonging, we strive to create an environment where every voice is not only heard but celebrated. Join us in our journey to champion diversity, equity, and inclusion in data science, technology, and STEM fields like astronomy, as we work tirelessly to create a brighter and more inclusive future.
                        </p> {/* Turn this into its own styled component */}
                    </div>
                </ParallaxContent>
                <ParallaxContent
                    img="./assets/Images/parallax-3.jpg"
                    subheading="Check out what we have to say..."
                    heading="Vision"
                >
                    <div className='temp'>
                        <h2>This is cool!</h2>
                        <p>
                            At the heart of our organization lies a deep appreciation of the awesome power of diversity in problem-solving. We firmly believe that when individuals from varied backgrounds come together, their collective wisdom and perspectives lead to innovative and impactful solutions that address the unique needs of all. Grounded in principles of equity, inclusion, and belonging, we strive to create an environment where every voice is not only heard but celebrated. Join us in our journey to champion diversity, equity, and inclusion in data science, technology, and STEM fields like astronomy, as we work tirelessly to create a brighter and more inclusive future.
                        </p> {/* Turn this into its own styled component */}
                    </div>
                </ParallaxContent>
                {/* Turn this stuff into a .json, add content prop as well, instead of children */}
                {/* Find videos for this instead of photos? */}
            </div>
        </section>
    )
}