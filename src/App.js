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
      const users = await response.json();

      this.setState(() => {
        return { monsters: users };
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
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            // Der Searchterm muss in lower case umgewandelt werden
            const searchTerm = event.target.value.toLowerCase();
            //Filtern des Arrays in und schauen ob das Element den Substring enthält
            //Wichtig ist dabei das returnen
            console.log(searchTerm);
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchTerm);
            });
            console.log(filteredMonsters);
            //Mit setState sorgen wir für das rerendering
            this.setState(() => {
              return {
                monsters: filteredMonsters,
              };
            });
          }}
        />
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
//1. contructor und initalization of the state
//2. Danach läuft Render() und kreiert mehr oder weniger ein Template
//3 Das Template wird von Component did mount befüllt

// Das ist auch ganz logisch weil die komponnente kann nämlich nur dann mounten wenn der dom generiert wird
// Component.mount veranlasst dann React wiederum dazu, den Dom wieder neu zu rendern
