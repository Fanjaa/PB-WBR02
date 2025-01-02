// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Tournament.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import DataTournament from '../../data/DataTournament'
const Tournament = () => {
  
  const navigate = useNavigate();

  const data = DataTournament;

  return (
    <div className='tournament' id='tournament'>
      <div className="tournament-header">
        <h1 data-aos="fade-right" data-aos-duration="1000">JELAJAHI TURNAMEN KAMI</h1>
        <p data-aos="fade-up" data-aos-duration="1000">&quot;Nikmati pengalaman seru dan kompetitif di Turnamen Badminton kami! Saksikan aksi memukau dari para pemain berbakat, nikmati momen-momen mendebarkan, dan dukung tim favorit Anda di arena. Turnamen ini adalah tempat berkumpulnya semangat olahraga, persahabatan, dan prestasi.&quot;</p>
      </div>
      <div className="tournament-grid" data-aos="fade-up" data-aos-duration="1000">
        {data.map((item) => (
          <div className="tournament-grid-item" key={item.id}>
            <img src={assets[item.image]} alt={item.title} loading="lazy" onClick={() => navigate(item.url)} />
            <div className="title-image">
              <div className="title-image-paragraph">
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
              <div className="title-image-button">
                <button onClick={() => navigate(item.url)}><img src={assets.arrowOutward} alt='Arrow Outward Icon' /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tournament
