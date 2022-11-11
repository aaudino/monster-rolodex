import { Component } from "react";
//Andere Komponenten können auch auf diese Style file zugreifen. Das liegt daran dass css gebundelt wird.Die Inputs werden aber auf Komponente ebene integriert, weil es einfach übersichtlicher ist
import "./search-box.styles.css";

class SearchBox extends Component {
  //Die Komponente muss abstrahiert werden - der Type kann so behalten werden wie er ist
  //Das gilt auch für die CSS Classes
  render() {
    return (
      <input
        className={` search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
