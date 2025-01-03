// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import ComingSoonFeatures from '../ComingSoonFeatures'

const Footer = () => {

  const AlertAccount = 'Official Whatsapp account will be released soon!';

  const generateMailToLink = () => {
    const subject = "PB WBR 02 LANDING PAGE";
    return `mailto:pbwbr02@gmail.com?subject=${encodeURIComponent(subject)}`;
  };


  return (
    <div id='footer' className='footer'>
      <div className="footer-content">
        <div className="content-left-footer">
          <p>&copy;	Copyright {new Date().getFullYear()} PB WBR 02 by <a href="https://portofolio-fanja.netlify.app/" target="_blank" rel="noopener noreferrer">Fanjaaa_</a></p>
        </div>
        <div className="content-right-footer">
          <a href="https://www.tiktok.com/@pb.wbr02" target='_blank' rel="noopener noreferrer"><img src={assets.tiktokIcons} alt="Tiktok Icon" /></a>
          <a href={generateMailToLink()}><img src={assets.gmailIcon} alt="Instagram Icon" /></a>
          <a onClick={() => ComingSoonFeatures(AlertAccount)}><img src={assets.whatsappIcon} alt="Whatsapp Icon" /></a>
        </div>
      </div>      
    </div>
  )
}

export default Footer
