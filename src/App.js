import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Grundsätzlich ist das einfach nur eine alternative  Schreibweise. Man kann react als eine Collection von Classes oder als als eine Collection von Functions gestalten
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  //Component did mount ist eine Lifecycle Method
  //componentdidmount Ist eine Methode die in Kraft tritt wenn die Componente das erste mal in den DOM integriert wird.
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw Error("Unable to fetch");
      }
      const data = await response.json();

      this.setState(() => {
        return { monsters: data };
      });
    } catch (error) {
      this.setState(() => {
        const data = {
          name: error.message,
          id: 404,
        };
        return { monsters: [data] };
      });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            // Die Id muss hinzugefügt werden beim mappen - damit react weiß welche Elemente bei einer Veränderung neu gerendert werden müssen.
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

//Reihenfolge:
//1. contructor und initalize the state
//2. Danach läuft Render() und kreiert mehr oder weniger ein Template
//3 Das Template wird von Component did mount befüllt

// Das ist auch ganz logisch weil die komponnente kann nämlich nur dann mounten wenn der dom generiert wird
// Component.mount veranlasst dann React wiederum dazu, den Dom wieder neu zu rendern
