import './MoviePoster.css';
import upvoteImg from '../icons/upvote.png'
import downvoteImg from '../icons/downvote.png'
import { useState, useEffect } from 'react';

function MoviePoster({ moviePosters }) {
  
  const [posterList, setPosterList] = useState(moviePosters);

  function upvoteMovie(movie){
    const changedScore = [...posterList];
    changedScore.filter((film)=> film.id===movie.id)[0].vote_count+=1
    setPosterList(changedScore);
  }

  function downvoteMovie(movie){
    const changedScore = [...posterList];
    changedScore.filter((film)=> film.id===movie.id)[0].vote_count-=1
    setPosterList(changedScore);
    console.log(movie)
  }
  useEffect(()=>{

  },[posterList])
  
  return (
    <section className='MoviePoster'>
      {posterList.map((movie, index) => (
        <div className='poster' key={index}>
          <img className="image-path" src={movie.poster_path} onClick={()=>(onSelectMovie(movie))}></img>
          <div className='voting'>
            <img className="upvote-path" src={upvoteImg} onClick={()=>(upvoteMovie(movie))}></img>
            <div className="poster-count">{posterList[index].vote_count}</div>
            <img className="downvote-path" src={downvoteImg} onClick={()=>(downvoteMovie(movie))}></img>
          </div> 
        </div>
      ))}
    </section>
  );
}

export default MoviePoster;
