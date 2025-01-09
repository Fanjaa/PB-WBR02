// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Stories.css'
import { assets } from '../../assets/assets'

const Stories = () => {
  return (
    <div id='stories' className='stories'>
        <div className="stories-grid">
          <div className="stories-grid-items" id='imageOne'>
            <img src={assets.backgroundTournament300w} alt="Sportivitas Image"/>
          </div>
          <div className="stories-grid-items" id='paragraphOne' >
            <div className="stories-paragraph" data-aos="fade-up" data-aos-duration="1000">
              <h1>Membangun Sportivitas yang Tinggi dalam Setiap Kompetisi</h1>
              <p>Sportivitas adalah nilai utama dalam setiap pertandingan, yang mengedepankan sikap saling menghormati antar pemain, wasit, dan penonton. Menghargai aturan permainan dan menjunjung tinggi fair play adalah kunci untuk menciptakan atmosfer kompetisi yang positif dan sehat.</p>
              <p><a href='./article/membangun-sportivitas-yang-tinggi-dalam-kompetisi'>Lebih Lanjut</a><img src={assets.arrowOutward} alt="Button Arrow Outward" /></p>
            </div>
          </div>
          <div className="stories-grid-items" id='paragraphTwo'>
            <div className="stories-paragraph" data-aos="fade-right" data-aos-duration="1000">
              <h1>Semangat Kerjasama dalam Mencapai Keberhasilan</h1>
              <p>Keberhasilan dalam kompetisi tidak hanya ditentukan oleh kemampuan individu, tetapi juga oleh semangat kerjasama tim. Kolaborasi yang baik antar anggota tim menciptakan sinergi yang luar biasa, yang mampu mengatasi tantangan dan mencapai tujuan bersama.</p>
              <p><a href='./article/semangat-kerjasama-dalam-mencapai-keberhasilan'>Lebih Lanjut</a><img src={assets.arrowOutward} alt="Button Arrow Outward" /></p>
            </div>
          </div>
          <div className="stories-grid-items" id='imageTwo'>
            <img 
            src={assets.beforePlay300w}
            srcSet={`
                ${assets.beforePlay300w} 300w,
                ${assets.beforePlay723w} 723w,
                ${assets.beforePlay1080w} 1080w,
                ${assets.beforePlay1480w} 1480w,
                ${assets.beforePlay1790w} 1790w,
                ${assets.beforePlay2048w} 2048w
            `}
            sizes="(min-width: 1080px) 50vw, (min-width: 1040px) 628px, 100vw"
            alt="Before Play Image" />
          </div>
        </div>
    </div>
  )
}

export default Stories
