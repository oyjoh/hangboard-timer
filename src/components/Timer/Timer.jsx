import React, {useEffect, useState} from 'react'
import UIfx from 'uifx'
import bellAudio from '../../assets/bell.mp3'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

const Timer = (props) => {

    const [state, setState] = useState(
        {
            count: 5,
            text: 'Get ready',
            countArr: props.countArr,
        }
    );

    const bell = new UIfx(
        bellAudio,
        {
            volume: 1.0, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    );


    useEffect(() => {
        const interval = setInterval(() => {
            if (state.count <= 0) {
                bell.play();
                if (state.countArr.length < 1) {
                    props.action('done');
                    return null;
                }
                let next = state.countArr.shift();
                setState({...state,
                    count: next[0],
                    text: next[1]
                })
            }  else if (!props.paused) {
                setState({...state,count: state.count - 1} );
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [props, bell, state]);


    return (
        <div>
            <Container>
                <Paper elevation={0}>
                    <Typography variant="h4" color="textSecondary" gutterBottom>
                        Timer
                    </Typography>
                    <Typography variant="h1" display="block" color="textSecondary" component="h2">
                        {state.count}
                    </Typography>
                    <Typography variant="h5" display="block" color="textSecondary">
                        {state.text.toUpperCase()}
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
};


export default Timer;