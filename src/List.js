import React from "react";
import { connect } from "react-redux";
import "./styles.css";

class List extends React.Component {
  sendDate = (i) => {
    this.props.sendDate({
      type: "add-to-cart",
      index: i
    });
  };
  render() {
    return (
      <div className="items1">
        {this.props.Items.map((e1, i) => {
          return (
            <div className="items2" key={i}>
              Name:{e1.itemName}
              <br />
              Cost:{e1.cost}
              <br />
              <button onClick={() => this.sendDate(i)}>AddCart</button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (newState) => {
  return {
    Items: newState.itemList,
    Cart: newState.cart
  };
};
const mapPropToState = (dispatch) => {
  return {
    sendDate: dispatch
  };
};
export default connect(mapStateToProps, mapPropToState)(List);
