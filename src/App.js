import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import InteractiveMap from './components/InteractiveMap/InteractiveMap.js';
class App extends Component {
render() {
    return (
    <div>
      <InteractiveMap/>
    </div>
    );
}

onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('http://127.0.0.1:8000/api/note/1')
    .then(res => {
            console.log(JSON.stringify(res));
    })
}
}
export default App;
