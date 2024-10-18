import './App.css';

import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster';


function App() {

  const [containerState, setContainerState] = useState([]);

  function protoFetch(){
    //something that we'll use to fetch
  }

  useEffect(()=>{
    //something that we're going to call during the mounting 

  }, [])
console.log(moviePosters)
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <div><MoviesContainer MoviePoster={MoviePoster} /></div>
    </main>
  );
}

export default App;

// As a user, I should also see a “Rancid Tomatillos” title on the page.
// As a user, when I visit the app, all movies should be displayed. For each movie, I should see:
// the movie poster
// the number of votes (you don’t need to include the arrow buttons yet)
