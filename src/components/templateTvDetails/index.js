import React from "react";
import TvHeader from "../headerTV";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getTvImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Header from "../headerMovieList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#581845",
    color: "#DAF7A6",
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 453,
    height: "100vh",
  },
}));

const TemplateTvPage = ({ tvSeries, children }) => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: tvSeries.id }],
    getTvImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className={classes.root}>
      <Header name={tvSeries} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              <ImageListItem key={tvSeries.poster_path} cols={1}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`}
                  alt={tvSeries.poster_path}
                />
              </ImageListItem>
            </ImageList>
          </div>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateTvPage;
