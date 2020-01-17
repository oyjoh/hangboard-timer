import React from 'react';
import { Button, Grid, Typography, ButtonGroup, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  buttonGroup: {
    alignItems: 'center',
  }
}));

export default function Selector(props) {

  const [state, setState] = React.useState({
    unit: props.unit,
    text: props.text,
    min: props.min,
    max: props.max,
    incValue: props.incValue,
    clicks: props.min,
    show: true
  });


  const IncrementItem = () => {
    setState({ ...state, clicks: (Math.min(state.clicks + state.incValue, state.max)) });
  };
  const DecrementItem = () => {
    setState({ ...state, clicks: (Math.max(state.clicks - state.incValue, state.min)) });
  };


  const classes = useStyles();

  return (
      <div>
      <Paper variant="outlined">
          <div className={classes.root}>
                      <Typography gutterBottom >
                          {state.text}
                      </Typography>
                      <ButtonGroup fullWidth size="small">
                          <Button disableElevation color="primary" value="inc" onClick={IncrementItem}><AddIcon /></Button>
                          <Button disabled>{state.clicks} {state.unit}</Button>
                          <Button disableElevation color="secondary" value="dec" onClick={DecrementItem}><RemoveIcon /></Button>
                      </ButtonGroup>
          </div>
      </Paper>
      </div>
  );
}

/*
<div>
      <Paper variant="outlined">
        <div className={classes.root}>
          <Grid container justify="space-between">
            <Grid item xs={4}>
              <Typography gutterBottom>
                {state.text}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <ButtonGroup fullWidth size="small">
                <Button disableElevation color="primary" value="inc" onClick={IncrementItem}><AddIcon /></Button>
                <Button disabled>{state.clicks} {state.unit}</Button>
                <Button disableElevation color="secondary" value="dec" onClick={DecrementItem}><RemoveIcon /></Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
*/