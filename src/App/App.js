import "./App.css";

import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MoviePoster from "../MoviePoster/MoviePoster";
import ErrorPage from "../ErrorPage/ErrorPage";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = useNavigate();

  const { movieId } = useParams();

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
    fetchMovies();
  }, []);

  return (
    <main className="App">
      <header>
        <Link to={`/`}>
          <h1 data-cy="home-button">RANCID TOMATILLOS</h1>
        </Link>
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
        <Route path="/error/:code" element={<ErrorPage />}></Route>
        <Route path="*" element={<ErrorPage error={404} />}></Route>
        <Route
          exact path="/even-more-rancid-tomatillos/"
          render={() => <navigate to="/" />}
        ></Route>
      </Routes>
    </main>
  );
}
export default App;
