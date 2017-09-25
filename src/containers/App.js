import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="app">
        <div className="header">
          <h1>Scoreboard</h1>
        </div>

        <div className="players">
          <div className="player">
            Arnór Ragnarsson
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 22 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
