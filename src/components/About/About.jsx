// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import SmoothScroll from '../SmoothScroll'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const About = ({openModal}) => {
     
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
                    <a href={generateMailToLink()}><img src={assets.arrowOutward} alt='Button arrow image'></img></a>
                </div>
            </div>
            <div className="content-right">
                <div className="content-right-items">
                    <h1>SPONSOR</h1>
                    <ul>
                        <li><a href="https://www.nipponpaint-indonesia.com/" target='_blank' rel='noopener noreferrer'>Nippon Paint</a></li>
                        <li><a href="https://www.rsbhaktiasih.com/" target='_blank' rel='noopener noreferrer'>RSU Bhakti Asih</a></li>
                        <li><a href="https://www.semuabis.com/edy-b-0813-8868-8482" target='_blank' rel='noopener noreferrer'>Toko Edy B.Lembang</a></li>
                        <li><a href="#" onClick={() => openModal("Sponsor Ini Belum Memiliki Website")}>David Tailor</a></li>
                        {/* <li onClick={() => ComingSoonFeatures('Website not found, only offline store!')}>David Tailor</li> */}
                    </ul>
                </div>
                <div className="content-right-items">
                    <h1>TAUTAN</h1>
                    <ul>
                        {location.pathname === '/' ? (
                            <>
                            <li><a href='#hero' onClick={(e) => SmoothScroll(e, 'hero')}>Beranda</a></li>
                            <li><a href='#main' onClick={(e) => SmoothScroll(e, 'main')}>Panitia</a></li>
                            <li><a href='#intro' onClick={(e) => SmoothScroll(e, 'intro')}>Dokumentasi</a></li>
                            <li><a href='#tournament' onClick={(e) => SmoothScroll(e, 'tournament')}>Tournamen</a></li>
                            <li><a href='#teams' onClick={(e) => SmoothScroll(e, 'teams')}>Tim</a></li>
                            <li><a href='#stories' onClick={(e) => SmoothScroll(e, 'stories')}>Cerita</a></li>
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
                </div>
                <div className="content-right-items">
                    <h1>KEBIJAKAN</h1>
                    <ul>
                        <li><a href='#' onClick={() => openModal()}>Kebijakan Privasi</a></li>
                        <li><a href='#' onClick={() => openModal()}>Syarat & Ketentuan</a></li>
                        <li><a href='#' onClick={() => openModal()}>Kebijakan Pengembalian</a></li>
                    </ul>
                </div>
            </div>
        </div>   
    </div>
  )
}


About.propTypes = {
  openModal: PropTypes.func.isRequired,
};


export default About
