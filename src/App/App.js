import "./App.css";

import homeImg from "../icons/home.png";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import searchIcon from "../icons/search.png";
import { useState, useEffect } from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  const [containerState, setContainerState] = useState([]);
  const [listOfMovies, setListOfMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = useNavigate();

  const { movieId } = useParams()

  let PosterData = [];

  const onHomeClick = () => {
    setSelectedMovie(null);
  };
  function fetchMovies() {
    fetch(
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies"
    )
      .then((res) => {
        if (!res.ok) {
          const err = new Error(res.statusText);
          err.statusCode = res.status;
          throw err;
        }
        return res.json();
      })
      .then((data) => {
        setListOfMovies(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function renderDetails() {
    return <Link to={<MovieDetails />}></Link>;
  }

  useEffect(() => {
    //something that we're going to call during the mounting
    fetchMovies();
  }, []);

  // return (
  //   <main className='App'>
  //     <header>
  //       <h1>rancid tomatillos</h1>
  //       {
  //         selectedMovie && (<img className='home-button' onClick={onHomeClick} src={homeImg} alt="Return Home" data-cy="home-button"/>)
  //       }
  //     </header>
  //     <div>
  //       {
  //         selectedMovie ? (<MovieDetails movie={selectedMovie} onHomeClick={onHomeClick} />) : (<MoviesContainer MoviePoster={MoviePoster} listOfMovies={listOfMovies} setListOfMovies={setListOfMovies} fetchMovies={fetchMovies} setSelectedMovie={setSelectedMovie} />)
  //       }
  //     </div>
  //   </main>
  // );

  return (
    <main className="App">
      <header>
      <Link to={`/`}>
      <h1>rancid tomatillos</h1></Link>
        
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <MoviesContainer
              MoviePoster={MoviePoster}
              listOfMovies={listOfMovies}
              setListOfMovies={setListOfMovies}
              fetchMovies={fetchMovies}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route path="/:movieId" element={<MovieDetails />}></Route>
        {/* <Route path="/error/:code"></Route> */}

        {/* Does the Route to movie details also need Link NAVIGATE imported to make it clickable? */}
      </Routes>
    </main>
  );
}
export default App;

// Iteration 6: Refactor with Router
// So far the application has worked like a single page application.
// We have different views that are conditionally rendered, based on extra data you’re probably holding in state. Also, the URL never changes.

// To create a better UX, we’re going to be using React Router to conditionally render our views based on the URL.

// Implement the following routes:

// View	URL Path
// Homepage	/
// Movie Details	/:movieId, where movieId is the id of the movie being displayed
// User Stories

// As a user, when I click on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID
// As a user, when I go back to the main page, the URL changes back to /
// I can click the browser forward & back arrows to navigate the application
// 💡 Hint - Can we remove the onClick event on your movie posters altogether now that we are using Links and Routes? Yes! Yes, we can!

// As you refactor, continue to rely on your test suite to ensure that no functionality is being lost/destroyed as you add in Router.
// Look into the Cypress assertions which allow us to view our current URL pathname and add those into your tests!
