import './ParallaxImg.css'

export default function ParallaxImg ({ img }) {
    return (
        <div className='ParallaxImg' style={{ backgroundImage: `url(${img})` }}>
                <div />
        </div>
    )
}