import React, {Component} from 'react'

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
        const {count} = this.state
        const {text} = this.state

        if (count < 0) {
            console.log(this.state.countArr)
            let next = this.state.countArr.shift()
            console.log(next)
            this.setState({
                count: next
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
            count: count,
            text: text,
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