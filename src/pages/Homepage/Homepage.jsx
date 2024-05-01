import { useEffect, useState } from "react"
import Hero from "../../components/Hero/Hero"
import './Homepage.css'

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
        </main>
    )
}