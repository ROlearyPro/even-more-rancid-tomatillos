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

// User Stories

// As a user, I should see a button for upvoting and downvoting on each movie card
// When I click the up arrow…
// The data should be updated so that the movie I clicked on has one more vote (state AND the mock data!).
// I should see the vote increase by one on the movie card.
// When I click the down arrow…
// The data should be updated so that the movie I clicked on has one less vote (state AND the mock data!).
// I should see the vote decrease by one on the movie card.