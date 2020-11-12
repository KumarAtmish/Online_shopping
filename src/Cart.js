import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  removeData = (i) => {
    this.props.removeData({
      type: "remove-cart",
      index: i
    });
  };
  Checkout = () => {
    this.props.Checkout({
      type: "checkout"
    });
  };
  render() {
    var sum = 0;
    this.props.Cart.forEach((element) => {
      sum = sum + element.cost;
    });
    if (sum !== 0) {
      return (
        <>
          {this.props.Cart.map((e1, i) => {
            return (
              <div className="cart1" key={i}>
                Name:{e1.itemName}
                <br />
                Cost:{e1.cost}
                <button
                  className="btn btn-warning m1-2"
                  onClick={() => {
                    this.removeData(i);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-success"
            onClick={() => {
              this.Checkout();
            }}
          >
            <p>Total:{sum}</p>
          </button>
        </>
      );
    } else {
      return <div></div>;
    }
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
    removeData: dispatch,
    Checkout: dispatch
  };
};
export default connect(mapStateToProps, mapPropToState)(Cart);
