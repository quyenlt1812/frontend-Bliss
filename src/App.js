import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import InteractiveMap from './components/InteractiveMap/InteractiveMap.js';
class App extends Component {
    render() {
        return (
            <div>
                <InteractiveMap />
                <button onClick={this.onClick}>Click me Fuck you</button>
            </div>
        );
    }

    onClick(ev) {
        console.log("Sending a POSt API Call !!!");
        axios.get('http://127.0.0.1:8000/snippets/1')
            .then(res => {
                console.log((res.data));
            })
    }
}
export default App;
