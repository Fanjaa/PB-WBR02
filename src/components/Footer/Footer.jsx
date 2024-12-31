// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-content">
        <div className="content-left-footer">
          <p>&copy;	Copyright PB WBR 02</p>
        </div>
        <div className="content-right-footer">
          <a href="https://www.tiktok.com/@pb.wbr02" target='_blank' rel="noopener noreferrer"><img src={assets.tiktokIcons} alt="Tiktok Icon" /></a>
          <a href="#"><img src={assets.instagramIcon} alt="Instagram Icon" /></a>
          <a href="#"><img src={assets.whatsappIcon} alt="Whatsapp Icon" /></a>
        </div>
      </div>      
    </div>
  )
}

export default Footer
