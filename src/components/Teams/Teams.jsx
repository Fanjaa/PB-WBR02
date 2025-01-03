// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import './Teams.css'

const Teams = () => {
  return (
    <div className='teams' id='teams'>
      <div className="teams-content">
        <div className="content-card" data-aos="fade-right" data-aos-duration="1000">
          <img src={assets.beforePlay} alt="Moment Image" />
          <div className="content-card-paragraph">
            <p>PB WBR 02 adalah ajang kompetisi badminton tahunan yang diadakan oleh PB WBR. Dikenal karena atmosfernya yang kompetitif dan penuh semangat, turnamen ini mempertemukan pemain dari berbagai level, dengan tujuan untuk mengembangkan bakat dan mempererat persahabatan antar pemain.</p>
            <p><a href='./article/ajang-kompetisi-bulu-tangkis-tahunan-yang-penuh-semangat'>Lebih Lanjut</a><img src={assets.arrowOutward} alt="" /></p>
          </div>
        </div>
        <div className="content-paragraph">
          <h2 data-aos="fade-down-right" data-aos-duration="1000">Dedikasi untuk Keberlanjutan Turnamen.</h2>
          <img src={assets.panitia2Image} alt="Teams Image" data-aos="zoom-in" data-aos-duration="1000"/>
        </div>
      </div>
      
    </div>
  )
}

export default Teams
