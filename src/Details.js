import { createStore } from "redux";

let initialState = {
  cart: [],
  itemList: [
    {
      itemName: "iphone",
      cost: 12999
    },
    {
      itemName: "lenevo",
      cost: 15000
    }
  ]
};

function Reducer(state = initialState, action) {
  var stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "add-to-cart":
      stateCopy.cart = [...stateCopy.cart, stateCopy.itemList[action.index]];
      return stateCopy;

    case "remove-cart":
      let cartlist = stateCopy.cart.slice();
      cartlist.splice(action.index, 1);
      stateCopy.cart = cartlist;
      return stateCopy;

    case "checkout":
      stateCopy.cart = [];
      return stateCopy;
    default:
      return stateCopy;
  }
}

let store = createStore(Reducer);
export default store;
