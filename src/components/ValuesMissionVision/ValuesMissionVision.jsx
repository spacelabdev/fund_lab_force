import SmallCard from "../SmallCard/SmallCard"
import './ValuesMissionVision.css'

export default function ValuesMissionVision() {
    return (
        <section className="ValuesMissionVision">
            <SmallCard name="VALUES" />
            <SmallCard name="MISSION" />
            <SmallCard name="VISION" />
        </section>
    )
}