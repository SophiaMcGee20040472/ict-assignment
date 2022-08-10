import React, { useContext } from "react";
import FavTvPageTemplate from "../components/templateFavTvPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTVSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import TVListPageTemplate from "../components/templateTVListPage";
import { getTvImages } from "../api/tmdb-api";

const FavTvPage = () => {
  const { TvFavs } = useContext(MoviesContext);

  const TvFavsQueries = useQueries(
    TvFavs.map((tvSeries) => {
      console.log(TvFavs, tvseries);
      return {
        queryKey: ["tvseries", { id: tvSeries }],
        queryFn: getTVSeries,
      };
    })
  );
  const isLoading = TvFavsQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvseries = TvFavsQueries.map((q) => {
    q.data.title= q.data.name;
    q.data.type= "tvSeries";
    return q.data;
  });

  return (
   
    <FavTvPageTemplate
      title="MY FAV TV"
      tvseries={tvseries}
      action={(tvSeries) => {
        return (
          <>
            <addToTvFavs tvseries={tvSeries} />
          </>
          
        );
      }}
    />
  );
};

export default FavTvPage;
