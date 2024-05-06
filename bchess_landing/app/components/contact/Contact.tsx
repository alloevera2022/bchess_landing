import "./contact.css";
// import join_img from '/../public/logo_blue.png';
import x_logo from '../public/pajamas_twitter.svg';
import facebook_logo from '../public/iconoir_facebook.svg';
import ig_logo from '../public/iconoir_instagram.svg';

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact_content">
            <div className="contact_content_block">
                <h1 className="contact_header">Let&apos;s Connect!</h1>
                <h2 className="contact_sub_header">Follow us on Twitter, Facebook, and Instagram for the latest updates, community news, and more.</h2>
                <div className="contact_buttons">
                <button className="button_play_contact"><img src={x_logo.src} alt="x_logo"/></button>
                <button className="button_play_contact"><img src={facebook_logo.src} alt="x_logo"/></button>
                <button className="button_play_contact"><img src={ig_logo.src} alt="x_logo"/></button>
                </div>

            </div>
            </div>

            
        </section>

    );
}



