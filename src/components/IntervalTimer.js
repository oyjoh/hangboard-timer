import React, {Component} from 'react'
import Timer from "./Timer"

class IntervalTimer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hang: this.props.hang,
            rest1: this.props.rest1,
            reps1: this.props.reps1,
            rest2: this.props.rest2,
            reps2: this.props.reps2,

            timerArr: []
        }

    }
    /*
    componentWillMount() {
        const {hang} = this.props
        const {rest1} = this.props
        const {reps1} = this.props
        const {rest2} = this.props
        const {reps2} = this.props
        console.log('lol wtf')

        this.setState({
            hang: hang,
            rest1: rest1,
            reps1: reps1,
            rest2: rest2,
            reps2: reps2
        })
        console.log('hangtime: ' + this.state.hang)
        this.createArr()
    } */

    componentWillMount() {
        console.log(this.state)
        const arr = []

        for (let i = 0; i < this.state.reps2; i++) {
            for (let j = 0; j < this.state.reps1; j++) {
                arr.push(this.state.hang)
                arr.push(this.state.rest1)
                console.log('its happen')
            }
            arr.push(this.state.rest2)
        }
        console.log(arr)
        this.setState({
            timerArr: arr
        })
        console.log(this.state.timerArr)
    }

    render() {
        return(
            <div>
                {console.log("from render: " + this.state.timerArr)}
                <Timer countArr={this.state.timerArr}/>
            </div>
        )
    }
}

export default IntervalTimer