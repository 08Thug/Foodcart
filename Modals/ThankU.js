import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import formStyle from "./../Styles/control";
import fontStyle from "./../Styles/font";
import colorStyle from "./../Styles/color";
import buttonStyle from "./../Styles/button";
import boxStyle from "./../Styles/box";
export default class ThankU extends React.Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
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

  gotoHome = () => {
    this.props.onCancel();
  };

  render() {
    return (
      // <ScrollView>
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.modalContainerPopup,
            colorStyle.inputBackground,
            { width: this.state.width * 0.9 }, 
          ]}
        >
          <View style={[colorStyle.backColor, styles.modalHeader]}>
            <Text
              style={[
                colorStyle.textWhiteColor,
                fontStyle.semibold,
                fontStyle.sizeLarge,
                styles.modalHeaderText,
              ]}
            >
              {" "}
              Thank You{" "}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                this.gotoHome();
              }}
            >
              <Image
                source={require("./../assets/images/close.png")}
                style={styles.modalHeaderIcon}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={[styles.modalContent]}>
            {/* <View style={[styles.modalContentDetail]}>
              <Text
                style={[
                  colorStyle.darkgrayColor,
                  fontStyle.regular,
                  fontStyle.sizeRegular,
                  styles.modalContentDetailText,
                ]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ultricies purus varius quam lobortis, sed ultricies
                mauris luctus. Fusce sit amet accumsan lorem. Integer vitae est
                placerat, auctor magna et, feugiat metus.
              </Text>
            </View> */}
            <View style={[styles.modalContentMessage]}>
              <Text
                style={[
                  colorStyle.linkColor,
                  fontStyle.semibold,
                  fontStyle.sizeMedium,
                  styles.modalContentMessageText,
                ]}
              >
                Your Order Has Been Placed successfully
              </Text>
            </View>
            <View style={[styles.modalContentImg]}>
              <Image
                source={require("../assets/images/thumb.png")}
                style={[styles.modalContentImgItem]}
              />
            </View>
            <View style={formStyle.formButton}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.gotoHome();
                }}
              >
                <Text
                  style={[
                    fontStyle.regular,
                    fontStyle.sizeMedium,
                    colorStyle.textWhiteColor,
                    colorStyle.linkBorderColor,
                    colorStyle.backColor,
                    buttonStyle.defaultRadius,
                    styles.modelCloseBtn,
                  ]}
                >
                  Continue
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainerPopup: {
    position: "relative",
  },
  modalHeader: {
    height: 50,
    alignItems: "center",
  },
  modalHeaderText: {
    lineHeight: 50,
    textTransform: "uppercase",
  },
  modalHeaderIcon: {
    position: "absolute",
    right: -10,
    top: -6,
    width: 25,
    height: 25,
    zIndex: 10000,
  },
  modalContent: {
    padding: 15,
  },
  modalContentDetailText: {
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  modalContentMessageText: {
    marginBottom: 10,
    textAlign: "center",
  },
  modalContentImg: {
    alignItems: "center",
    marginBottom: 20,
  },
  modalContentImgItem: {
    width: 100,
    resizeMode: "contain",
  },
  modelCloseBtn: {
    textTransform: "uppercase",
    marginBottom: 15,
    width: "100%",
  },
});
