import './App.css';

import homeImg from '../icons/home.png'

import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

  const [containerState, setContainerState] = useState([]);
  const [listOfMovies, setListOfMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  // const handleSelectMovie(movieChosen) => {
  //   setSelectedMovie(movieChosen)
  // }

  let PosterData = [];
  
  const onHomeClick = () => {
    setSelectedMovie(null)
  }
  function fetchMovies() {
    //something that we'll use to fetch from https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies')
      .then(res => {
        if (!res.ok) {
          const err = new Error(res.statusText);
          err.statusCode = res.status;
          throw err;
        }
        return res.json();
      })
      .then(data => {
        setListOfMovies(data);
        console.log(data);})
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(() => {    //something that we're going to call during the mounting 
  fetchMovies();
  }, [])

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        {
          selectedMovie && (<img className='home-button' onClick={onHomeClick} src={homeImg} alt="Return Home" />)
        }
      </header>
      <div>
        {
          selectedMovie ? (<MovieDetails movie={selectedMovie} onHomeClick={onHomeClick} />) : (<MoviesContainer MoviePoster={MoviePoster} listOfMovies={listOfMovies} setSelectedMovie={setSelectedMovie} />)
        }
      </div>
    </main>
  );
}

export default App;

