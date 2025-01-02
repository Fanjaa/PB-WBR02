// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Hero = () => {

    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <div className="hero" id='hero'>
        <div className="hero-content">
            <div className="content-box">
                <div className="content-title" data-aos="fade-up" data-aos-duration="1000">
                <h1>Bersama PB WBR 02</h1>
                <h2>Raih Prestasi di Dunia Badminton!</h2>
                </div>
                <div className="content-image" data-aos="fade-up" data-aos-duration="1000">
                <div className="image-item">
                    <img src={assets.beforePlay} alt="" />
                    <p>Moment</p>
                </div>
                <div className="image-item">
                    <img src={assets.panitia2Image} alt="" />
                    <p>Panitia</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
