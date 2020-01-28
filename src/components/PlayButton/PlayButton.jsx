import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        width: 'flex',
    },
}));

const PlayButton = (props) => {

    const classes = useStyles();

    const callBackFunc = props.playPauseCallback;

    const [state, setState] = React.useState("play");

    const handleStart = () => {
        callBackFunc("play");
        setState("pause");
    };

    const handlePause = () => {
        callBackFunc("pause");
        setState("playStop");
    };

    const handleStop = () => {
        callBackFunc("stop");
        setState("stop");
    };

    const playButton =
        <Button size="large" variant="outlined" value="play" onClick={handleStart}>
            <PlayArrowIcon/>
        </Button>;

    const pauseButton =
        <Button size="large" variant="outlined" value="pause" onClick={handlePause}>
            <PauseIcon/>
        </Button>;

    const stopButton =
        <Button size="large" color="secondary" variant="outlined" value="stop" onClick={handleStop}>
            <StopIcon/>
        </Button>;

    const buttons =
        <ButtonGroup fullWidth>
            {(state === "play" || state === "playStop" || state === "stop") && playButton}
            {(state === "pause") && pauseButton}
            {(state === "playStop") && stopButton}
        </ButtonGroup>;

    return (
        <div className={classes.root}>
            {buttons}
        </div>
    );
};

export default PlayButton;
