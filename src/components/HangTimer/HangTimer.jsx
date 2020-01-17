import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Selector from './Selector';
import { Grid, Button } from '@material-ui/core';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1)
  },
}));

const HangTimer = () => {

    const classes = useStyles();

    const [mode, setMode] = useState('grid');

    const handleModeChange = (event, value) => {
        console.log(value);
        if (value) {
            setMode(value);
        }
    };

    const selectors = [
        {item: <Selector unit="sec" text="Hang Time" min={0} max={120} incValue={5}/>, key:0},
        {item: <Selector unit="sec" text="Interval Rest" min={10} max={20} incValue={1}/>, key:1},
        {item: <Selector unit="reps" text="Reps" min={1} max={20} incValue={1}/>, key:2},
        {item: <Selector unit="sec" text="Set Rest" min={0} max={10} incValue={2}/>, key:3},
        {item: <Selector unit="Rounds" text="Rounds" min={0} max={10} incValue={2}/>, key:4}
    ];

    const gridElems = selectors.map(elem =>
        <Grid key={elem.key} item xs={mode === 'grid' ? 6 : 12}>
            {elem.item}
        </Grid>
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {gridElems}
        <Grid item xs={12}>
          <Button color="primary" variant="outlined" fullWidth><PlayArrowIcon /></Button>
        </Grid>
      </Grid>

      <ToggleButtonGroup
        size="small"
        value={mode}
        exclusive
        onChange={handleModeChange}
        arial-label="list mode"
      >
        <ToggleButton value="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default HangTimer;