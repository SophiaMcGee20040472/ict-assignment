import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getTvSeriesReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function TvSeriesReviews({ tvSeries }) {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTvSeriesReviews(tvSeries.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((r) => (
            <TableRow key={r.id} style={{ backgroundColor: "#581845" }}>
              <TableCell component="th" scope="row" style={{ color: "#FFC300" }}>
                {r.author}
              </TableCell>
              <TableCell style={{ color: "#FFC300" }}>{excerpt(r.content)}</TableCell>
              <TableCell>
                <Link
                  to={`/tv/reviews/${tvSeries.id}`}
                  state={{
                    review: r,
                    tvSeries: tvSeries,
                  }}
                 
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
