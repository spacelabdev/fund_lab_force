import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="social-links">
                <a href="https://www.linkedin.com/company/spacelab-space/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/spacelab_space" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://twitter.com/SpaceLab_social" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
            </div>
            <div className="copyright">
                © 2024 by SpaceLab FundLab
            </div>
        </footer>
    )
}
