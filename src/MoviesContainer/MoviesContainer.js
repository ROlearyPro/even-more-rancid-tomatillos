import './MoviesContainer.css';
import moviePosters from '../data/movie_posters';

function Movies({ MoviePoster, onSelectMovie }) {
  console.log(moviePosters);
  return (
    <section className='MoviesContainer'>
      <p>We'll make some movie posters show up here!</p>
      <MoviePoster  moviePosters={moviePosters} onSelectMovie={onSelectMovie}/>
      {/* We'll have moviePoster display a moviePoster object, with the moviePosters data. */}
    </section>
  );
}

export default Movies;