import React, {Component} from 'react'
import NumericInput from 'react-numeric-input';
import IntervalTimer from './IntervalTimer'

class Values extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hang: null,
            rest1: null,
            reps1: null,
            rest2: null,
            reps2: null,

            hasSubmitted: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({hasSubmitted: true})
        const data = this.state
        console.log(data)
    }

    componentDidMount() {
        this.setState({
            hang: 10,
            rest1: 30,
            reps1: 4,
            rest2: 120,
            reps2: 4
        })
    }

    render() {
        const hasSubmitted = this.state.hasSubmitted
        let data

        if (hasSubmitted) {
            data = <IntervalTimer hang={this.state.hang} rest1={this.state.rest1} reps1={this.state.reps1}
                                  rest2={this.state.rest2} reps2={this.state.reps2}/>
        } else {
            data = <form onSubmit={this.handleSubmit}>
                <p>hang<NumericInput onChange={value => this.setState({hang: value})} name='hang' min={0} max={100}
                                     value={this.state.hang} format={secFormat}/></p>
                <p>rest<NumericInput onChange={value => this.setState({rest1: value})} name='rest1' min={0}
                                     max={100} value={this.state.rest1} format={secFormat}/></p>
                <p>reps<NumericInput onChange={value => this.setState({reps1: value})} name='reps1' min={0}
                                     max={100} value={this.state.reps1} format={repFormat}/></p>
                <br></br>
                <p>rest<NumericInput onChange={value => this.setState({rest2: value})} name='rest2' min={0}
                                     max={300} value={this.state.rest2} format={secFormat}/></p>
                <p>reps<NumericInput onChange={value => this.setState({reps2: value})} name='reps2' min={0}
                                     max={100} value={this.state.reps2} format={repFormat}/></p>
                <p>
                    <button>Start timer</button>
                </p>
            </form>
        }

        return (
            <div>
                {data}
            </div>
        )

        function secFormat(num) {
            return num + 's';
        }

        function repFormat(num) {
            return num + ' reps'
        }
    }
}

export default Values