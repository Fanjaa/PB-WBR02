// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Intro.css'
import { assets } from '../../assets/assets'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="intro-container">
        <div className="intro-content">
          <div className="content-title-intro">
            <h1>Video Dokumentasi Turnamen <span> PB WBR 02</span></h1>
          </div>
          <div className="content-paragraph-intro">
            <p>Saksikan kembali momen-momen seru dan penuh semangat dari turnamen kami melalui video dokumentasi ini. Nikmati aksi terbaik para pemain dan atmosfer kompetisi yang luar biasa.</p>
            <button>Learn More <img src={assets.arrowOutward} alt="" /></button>
          </div>
        </div>      
        <div className="intro-videos">
          <video poster={assets.thumbnail} controls>
            <source src={assets.videoCup1} type='video/mp4'/>tes
          </video>
          {/* <img src={assets.backgroundPrimary} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Intro
