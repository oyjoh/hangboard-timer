import React, {Component} from "react";
import './App.css';


import HangTimer from './components/HangTimer/HangTimer'
import Header from './components/Header/Header'
import Countdown from "./components/Countdown";
import Timer from "./components/Timer"
import Values from "./components/Values"

const App = () => (
            <div className="App">
                <Header title="Hangboard-timer"/>
                <HangTimer/>
            </div>
        );

export default App;
