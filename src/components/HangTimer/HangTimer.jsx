import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Selector from './Selector';
import {Button, Grid} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import PlayButton from '../PlayButton/PlayButton';
import IntervalTimer from "../IntervalTimer";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        width: 'flex',
    },
    button: {
        marginTop: theme.spacing(1),
    }
}));

const HangTimer = () => {

    const [state, setState] = React.useState({
        hangTime: 15,
        intervalTime: 10,
        reps: 4,
        restTime: 120,
        rounds: 3,
        isPaused: false,
        intervalTimer: null,
    });

    const callBackFunction = (e) => {
        console.log(`${e.num} ${e.pos}`);
        setState({...state, [e.pos]: e.num});
    };

    const callBackPlayPause = (e) => {
        console.log(e);
        switch (e) {
            case "play" : setState({...state, isPaused: false}); break;
            case "pause" : setState({...state, isPaused: true}); break;
            case "stop" : setTimer(null); break;
            default : console.error("CALLBACK GAVE UNVALID VALUE");
        }
    };

    const getIsPaused = () => state.isPaused;

    const classes = useStyles();

    const [timer, setTimer] = useState(null);

    const [mode, setMode] = useState('list');

    const [hide, setHide] = useState(false);

    const handleModeChange = (event, value) => {
        console.log(value);
        switch (value) {
            case "list": setHide(false); setMode("list");break;
            case "grid": setHide(false); setMode("grid");break;
            case "hide": setHide(true); setMode("hide"); break;
            default: break;
        }
    };

    const selectors = [
        <Selector
                pos="hangTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Hang Time"
                startVal={state.hangTime}
                min={0}
                max={120}
                incValue={5}/>,
        <Selector
                pos="intervalTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Interval Rest"
                startVal={state.intervalTime}
                min={0}
                max={60}
                incValue={5}/>,

        <Selector
                pos="reps"
                parentCallBack={callBackFunction}
                unit="reps"
                text="Reps"
                startVal={state.reps}
                min={1}
                max={20}
                incValue={1}/>,
        <Selector
                pos="restTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Set Rest"
                startVal={state.restTime}
                min={0}
                max={300}
                incValue={10}/>,
        <Selector
                pos="rounds"
                parentCallBack={callBackFunction}
                unit="Rounds"
                text="Rounds"
                startVal={state.rounds}
                min={1}
                max={20}
                incValue={1}/>
    ];

    const gridElems = selectors.map((elem, key) =>
        <Grid key={key} item xs={mode === 'grid' ? 6 : 12}>
            {elem}
        </Grid>
    );

    const startTimer = () => {
        setHide(true);
        setMode("hide");
        setTimer(
            <IntervalTimer
                hang={state.hangTime}
                rest1={state.intervalTime}
                reps1={state.reps}
                rest2={state.restTime}
                reps2={state.rounds}/>
        );
    };

    return (
        <div className={classes.root}>
            <ToggleButtonGroup
                size="small"
                value={mode}
                exclusive
                onChange={handleModeChange}
                arial-label="list mode"
                className={classes.toggleButtonGroup}
            >
                <ToggleButton value="list">
                    <ViewListIcon/>
                </ToggleButton>
                <ToggleButton value="grid">
                    <ViewModuleIcon/>
                </ToggleButton>
                <ToggleButton value="hide">
                    <VisibilityOffIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
            {!hide && (
                <Grid container spacing={1}>
                    {gridElems}
                </Grid>
            )}


            <Button size="large" color="primary" variant="outlined" onClick={startTimer}
                    fullWidth className={classes.button}><PlayArrowIcon/></Button>

            <PlayButton playPauseCallback={callBackPlayPause}/>
            <Grid container >
                <Grid item xs={12}>
                    {timer}
                </Grid>
            </Grid>
        </div>
    );
};

export default HangTimer;