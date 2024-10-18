import './MoviesContainer.css';
import moviePosters from '../data/movie_posters';

function Movies({ MoviePoster }) {
  console.log(moviePosters);
  return (
    <section className='MoviesContainer'>
      <p>We'll make some movie posters show up here!</p>
      <MoviePoster  moviePosters={moviePosters}/>
      {/* We'll have moviePoster display a moviePoster object, with the moviePosters data. */}
    </section>
  );
}

export default Movies;