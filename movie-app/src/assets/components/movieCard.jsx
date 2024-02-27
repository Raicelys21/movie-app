


const MovieCard = ({ title, description}) => {

    return (
      <>
        <div className="card">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
      </>
    )
  }

export default MovieCard;
  
  