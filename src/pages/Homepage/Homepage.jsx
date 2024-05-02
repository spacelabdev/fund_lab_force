import { useEffect, useState } from "react"
import Hero from "../../components/Hero/Hero"
import DonateButton from '../../components/Buttons/DonateButton';
import ValuesMissionVision from '../../components/ValuesMissionVision/ValuesMissionVision';
import './Homepage.css'
import LargeCard from "../../components/LargeCard/LargeCard";

export default function Homepage() {
    const [playAnimation, setPlayAnimation] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPlayAnimation(true)
        }, 600)
    }, [])

    return (
        <main className="Homepage">
            <Hero playAnimation={playAnimation}/>
            <DonateButton path='/donate' buttonText='Donate' />
            <ValuesMissionVision />
            <DonateButton path='/donate' buttonText='Donate' />
            {/* <div className="meet-div">
                <LargeCard title={'Meet The Team - Board'}/>
                <LargeCard title={'Meet The Team - Leadership'} />
                <LargeCard title={'Meet The Team - Scholars'} />
            </div> */}
            <DonateButton path='/donate' buttonText='Donate' />
        </main>
    )
}