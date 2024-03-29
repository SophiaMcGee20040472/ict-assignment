import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getActorsImage, getActorsMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#581845",
    color: "#DAF7A6",
    paddingTop: theme.spacing(7),
    marginRight: -10,
    marginLeft: -10,
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: "100vh",
  },
}));

const TemplateActorBioPage = ({ actor, children }) => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["actor images", { id: actor.id }],
    getActorsImage,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className={classes.root}>
      <ActorHeader actor={actor} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              <ImageListItem key={actor.profile_path} cols={1}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.poster_path}
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

export default TemplateActorBioPage;
