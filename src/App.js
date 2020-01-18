import React from "react";
import './App.css';


import HangTimer from './components/HangTimer/HangTimer'
import Header from './components/Header/Header'

const App = () => (
            <div className="App">
                <Header title="Hangboard-timer"/>
                <HangTimer/>
            </div>
        );

export default App;
