import './Hero.css'

export default function Hero({ playAnimation }) {

    function getAllPhotos() {
        const basePath = '../assets/Images/spacelab-pics/'
        const numPhotos = 4
    
        const photos = []
    
        for (let i = 1; i <= numPhotos; i++) {
            const photoPath = `${basePath}photo-${i}.jpeg`
            photos.push(photoPath)
        }
    
        return photos
    }
    
    const allPhotos = getAllPhotos();
    console.log(allPhotos)

    return (
        <section className={`Hero ${playAnimation ? 'hero-animate' : ''}`}>
            <div className='hero-content'>
            <div
                className='photo-div'
                style={{
                    backgroundImage: `url(${allPhotos[0]})`,
                }}
            >
            </div>
            </div>
        </section>
    )
}