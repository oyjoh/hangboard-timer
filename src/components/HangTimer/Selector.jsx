import React from 'react';
import {Button, ButtonGroup, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    buttonGroup: {
        alignItems: 'center',
    },
}));

export default function Selector(props) {

    const callBackFunc = props.parentCallBack;

    const [state, setState] = React.useState({
        pos: props.pos,
        unit: props.unit,
        text: props.text,
        min: props.min,
        max: props.max,
        incValue: props.incValue,
        clicks: props.startVal,
        show: true,
    });

    const sendData = (num) => {
        callBackFunc({num: num, pos: state.pos});
    };

    const IncrementItem = () => {
        const num = (Math.min(state.clicks + state.incValue, state.max));
        setState({...state, clicks: num});
        sendData(num);
    };
    const DecrementItem = () => {
        const num = (Math.max(state.clicks - state.incValue, state.min));
        setState({...state, clicks: num});
        sendData(num);
    };


    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0} >
                <div className={classes.root}>
                    <Typography gutterBottom>
                        {state.text}
                    </Typography>
                    <ButtonGroup fullWidth>
                        <Button size="small" disableElevation color="primary" value="dec"
                                onClick={DecrementItem}><RemoveIcon/></Button>
                        <Button size="large" disabled>{state.clicks} {state.unit}</Button>
                        <Button size="small" disableElevation color="secondary" value="inc"
                                onClick={IncrementItem}><AddIcon/></Button>
                    </ButtonGroup>
                </div>
            </Paper>
        </div>
    );
}
