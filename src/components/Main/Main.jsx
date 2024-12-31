// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
      <div className="main" id='main'>
        <div className="main-content">
          <h1>PANITIA PB WBR 02</h1>
          <div className="content-grid">
            <div className="content-grid-item">
              <img src={assets.burhan} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Burhanudin</p>
                <p>Ketua Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.fanja} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Muhammad Irfannurroja</p>
                <p>Web Developer, Photographer, Designer</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.cb} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>CB. Iskandar</p>
                <p>MC</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.nimung} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Nimung</p>
                <p>Wasit</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.anonym} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Anonym</p>
                <p>Wasit 2</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.wawan} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Achmad Kurniawan</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.rahmat} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Rahmat</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.anza} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Anza</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.sahrim} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Sahrim</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.didi} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Didi</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.pepen} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Pepen</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.iwan} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Iwan</p>
                <p>Panitia</p>
              </div>
            </div>
            <div className="content-grid-item">
              <img src={assets.lucky} alt="" loading="lazy" />
              <div className="content-grid-item-paragraph">
                <p>Lucky</p>
                <p>Panitia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Main
