import MovieCard from "./movieCard";


export default function MovieList() {



    const movieList = items.map((movie) => <MovieCard title={title} description={description} />);

    return (
      <>
        {movieList}
      </>
    )
  }
  
  