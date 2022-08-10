import React, { useContext } from "react";
import FavTvPageTemplate from "../components/templateFavTvPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTVSeriesDetails} from "../api/tmdb-api";
import Spinner from "../components/spinner";


const FavTvPage = () => {
  const { TvFavs } = useContext(MoviesContext);

  const TvFavsQueries = useQueries(
    TvFavs.map((tvSeries) => {
      console.log(TvFavs, tvseries);
      return {
        queryKey: ["tvseries", { id: tvSeries }],
        queryFn: getTVSeriesDetails,
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

  console.log(tvseries)
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
