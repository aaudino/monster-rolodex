//Alternative bennenungen für diese files X.component.jsx | index.js |X.jsx

//
import { Component } from "react";

class CardList extends Component {
  render() {
    //Mit der props property, die an unsere Componente angeknüpft ist, sehen wir alle properties die übergeben werden
    console.log(this.props);
    //Destructuring damit wir uns das this.props.monsters sparen
    const { monsters } = this.props;
    return (
      <div>
        {" "}
        hello there: {this.props.anything}
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
