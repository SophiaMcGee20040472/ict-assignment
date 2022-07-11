import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQueries } from 'react-query'
import Spinner from '../components/spinner'
import { getWatchlistMovies } from "../api/tmdb-api";
import PlaylistAddIcons from "../components/cardIcons/playlistAddIcon";
import { MoviesContext } from "../contexts/moviesContext";
import addToMustWatchList from "../contexts/moviesContext"
import { useContext } from "react";

const WatchListPage = () => {
  const { mustWatch: movieIds } = useContext(MoviesContext);

const MustWatchMovieQueries = useQueries(
  movieIds.map((movieId) => {
    return {
      queryKey: ["movie", { id: movieId }],
      queryFn: getWatchlistMovies,
    };
  })
);
const isLoading = MustWatchMovieQueries.find((m) => m.isLoading === true);

if (isLoading) {
  return <Spinner />;
}

const movies = MustWatchMovieQueries.map((q) => {
  q.data.genre_ids = q.data.genres.map((g) => g.id);
  return q.data;
});

  return (
    <PageTemplate
      title="Watchlist Movies"
      movies={movies}
      action={(movie) => {
        
        return <PlaylistAddIcons movie={addToMustWatchList} />
      }}
    />
);
};

export default WatchListPage;