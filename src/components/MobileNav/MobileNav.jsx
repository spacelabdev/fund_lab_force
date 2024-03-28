import Logo from "../../../public/assets/spacelab.svg"
import './MobileNav.css'

export default function MobileNav() {
    return (
        <nav className="MobileNav">
            <ul>
                <li>
                    <img src={Logo} alt="logo" className="logo"/>
                </li>
                <li>About</li>
                <li>Donate</li>
            </ul>
        </nav>
    )
}

// Animated hamburger
// Dropdown to menu from hamburger
// Disappear on scroll