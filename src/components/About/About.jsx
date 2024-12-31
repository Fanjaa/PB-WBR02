// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-content">
            <div className="content-left">
                <img src={assets.logoNew} alt="" />
                <p>PB WBR mengadakan turnamen tahunan untuk mengembangkan bakat dan semangat olahraga.</p>
                <div className="input-email">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder='Enter Email'/>
                    <button><img src={assets.arrowOutward}></img></button>
                </div>
            </div>
            <div className="content-right">
                <ul>
                    <h4>SPONSORED</h4>
                    <li>Nippon Paint</li>
                    <li>RSU Bhakti Asih</li>
                    <li>Toko Edy B.Lembang</li>
                    <li>David Tailor</li>
                </ul>
                <ul>
                    <h4>LINKS</h4>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#main">Panitia</a></li>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#tournament">Tournament</a></li>
                    <li><a href="#teams">Teams</a></li>
                    <li><a href="#stories">Stories</a></li>
                </ul>
                <ul>
                    <h4>KEBIJAKAN</h4>
                    <li><a href="#">Kebijakan Privasi</a></li>
                    <li><a href="#">Syarat & Ketentuan</a></li>
                    <li><a href="#">Kebijakan Pengembalian</a></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
