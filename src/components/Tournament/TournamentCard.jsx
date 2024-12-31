import './Tournament.css'
const TournamentCard = ({data}) => {
  var test = `test ${data.title}`
  return (
    <div key={data.id} className="tournament-grid-item">
              <img src={data.img} alt="" />
              <div className="title-image">
                <p>{test}</p>
              </div>
            </div>
  )
}

export default TournamentCard
