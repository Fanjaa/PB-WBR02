// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import './Teams.css'

const Teams = () => {
  return (
    <div className='teams' id='teams'>
      <div className="teams-content">
        <div className="content-card">
          <img src={assets.beforePlay} alt="" />
          <div className="content-card-paragraph">
            <p>PB WBR 02 adalah ajang kompetisi badminton tahunan yang diadakan oleh PB WBR. Dikenal karena atmosfernya yang kompetitif dan penuh semangat, turnamen ini mempertemukan pemain dari berbagai level, dengan tujuan untuk mengembangkan bakat dan mempererat persahabatan antar pemain.</p>
            <p><a href="#">Learn More</a><img src={assets.arrowOutward} alt="" /></p>
          </div>
        </div>
        <div className="content-paragraph">
          <h2>Dedikasi untuk Keberlanjutan Turnamen.</h2>
          <img src={assets.panitia2Image} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Teams
