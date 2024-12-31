import { tournamentsData } from "../../data/tournament-dummy"
import TournamentCard from "./TournamentCard"
import './Tournament.css'

const NewTournament = () => {
  return (
    <div className='tournament' id='tournament'>
          <div className="tournament-header">
            <h1>EXPLORE OUR TOURNAMENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat tempore repellat adipisci quasi ullam exercitationem reiciendis sit perspiciatis nihil est eaque rem beatae ex, obcaecati dolorem iusto iste necessitatibus.</p>
          </div>
          <div className="tournament-grid">
            {tournamentsData.map((data) => (
            <TournamentCard data={data} />
        ))}
          </div>
        </div>
  )
}

export default NewTournament
