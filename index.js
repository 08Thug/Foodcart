/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
// import App from './App';
import Home from './Components/Home'
import route from "./Route/route"
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Home);
// import Cart from "./Components/Cart"
// import Success from "./Components/Success"

// // Navigation.registerComponent("Home", () => Home);
// Navigation.registerComponent("Cart", () => Cart);
// Navigation.registerComponent("Success", () => Success);

// Navigation.registerComponent('Home', () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 12,
      textColor: "#c3c3c3",
      selectedTextColor: "#ffffff",
      fontFamily: "Montserrat-SemiBold",
    },
    bottomTabs: {
      backgroundColor: "#307EA0",
      titleDisplayMode: "alwaysShow",
    },
    // animations: {
    //   push: {
    //     enabled: false,
    //   },
    // },
  });
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Home'
             }
           }
         ]
       }
     }
  });
  // Navigation.setRoot({
  //   root: route.beforeLogin,
  // });
});
