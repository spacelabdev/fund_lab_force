import './Hero.css';

export default function Hero({ playAnimation }) {

    function getAllPhotos() {
        const basePath = './assets/Images/';
        const numPhotos = 4;
    
        const photos = [];
    
        for (let i = 1; i <= numPhotos; i++) {
            const photoPath = `${basePath}photo-${i}.jpeg`;
            photos.push(photoPath);
        }
    
        return photos;
    }
    
    const allPhotos = getAllPhotos();

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <section className={`Hero ${playAnimation ? 'hero-animate' : ''}`}>
            <div className='hero-content'>
                {allPhotos.map((photo, index) => (
                    <>
                        <div
                            key={index}
                            className='photo-div'
                            style={{
                                backgroundImage: `url(${photo})`,
                                top: `${getRandomNumber(0, 60)}%`,
                                left: `${getRandomNumber(0, 30)}%`,
                            }}
                        />
                        <div
                            key={index}
                            className='photo-div'
                            style={{
                                backgroundImage: `url(${photo})`,
                                top: `${getRandomNumber(0, 10)}%`,
                                right: `${getRandomNumber(0, 30)}%`,
                            }}
                        />
                                                <div
                            key={index}
                            className='photo-div'
                            style={{
                                backgroundImage: `url(${photo})`,
                                bottom: `${getRandomNumber(0, 10)}%`,
                                right: `${getRandomNumber(0, 30)}%`,
                            }}
                        />
                    </>
                ))}
            </div>
        </section>
    );
}
