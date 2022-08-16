import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromFantasyIcon from "../components/cardIcons/removeMyFantasy";

const FantasyMoviesPage = () => {
  const { myFantasy: movieIds } = useContext(MoviesContext);

  const fantasyMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  const isLoading = fantasyMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = fantasyMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="MY FANTASY"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFantasyIcon movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FantasyMoviesPage;
