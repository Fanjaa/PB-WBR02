// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Articles.css'
import { assets } from '../../assets/assets'

const Articles = () => {
  return (
    <div className="articles" id="articles">
        <div className="content-article">
            <div className="content-article-header">
                <img src={assets.backgroundTournament} alt="" />
            </div>
            <div className="content-article-info">
                <div className="time">
                    <p>Time: 12:00 PM - 2:00 PM</p>
                    <p>Created by: Fanjaaa_</p>
                </div>
                <div className="share">
                    <p>Share</p>
                    <div className="icons-share">
                        <img src={assets.whatsappIcon} alt="Whatsapp Icon" />
                        <img src={assets.instagramIcon} alt="Instagram Icon" />
                        <img src={assets.xIcon} alt="Twitter Icon" />
                    </div>
                </div>
            </div>
            <div className="content-article-paragraph">
                <h1>Membangun Sportivitas yang Tinggi dalam Kompetisi</h1>
                <p>Sportivitas adalah nilai fundamental yang menjadi inti dari setiap kompetisi olahraga, termasuk di turnamen PB WBR 02 Cup 1. Dalam pertandingan yang sengit, para pemain tidak hanya dituntut untuk menunjukkan kemampuan terbaik, tetapi juga sikap yang penuh penghormatan kepada lawan, wasit, dan penonton. Turnamen ini menjadi panggung bagi atlet-atlet berbakat untuk bersaing secara sehat, sembari menanamkan nilai sportivitas dalam setiap langkah mereka di lapangan.</p>
                <p>Salah satu momen yang paling mencerminkan sportivitas adalah tos atau salaman setelah pertandingan. Momen ini menjadi simbol persaudaraan dan penghormatan antar pemain, terlepas dari hasil pertandingan. Setiap tos yang dilakukan menggambarkan sikap saling menghargai, baik dalam kemenangan maupun kekalahan, sehingga turnamen ini tidak hanya menjadi ajang kompetisi, tetapi juga pembelajaran bagi setiap peserta untuk menjadi pribadi yang lebih dewasa.</p>
                <p>Kompetisi yang sehat di turnamen ini juga didukung oleh kepemimpinan wasit yang adil dan profesional. Setiap keputusan yang diambil mencerminkan integritas dan rasa tanggung jawab, menciptakan suasana pertandingan yang jujur dan sportif. Para pemain pun dengan terbuka menerima hasil pertandingan, menunjukkan sikap yang mencerminkan semangat olahraga sejati.</p>
                <p>Melalui PB WBR 02 Cup 1, nilai-nilai luhur seperti saling menghormati, menerima hasil dengan lapang dada, dan merayakan kemenangan tanpa kesombongan berhasil ditanamkan dalam hati setiap peserta. Turnamen ini bukan hanya menjadi ajang pembuktian diri, tetapi juga perayaan atas persatuan dan persaudaraan yang terjalin di lapangan. Semangat sportivitas yang tinggi ini menjadi warisan berharga bagi seluruh komunitas yang terlibat.</p>
            </div>
        </div>
    </div>
  )
}

export default Articles
