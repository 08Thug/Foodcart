// import React from "react";
// import {
//   AppState,
// } from "react-native";
// import route from "../Route/route";
// export default class Base extends React.Component {
//   constructor(props) {
//     super(props);
    
//   }

//   state = {
//     appState: AppState.currentState,
//   };

//   componentDidMount() {
//     AppState.addEventListener("change", this._handleAppStateChange);
//   }

//   componentWillUnmount() {
//     AppState.removeEventListener("change", this._handleAppStateChange);
//   }

//   _handleAppStateChange = (nextAppState) => {
//     if (
//       this.state.appState.match(/inactive|background/) &&
//       nextAppState === "active"
//     ) {
//       console.log("App has come to the foreground!");
//     //   this.handleSessionTimeout();
//     } else {
//       console.log("App has come to the background!");
//     }
//     this.setState({ appState: nextAppState });
//   };
//   handleSessionTimeout = async () => {
//     console.log("on resume");
//     const userToken = await Session._getToken();
//     const preferredLogin = await Session.getPreferredVerification();
//     console.log("preferredLogin: ", preferredLogin);
//     global.userToken = userToken;
//     if (preferredLogin === "fingerprint") route.beforeLogin();
//     else if (preferredLogin === "passcode") route.beforeLogin();
//   };

// }
