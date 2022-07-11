import React, {useContext} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const PlaylistAddIcons = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatchList = (e) => {
        e.preventDefault();
        context.addToMustWatchList(movie);
    }
    return (
        <IconButton style={{backgroundColor:'#7197d1', color: 'black'}} aria-label="add to must watch list" onClick={handleAddToMustWatchList}>
            <PlaylistAddIcon />
        </IconButton>
    )
};

export default PlaylistAddIcons;

