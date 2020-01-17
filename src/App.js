import React, {Component} from "react";
import './App.css';

import Countdown from "./components/Countdown";
import Timer from "./components/Timer"
import Values from "./components/Values"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hangboard-timer</h1>
                <Values/>
            </div>
        );
    }
}

export default App;
