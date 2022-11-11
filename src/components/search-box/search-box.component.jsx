import { Component } from "react";

class SearchBox extends Component {
  //Die Komponente muss abstrahiert werden - der Type kann so behalten werden wie er ist
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
