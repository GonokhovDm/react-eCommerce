import facebookSvg from '../../assets/icons/facebook.svg';
import instagramSvg from '../../assets/icons/instagram.svg';
import pinterestSvg from '../../assets/icons/pinterest.svg';
import youtubeSvg from '../../assets/icons/youtube.svg';
import bagSvg from '../../assets/icons/bag.svg';

import './Navbar.scss'

function Index() {
  return (
    <nav>
      <div className="container">
        <div className="topbar">
          <ul>
            <li><a href="/"><img src={facebookSvg} alt="facebook" /></a></li>
            <li><a href="/"><img src={instagramSvg} alt="instagram" /></a></li>
            <li><a href="/"><img src={pinterestSvg} alt="pinterest" /></a></li>
            <li><a href="/"><img src={youtubeSvg} alt="youtube" /></a></li>
          </ul>
          <p className="logo">Fashe<span>.</span></p>
          <button className="cart"><img src={bagSvg} alt="cart" /><p>0</p></button>
        </div>
        <div className="menu"></div>
      </div>      
    </nav>
  )
}

export default Index
