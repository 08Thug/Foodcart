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
    Modal,
    FlatList,ImageBackground
  } from "react-native";
  import font from './../Styles/font'
import color from './../Styles/color'
import button from './../Styles/button'
import box from './../Styles/box'
import { Navigation } from "react-native-navigation";
import Category from "../Modals/Category"
import { connect } from "react-redux";
import {actionfetchCart} from "../Redux/actions/refreshAction"
import Session from "../Config/Session"
// import { Calendar } from 'react-native-calendars';
const extractKey = ({ id }) => id;
//   export default class Home extends React.Component {
    class Home extends Component {
    constructor(props) {
      super(props);
      (this.state = {
        modalVisible:false,
        cartCount:0,CartArray:[],TotalMoney:0,
        MyCart:[{
            id: 0,
            menuIds:0,
            title: "Fried Chicken",
            totalPrice: "7",
            subcontent: "Comes under Starters",
            Quantity:0,
            total:0,
            
    
        },
        {
            id: 1,
            menuIds:1,
            title: "Mutton",
            totalPrice: "7",
            subcontent: "Comes under Starters",
            Quantity:0,
            total:0,
            

        },
        {
            id: 2,
            menuIds:2,
            title: "Fish",
            totalPrice: "7",
            subcontent: "Comes under Starters",
            Quantity:0,
            total:0,
            

        },],
          MainCourse:[{
            id: 0,
            menuId:3,
            title: "Briyani",
            totalPrice: "€7",
            subcontent: "Comes under MainCourse",Quantity:0,
            total:0,
            
    
        },
        {
            id: 1,
            menuId:4,
            title: "Naan",
            totalPrice: "€7",
            subcontent: "Comes under MainCourse",Quantity:0,
            total:0,
            
        },
        {
            id: 2,
            menuId:5,
            title: "Pulav",
            totalPrice: "€7",
            subcontent: "Comes under MainCourse",Quantity:0,
            total:0,
            
        },],
          Desserts:[{
            id: 0,
            menuId:6,
            title: "Brownie",
            totalPrice: "€7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
    
        },
        {
            id: 1,
            menuId:7,
            title: "Cupcake",
            totalPrice: "€7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
        },
        {
            id: 2,
            menuId:8,
            title: "Donut",
            totalPrice: "€7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
        },],
          Drinks:[{
            id: 0,
            menuId:9,
            title: "Canberry",
            totalPrice: "€7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
    
        },
        {
            id: 1,
            menuId:10,
            title: "KF",
            totalPrice: "€7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
        },
        {
            id: 2,
            menuId:11,
            title: "Lemon",
            totalPrice: "€7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
        },],
        menu:[
            {label:"Starters",value:0},
            {label:"MainCourse",value:1},
            {label:"Dessert",value:2},
            {label:"Drink",value:3},
        ],
        menulabel:"Starters"
      })
      this.setOrderItems = [] 
    //   this.onCloseModel = this.onCloseModel.bind(this);
    // this.onOKClicked = this.onOKClicked.bind(this);
    // this.editOrder = this.editOrder.bind(this);
    this.iterate = false;
    this.Degrade = false
    }

   
    editOrder = (Data,action, menuId, price) =>{
        let orderList = this.state.MyCart.slice()
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
            
            this.setState({MyCart:orderList})
            console.log("value updated 1+",this.state.MyCart)
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
       
            this.setState({MyCart:orderList})
            console.log("value updated 1---",orderList)
        }
    // this.editOrders(Data,"-", menuId, price)       

    }
    // editOrder = (Data,action, menuId, price) =>{
        
       
    //             if (action == "+") {
    //                 let newQty = Data.Quantity + 1
    //                 Data.Quantity = newQty
    //                 Data.total = Data.Quantity * price
    //                 console.log("value updated 11",Data)
                
                    
    //                     for(var i=0;i<this.state.MyCart.length;i++){
    //                         if(this.state.MyCart[i].menuIds == Data.menuIds)
    //                     {
    //                         this.state.MyCart[i] = Data
    //                         console.log("Checking",this.state.MyCart[i])
    //                     }
                           
    //                     }
                   
    //                 var Count = 0;
    //                 var Total =0;
                    
    //                 console.log("value updated 1+",this.state.MyCart,this.state.MyCart.length,Count)
        
    //         } 
    //         else {
    //                     let newQty = Data.Quantity - 1
    //                     Data.Quantity = newQty
    //                     Data.total = Data.Quantity * price
                        
    //                     for(let j=0;j<this.state.MyCart.length;j++){
    //                         if(this.state.MyCart[j].menuIds == Data.menuIds)
    //                     {
    //                         this.state.MyCart[j] = Data
    //                         console.log("Checking",this.state.MyCart[j])
    //                     }
    //                 }
                        
    //             console.log("value updated 1-",this.state.MyCart)
    //         }     
    //         // Session._setCart(this.state.MyCart)
        
    //         }

      UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Cart props", nextProps.canRefresh);
        if (
          nextProps.canRefresh === "CART_UPDATED"
        ) {
        console.log("redux updated")

            // this.datupdate();
        }
      }
      
    //   const clearStorage = async () => {
    //     try {
    //       await AsyncStorage.clear()
    //       alert('Storage successfully cleared!')
    //     } catch (e) {
    //       alert('Failed to clear the async storage.')
    //     }
    //   }

      openCart = () => {
          console.log("the value is ",this.props.componentId)
        Navigation.push(this.props.componentId, {
          component: {
            name: "Cartlist",
            passProps: {
            //   Data:this.state.CartArray,
            //   TotalPrice:this.state.TotalMoney,

            },
            options: {
              bottomTabs: {
                visible: false,
                animate: false,
              },
              animations: {
                push: {
                  waitForRender: true,
                },
              },
            },
          },
        });
      };
      renderItem = ({ item, i }) => {
          console.log("will render")
        return (
            <View style={[styles.TotalValueStyle]}>
                <View style={[styles.flexStyle]}>  
                    <Text style={[font.bold, font.sizeMedium, color.profitColor,]}>{item.title}</Text> 
                </View>
                <View style={[styles.flexStyle,]}>
                    <Text style={[font.semibold, font.sizeRegular, color.headerText, styles.centerStyles]}>{item.subcontent}</Text>
                    {item.menuId != undefined||item.menuId != "" &&
                    (
                    <View style={[button.AddButton, color.linkBorderColor, color.whiteBackground, styles.Addstyle, styles.centerStyles,{width:"30%",height:25,flexDirection:"row",}]}>
                        <TouchableOpacity
                        style={{width:"40%",height:30,alignItems:"center",justifyContent:"center",alignSelf:"center",right:10,backgroundColor:"red"}}
                        onPress={() => { 
                            this.editOrder(item,"-", item.id, item.totalPrice)             
                            console.log("value pressed in -",item.title)
                                    }}>
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
                                console.log("value pressed in +") }}>
                            <Image source={require("./../assets/images/pluss.png")}
                            style={styles.staricon}></Image>
                        </TouchableOpacity>

                    </View>
                     )} 
                   
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
                                            this.setState({enlarge:true})
                                            else
                                            this.setState({enlarge:false})

                                         }}>
                            <View style={[styles.showMoreStyles,{bottom:0,width:"100%",paddingBottom:20}]}>
                                <Text style={[{textDecorationLine: 'underline'}]}>
                                   {this.state.enlarge == true? "ShowLess":"ShowMore"}
                                </Text>
                            </View>
                            </TouchableOpacity>)}
                            <TouchableOpacity
                                        onPress={() => {   }}>
                            <View style={[color.buttonclr,{bottom:0,width:"100%",padding:8}]}>
                            
                                <Text style={[font.bold, font.sizeLarge, color.textWhiteColor, font.textSpacing,{textAlign:"center"}]}>

                                          {'  '}Place Order</Text>
                                   </View>  
                                   </TouchableOpacity>
                        </View>
                       
                    </ScrollView>
                </SafeAreaView> 
            </>
        )
    }
}

// function which takes state object as input and asks to return it as props to our component
function mapStateToProps(state) {
    console.log("state1: ", state);
    return {
      canRefresh: state.canRefresh.refresher,
    };
  }
  
  export default connect(
    mapStateToProps,
    { actionfetchCart }
  )(Home);

const styles = StyleSheet.create({
    content: { margin: 10, },
    flexStyle: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    portraitImage: { width: '100%', height: 160, resizeMode: 'contain' },
    imageContent: { margin: 10, position: 'relative' },
    addContent: { marginTop: 15, marginBottom: 15 },
    payment_content: { position: 'absolute', top: 60, },
    centerStyles: { alignSelf: 'center', textAlign: 'center', alignItems: 'center', textAlign: 'center', justifyContent: 'center' },
    paddingStyle: { paddingBottom: 5, },
    plusIcon: { width: 15, height: 15, marginTop: 3, marginRight: 3 },
    TotalValueStyle: { marginTop: 15, marginLeft: 15, marginRight: 15 },
    smallTextStyles: { borderBottomWidth: 1,  },
    smallTextStyle: { },
    Addstyle: { padding:3 },
    searchIcon: { width: 20, height: 20, position: "absolute", top: 11, right: 8, },
    rightArrow: { 
        width: 20, height: 20,resizeMode:"contain"
 },
 rightArrow1: { 
    width: 20, height: 20,resizeMode:"contain"
},
rightArrow2: { 
    width: 20, height: 20,resizeMode:"contain",
},
phoneicon: { 
    width: 10, height: 10,resizeMode:"contain"
},
staricon: { 
    width: 10, height: 10,resizeMode:"contain"
},
menuicon: { 
    width: 15, height: 15,resizeMode:"contain"
},
carticon: { 
    width: 20, height: 20,resizeMode:"contain"
},

})
          
          