// This really isn't different than SmallCard... should just change component to 'Card', and add a prop for sizing(?).

import './LargeCard.css'

export default function LargeCard({ name, title, content }) {
    return (
        <div className="LargeCard">
            <p className="lc-title">{title}</p>
            <div className="lc-content">
                {content}
            </div>
        </div>
    )
}