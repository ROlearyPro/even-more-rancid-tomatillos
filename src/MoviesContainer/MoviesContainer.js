import './MoviesContainer.css';

function Movies({ MoviePoster, listOfMovies, setListOfMovies, fetchMovies, setSelectedMovie }) {
  
  return (
    <section className='MoviesContainer'>
      <p>We'll make some movie posters show up here!</p>
      <MoviePoster listOfMovies={listOfMovies} setListOfMovies={setListOfMovies} fetchMovies={fetchMovies} setSelectedMovie={setSelectedMovie} />
    </section>
  );
}

export default Movies;