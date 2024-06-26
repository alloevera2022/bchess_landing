import "./security.css";
import Security_img from '../public/2.webp';
import Security_bg_img1 from '../public/4.webp';
import Security_bg_img2 from '../public/5.webp';

export default function Security() {
    return (
        <section className="securuty">
            <img className="securuty_bg1" src={Security_bg_img1.src} alt="security_img" />
            <img className="securuty_bg2" src={Security_bg_img2.src} alt="security_img" />

            <div className="securuty_content">
                <div className="securuty_content_block">
                    <div className="securuty_content_img">
                        <img src={Security_img.src} alt="security_img" />
                    </div>
                    <div className="securuty_content_text">
                        <h1 className="securuty_header">The Perfect Balance<br></br> of Security and Ease of Use</h1>
                        <h2 className="securuty_sub_header">Through meticulous design and protocol development, BChess has struck an ideal balance between user-friendliness and security. Our platform ensures that every move, every game, and every interaction is transparent, secure, and tamper-proof. By leveraging the power of the Blast Chain, we bring you a chess experience that&apos;s seamless, fast, and incredibly engaging. Challenge your friends or other players, make bets and win!</h2>
                        <button className="securuty_try_btn"><a href="https://app.bchess.io" className="link">Try demo</a></button>
                    </div>
                </div>
            </div>
        </section>

    );
}



