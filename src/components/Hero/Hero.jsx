import { useEffect, useState } from 'react'
import Logo from "../../../public/assets/spacelab.svg"
import './Hero.css'

export default function Hero({ playAnimation }) {
    const [activePhotos, setActivePhotos] = useState([])
    const [showPhotos, setShowPhotos] = useState([false, false, false]);

    function getAllPhotos() {
        const basePath = './assets/Images/'
        const numPhotos = 4
    
        const photos = []
    
        for (let i = 1; i <= numPhotos; i++) {
            const photoPath = `${basePath}photo-${i}.jpeg`
            photos.push(photoPath)
        }
    
        return photos
    }
    
    const allPhotos = getAllPhotos()

    const shuffledPhotos = allPhotos.sort(() => Math.random() - 0.5)

    useEffect(() => {
        const photoSet = shuffledPhotos.slice(0, 3)
        setActivePhotos(photoSet)
    }, [])

    useEffect(() => {
        activePhotos.forEach((_, index) => {
            setTimeout(() => {
                setShowPhotos(prevShowPhotos => {
                    const updatedShowPhotos = [...prevShowPhotos]
                    updatedShowPhotos[index] = true
                    return updatedShowPhotos
                })
            }, index * 3000)
        })
    }, [activePhotos])

    return (
        <section className={`Hero ${playAnimation ? 'hero-animate' : ''}`}>
            <div className='hero-content'>
                {activePhotos.map((photo, index) => {
                    return (
                        <div 
                            key={index}
                            className='photo'
                            style={{
                                backgroundImage: `url(${photo})`,
                                backgroundSize: `${showPhotos[index] ? '100' : '0'}%`,
                                opacity: `${showPhotos[index] ? '30' : '0'}%`,
                            }}
                        >
                        </div>
                    )
                })}
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