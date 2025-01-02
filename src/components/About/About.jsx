// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import ComingSoonFeatures from './../ComingSoonFeatures'
import SmoothScroll from '../SmoothScroll'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-content">
            <div className="content-left">
                <img src={assets.logoNew} alt="" />
                <p>PB WBR mengadakan turnamen tahunan untuk mengembangkan bakat dan semangat olahraga.</p>
                <div className="input-email">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder='Email' required/>
                    <button onClick={() => ComingSoonFeatures()}><img src={assets.arrowOutward}></img></button>
                </div>
            </div>
            <div className="content-right">
                <ul>
                    <h4>SPONSOR</h4>
                    <li><a href="https://www.nipponpaint-indonesia.com/" target='_blank' rel='noopener noreferrer'>Nippon Paint</a></li>
                    <li><a href="https://www.rsbhaktiasih.com/" target='_blank' rel='noopener noreferrer'>RSU Bhakti Asih</a></li>
                    <li onClick={() => ComingSoonFeatures('Website not found!')}>Toko Edy B.Lembang</li>
                    <li onClick={() => ComingSoonFeatures('Website not found!')}>David Tailor</li>
                </ul>
                <ul>
                    <h4>LINKS</h4>
                    <li><a onClick={() => SmoothScroll('hero')}>Home</a></li>
                    <li><a onClick={() => SmoothScroll('main')}>Panitia</a></li>
                    <li><a onClick={() => SmoothScroll('intro')}>Intro</a></li>
                    <li><a onClick={() => SmoothScroll('tournament')}>Tournament</a></li>
                    <li><a onClick={() => SmoothScroll('teams')}>Teams</a></li>
                    <li><a onClick={() => SmoothScroll('stories')}>Stories</a></li>
                </ul>
                <ul>
                    <h4>KEBIJAKAN</h4>
                    <li><a onClick={() => ComingSoonFeatures()}>Kebijakan Privasi</a></li>
                    <li><a onClick={() => ComingSoonFeatures()}>Syarat & Ketentuan</a></li>
                    <li><a onClick={() => ComingSoonFeatures()}>Kebijakan Pengembalian</a></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
