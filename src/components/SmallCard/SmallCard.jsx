import './SmallCard.css';
import data from '../../../data.json';

export default function SmallCard({ name }) {
    const cardData = data.find(item => item.name === name)

    if (!cardData) {
        return null
    }

    const { title, content } = cardData;

    return (
        <div className="SmallCard">
            <p className="sc-title">{title}</p>
            <div className="sc-content">
                {content}
            </div>
        </div>
    );
}
