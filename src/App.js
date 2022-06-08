import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=115d5f09';

    const movie = {
        "Title":"Harry Potter and the Deathly Hallows: Part 2",
        "Year":"2011",
        "imdbID":"tt1201607",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    }

const App = () => {


    const searchMovies = async(title) => {
        
        const response = await fetch(`${API_URL}&s=${title}`);
        
        const data = await response.json();
        
        console.log(data.Search);

    }


    useEffect( () => {
        searchMovies('Harry Potter');
    },[]);

    return(
      <div className="app">
          <h1>Movie Search App</h1>
          
          <div className="search">
              <input 
                placeholder="Search for movies"
                value="Harry Potter"
                onChange={ () => {} }  
              />
              <img 
                src={SearchIcon}
                alt= "Search"
                onClick={() => {}}
              />
          </div>
          
          <div className="container">
            <MovieCard movie={movie}/>
          </div>
      </div>  
    );
}

export default App;