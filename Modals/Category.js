import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import fontStyle from "../Styles/font";
import color from "../Styles/color";
import box from "../Styles/box";
// import Spinner from "../UI/Spinner";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      categoryData: [],
      renderedListData: [],
    //   spinner: false,
      noData: false,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      this.setState({
        width: width,
        height: height,
      });
    });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change");
  }

  onCancelClicked = () => {
    this.props.onCancel();
  };

  onYesClicked = (val) => {
    this.props.onOk(val);
  };

  // Render item
  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.onYesClicked(item.value);
          }}
        >
          <View
            style={[
              styles.leftRightStyle,
              styles.spacing,
              box.bottomdownBorder,
              color.downBorderColor,
            ]}
          >
            {/* <Text style={{color:"#000"}}>{item.cate_name}</Text> */}

            <Text
              style={[
                color.linkColor,
                fontStyle.regular,
                fontStyle.sizeMedium,
                styles.centerStyle,
              ]}
            >
              {item.label}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

//   renderEmpty = () => {
//     return (
//       <View>
    

//         {!this.state.spinner && this.state.noData && (
//           <View style={[styles.dataStyle]}>
//             <Text
//               style={[
//                 fontStyle.sizeRegular,
//                 fontStyle.semibold,
//                 color.linkColor,
//               ]}
//             >
//               {translate("No data found")}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   };

  render() {
    return (
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.modalContainerPopup,box.container,
            styles.topAlignments,
            color.whiteBackground,
            { width: this.state.width * 0.9 },
            { height: this.state.height * 0.8 },
          ]}
        >
          {/* {this.props.from === "transaction" && ( */}
            <Text
              style={[
                color.darkgrayColor,
                fontStyle.semibold,
                fontStyle.sizeMedium,
                styles.centerStyle,
                //  /   styles.modalContentDetailText,
                styles.leftRightStyle,
                styles.topStyle,
              ]}
            >
            Are you sure want to Change the Menu ?
            </Text>
          {/* )} */}

          <FlatList
        
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={this.extractKey}
            extraData={this.state}
            // ListEmptyComponent={this.renderEmpty}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.onCancelClicked();
          }}
        >
          <View
            style={[
              styles.topAlignment,
              color.whiteBackground,
              styles.modalContainerPopup,
            ]}
          >
            <Text
              style={[
                color.linkColor,
                fontStyle.regular,
                fontStyle.sizeMedium,
                styles.centerStyle,
                styles.leftRightStyle,
                styles.topStyle,
                styles.bottomStyle,
                { width: this.state.width * 0.9 },
              ]}
            >
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
        {/* {this.state.spinner && <Spinner />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainerPopup: { position: "relative", borderRadius: 15 },
  modalContent: {},
  spacing: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 10,
  },
  modalContentDetailText: {
    textAlign: "center",
    lineHeight: 20,
    //   marginBottom: 20,
  },
  topAlignment: { marginTop: 10 },
  topAlignments: { marginTop: "100%" },

  // modalHeader: {
  //  // height: 50,
  //  borderRadius:10,
  //   alignItems: "center",
  // },
  // modalHeaderText: {
  // // /  lineHeight: 50,
  //   textTransform: "uppercase",
  // },
  flexStyle: { flexDirection: "row", justifyContent: "space-between" },
  // modalHeaderIcon: {
  //   position: "absolute",
  //   right: -10,
  //   top: -6,
  //   width: 25,
  //   height: 25,
  //   zIndex: 10000,
  // },
  leftRightStyle: { paddingLeft: 15, paddingRight: 15 },
  topStyle: { paddingTop: 15 },
  bottomStyle: { paddingBottom: 15 },
  centerStyle: {
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  modalContentDetailText: {
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  modalContentMessageText: { marginBottom: 10, textAlign: "center" },
  modalContentImg: { alignItems: "center", marginBottom: 20 },
  modalContentImgItem: { width: 100, resizeMode: "contain" },
  modelCloseBtn: { textTransform: "uppercase", marginBottom: 15, width: "49%" },
  searchStyle: {
    width: "93%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  padding: { marginLeft: 5, marginTop: 5, height: 38, marginRight: 25 },
  searchIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 11,
    right: 8,
  },
  skeletonText: { width: "50%", height: 20, marginTop: 10, borderRadius: 5 },
  dataStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
