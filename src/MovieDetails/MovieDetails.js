import './MovieDetails.css';
import { useState, useEffect } from 'react';

function MovieDetails({ movie }) {

  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/' + movie.id)
    .then(response => response.json())
    .then(data => {
      console.log('response: ', data);
      setDetails(data);
      setGenres(data.genre_ids)
    })
    .catch(error => console.log('error:', error))

  }, [])
// using details.genre_ids => tries to map over a nonexistant array; error
// using genres => tries to map over an EXISTANT but empty array; That's alright: just shows nothing until setGenres is called, at which point it maps over that data

    console.log('movie: ', movie)
  return (
    <section className='MovieDetails'>
      <img className='details-poster' src={details.backdrop_path} />
      <h2 className='details-title'>{details.title}</h2>
      <div className='details-genres'>
        { 
        genres.map((genre, index) => (
          <span key={index} className='genre-button'>{genre}</span>
        ))}
      </div>
      <p className='details-overview'>{details.overview}</p>
    </section>
  );

}

export default MovieDetails;
