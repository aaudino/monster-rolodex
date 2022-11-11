import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// Grundsätzlich ist das einfach nur eine alternative  Schreibweise. Man kann react als eine Collection von Classes oder als als eine Collection von Functions gestalten
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      //Wenn wir eine Variable haben die gleich wie eine Property heißt, dann können wir diesen shortcut verwenden
      return {
        searchField,
      };
    });
  };

  render() {
    // Destructuring damit wir das "this" streichen können
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* Mit dieser Notation importieren wir die Komponente 
        Mit props können wir den Komponenten properties übergeben, die dort dann bearbeitet werden können 
        Unsere Componente interessiert sich nur dafür WAS sie anzeigen soll und deswegen übergeben wir die FilteredMonsters und nicht alle Monsters

        //Componenten rerendern wenn props sich verändern - das kann passieren, beispielsweise passieren, wenn wir in der einen state ändern, der als prop an eine componente übergeben wird

        //Allgemein kann man sagen, das man ein rerender durch einen state change oder einen prop change "provozieren" kann 
        */}
        {/* OnChangeHandler ist eine custom props die wir der Komponente übergeben */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
          className={"search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

//Reihenfolge:
//1. contructor und initalization of the state
//2. Danach läuft Render() und kreiert mehr oder weniger ein Template
//3 Das Template wird von Component did mount befüllt
// Das ist auch ganz logisch weil die komponente kann nämlich nur dann mounten wenn der dom generiert wird
// Component.mount veranlasst dann React wiederum dazu, den Dom wieder neu zu rendern
