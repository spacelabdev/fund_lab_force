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

    const shuffledPhotos = allPhotos.sort(() => Math.random() - 0.5)

    return (
        <section className={`Hero ${playAnimation ? 'hero-animate' : ''}`}>
            <div className='hero-content'>
                {shuffledPhotos.slice(0, 3).map((photo, index) => (
                    <div
                        key={index}
                        className='photo-div'
                        style={{
                            backgroundImage: `url(${photo})`,
                            top: index === 0 ? `${getRandomNumber(0, 60)}%` : index === 1 ? `${getRandomNumber(0, 10)}%` : 'auto',
                            left: index === 0 ? `${getRandomNumber(0, 32)}%` : 'auto',
                            right: index === 1 || index === 2 ? `${getRandomNumber(0, 32)}%` : 'auto',
                            bottom: index === 2 ? `${getRandomNumber(0, 10)}%` : 'auto',
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
