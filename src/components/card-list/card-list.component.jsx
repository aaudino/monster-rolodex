//Alternative bennenungen für diese files X.component.jsx | index.js |X.jsx

import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card content={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
