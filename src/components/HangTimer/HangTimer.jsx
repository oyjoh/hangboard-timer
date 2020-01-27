import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Selector from './Selector';
import {Button, Grid} from '@material-ui/core';

import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import IntervalTimer from "../IntervalTimer";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1)
    },
    toggleButtonGroup:{
        marginBottom: theme.spacing(1),
    }
}));

const HangTimer = () => {

    const [state, setState] = React.useState({
        hangTime: 15,
        intervalTime: 10,
        reps: 4,
        restTime: 120,
        rounds: 3,
        intervalTimer: null,
    });

    const callBackFunction = (e) => {
        console.log(`${e.num} ${e.pos}`);
        setState( {...state, [e.pos]: e.num});
    };

    const classes = useStyles();

    const [timer, setTimer] = useState({elem: null});

    const [mode, setMode] = useState('list');

    const handleModeChange = (event, value) => {
        console.log(value);
        if (value) {
            setMode(value);
        }
    };

    const selectors = [
        {
            item: <Selector
                pos="hangTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Hang Time"
                startVal={state.hangTime}
                min={0}
                max={120}
                incValue={5}/>
                ,
            key: 0
        },
        {
            item: <Selector
                pos="intervalTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Interval Rest"
                startVal={state.intervalTime}
                min={0}
                max={60}
                incValue={5}/>
                ,
            key: 1
        },
        {
            item: <Selector
                pos="reps"
                parentCallBack={callBackFunction}
                unit="reps"
                text="Reps"
                startVal={state.reps}
                min={1}
                max={20}
                incValue={1}/>
                ,
            key: 2
        },
        {
            item: <Selector
                pos="restTime"
                parentCallBack={callBackFunction}
                unit="sec"
                text="Set Rest"
                startVal={state.restTime}
                min={0}
                max={300}
                incValue={10}/>
                ,
            key: 3
        },
        {
            item: <Selector
                pos="rounds"
                parentCallBack={callBackFunction}
                unit="Rounds"
                text="Rounds"
                startVal={state.rounds}
                min={1}
                max={20}
                incValue={1}/>
                ,
            key: 4
        }
    ];

    const gridElems = selectors.map(elem =>
        <Grid key={elem.key} item xs={mode === 'grid' ? 6 : 12}>
            {elem.item}
        </Grid>
    );

    const startTimer = () => {
        console.log("Hey");
        setTimer({...timer, elem: <IntervalTimer
                hang={state.hangTime}
                rest1={state.intervalTime}
                reps1={state.reps}
                rest2={state.restTime}
                reps2={state.rounds}/>});
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
            </ToggleButtonGroup>
            <Grid container spacing={1}>
                {gridElems}
                <Grid item xs={12}>
                    <Button size="large" color="primary" variant="outlined" onClick={startTimer} fullWidth><PlayArrowIcon/></Button>
                </Grid>
                <Grid item xs={12}>
                    {timer.elem}
                </Grid>
            </Grid>
        </div>
    );
};

export default HangTimer;