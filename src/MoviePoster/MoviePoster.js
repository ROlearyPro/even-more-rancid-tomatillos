import './MoviePoster.css';


function MoviePoster({ moviePosters }) {
  console.log(moviePosters)
  console.log(moviePosters[0])
  return (
    <section className='MoviePoster'>
      {moviePosters.map((movie, index) => (
        <div className='poster' key = {index}>
          <img className="image-path" src={movie.poster_path}></img>
          <div className="poster-count">{movie.vote_count}</div>
        </div>
      ))}
    </section>
  );
}

export default MoviePoster;
