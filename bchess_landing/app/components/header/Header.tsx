import "./header.css";
import logo_blue from '../public/logo_blue.png';

export default function Header() {
    return (
        <header className="main-header">
            <nav className="navigation-links">
                <button className="logo"><img src={logo_blue.src} alt="logo"/></button>
                <button className="button-play-header">Play</button>
            </nav>
        </header>
    );
}



