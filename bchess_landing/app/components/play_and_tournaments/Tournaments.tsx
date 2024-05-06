import "./tournaments.css";
import Chess_img2 from '../public/8.webp';
import Tour_bg1 from '../public/9.webp';
import Tour_bg2 from '../public/10.webp';


export default function Tournaments() {
    return (
        <section className="tournaments">

            <div className="tournaments_content">
                <div className="tournaments_content_img">
                    <img className="tournaments_img" src={Chess_img2.src} alt="Chess_img2" />
                    <img className="tournaments_bg_img1" src={Tour_bg1.src} alt="Tour_bg1" />
                    <img className="tournaments_bg_img2" src={Tour_bg2.src} alt="Tour_bg2" />
                </div>
                <div className="tournaments_content_block">
                    <div className="tournaments_content_text">
                        <h1 className="tournaments_header">Tournaments: Coming Soon</h1>
                        <h2 className="tournaments_sub_header">We&apos;re in the process of developing tournament features that will bring competitive chess to BChess.io. Our goal is to ensure these tournaments are cheat-proof and fair, providing an authentic and competitive environment for all players. Stay tuned for updates as we work to bring this exciting feature to life!</h2>
                    </div>

                </div>
            </div>

        </section>

    );
}