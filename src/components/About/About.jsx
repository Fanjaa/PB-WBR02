// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import ComingSoonFeatures from './../ComingSoonFeatures'
import SmoothScroll from '../SmoothScroll'
import { useLocation } from 'react-router-dom'

const About = () => {
     
        const [emailInput, setEmailInput] = useState("");
    
        const handleEmailChange = (e) => {
            setEmailInput(e.target.value);
        };
    
        const generateMailToLink = () => {
            const subject = "PB WBR 02 LANDING PAGE";
            const body = `Isi pesan dari pengguna: ${emailInput}`;
            return `mailto:pbwbr02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        };

        const location = useLocation();

  return (
    <div className='about' id='about'>
        <div className="about-content">
            <div className="content-left">
                <img src={assets.logoNew} alt="" />
                <p>PB WBR mengadakan turnamen tahunan untuk mengembangkan bakat dan semangat olahraga.</p>
                <div className="input-email">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder='Hubungi Kami' value={emailInput} onChange={handleEmailChange}/>
                    <a href={generateMailToLink()}><button><img src={assets.arrowOutward} alt='Button arrow image'></img></button></a>
                </div>
            </div>
            <div className="content-right">
                <ul>
                    <h4>SPONSOR</h4>
                    <li><a href="https://www.nipponpaint-indonesia.com/" target='_blank' rel='noopener noreferrer'>Nippon Paint</a></li>
                    <li><a href="https://www.rsbhaktiasih.com/" target='_blank' rel='noopener noreferrer'>RSU Bhakti Asih</a></li>
                    <li><a href="https://www.semuabis.com/edy-b-0813-8868-8482" target='_blank' rel='noopener noreferrer'>Toko Edy B.Lembang</a></li>
                    <li onClick={() => ComingSoonFeatures('Website not found, only offline store!')}>David Tailor</li>
                </ul>
                <ul>
                    <h4>TAUTAN</h4>
                    {location.pathname === '/' ? (
                        <>
                        <li><a onClick={() => SmoothScroll('hero')}>Beranda</a></li>
                        <li><a onClick={() => SmoothScroll('main')}>Panitia</a></li>
                        <li><a onClick={() => SmoothScroll('intro')}>Dokumentasi</a></li>
                        <li><a onClick={() => SmoothScroll('tournament')}>Tournamen</a></li>
                        <li><a onClick={() => SmoothScroll('teams')}>Tim</a></li>
                        <li><a onClick={() => SmoothScroll('stories')}>Cerita</a></li>
                        </>
                    ) : (
                        <>
                        <li>
                        <a href="/#hero">Beranda</a>
                        </li>
                        <li>
                        <a href="/#main">Panitia</a>
                        </li>
                        <li>
                        <a href="/#intro">Dokumentasi</a>
                        </li>
                        <li>
                        <a href="/#tournament">Tournamen</a>
                        </li>
                        <li>
                        <a href="/#teams">Tim</a>
                        </li>
                        <li>
                        <a href="/#stories">Cerita</a>
                        </li>
                        </>
                    )}
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
