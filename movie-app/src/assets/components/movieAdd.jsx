import { useState } from "react";

const MovieAdd = () => {
  const [movies, setMovies] = useState({
    title: "",
    description: "",
    category: "Todas", // Set a default value that matches one of the options
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setMovies((prevMovieForm) => ({
      ...prevMovieForm,
      [name]: value,
    }));
    console.log(movies);
  };

  return (
    <>
      <div className="card">
        <input
          type="text"
          name="title"
          value={movies.title}
          onChange={HandleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={movies.description}
          onChange={HandleChange}
          placeholder="Description"
        />
        <select
          className="select"
          value={movies.category}
          onChange={HandleChange}>
          <option value="Todas">Todas</option>
          <option value="Terror">Terror</option>
          <option value="Ficción">Ficción</option>
          <option value="Romance">Romance</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
    </>
  );
};

export default MovieAdd;
