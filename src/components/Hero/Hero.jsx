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
                {shuffledPhotos.slice(0, 3).map((photo, index) => {
                    const maxWidthPercentage = 30; 
                    let widthPercentage;
                    if (index === 0) {
                        widthPercentage = getRandomNumber(28, maxWidthPercentage) * 1.25;
                    } else {
                        widthPercentage = getRandomNumber(15, maxWidthPercentage);
                    }
                    return (
                        <div
                            key={index}
                            className='photo-div'
                            style={{
                                backgroundImage: `url(${photo})`,
                                top: index === 0 ? '1rem' : index === 1 ? `${getRandomNumber(0, 8)}%` : 'auto',
                                left: index === 0 ? `${getRandomNumber(0, 8)}%` : 'auto',
                                right: index === 1 ? `${getRandomNumber(15, 20)}%` : index === 2 ? `${getRandomNumber(0, 5)}%` : 'auto',
                                bottom: index === 2 ? `${getRandomNumber(0, 8)}%` : 'auto',
                                width: `${widthPercentage}%`,
                                // maxWidth: `${contentWidth}%`, 
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
}
