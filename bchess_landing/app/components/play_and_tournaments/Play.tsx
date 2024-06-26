import "./play.css";
import Chess_img from '../public/6.webp';

export default function Play() {
    return (
        <section className="play">
            <div className="play_content">
                <div className="play_content_block">
                    <div className="play_content_text">
                        <h1 className="play_header">Play Chess Like Never Before</h1>
                        <h2 className="play_sub_header">Currently, BChess offers PvP gaming, allowing you to challenge friends or players from around the globe to a game of chess. Whether you are looking to have fun, improve your skills, or simply enjoy the game of kings in a modern format, BChess is the place for you.<br /><br />
                        Why Play on BChess.io? Decentralized Gaming: Experience chess on a platform where integrity and fairness are built into every move. Secure and Transparent: Thanks to the Blast blockchain, your games are secure, and every move is verifiable. Play Anytime, Anywhere: Challenge your friends or other players to a match, regardless of where you are in the world. Community and Competition: Join a growing community of chess enthusiasts and blockchain aficionados.</h2>
                    </div>
                    <div className="play_content_img">
                        <img src={Chess_img.src} alt="security_img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
