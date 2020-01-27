import React from 'react';
import {Button, ButtonGroup, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    buttonGroup: {
        alignItems: 'center',
        margin: theme.spacing(0.5),
    },
    textField: {
        marginTop: theme.spacing(1),
    }
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

    const handleChange = (event) => {
        console.log(Number(event.target.value));
        const num =  Number(event.target.value);
        setState({...state, clicks: num});
        sendData(num);
    };


    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0}>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={9}>
                            <TextField
                                className={classes.textField}
                                fullWidth
                                id={state.text}
                                label={state.text}
                                type="number"
                                variant="outlined"
                                value={String(state.clicks)}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <ButtonGroup fullWidth orientation="vertical" className={classes.buttonGroup}>
                                <Button size="small" disableElevation color="secondary" value="inc"
                                        onClick={IncrementItem}><AddIcon/></Button>
                                <Button size="small" disableElevation color="primary" value="dec"
                                        onClick={DecrementItem}><RemoveIcon/></Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>

                </div>
            </Paper>
        </div>
    );
}
