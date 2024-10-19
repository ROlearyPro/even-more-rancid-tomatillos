import './MovieDetails.css';

function MovieDetails({ movie }) {
  return (
    <section className='MovieDetails'>
      <img className=''src={movie.backdrop_path} />
      <h2>{movie.title}</h2>
      <p>Genres: {movie.genre_ids}</p>
      <p>{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;