import React, {Component} from 'react'
import UIfx from 'uifx'
import bellAudio from './bell.mp3'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

class Timer extends Component {


    constructor(props) {
        super(props);
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
        );

        const {count} = this.state
        const {text} = this.state

        if (count < 0) {
            bell.play();
            if (this.state.countArr.length < 1) {
                this.props.action('done')
                return null;
            }
            console.log(this.state.countArr);
            let next = this.state.countArr.shift();
            console.log(next);
            this.setState({
                count: next[0],
                text: next[1]
            })
        }

        return (
            <div>
                <Container maxWidth>
                <Paper elevation={0}>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            Timer
                        </Typography>
                        <Typography variant="h1" display="block" color="textSecondary" component="h2">
                            {count}
                        </Typography>
                        <Typography variant="h3" display="block" color="textSecondary">
                            {text.toString().toUpperCase()}
                        </Typography>
                </Paper>
                </Container>
            </div>
        );
    }

    // setInterval
    // clearInterval
    componentDidMount() {
        const {countArr} = this.props
        this.setState({
            count: 3, //3sek to ready up
            text: 'Get ready',
            countArr: countArr
        });
        this.doIntervalChange()
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer