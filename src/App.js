import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Grundsätzlich ist das einfach nur eine alternative  Schreibweise. Man kann react als eine Collection von Classes oder als als eine Collection von Functions gestalten
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: "Anthony", lastname: "Audino" },
      company: "WU",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi there, {this.state.name.firstname} {this.state.name.lastname} -
            student of {this.state.company}{" "}
          </p>
          {/* betreffend Eventhandler:wir benötigen hier die setState methode, da diese React darüber informiert, dass das State Object zu einer neuen Speicherreferenz zeigt - das animiert react dazu, den DOM neu zu rendern würden wir einfach bei der Onclick Methode this.state.name ändern, dann löst das kein rerendern des DOMS aus, weil wir ja die Speicherreferenz nicht anrühren*/}
          <button
            onClick={() => {
              this.setState({
                name: { firstname: "Antonio", lastname: "Audino" },
              });
              // Dieser Console.log wird noch die properties des "alten" state anzeigen. Warum ? weil this.setState aus perfromance gründen async ist.
              console.log(this.state);
            }}
          >
            {" "}
            Click here to change name{" "}
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
