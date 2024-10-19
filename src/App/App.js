import './App.css';

import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePoster from '../MoviePoster/MoviePoster';


function App() {

  const [containerState, setContainerState] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
      <div><MoviesContainer MoviePoster={MoviePoster} onSelectMovie={setSelectedMovie}/></div>
    </main>
  );
}

export default App;

// Iteration 3: Movie Details
// We’re still not making a network request! Use the data in src/data/movie_details.js. The import is set up for you in App.js - just uncomment it. 
// Note that the mock data is hard-coded to return “Spirited Away” details no matter what. 

// User Storie

// As a user, I can click a movie, and see that movie’s details.
// At minimum, I should see see a movie’s backdrop image, genres, and overview. You may choose to display more information if you’d like.
// When a movie’s details are displayed, none of the other movies will be visible, but the page’s header is still visible.
// When a movie’s details are displayed, the user should have a way to return to the main view of all movies (i.e. a home button). 
// This button should not be visible if I am on the home page.

// I need to display movie details when I click on a movie
// I want the BACKDROP_PATH, GENRES and OVERVIEW to pop up. 
// Nothing else should be visible, other than page HEADER.
// User should be able to return to home screen when clicking on HOME.PNG
// HOME button should not be visible on home page.