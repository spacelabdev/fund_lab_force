import ParallaxImg from '../ParallaxImg/ParallaxImg'
import './ParallaxContent.css'

export default function ParallaxContent({ img, subheading, heading, children }) {

    return (
        <div className="ParallaxContent">
            <div className='img-and-overlay'>
                <ParallaxImg img={img} />
                {/* TODO: Img and copy overlay */}
            </div>
            {children}
        </div>
    )
}