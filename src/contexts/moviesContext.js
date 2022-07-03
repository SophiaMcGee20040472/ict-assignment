import React, { useState } from "react";

export const MoviesContext =React.createContext(null);
const MoviesContextProvider = (props) =>{
    const [favourites, setFavourites] = useState ([]);

    const addToFavourites =(movie) => {
        if (!favourites.includes(movie.id)) {
            let newFavourites =[...favourites, movie.id];
            setFavourites(newFavourites);
        }
    };
const removeFromFavourites = (movie) => {
 setFavourites(favourites.filter((mId) => mId !== movie.id));
};

return (
    <MoviesContext.Provider
    value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
    }}
    >
        {props.children}
    </MoviesContext.Provider>
);
};
export default MoviesContextProvider;

