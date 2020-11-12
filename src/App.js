import React from "react";
import "./styles.css";
import List from "./List";
import Cart from "./Cart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Online Shopping</h1>
        <div className="item">
          <div className="list">
            <List />
          </div>
          <div className="cart">
            <h1>My Cart</h1>
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
