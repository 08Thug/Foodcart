import {CART_UPDATED} from "../actions/actionTypes"
const initialState = {
    refresher: "",
  };
  export default function(state = initialState, action) {
    console.log("action.type: ", action.payload);
  
    switch (action.type) {
      case CART_UPDATED:
        return { ...state, refresher: action.payload };
      
      default:
        return state;
    }
  }