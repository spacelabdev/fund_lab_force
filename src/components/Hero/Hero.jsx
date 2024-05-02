import './Hero.css'

export default function Hero({ playAnimation }) {
    return (
        <section className={`Hero ${playAnimation ? 'hero-animate' : ''}`}>
            <div className='hero-content'>
                <p>
                    Unlock the Universe: Support <span className='span-2'>Spacelab’s Quest</span>  for Inclusivity and Innovation
                </p>
            </div>
        </section>
    )
}