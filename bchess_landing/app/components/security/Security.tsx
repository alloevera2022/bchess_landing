import "./security.css";
import Security_img from '/workspace/bchess_landing/bchess_landing/app/components/public/2.png';

export default function Security() {
    return (
        <section className="securuty">
            <div className="securuty_content">
            <div className="securuty_content_block">
                <div className="securuty_content_img">
                    <img src={Security_img.src} alt="security_img" />
                </div>
                <div className="securuty_content_text">
                <h1 className="securuty_header">The Perfect Balance<br></br> of Security and Ease of Use</h1>
                <h2 className="securuty_sub_header">Through meticulous design and protocol development, BChess.io has struck an ideal balance between user-friendliness and security. Our platform ensures that every move, every game, and every interaction is transparent, secure, and tamper-proof. By leveraging the power of the Blast.io blockchain, we bring you a chess experience that's seamless, fast, and incredibly engaging.</h2>
                <button className="securuty_try_btn">Try demo</button>
                </div>
            </div>
            </div>

            
        </section>

    );
}



