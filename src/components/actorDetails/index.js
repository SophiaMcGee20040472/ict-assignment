import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ErrorOutlinedIcon from "@material-ui/icons/AccessAlarm" ;
import Face from "@material-ui/icons/Face";
import Cake from "@material-ui/icons/Cake";
import Work from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ( {actor}) => {
const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      {actor.name}
      <Typography variant="h6" component="p">
       {actor.biography}
      </Typography>
      <div className={classes.chipRoot}>
      <Chip
          style={{background:"black", color:"white"}}
          icon={<Cake style={{color:"orange"}} />}
          label={`${actor.birthday}` } 
        />
      <Paper component="ul" className={classes.chipSet} >
        <Chip style={{background:"black", color:"white"}} icon={< Face style={{color:"orange"}} />} label={`${actor.name}`} />
        <Chip style={{background:"black", color:"white"}} icon={<Work style={{color:"orange"}}  />} label={`${actor.known_for_department}`} />
        <Chip style={{background:"black", color:"white"}} icon={<ErrorOutlinedIcon style={{color:"orange"}}  />} label={`${actor.popularity}`} />
      </Paper>
      </div>
      
    </>
  );
};
export default  ActorDetails;