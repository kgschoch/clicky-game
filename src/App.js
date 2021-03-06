import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Players from "./players.json"
import Picture from './components/Picture';

class App extends Component {

  state = {
    playerArray: Players,
    playersGuessed: [],
    score: 0,
    topScore: 0,
    headline: "Click an Image to Begin"
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.score !== prevState.score) {
      this.setState(() => ({
        topScore: this.state.score > prevState.topScore ? this.state.score : prevState.topScore
      }));
    }
  }

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
  clicky = (id) => {
    console.log(this.state.playersGuessed);
    if (this.state.playersGuessed.indexOf(id) === -1) {
      this.setState (prevState => ({
        score: prevState.score + 1,
        playersGuessed: [...prevState.playersGuessed, id],
        playerArray: this.shuffle(prevState.playerArray),
        headline: "You Guessed Correctly!"
      }))
    }
    else {
      this.setState ({
        topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
        score: 0,
        playersGuessed: [],
        headline: "You Guessed Incorrectly!"
      })
    }
  }
  

  

  render() {
    return (
      <div>
      <Navbar       
        topscore = {this.state.topScore}
        score = {this.state.score}
        headline = {this.state.headline}
      />
      <Jumbotron/>
      <div className = "imgContainer">
        {this.state.playerArray.map(
          player => (
            <Picture 
            clicker = {this.clicky} 
            id = {player.id} 
            link = {player.src}
            />
          )
        )}
      </div>
      </div>
    );
  }
}


export default App;
