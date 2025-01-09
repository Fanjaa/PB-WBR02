import './Intro.css'
import { assets } from '../../assets/assets'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="intro-container">
        <div className="intro-content">
          <div className="content-title-intro" data-aos="fade-right" data-aos-duration="1000">
            <h1>Video Dokumentasi Turnamen <span> PB WBR 02</span></h1>
          </div>
          <div className="content-paragraph-intro" data-aos="fade-up" data-aos-duration="1000">
            <p>Saksikan kembali momen-momen seru dan penuh semangat dari turnamen kami melalui video dokumentasi ini. Nikmati aksi terbaik para pemain dan atmosfer kompetisi yang luar biasa.</p>
          </div>
        </div>      
        <div className="intro-videos" data-aos="zoom-out" data-aos-duration="1000">
          <video poster={assets.thumbnail} controls>
            <source src={assets.videoCup1} type='video/mp4'/>
            <track src={assets.subtitleVideo} kind="captions" srcLang="id" label="Indonesian"></track>
          </video>
        </div>
      </div>
    </div>
  )
}

export default Intro
