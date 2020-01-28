import React from 'react';
import {Button, ButtonGroup} from '@material-ui/core';

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';


const PlayButton = (props) => {

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
        <div>
            {buttons}
        </div>
    );
};

export default PlayButton;
