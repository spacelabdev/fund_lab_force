import Logo from "../../../public/assets/spacelab.svg"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <img src={Logo} alt="logo" />
                </li>
                <li>About</li>
                <li>Donate</li>
            </ul>
        </nav>
    )
}