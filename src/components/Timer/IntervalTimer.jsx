import React from 'react'
import Typography from "@material-ui/core/Typography";
import Timer from "./Timer";

const IntervalTimer = (props) => {

    const makeArr = () => {
        const arr = [];

        for (let i = 0; i < props.reps2; i++) {
            for (let j = 0; j < props.reps1; j++) {
                arr.push([props.hang, 'work']);
                arr.push([props.rest1, 'rest']);
            }
            arr.push([props.rest2, 'rest'])
        }
        return arr;
    };

    const [state, setState] = React.useState(
        {
            hang: props.hang,
            rest1: props.rest1,
            reps1: props.reps1,
            rest2: props.rest2,
            reps2: props.reps2,

            timerArr: makeArr(),
            child_timer_done: false
        }
    );

    const childHandler = () => {
        setState({...state, child_timer_done: true})
    };

    const val =
        !state.child_timer_done
            ? <Timer action={childHandler} countArr={state.timerArr} paused={props.paused}/>
            : <Typography variant="h2" display="block" color="textSecondary" component="h2"> DONE </Typography>;

    return (
        <div>
            {val}
        </div>
    );
};

export default IntervalTimer;