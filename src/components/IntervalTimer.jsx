import React, {Component} from 'react'
import Timer from "./Timer"
import Typography from "@material-ui/core/Typography";

class IntervalTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hang: this.props.hang,
            rest1: this.props.rest1,
            reps1: this.props.reps1,
            rest2: this.props.rest2,
            reps2: this.props.reps2,

            timerArr: [],
            child_timer_done: false
        };
        this.childHandler = this.childHandler.bind(this);
    }

    /*
    childHandler(dataFromChild) {
        console.log('CHILD DONE');
        this.setState({
            child_timer_done: true
        })
    }
    */

    componentWillMount() {
        console.log(this.state);
        const arr = [];

        for (let i = 0; i < this.state.reps2; i++) {
            for (let j = 0; j < this.state.reps1; j++) {
                arr.push([this.state.hang, 'work']);
                arr.push([this.state.rest1, 'rest']);
            }
            arr.push([this.state.rest2, 'rest'])
        }
        console.log(arr);
        this.setState({
            timerArr: arr
        });
        console.log(this.state.timerArr)
    }

    render() {
        let val;
        if (!this.state.child_timer_done) {
            val = <Timer action={this.childHandler} countArr={this.state.timerArr} paused={this.props.paused}/>
        } else {
            val = <Typography variant="h2" display="block" color="textSecondary" component="h2">
                DONE
            </Typography>
        }

        console.log('Intervaltimer ' + this.props.paused);
        return (
            <div>
                {val}
            </div>
        )
    }
}

export default IntervalTimer