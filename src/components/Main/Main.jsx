// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import DataPanitia from '../../data/DataPanitia'

const Main = () => {
  
  const data = DataPanitia;

  return (
      <div className="main" id='main'>
        <div className="main-content">
          <h1>PANITIA PB WBR 02</h1>
          <div className="content-grid">
            {data.map((item) => (
              <div className="content-grid-item" key={item.id}>
                <img src={assets[item.image]} alt={item.name} loading="lazy" />
                <div className="content-grid-item-paragraph">
                  <p>{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Main
