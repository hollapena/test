import './infobox.css'

export default function InfoBox(props) {

  return (
    <div className="infobox">
      <h1 className="number">{props.ident}/{props.length}</h1>
      <div className="infoBoxContents">
      <h1 className="name">{props.fullName}</h1>
      <div className="personalInfo">
      <p><strong>From: </strong>{props.location}</p>
      <p><strong>Job Title: </strong>{props.job}</p>
      <p><strong>Employer: </strong>{props.employedBy}</p>
      </div>
      <div className="movieList">
      <h2 className="movieHeader">Favorite Movies: </h2>
      <ol>
      {props.favMovies.map((movie) => (<li key ={movie}>{movie}</li>))}
      </ol>
      </div>
      </div>
    </div>
  )
}