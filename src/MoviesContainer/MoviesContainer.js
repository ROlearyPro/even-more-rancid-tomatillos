import './MoviesContainer.css';
// import moviePosters from '../data/movie_posters';

function Movies({ MoviePoster, listOfMovies, onSelectMovie }) {
  return (
    <section className='MoviesContainer'>
      <p>We'll make some movie posters show up here!</p>
      <MoviePoster  listOfMovies={listOfMovies} onSelectMovie={onSelectMovie}/>
      {/* We'll have moviePoster display a moviePoster object, with the moviePosters data. */}
    </section>
  );
}

export default Movies;