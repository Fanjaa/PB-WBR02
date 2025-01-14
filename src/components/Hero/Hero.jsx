import { assets } from '../../assets/assets'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id='hero'>
        <div className="hero-content">
            <div className="content-box">
                <div className="content-title">
                <h1>Bersama PB WBR 02</h1>
                <h2>Raih Prestasi di Dunia Badminton!</h2>
                </div>
                <div className="content-image">
                <div className="image-item">
                <img src={assets.beforePlay300w} alt="Panitia Image" />
                    <p>Moment</p>
                </div>
                <div className="image-item">
                    <img src={assets.panitia240x260} alt="Panitia Image" />
                    <p>Panitia</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
