import './MoviesContainer.css';
// import moviePosters from '../data/movie_posters';

function Movies({ MoviePoster, listOfMovies, setListOfMovies, fetchMovies, setSelectedMovie }) {

  
  return (
    <section className='MoviesContainer'>
      <p>We'll make some movie posters show up here!</p>
      <MoviePoster listOfMovies={listOfMovies} setListOfMovies={setListOfMovies} fetchMovies={fetchMovies} setSelectedMovie={setSelectedMovie} />
      {/* We'll have moviePoster display a moviePoster object, with the moviePosters data. */}
    </section>
  );
}

export default Movies;