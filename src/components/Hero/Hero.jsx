import Logo from "../../../public/assets/spacelab.svg"
import './Hero.css'

export default function Hero() {
    
    return (
        <section className='Hero'>
            <div className='hero-content'>
                <div className='look-up'>
                    Who do you see when you look up?...
                </div>
                <div className='hero-mission'>
                    <span>OUR MISSION:</span>
                    <span> More jobs for People of Color, Women and the LGBTQ+ Communities in Astronomy, Data Science and Technology. Joi us by Donating!</span>
                </div>
                <img src={Logo} alt="logo" className='hero-logo'/>
            </div>
        </section>
    )
}