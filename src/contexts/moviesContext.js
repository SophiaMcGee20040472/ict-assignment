import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [mustWatch, setMustWatch ] = useState([]);
  const [myFantasy, setMyFantasy] = useState([]);
  console.log('Array for Must Watch', mustWatch);
  console.log('Array for Fantasy', myFantasy);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites) ;
    }
  };
  const addToMyFantasy = (movie) => {
    if (!myFantasy.includes(movie.id)) {
      let newFantasy = [...myFantasy, movie.id];
      setMyFantasy(newFantasy) ;
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };
  
  const removeFromMyFantasy = (movie) => {
    setMyFantasy(myFantasy.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review} )
  };

  const addToMustWatchList = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch)
    }
};

const removeFromMustWatch = (movie) => {
  setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
}

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatch,
        myFantasy,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatchList,
        addToMyFantasy,
        removeFromMustWatch,
        removeFromMyFantasy
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

