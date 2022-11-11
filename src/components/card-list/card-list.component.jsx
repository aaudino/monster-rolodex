//Alternative bennenungen für diese files X.component.jsx | index.js |X.jsx

import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;

          return (
            <div key={id} className="card-container">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size180x180`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
