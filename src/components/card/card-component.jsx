import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.content;
    return (
      <div key={id} className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
