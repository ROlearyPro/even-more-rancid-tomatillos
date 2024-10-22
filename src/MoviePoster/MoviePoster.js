import './MoviePoster.css';
import upvoteImg from '../icons/upvote.png'
import downvoteImg from '../icons/downvote.png'
import { useState, useEffect } from 'react';

function MoviePoster({ listOfMovies, setListOfMovies, fetchMovies, setSelectedMovie }) {

  const [posterList, setPosterList] = useState(listOfMovies);

  // function upvoteMovie(movie) {
  //   const changedScore = [...posterList];
  //   changedScore.filter((film) => film.id === movie.id)[0].vote_count += 1
  //   setPosterList(changedScore);
  // }

  // function downvoteMovie(movie) {
  //   const changedScore = [...posterList];
  //   changedScore.filter((film) => film.id === movie.id)[0].vote_count -= 1
  //   setPosterList(changedScore);
  // }
  useEffect(() => {
    setPosterList(listOfMovies);
  }, [listOfMovies])

  function upVoteFetch(IDVal) {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/' + IDVal, {
      method: "PATCH",
      body: JSON.stringify({ vote_direction: "up" }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('response: ', data);
        fetchMovies();
      })
      .catch(error => console.log('error:', error))

  }

  function downVoteFetch(IDVal) {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/' + IDVal, {
      method: "PATCH",
      body: JSON.stringify({ vote_direction: "down" }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('response: ', data);
        fetchMovies();
      })
      .catch(error => console.log('error:', error))
  }


  return (
    <section className='MoviePoster'>
      {posterList.map((movie, index) => (
        <div className='poster' key={index}>
          <img className="image-path" src={movie.poster_path} onClick={() => (setSelectedMovie(movie))}></img>
          <div className='voting'>
            <img className="upvote-path" src={upvoteImg} onClick={() => (upVoteFetch(movie.id))}></img>
            <div className="poster-count">{posterList[index].vote_count}</div>
            <img className="downvote-path" src={downvoteImg} onClick={() => (downVoteFetch(movie.id))}></img>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MoviePoster;
