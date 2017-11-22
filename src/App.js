import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
render() {
    return (
    <div>
      <button type="button" onClick={this.onClick}>Send GET /products </button>
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
