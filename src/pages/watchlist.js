import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromMustWatchIcon from "../components/cardIcons/removeMustWatch"
import WriteReview from "../components/cardIcons/writeReview";


const WatchlistMoviesPage = () => {
  const { mustWatch: movieIds } = useContext(MoviesContext);

const MustWatchMovieQueries = useQueries(
  movieIds.map((movieId) => {
    return {
      queryKey: ["mustWatch", { id: movieId }],
      queryFn: getMovie,
    };
  })
);
const isLoading = MustWatchMovieQueries.find((m) => m.isLoading === true);

if (isLoading) {
  return <Spinner />;
}

const movies = MustWatchMovieQueries.map((q) => {
  q.data.type = "MOVIE"
  q.data.genre_ids = q.data.genres.map((g) => g.id);
  return q.data;
});

return (
  <PageTemplate
    title="WATCHLIST"
    movies={movies}
    action={(movie) => {
      return (
        <>
          <RemoveFromMustWatchIcon movie={movie} />
          <WriteReview movie={movie} />
        </>
      );
    }}
  />
);
};

export default WatchlistMoviesPage;