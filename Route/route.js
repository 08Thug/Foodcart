import { Navigation } from "react-native-navigation";
import Home from "../Components/Home"
import Cart from "../Components/Cart"
import Cartlist from "../Components/Cartlist"
import { Provider } from "react-redux";
import {store } from "../Redux/store/store"

Navigation.registerComponentWithRedux("Home", () => Home, Provider, store);
Navigation.registerComponentWithRedux("Cart", () => Cart, Provider, store);
Navigation.registerComponentWithRedux("Cartlist", () => Cartlist, Provider, store);

// Navigation.registerComponentWithRedux("Success", () => Success, Provider, store);


const beforeLogin = {
    stack: {
      children: [
        {
          component: {
            name: "Home",           
          },
        },
      ],
    },
  };

  export default (route = {
    beforeLogin: beforeLogin,
  });