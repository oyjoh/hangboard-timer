import React, {Component} from 'react'
import UIfx from 'uifx'
import bellAudio from './bell.mp3'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            text: 'undefined',
            countArr: []
        }
    }


    render() {
        const bell = new UIfx(
            bellAudio,
            {
                volume: 0.4, // number between 0.0 ~ 1.0
                throttleMs: 100
            }
        )

        const {count} = this.state
        const {text} = this.state

        if (count < 0) {
            bell.play()
            console.log(this.state.countArr)
            let next = this.state.countArr.shift()
            console.log(next)
            this.setState({
                count: next[0],
                text: next[1]
            })
        }

        return (
            <div>
                <h3>{text}</h3>
                <h3>{count}s</h3>
            </div>
        );
    }

    // setInterval
    // clearInterval
    componentDidMount() {
        const {count} = this.props
        const {text} = this.props
        const {countArr} = this.props
        this.setState({
            count: 3, //3sek to ready up
            text: 'Get ready',
            countArr: countArr
        })
        this.doIntervalChange()
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer