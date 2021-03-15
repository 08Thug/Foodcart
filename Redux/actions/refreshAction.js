import {CART_UPDATED} from "../actions/actionTypes"

export function actionfetchCart(refresher) {
    console.log("action", refresher);
  
    return (dispatch) => {
      // get data from db
      dispatch({
        type: CART_UPDATED,
        payload: refresher,
      });
    };
  }