//Alternative bennenungen für diese files X.component.jsx | index.js |X.jsx

//
import { Component } from "react";

class CardList extends Component {
  render() {
    return (
      <div> hello there</div>
      // Man kann in einem Component by default nur eine Component haben und keinen Sibling - das ergibt einen Error
      // <div></div>
    );
  }
}

export default CardList;
