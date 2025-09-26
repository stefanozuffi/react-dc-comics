import AppUpperFooter from './AppUpperFooter'

import facebookLogo from '../img/footer-facebook.png'
import youtubeLogo from '../img/footer-youtube.png'
import pinterestLogo from '../img/footer-pinterest.png'
import twitterLogo from '../img/footer-twitter.png'
import periscopeLogo from '../img/footer-periscope.png'



export default function AppFooter() {
     return (
     
        <footer>
            <AppUpperFooter/>
            <div className='LowerFooter container'>
                <button>SIGN-UP NOW!</button>
                <nav>
                    <span>FOLLOW US</span>
                    <a href="#"><img src={facebookLogo} alt="Facebook"/></a>
                    <a href="#"><img src={twitterLogo} alt="Twitter"/></a>
                    <a href="#"><img src={youtubeLogo} alt="Youtube"/></a>
                    <a href="#"><img src={pinterestLogo} alt="Pinterest"/></a>
                    <a href="#"><img src={periscopeLogo} alt="Periscope"/></a>
                </nav>
            </div>
        </footer>
     )
}