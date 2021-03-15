// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import React from 'react';
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   View,
// //   Text,
// //   StatusBar,
// // } from 'react-native';
// // import { Calendar } from 'react-native-calendars';

// // import {
// //   Header,
// //   LearnMoreLinks,
// //   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // const App: () => React$Node = () => {
// //   var a;
// //   return (
// //     // <>
// //     //   <StatusBar barStyle="dark-content" />
// //     //   <SafeAreaView>
// //     //     <ScrollView
// //     //       contentInsetAdjustmentBehavior="automatic"
// //     //       style={styles.scrollView}>
// //     //       <Header />
// //     //       {global.HermesInternal == null ? null : (
// //     //         <View style={styles.engine}>
// //     //           <Text style={styles.footer}>Engine: Hermes</Text>
// //     //         </View>
// //     //       )}
// //     //       <View style={styles.body}>
// //     //         <View style={styles.sectionContainer}>
// //     //           <Text style={styles.sectionTitle}>Step One</Text>
// //     //           <Text style={styles.sectionDescription}>
// //     //             Edit <Text style={styles.highlight}>App.js</Text> to change this
// //     //             screen and then come back to see your edits.
// //     //           </Text>
// //     //         </View>
// //     //         <View style={styles.sectionContainer}>
// //     //           <Text style={styles.sectionTitle}>See Your Changes</Text>
// //     //           <Text style={styles.sectionDescription}>
// //     //             <ReloadInstructions />
// //     //           </Text>
// //     //         </View>
// //     //         <View style={styles.sectionContainer}>
// //     //           <Text style={styles.sectionTitle}>Debug</Text>
// //     //           <Text style={styles.sectionDescription}>
// //     //             <DebugInstructions />
// //     //           </Text>
// //     //         </View>
// //     //         <View style={styles.sectionContainer}>
// //     //           <Text style={styles.sectionTitle}>Learn More</Text>
// //     //           <Text style={styles.sectionDescription}>
// //     //             Read the docs to discover what to do next:
// //     //           </Text>
// //     //         </View>
// //     //         <LearnMoreLinks />
// //     //       </View>
// //            <View style={{ paddingTop: 50, flex: 1 }}>
// //         <Calendar
// //           // Initially visible month. Default = Date()
// //           current={new Date()}
// //           // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
// //           // minDate={'2012-05-10'}`
// //           // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
// //           // maxDate={'2012-05-30'}
// //           // Handler which gets executed on day press. Default = undefined
// //           onDayPress={(day) => {
// //             a=day.dateString
// //             console.log('selected day', day,a);
// //           }}
// //           // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
// //           monthFormat={'yyyy MMM'}
// //           // Handler which gets executed when visible month changes in calendar. Default = undefined
// //           onMonthChange={(month) => {
// //             console.log('month changed', month);
// //           }}
// //           // Hide month navigation arrows. Default = false
// //           hideArrows={false}
// //           // Do not show days of other months in month page. Default = false
// //           hideExtraDays={false}
// //           // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
// //           // day from another month that is visible in calendar page. Default = false
// //           disableMonthChange={true}
// //           // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
// //           firstDay={1}
// //           markedDates={{
// //             [a]: {
// //               selected: true,
// //               selectedColor: 'grey',
// //               disabled: true,
// //               disableTouchEvent: true,
// //             },
// //           }}
// //         />
// //       </View> 
// //     //     </ScrollView>
// //     //   </SafeAreaView>
// //     // </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: 'absolute',
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: '600',
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: 'right',
// //   },
// // });

// // export default App;
// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     StatusBar,
//     SafeAreaView,
//     TouchableOpacity,
//     KeyboardAvoidingView,
//     ScrollView,
//     Dimensions,
//     TouchableWithoutFeedback,
//     Keyboard,
//   } from "react-native";
// //   import { Navigation } from "react-native-navigation";
// import { Calendar } from 'react-native-calendars';
//   export default class App extends React.Component {
//     constructor(props) {
//       super(props);
//     }

//       render() {
//         return (
//           <>
//             <SafeAreaView >
//               <StatusBar barStyle="dark-content" />
//               {/* <Header
//                 leftComponent={
//                   <TouchableOpacity
//                     onPress={() => {
//                       Navigation.pop(this.props.componentId);
//                     }}
//                   >
//                     <Image source={this.closeButton} style={styles.arrow} />
//                   </TouchableOpacity>
//                 }
//                 centerComponent={{
//                   text: translate("change password"),
//                   style: [font.bold, font.sizeLarge, color.linkColor],
//                 }}
//                 containerStyle={[
//                   styles.header,
//                   color.whiteBackground,
//                   navigation.headerContainer,
//                 ]}
//               /> */}
    
//               <ScrollView>
//               <View style={{ paddingTop: 50, flex: 1 }}>
//         <Calendar
//           // Initially visible month. Default = Date()
//           current={new Date()}
//           // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//           // minDate={'2012-05-10'}`
//           // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//           // maxDate={'2012-05-30'}
//           // Handler which gets executed on day press. Default = undefined
//           onDayPress={(day) => {
//             a=day.dateString
//             console.log('selected day', day,a);
//           }}
//           // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//           monthFormat={'yyyy MMM'}
//           // Handler which gets executed when visible month changes in calendar. Default = undefined
//           onMonthChange={(month) => {
//             console.log('month changed', month);
//           }}
//           // Hide month navigation arrows. Default = false
//           hideArrows={false}
//           // Do not show days of other months in month page. Default = false
//           hideExtraDays={false}
//           // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
//           // day from another month that is visible in calendar page. Default = false
//           disableMonthChange={true}
//           // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
//           firstDay={1}
//           markedDates={{
//             '2021-03-15': {
//               selected: true,
//               selectedColor: 'grey',
//               disabled: true,
//               disableTouchEvent: true,
//             },
//           }}
//         />
//       </View>
//               </ScrollView>
    
              
//             </SafeAreaView>
//           </>
//         );
//       }
//           }
          
