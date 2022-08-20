import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";


const TvCast = ({ cast }) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        style={{
          paddingLeft: 15,
          paddingTop: 30,
          background: "#900C3F",
          color: "#FFC300",
        }}
      >

        Details of Cast Members
      </Typography>
      <TableContainer
        component={Paper}
        style={{ background: "#900C3F", color: "#DAF7A6" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#FFC300", fontSize: 20 }}>
                {" "}
                Name of actor
              </TableCell>
              <TableCell style={{ color: "#FFC300 ", fontSize: 20 }}>
                Name of Character
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cast.cast.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  numeric
                  component="a"
                  href={`/actor/${row.id}`}
                  style={{ color: "#DAF7A6" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="left" style={{ color: "#DAF7A6" }}>
                  {row.character}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TvCast;