import './Hero.css'

export default function Hero() {
    return (
        <section className='Hero'>
            <div className='hero-content'>
                <h1>FundLab Force</h1>
                <div className='hero-p-div'>
                    <p>
                        As diversity fuels creativity and innovation, we here at SpaceLab strongly value the voices and perspectives of those underrepresented in the community.
                    </p>
                    <p>
                        One of our goals is to create paid fellowships, internships, scholarship opportunities, and debt relief for those who are underrepresented, including but not limited to women, members of the LGBTQ+ community, and people of color. Helping members of the community who struggle economically will provide them with the liberty and flexibility necessary to explore new career paths in science and technology.
                    </p>
                    <p>
                        To help us grow these opportunities, please consider making a tax-deductible donation to SpaceLab today.
                    </p>
                </div>
                    <p className='construction-note'>
                        🚧 Website is under construction... please stay tuned for more! 🚧
                    </p>
            </div>
        </section>
    )
}

// Fix spacing around Hero on small screen sizes
// Add picture(s)