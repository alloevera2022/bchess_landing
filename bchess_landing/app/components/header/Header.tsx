import "./header.css";
import logo_blue from '/workspace/bchess_landing/bchess_landing/app/components/public/logo_blue.png';

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



