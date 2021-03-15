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
var newarr;

//   export default class Home extends React.Component {
    class Home extends Component {
    constructor(props) {
      super(props);
      (this.state = {
        modalVisible:false,
        cartCount:0,CartArray:[],TotalMoney:0,choose:0,mine:[{
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
          Starters:[{
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
            subcontent: "Comes under MainCourse",
            Quantity:0,
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
            totalPrice: "7",
            subcontent: "Comes under MainCourse",Quantity:0,
            total:0,
            
        },],
          Desserts:[{
            id: 0,
            menuId:6,
            title: "Brownie",
            totalPrice: "7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
    
        },
        {
            id: 1,
            menuId:7,
            title: "Cupcake",
            totalPrice: "7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
        },
        {
            id: 2,
            menuId:8,
            title: "Donut",
            totalPrice: "7",
            subcontent: "Comes under Desserts",Quantity:0,
            total:0,
        },],
          Drinks:[{
            id: 0,
            menuId:9,
            title: "Canberry",
            totalPrice: "7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
    
        },
        {
            id: 1,
            menuId:10,
            title: "KF",
            totalPrice: "7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
        },
        {
            id: 2,
            menuId:11,
            title: "Lemon",
            totalPrice: "7",
            subcontent: "Comes under Drink",Quantity:0,
            total:0,
        },],
        menu:[
            {label:"Starters",value:0},
            {label:"MainCourse",value:1},
            {label:"Dessert",value:2},
            {label:"Drink",value:3},
        ],
        menulabel:"Starters",menucard:[],update:false
      })
      this.setOrderItems = [
        {label:"Starters",value:0},
        {label:"MainCourse",value:1},
        {label:"Dessert",value:2},
        {label:"Drink",value:3},
    ] 
      this.onCloseModel = this.onCloseModel.bind(this);
    this.onOKClicked = this.onOKClicked.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.iterate = false;
    this.Degrade = false
    }
    UNSAFE_componentWillMount()
    {
        this.setState({menucard:this.setOrderItems
    })
        console.log("WILL MOUNT",this.state.menucard)
    }
    onOKClicked = (item) => {
        this.setState({menucard:""})
        if(item == 0)
        {
            this.setState({menulabel:"Starters",modalVisible:false,choose:0})
            this.state.menu = this.state.Starters
            console.log("okselected",this.state.CartArray)
        }
        else if(item == 1)
        {
            this.setState({menulabel:"MainCourse",modalVisible:false,choose:1})
        }
        else if(item ==2)
        {
            this.setState({menulabel:"Dessert",modalVisible:false,choose:2})
        }
        else{
        this.setState({menulabel:"Drinks",modalVisible:false,choose:3})
        }
      };
    
      onCloseModel = () => {
        this.setState({
          modalVisible: false,
        });
      };
    
   
    editOrder = (Data,action, menuId, price) =>{
        let orderList = this.state.Starters.slice()
        console.log("Orderlist",Data)
       

        if (action == "+") {
            // if (item.length > 0) {
                let newQty = Data.Quantity + 1
                Data.Quantity = newQty
                Data.total = Data.Quantity * price
            console.log("value updated 11",newQty)
            for(let j = 0;j<this.state.Starters.length;j++)
            {
                if(this.state.Starters[j].id == Data.id)
                {
                    this.state.Starters[j] = Data
                    console.log("Checking",this.state.Starters[j])
                }
            }
            if(this.state.CartArray.length == 0)
            {
            this.state.CartArray.push(Data)
            }
            else{
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pusheds",typeof Data.menuIds,typeof this.state.CartArray[i].menuIds)

                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.iterate = true

                        }
                    
                        else{
                            this.iterate = false
                            console.log("same value passeds",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                }
                console.log("iterate boolean",this.iterate)
                if(this.iterate ==true )
                this.state.CartArray.push(Data)
                var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
                console.log("value updated 1+",this.state.CartArray,this.state.CartArray.length,Count,Total)
            
            this.setState({Starters:orderList})
            console.log("value updated 1+",this.state.Starters)
            // this.editOrders(Data,"+", menuId, price)       

        } else {
          
            let newQty = Data.Quantity - 1
            Data.Quantity = newQty
            Data.total = Data.Quantity * price
        console.log("value updated 11 --",newQty)
        for(let j = 0;j<this.state.Starters.length;j++)
        {
            if(this.state.Starters[j].id == Data.id)
            {
                this.state.Starters[j] = Data
                console.log("Checking ---",this.state.Starters[j])
            }
        }
        if(this.state.CartArray.length != 0 )
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pushed",Data.menuIds,this.state.CartArray.length)
                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.Degrade = true

                        }

                        else{
                            this.Degrade = false
                            console.log("same value passed",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                    console.log("Degrade boolean",this.iterate)
                    if(this.Degrade ==true )
                    this.state.CartArray.push(Data)
                    var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
            console.log("value updated 1-",this.state.CartArray,Count,Total)
            this.setState({Starters:orderList})
            console.log("value updated 1---",orderList)
        }

    }
    editOrder1 = (Data,action, menuId, price) =>{
        let orderList = this.state.MainCourse.slice()
        console.log("Orderlist",Data)
       

        if (action == "+") {
            // if (item.length > 0) {
                let newQty = Data.Quantity + 1
                Data.Quantity = newQty
                Data.total = Data.Quantity * price
            console.log("value updated 11",newQty)
            for(let j = 0;j<this.state.MainCourse.length;j++)
            {
                if(this.state.MainCourse[j].id == Data.id)
                {
                    this.state.MainCourse[j] = Data
                    console.log("Checking",this.state.MainCourse[j])
                }
            }
            if(this.state.CartArray.length == 0)
            {
            this.state.CartArray.push(Data)
            }
            else{
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pusheds",typeof Data.menuIds,typeof this.state.CartArray[i].menuIds)

                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.iterate = true

                        }
                    
                        else{
                            this.iterate = false
                            console.log("same value passeds",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                }
                console.log("iterate boolean",this.iterate)
                if(this.iterate ==true )
                this.state.CartArray.push(Data)
                var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
                console.log("value updated 1+",this.state.CartArray,this.state.CartArray.length,Count,Total)
            
            this.setState({MainCourse:orderList})
            console.log("value updated 1+",this.state.MainCourse)
            // this.editOrders(Data,"+", menuId, price)       

        } else {
          
            let newQty = Data.Quantity - 1
            Data.Quantity = newQty
            Data.total = Data.Quantity * price
        console.log("value updated 11 --",newQty)
        for(let j = 0;j<this.state.MainCourse.length;j++)
        {
            if(this.state.MainCourse[j].id == Data.id)
            {
                this.state.MainCourse[j] = Data
                console.log("Checking ---",this.state.MainCourse[j])
            }
        }
        if(this.state.CartArray.length != 0 )
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pushed",Data.menuIds,this.state.CartArray.length)
                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.Degrade = true

                        }

                        else{
                            this.Degrade = false
                            console.log("same value passed",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                    console.log("Degrade boolean",this.iterate)
                    if(this.Degrade ==true )
                    this.state.CartArray.push(Data)
                    var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
            console.log("value updated 1-",this.state.CartArray,Count,Total)
            this.setState({MainCourse:orderList})
            console.log("value updated 1---",orderList)
        }

    }
    editOrder2 = (Data,action, menuId, price) =>{
        let orderList = this.state.Desserts.slice()
        console.log("Orderlist",Data)
       

        if (action == "+") {
            // if (item.length > 0) {
                let newQty = Data.Quantity + 1
                Data.Quantity = newQty
                Data.total = Data.Quantity * price
            console.log("value updated 11",newQty)
            for(let j = 0;j<this.state.Desserts.length;j++)
            {
                if(this.state.Desserts[j].id == Data.id)
                {
                    this.state.Desserts[j] = Data
                    console.log("Checking",this.state.Desserts[j])
                }
            }
            if(this.state.CartArray.length == 0)
            {
            this.state.CartArray.push(Data)
            }
            else{
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pusheds",typeof Data.menuIds,typeof this.state.CartArray[i].menuIds)

                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.iterate = true

                        }
                    
                        else{
                            this.iterate = false
                            console.log("same value passeds",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                }
                console.log("iterate boolean",this.iterate)
                if(this.iterate ==true )
                this.state.CartArray.push(Data)
                var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
                console.log("value updated 1+",this.state.CartArray,this.state.CartArray.length,Count,Total)
            
            this.setState({Desserts:orderList})
            console.log("value updated 1+",this.state.Desserts)
            // this.editOrders(Data,"+", menuId, price)       

        } else {
          
            let newQty = Data.Quantity - 1
            Data.Quantity = newQty
            Data.total = Data.Quantity * price
        console.log("value updated 11 --",newQty)
        for(let j = 0;j<this.state.Desserts.length;j++)
        {
            if(this.state.Desserts[j].id == Data.id)
            {
                this.state.Desserts[j] = Data
                console.log("Checking ---",this.state.Desserts[j])
            }
        }
        if(this.state.CartArray.length != 0 )
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pushed",Data.menuIds,this.state.CartArray.length)
                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.Degrade = true

                        }

                        else{
                            this.Degrade = false
                            console.log("same value passed",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                    console.log("Degrade boolean",this.iterate)
                    if(this.Degrade ==true )
                    this.state.CartArray.push(Data)
                    var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
            console.log("value updated 1-",this.state.CartArray,Count,Total)
            this.setState({Desserts:orderList})
            console.log("value updated 1---",orderList)
        }

    }
    editOrder3 = (Data,action, menuId, price) =>{
        let orderList = this.state.Drinks.slice()
        console.log("Orderlist",Data)
       

        if (action == "+") {
            // if (item.length > 0) {
                let newQty = Data.Quantity + 1
                Data.Quantity = newQty
                Data.total = Data.Quantity * price
            console.log("value updated 11",newQty)
            for(let j = 0;j<this.state.Drinks.length;j++)
            {
                if(this.state.Drinks[j].id == Data.id)
                {
                    this.state.Drinks[j] = Data
                    console.log("Checking",this.state.Drinks[j])
                }
            }
            if(this.state.CartArray.length == 0)
            {
            this.state.CartArray.push(Data)
            }
            else{
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pusheds",typeof Data.menuIds,typeof this.state.CartArray[i].menuIds)

                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.iterate = true

                        }
                    
                        else{
                            this.iterate = false
                            console.log("same value passeds",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                }
                console.log("iterate boolean",this.iterate)
                if(this.iterate ==true )
                this.state.CartArray.push(Data)
                var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
                console.log("value updated 1+",this.state.CartArray,this.state.CartArray.length,Count,Total)
            
            this.setState({Drinks:orderList})
            console.log("value updated 1+",this.state.Drinks)
            // this.editOrders(Data,"+", menuId, price)       

        } else {
          
            let newQty = Data.Quantity - 1
            Data.Quantity = newQty
            Data.total = Data.Quantity * price
        console.log("value updated 11 --",newQty)
        for(let j = 0;j<this.state.Drinks.length;j++)
        {
            if(this.state.Drinks[j].id == Data.id)
            {
                this.state.Drinks[j] = Data
                console.log("Checking ---",this.state.Drinks[j])
            }
        }
        if(this.state.CartArray.length != 0 )
                    for(var i=0;i<this.state.CartArray.length;i++){
                        // if
                        if(this.state.CartArray[i].menuIds !== Data.menuIds  ){
                            console.log("value pushed",Data.menuIds,this.state.CartArray.length)
                        // this.state.CartArray.push(Data)
                        // this.setState({iterate:true})
                        this.Degrade = true

                        }

                        else{
                            this.Degrade = false
                            console.log("same value passed",Data.menuIds,this.state.CartArray.length)
                        }
                    }
                    console.log("Degrade boolean",this.iterate)
                    if(this.Degrade ==true )
                    this.state.CartArray.push(Data)
                    var Count = 0;
                var Total =0;
                for(var k=0;k<this.state.CartArray.length;k++){
                    Count +=this.state.CartArray[k].Quantity
                    Total +=this.state.CartArray[k].total
                }
                this.setState({cartCount:Count,TotalMoney:Total})
            console.log("value updated 1-",this.state.CartArray,Count,Total)
            this.setState({Drinks:orderList})
            console.log("value updated 1---",orderList)
        }

    }

      UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Cart props", nextProps.canRefresh);
        if (
          nextProps.canRefresh === "CART_UPDATED"
        ) {
        console.log("redux updated")

            this.datupdate();
            this.setState({})
        }
      }
    //   componentWillUpdate()
    //   {
    //       console.log("updatedd")
         
    //   }
    //   shouldComponentUpdate(prevProps,prevState)
    //   {
//         console.log("data from session22", typeof newarr)
//         console.log("data from session23", newarr[0],typeof this.state.CartArray)
//         this.setState({CartArray:[]})
//         for(let i =0 ;i<newarr.length;i++)
//         {
//             if(newarr[i].menuIds == this.state.Starters[i].menuIds)
//             {
//                 console.log("comes under start",newarr[i])
//                 this.state.Starters[i] = newarr[i]
//             }
//             else if(newarr[i].subcontent == "Comes under MainCourse")
//             {
//               this.state.MainCourse.push(newarr[i])
//              }
//             else if(newarr[i].subcontent == "Comes under Desserts")
//             {
//               this.state.Desserts.push(newarr[i])
//             }
//             else if(newarr[i].subcontent == "Comes under Drink")
//             {
//               this.state.Drinks.push(newarr[i])
//             }
//             this.state.CartArray.push(newarr[i])
//           //   for(let j =0 ;j<myarray.length:)
// this.setState({})
//         }
//         console.log("after applyin",typeof newarr,newarr,this.state.Starters)
    //       return true
    //   }
      componentDidMount()
      {
          this.props.actionfetchCart("")
          console.log("rendering done")
      }
      datupdate = async() => {
          var myarray=await Session._getCart()
          console.log("data from session",JSON.parse(myarray)
          )
           newarr=JSON.parse(myarray)
          this.rerender()
        // try {
        //     await AsyncStorage.clear()
        //     alert('Storage successfully cleared!')
        //   } catch (e) {
        //     alert('Failed to clear the async storage.')
        //   }
      }
      rerender()
      {
        console.log("data from session22", typeof newarr)
        console.log("data from session23", newarr[0],typeof this.state.CartArray)
        this.setState({CartArray:[],update:true})

        for(let i =0 ;i<newarr.length;i++)
        {
            if(newarr[i].menuIds == this.state.Starters[i].menuIds)
            {
                console.log("comes under start",newarr[i])
                this.state.Starters[i] = newarr[i]
            }
            else if(newarr[i].menuIds == this.state.MainCourse[i].menuIds)
            {
              this.state.MainCourse[i] = newarr[i]
             }
            else if(newarr[i].menuIds == this.state.Desserts[i].menuIds)
            {
              this.state.Desserts[i] = newarr[i]
            }
            else if(newarr[i].menuIds == this.state.Drinks[i].menuIds)
            {
              this.state.Drinks[i] = newarr[i]
            }
            // this.state.CartArray.push(newarr[i])
          //   for(let j =0 ;j<myarray.length:)
        }
this.setState({CartArray:newarr})

        console.log("after applyin",this.state.Starters,this.state.update)
        var copiedStarter = this.state.Starters.map(obj => ({...obj}));
        var copiedMainCourse = this.state.MainCourse.map(obj => ({...obj}));
        var copiedDesserts = this.state.Desserts.map(obj => ({...obj}));
        var copiedDrinks = this.state.Drinks.map(obj => ({...obj}));
        // console.log("Vlued vangika",copiedarr)
        this.setState({Starters:[],MainCourse:[],Desserts:[],Drinks:[]})
        this.setState({Starters:copiedStarter,MainCourse:copiedMainCourse,Desserts:copiedDesserts,Drinks:copiedDrinks})
        // for(let g = 0;g<copiedarr.length;g++)
        // {
        //     this.state.Starters.push(copiedarr[g])
        // }
        console.log("Vlued vangika",this.state.Starters)

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
            name: "Cart",
            passProps: {
              Data:this.state.CartArray,
              TotalPrice:this.state.TotalMoney,

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
          console.log("will render",item)
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
                            if(item.subcontent=="Comes under Starters")
                            this.editOrder(item,"-", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under MainCourse")
                            this.editOrder1(item,"-", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under Desserts")
                            this.editOrder2(item,"-", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under Drink")
                            this.editOrder3(item,"-", item.subcontent, item.totalPrice)             
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
                                // this.editOrder(item,"+", item.subcontent, item.totalPrice)
                                if(item.subcontent=="Comes under Starters")
                            this.editOrder(item,"+", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under MainCourse")
                            this.editOrder1(item,"+", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under Desserts")
                            this.editOrder2(item,"+", item.subcontent, item.totalPrice)
                            if(item.subcontent=="Comes under Drink")
                            this.editOrder3(item,"+", item.subcontent, item.totalPrice)     
                                console.log("value pressed in +") }}>
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
        console.log("Hello")
        return (
            <>
                <SafeAreaView > 
                {/* <ScrollView > */}
                    {/* 
                    style={[{height:"45%"}]} style={[{backgroundColor:"red"}]}*/}
                        <View style={[styles.imageContent, box.wealthShadow, color.shadowBorderColor, color.shadowColor,{height:"100%"}]} >
                            <View > 
                            <ImageBackground style={[styles.portraitImage]} source={require('./../assets/images/nasi-lemak.jpg')} >
                                <View style={[{flexDirection: "row",width:"100%"}]}>
                                    <View style={[{width:"80%",top:10,left:10}]}> 
                            <Image
                                    source={require("./../assets/images/back.png")}
                                    style={styles.rightArrow}>
                                        
                                    </Image>
                                    </View>
                                    <View style={[{width:"10%",top:10,left:0}]}>

                                    <Image
                                    source={require("./../assets/images/share.png")}
                                    style={styles.rightArrow1}>
                                        
                                    </Image>
                                    </View>
                                    <View style={[{width:"10%",top:10}]}>

                                    <Image
                                    source={require("./../assets/images/info.png")}
                                    style={styles.rightArrow2}>
                                        
                                    </Image>
                                    </View>
                                    </View>
                                <View style={[styles.payment_content,styles.centerStyles,{backgroundColor:"white",width:"90%",paddingTop:25,paddingBottom:25,top:100}]}>
                                    
                                    <Text style={[font.semibold, font.sizeLarge, color.blackColor, font.textSpacing]}>INKA-RESTAURANT</Text>
                                    
                                    <Text style={[font.semibold, font.sizeSmall, color.grayColor, font.textSpacing,{marginTop:5}]} >
                                    <Image source={require("./../assets/images/star.png")} style={styles.staricon}>    
                                    </Image>
                                        5.0(200)| All days : 09.00 AM - 06.00 PM</Text>
                                    
                                    <Text style={[font.semibold, font.sizeSmall, color.grayColor, font.textSpacing,{marginTop:5}]}>
                                    <Image source={require("./../assets/images/phone-call.png")} style={styles.phoneicon}>    
                                    </Image>
                                        Reach us at :9854562142</Text>

                                    {/* <TouchableOpacity
                                        onPress={() => {  this.openCart(); }}> */}
                                        <View style={[color.buttonclr ,{ flexDirection: "row"},{marginTop:5,borderRadius:5}]}>
                                            <Text
                                                style={[
                                                    font.regular, font.sizeVeryRegular, color.textWhiteColor, styles.Addstyle]} > {' '}BOOK A TABLE {' '}
                                                </Text>
                                        </View>
                                    {/* </TouchableOpacity> */}
                                </View>
                            </ImageBackground>
                            </View>
                            <View style={[styles.addContent,{paddingTop:"20%"}
                                // ,{height:"55%"}
                                ]}>
                                    <Text style={[font.bold, font.sizeLarge, color.blackColor, font.textSpacing,{left:10}]}>
                                    {this.state.menulabel}
                                </Text>
                                <View >
                                    <FlatList
                                        data={this.state.choose==0?this.state.Starters:this.state.choose==1?this.state.MainCourse:this.state.choose==2?this.state.Desserts:this.state.Drinks}
                                        renderItem={this.renderItem}
                                        keyExtractor={extractKey}
                                    />
                                    
                                </View>

                            </View>
                            <View style={[{position:"absolute",bottom:"12%",width:"100%",alignItems:"center"}]}>
                            <TouchableOpacity
                                        onPress={() => { 
                                            this.setState({modalVisible:true})
                                            console.log("value pressed in MEnu") }}>
                                <View style={[ {paddingTop:2,paddingBottom:2,alignItems:"center",justifyContent:"center",backgroundColor:"#ffa64d"}]}>
                                    
                                <Text style={[font.bold, font.sizeRegular, color.textWhiteColor, font.textSpacing,{textAlign:"center",alignItems:"center",justifyContent:"center"}]}>
                                <Image source={require("./../assets/images/menu.png")} style={styles.menuicon}>
                                        </Image> 
                                    MENU{' '}
                                </Text>
                                </View>
                                </TouchableOpacity>
                                
                            </View>
                           
                            <View style={[color.buttonclr,{position:"absolute",bottom:28,height:38,width:"100%",alignItems:"center"}]}>

                            
                            {/* <View style={[color.buttonclr,{bottom:0,width:"100%",padding:8}]}> */}
                            <TouchableOpacity
                                        onPress={() => {  console.log("cart pressed")
                                        this.openCart(); 
                                    }}
                                        >
                                <Text style={[font.bold, font.sizeRegular, color.textWhiteColor, font.textSpacing,{textAlign:"center"}]}>
                                <Image source={require("./../assets/images/cart.png")} style={styles.carticon}>             
                                        </Image> 
                                          {'  '}VIEW CART({this.state.cartCount} items)</Text>
                                   </TouchableOpacity>

                            
                                   {/* </View>   */}
                                   </View>

                        </View>
                        
                    {/* </ScrollView> */}
                    <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.onCloseModel();
            }}
          // onDismiss={() => this.gotoLogin()}
          >
            <Category
              onCancel={this.onCloseModel}
              onOk={this.onOKClicked}
              data={this.state.menu}
            />
          </Modal>
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
          
          