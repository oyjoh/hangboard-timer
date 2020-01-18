import React, {Component} from 'react'
import UIfx from 'uifx'
import bellAudio from './bell.mp3'
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                <Paper>
                        <Typography color="textSecondary" gutterBottom>
                            Timer
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {count}
                        </Typography>
                        <Typography color="textSecondary">
                            {text}
                        </Typography>
                </Paper>
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