import './MoviesContainer.css';

function Movies({ MoviePoster, listOfMovies, setListOfMovies, fetchMovies, setSelectedMovie }) {
  
  return (
    <section className='MoviesContainer'>
      <MoviePoster listOfMovies={listOfMovies} setListOfMovies={setListOfMovies} fetchMovies={fetchMovies} setSelectedMovie={setSelectedMovie} />
    </section>
  );
}

export default Movies;