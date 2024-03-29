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
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});
export default function MovieReviews({ movie }) {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then((reviews) => {
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
            <TableCell
              style={{ backgroundColor: "#FFC300", color: "#DAF7A6 " }}
              align="center"
            >
              Excerpt
            </TableCell>
            <TableCell style={{ backgroundColor: "#FF5733" }} align="right">
              More
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((r) => (
            <TableRow key={r.id} style={{ backgroundColor: "#F5F5F5" }}>
              <TableCell
                component="th"
                scope="row"
                style={{ backgroundColor: "#FF5733" }}
              >
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell>
                <Link
                  style={{ color: "orange" }}
                  to={`/reviews/${r.id}`}
                  state={{
                    review: r,
                    movie: movie,
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
