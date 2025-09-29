import img1 from '../img/buy-comics-digital-comics.png';
import img2 from '../img/buy-comics-merchandise.png';
import img3 from '../img/buy-comics-shop-locator.png';
import img4 from '../img/buy-comics-subscriptions.png';
import img5 from '../img/buy-dc-power-visa.svg';

export default function AppMainBlue() {
    return (
        <div className="Blue-C">

            <div className="flex container">
                <div className="element">
                    <img src={img1} alt="img1"/>
                    <a href="#">DIGITAL COMICS</a>
                </div>
                <div className="element">
                    <img src={img2} alt="img2"/>
                    <a href="#">DC MERCHANDISE</a>
                </div>
                <div className="element">
                    <img src={img3} alt="img3"/>
                    <a href="#">SUBSCRIPTION</a>
                </div>
                <div className="element">
                    <img src={img4} alt="img4"/>
                    <a href="#">COMIC SHOP LOCATOR</a>
                </div>
                <div className="element">
                    <img src={img5} alt="img5"/>
                    <a href="#">DC POWER VISA</a>
                </div>

            </div>

        </div>
    )
}