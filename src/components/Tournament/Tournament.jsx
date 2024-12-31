// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Tournament.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Tournament = () => {
  
  const navigate = useNavigate();

  return (
    <div className='tournament' id='tournament'>
      <div className="tournament-header">
        <h1>JELAJAHI TURNAMEN KAMI</h1>
        <p>&quot;Nikmati pengalaman seru dan kompetitif di Turnamen Badminton kami! Saksikan aksi memukau dari para pemain berbakat, nikmati momen-momen mendebarkan, dan dukung tim favorit Anda di arena. Turnamen ini adalah tempat berkumpulnya semangat olahraga, persahabatan, dan prestasi.&quot;</p>
        <p>Mari bergabung dan rasakan atmosfer luar biasa dalam setiap pertandingan! 🏸✨</p>
      </div>
      <div className="tournament-grid">
        <div className="tournament-grid-item">
          <img src={assets.juara1LvlA} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 1 Lvl.A</p>
              <p>Kemenangan luar biasa dari PB Bhinneka di Cup 1 PB WBR 02!</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.juara2LvlA} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 2 Lvl.A</p>
              <p>Penampilan hebat dari PB Legend raih Juara 2 di Cup 1 PB WBR 02!</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.juara1LvlB} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 1 Lvl.B</p>
              <p>PB Sepakat raih juara 1 dengan performa luar biasa.</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.juara2LvlB} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 2 Lvl.B</p>
              <p>PB Bro Gang tampil hebat, meraih Juara 2 Level B.</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.juara1LvlC} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 1 Lvl.C</p>
              <p>PB Lembang dominasi Level C, dengan meraih Juara 1!</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.juara2LvlC} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Juara 2 Lvl.C</p>
              <p>PB 21 berhasil meraih Juara 2 Level C di Cup 1 PB WBR 02!.</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img src={assets.momentCup1} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Momen Penghargaan</p>
              <p>Perayaan kemenangan sebagai simbol pencapaian luar biasa.</p>
            </div>
            <div className="title-image-button">
              <button><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="tournament-grid-item">
          <img onClick={() => navigate('./article')} src={assets.backgroundTournament} alt="" loading="lazy" />
          <div className="title-image">
            <div className="title-image-paragraph">
              <p>Momen Sportivitas</p>
              <p>Momen sikap sportif, mendukung dan saling menghormati.</p>
            </div>
            <div className="title-image-button">
              <button onClick={() => navigate('./article')}><img src={assets.arrowOutward} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tournament
