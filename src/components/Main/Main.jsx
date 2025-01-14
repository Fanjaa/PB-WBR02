import { assets } from '../../assets/assets'
import './Main.css'
import DataPanitia from '../../data/DataPanitia'

const Main = () => {
  
  const data = DataPanitia;

  return (
      <div className="main" id='main'>
        <div className="main-content">
          <h1 data-aos="fade-right" data-aos-duration="1000">PANITIA PB WBR 02</h1>
          <div className="content-grid">
            {data.map((item) => (
              <div className="content-grid-item" key={item.id} data-aos="zoom-in-up" data-aos-duration="1000">
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
