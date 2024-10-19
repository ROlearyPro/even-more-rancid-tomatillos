import './MovieDetails.css';

function MovieDetails({ movie }) {
  return (
    <section className='MovieDetails'>
      <img className='details-poster'src={movie.backdrop_path} />
      <h2 className='details-title'>{movie.title}</h2>
      <div className='details-genres'>
        {movie.genre_ids.map((genre, index) => (
          <span key={index} className='genre-button'>{genre}</span>
        ))}
        </div>
      <p className='details-overview'>{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;