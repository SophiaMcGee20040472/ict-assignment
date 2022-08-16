import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(3.5),
    marginRight: theme.spacing(-2.4),
    marginLeft: theme.spacing(-2.4),
    paddingBottom:12,
    paddingTop:12,
    backgroundColor:'#900C3F'
  },
}));

const Header = (props ) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const title = props.title;

  return (
    <Paper component="div" className={classes.root}>
 <IconButton aria-label="go back"  onClick={() => navigate(-1)}>
        <ArrowBackIcon style={{ color:'#DAF7A6'}} fontSize="large" />
      </IconButton>
      <Typography variant="h5" component="h5" style={{color:'#DAF7A6', fontFamily:"Franklin Gothic" }}>
        {title}
      </Typography>
      <IconButton aria-label="go forward"  onClick={() => navigate(1)}>
        <ArrowForwardIcon style={{ color:'#DAF7A6'}} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
