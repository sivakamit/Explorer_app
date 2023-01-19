import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, InputBase, Box } from "@material-ui/core";
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style.js';

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = ()  => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng});
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Explorer
        </Typography>
        <Box display="flex">
          <Typography variant="h8" className={classes.title}>
            Found new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;