import React from "react";
import './App.css';


import HangTimer from './components/HangTimer/HangTimer'
import Header from './components/Header/Header'
import Values from "./components/Values";

const App = () => (
            <div className="App">
                <Header title="Hangboard-timer"/>
                <HangTimer/>
                <Values/>
            </div>
        );

export default App;
