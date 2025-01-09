
import './Footer.css'
import { assets } from '../../assets/assets'
import PropTypes from 'prop-types';

const Footer = ({ openModal }) => {

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
          <a href="https://www.tiktok.com/@pb.wbr02" target='_blank' rel="noopener noreferrer"><img src={assets.tiktokIcons} alt="Tiktok Icon" loading='lazy' /></a>
          <a href={generateMailToLink()}><img src={assets.gmailIcon} alt="Instagram Icon" loading='lazy' /></a>
          <a href='#' onClick={(e) => {e.preventDefault(); openModal("Akun Whatsapp Resmi Belum Tersedia")}}><img src={assets.whatsappIcon} alt="Whatsapp Icon" loading='lazy' /></a>
        </div>
      </div>      
    </div>
  )
}

Footer.propTypes = {
  openModal: PropTypes.func.isRequired,
};


export default Footer
