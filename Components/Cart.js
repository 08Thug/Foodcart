import React, { Component } from "react";
// import Base from "./Base"
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableHighlight,
    FlatList,ImageBackground,Modal
  } from "react-native";
  import font from './../Styles/font'
import color from './../Styles/color'
import button from './../Styles/button'
import box from './../Styles/box'
import Session from "../Config/Session"
import { connect } from "react-redux";
import {actionfetchCart} from "../Redux/actions/refreshAction"
import { Navigation } from "react-native-navigation";
import ThankU from "./../Modals/ThankU"
// import { Calendar } from 'react-native-calendars';
const extractKey = ({ id }) => id;

//   export default class Cart extends React.Component {
    class Cart extends Component {

    constructor(props) {
      super(props);
      (this.state = {
          showmore:false,load:false,modalVisible:false,
          CartList:[],
          MyCart:[],
          CartChages:[],
          enlarge:false,update:false,changed:false
      })
      this.Degrade= false;
      this.iterate=false;
      this.onClose = this.onClose.bind(this);
      
    }
    UNSAFE_componentWillMount()
    {
        // this.setState({CartChages:this.props.Data})
        // this.state.CartChages.push(...this.props.Data.map(obj => copy(obj)));
        console.log("PAss props",this.props.Data)

        if(this.props.Data.length > 2)
        {
            for(let i = 0;i<2;i++)
            this.state.CartList.push(this.props.Data[i])
            this.setState({showmore:true,load:true})
            console.log("cartlist value",this.state.CartList)
        }
        else
        {
            for(let i = 0;i<2;i++)
            this.state.CartList.push(this.props.Data[i])
            this.setState({showmore:false,load:true})

            console.log("CArt is less two",this.state.CartList)
        }
        const newArray = this.props.Data.map(obj => ({...obj}));
        for(let m=0;m<newArray.length;m++)
            {
            this.state.MyCart.push(newArray[m])
                
            }
    }
    componentWillUnmount ()
    {
        if(this.state.changed == true)
        {
            this.setState({changed:false})
            // if(this.state.enlarge==tr)
            // for(var k = 0;k<this.state.MyCart.length;k++)
            // {
            //     if(this.state.CartList[k].menuIds == this.state.MyCart[k].menuIds)
            //     {
            //         this.state.MyCart[k]=this.state.CartList[k]
            //     }
            // }
            // console.log("Check",this.state.MyCart,this.state.CartList)
        Session._setCart(this.state.MyCart)

        this.props.actionfetchCart("CART_UPDATED");

        }
        console.log("called while leaving")
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Cart props", nextProps.canRefresh);
        if (
          nextProps.canRefresh === "CART_UPDATED"
        ) {
           
        console.log("redux updated in CArt")
        }
      }
      componentDidMount() {
        this.props.actionfetchCart("");
      }

      onClose = () => {
        this.setState({
          modalVisible: false,
        });
      };
      editOrder = (Data,action, menuId, price) =>{
        let orderList = this.state.MyCart.slice()
        let customorder = this.state.CartList.slice()
        console.log("Orderlist",Data)
       

        if (action == "+") {
            // if (item.length > 0) {
                let newQty = Data.Quantity + 1
                Data.Quantity = newQty
                Data.total = Data.Quantity * price
            console.log("value updated 11",newQty)
            for(let j = 0;j<this.state.MyCart.length;j++)
            {
                if(this.state.MyCart[j].id == Data.id)
                {
                    this.state.MyCart[j] = Data
                    console.log("Checking",this.state.MyCart[j])
                }
            }
            for(let j = 0;j<this.state.CartList.length;j++)
            {
                if(this.state.CartList[j].id == Data.id)
                {
                    this.state.CartList[j] = Data
                    console.log("Checking",this.state.CartList[j])
                }
            }
            
            this.setState({MyCart:orderList,CartList:customorder})
            console.log("value updated 1+",this.state.MyCart,this.state.CartList)
            // this.editOrders(Data,"+", menuId, price)       

        } else {
          
            let newQty = Data.Quantity - 1
            Data.Quantity = newQty
            Data.total = Data.Quantity * price
        console.log("value updated 11 --",newQty)
        for(let j = 0;j<this.state.MyCart.length;j++)
        {
            if(this.state.MyCart[j].id == Data.id)
            {
                this.state.MyCart[j] = Data
                console.log("Checking ---",this.state.MyCart[j])
            }
        }
       
        for(let j = 0;j<this.state.CartList.length;j++)
            {
                if(this.state.CartList[j].id == Data.id)
                {
                    this.state.CartList[j] = Data
                    console.log("Checking",this.state.CartList[j])
                }
            }
            this.setState({MyCart:orderList,CartList:customorder})
            console.log("value updated 1---",orderList)
        }
    // this.editOrders(Data,"-", menuId, price)       

    }


    renderItem = ({ item, i }) => {
        console.log("render data")
        return (
            <View style={[styles.TotalValueStyle]}>
                <View style={[styles.flexStyle]}>  
                    <Text style={[font.bold, font.sizeMedium, color.profitColor,]}>{item.title}</Text> 
                </View>
                <View style={[styles.flexStyle,]}>
                    <Text style={[font.semibold, font.sizeRegular, color.headerText, styles.centerStyles]}>{item.subcontent}</Text>
                    {/* {item.menuId != undefined||item.menuId != "" &&
                    ( */}
                    <View style={[button.AddButton, color.linkBorderColor, color.whiteBackground, styles.Addstyle, styles.centerStyles,{width:"30%",height:25,flexDirection:"row",}]}>
                        <TouchableOpacity
                        style={{width:"40%",height:30,alignItems:"center",justifyContent:"center",alignSelf:"center",right:10,}}
                        onPress={() => { 
                            this.editOrder(item,"-", item.id, item.totalPrice)             
                            console.log("value pressed in -",item.title)
                            this.setState({changed:true})  }}>
                                <Image source={require("./../assets/images/minus.png")}
                                style={styles.staricon}></Image>
                        </TouchableOpacity>
                    <View
                        style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
                        <Text>{item.Quantity}</Text>
                        {/* {this.getOrderQty(item.id)} */}
                    </View>
                        <TouchableOpacity
                            style={{width:"40%",height:30,alignItems:"center",justifyContent:"center",alignSelf:"center",left:10}}
                            onPress={() => { 
                                this.editOrder(item,"+", item.id, item.totalPrice)   
                                // this.props.editOrder(item,"+",item.menuIds,item.totalPrice)
                                // this.props.actionfetchCart("CART_UPDATED");

                                console.log("value pressed in +"),this.setState({changed:true}) }}>
                            <Image source={require("./../assets/images/pluss.png")}
                            style={styles.staricon}></Image>
                        </TouchableOpacity>

                    </View>
                     {/* )}  */}
                   
                </View>
                <View style={[styles.flexStyle, styles.smallTextStyles,color.borderBottomColor,]}>
                    <Text style={[font.semibold, font.sizeRegular, color.headerText, styles.paddingStyle,styles.centerStyles]}>{item.totalPrice}</Text>
                    {/* <Text style={[font.semibold, font.sizeRegular, color.headerText, styles.paddingStyle, styles.centerStyles]}>{item.price}</Text> */}
                </View>
            </View>
        );
    };
    render() {
        return (
            <>
                <SafeAreaView > 
                    <ScrollView>
                        <View style={[styles.imageContent, box.wealthShadow, color.shadowBorderColor, color.shadowColor]} >
                            <ImageBackground style={[styles.portraitImage,{backgroundColor:"#001a33"}]}  >
                            
                            <View style={[{flexDirection: "row",width:"100%"}]}>
                            <TouchableOpacity
                onPress={() => {
                    console.log("Back arrow pressed")
                  Navigation.pop(this.props.componentId);
                }}
              >
                                    <View style={[{width:30,top:10,left:10,height:35}]}> 
                            <Image
                                    source={require("./../assets/images/back.png")}
                                    style={styles.rightArrow}>
                                        
                                    </Image>
                                    </View>
                                    </TouchableOpacity>
                                    </View>
                                <View style={[styles.payment_content,styles.centerStyles,{backgroundColor:"white",padding:15,paddingLeft:35,paddingRight:35}]}>
                                    <Text style={[font.semibold, font.sizeSmall, color.grayColor, font.textSpacing]}>Total Cost</Text>
                                    {/* <TouchableHighlight style={[button.dollarItem, styles.centerStyles, color.WhiteBorder, color.dollarColor]}> */}
                                        <Text style={[font.semibold, font.sizeLarge, color.blackColor, font.textSpacing,{paddingTop:5}]}>€{this.props.TotalPrice}</Text>
                                    {/* </TouchableHighlight> */}
                                </View>
                            </ImageBackground>

                            <View style={[styles.addContent,]}>
                               
                                <View
                                    style={[ styles.Addstyle, styles.alignStyles]}>
                                  
                                        <View style={{ flexDirection: "row" }}>
                                            <Text
                                                style={[
                                                    font.regular, font.sizeMedium, color.blackColor, styles.Addstyle,]} >Review Orders
                                                </Text>
                                        </View>
                                    
                                </View>

                                <View>
                                    <FlatList
                                        data={this.state.MyCart}
                                        renderItem={this.renderItem}
                                        keyExtractor={extractKey}
                                    />

                                </View>

                            </View>{this.state.showmore == true && (
                            <TouchableOpacity
                                        onPress={() => { 
                                            if(this.state.enlarge == false)
                                            this.setState({enlarge:true,load:false})
                                            else
                                            this.setState({enlarge:false,load:true})

                                         }}>
                            <View style={[styles.showMoreStyles,{bottom:0,width:"100%",paddingBottom:20}]}>
                                <Text style={[{textDecorationLine: 'underline'}]}>
                                   {this.state.enlarge == true? "ShowLess":"ShowMore"}
                                </Text>
                            </View>
                            </TouchableOpacity>)}
                            <TouchableOpacity
                                        onPress={() => {  this.setState({modalVisible:true}) }}>
                            <View style={[color.buttonclr,{bottom:0,width:"100%",padding:8}]}>
                            
                                <Text style={[font.bold, font.sizeLarge, color.textWhiteColor, font.textSpacing,{textAlign:"center"}]}>

                                          {'  '}Place Order</Text>
                                   </View>  
                                   </TouchableOpacity>
                        </View>
                       
                    </ScrollView>
                    <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.onClose();
            }}
          // onDismiss={() => this.gotoLogin()}
          >
            <ThankU
              onCancel={this.onClose}
            />
          </Modal>
                </SafeAreaView> 
            </>
        )
    }
}

// function which takes state object as input and asks to return it as props to our component
function mapStateToProps(state) {
    console.log("state12: ", state);
    return {
      canRefresh: state.canRefresh.refresher,
    };
  }
  
  export default connect(
    mapStateToProps,
    { actionfetchCart }
  )(Cart);


const styles = StyleSheet.create({
    content: { margin: 10, },
    flexStyle: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    portraitImage: { width: '100%', height: 210, resizeMode: 'contain' },
    imageContent: { margin: 10, position: 'relative' },
    addContent: { marginTop: 15, marginBottom: 15 },
    payment_content: { position: 'absolute', top: 60, },
    centerStyles: { alignSelf: 'center', textAlign: 'center', alignItems: 'center', textAlign: 'center', justifyContent: 'center' },
    alignStyles: { alignSelf: 'flex-start', alignItems: 'flex-start', textAlign: 'left', justifyContent: 'flex-start' },
    showMoreStyles: { alignSelf: 'flex-end', alignItems: 'flex-end', textAlign: 'right', justifyContent: 'flex-end',right:10, },

    paddingStyle: { paddingBottom: 10, },
    plusIcon: { width: 15, height: 15, marginTop: 3, marginRight: 3 },
    TotalValueStyle: { marginTop: 20, marginLeft: 15, marginRight: 15 },
    smallTextStyle: { marginLeft: 10, marginTop: 15, borderBottomWidth: 1,  },
    Addstyle: { marginTop: 3 },
    searchIcon: { width: 20, height: 20, position: "absolute", top: 11, right: 8, },
    rightArrow: { 
        width: 20, height: 20,resizeMode:"contain"
 },
 carticon: { 
    width: 20, height: 20,resizeMode:"contain"
},
staricon: { 
    width: 10, height: 10,resizeMode:"contain"
},
})
          
          