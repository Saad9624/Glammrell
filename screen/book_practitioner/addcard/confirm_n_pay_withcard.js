import React from 'react' ;
import  {View, Text , TextInput , StyleSheet, Platform,Image ,TouchableOpacity , StatusBar, Dimensions,ScrollView} from 'react-native' ;
import * as Font from 'expo-font'; 

import Modal from 'react-native-modal';


export default class confirm_n_pay_withcard extends React.Component{

    static navigationOptions ={
        header: null ,
        gesturesEnabled: false,

    }

    state={
        visibleModal: null,
        fontLoaded: false,
    }
  
   async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../../../assets/fonts/avlight.ttf'),
      });

      await Font.loadAsync({
        'avbold': require('./../../../assets/fonts/avbold.ttf'),
      });

    //   await Font.loadAsync({
    //     'avlight': require('./../../assets/fonts/avlight.ttf'),
    //   });
  
      this.setState({ fontLoaded: true });
      
    }

  

    render(){
        return(
            <View style={{flex:1}}>
            
                        <View>
                            
                                        <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                        <StatusBar hidden={false} />
                                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                        <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15 }}>
                                                <TouchableOpacity 
                                                                onPress={() => this.props.navigation.goBack()}
                                                                >

                                                            <Image style={{marginLeft:30}} source={require('./../../../assets/images/backbtn.png')}></Image>
                                                                </TouchableOpacity>

                                                <View style={{flexDirection:'column' , marginLeft:20}}>
                                                {this.state.fontLoaded ? (<Text style={{fontSize:10 , marginTop:5 ,color:'grey' , fontFamily:'opreg'}}>Step 3 0f 3</Text>) : null }
                                            
                                                {this.state.fontLoaded ? (<Text style={{fontSize:30  , fontFamily:'avbold'}}>Confirm and pay</Text>) : null }
                                            
                                                </View>
                                        </View>


                            </View>
                        
                            <ScrollView style={{marginBottom:30}} >
                        <View style={{marginBottom:50}}>
                                            <TouchableOpacity 
                                                style={{marginLeft:30 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:50 , marginRight:20}}>
                                                                                            
                                                              

                                                                <View style={{flexDirection:'row' , marginTop:10 , marginRight:20}}>

                                                                   

                                                                       <View>
                                                                              {this.state.fontLoaded ? ( <Text style={{fontFamily:'avbold' , fontSize:18}}>Brazilian Fruit Wax</Text>) : null }
                                                                              <Text style={{fontSize:10, marginBottom:15 , color:'grey'}}>10 - 40 minutes</Text>
                                                                        </View>

                                                                    </View>

                                                </TouchableOpacity>



                                                    <TouchableOpacity style={{flexDirection:'row' , marginLeft:30 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1,
                                                     marginTop:10 , marginRight:20}}>

                                            

                                                                    <View>
                                                                    {this.state.fontLoaded ? (<Text style={{fontFamily:'avbold' , fontSize:18 }}>Wednesday 11 December</Text>) : null }
                                                                    <Text style={{fontSize:10, marginBottom:15, color:'grey'}}>11:30 - 12:10</Text>
                                                                    </View>

                                                    </TouchableOpacity>

                                                    <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:5,marginBottom:5 , marginLeft:30}}> 


                                                            <View style={{flexDirection:'column'  }}>
                                                                    <Text style={{fontSize:15, color:'grey' }}>Service Tax</Text>
                                                            </View>

                                                            <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                                    {this.state.fontLoaded ? ( <Text style={{color:'purple' ,marginRight:20,fontFamily:'avbold'}}>PKR 400</Text>) : null }
                                                            </View>


                                                    </View>

                                                    <View style={{color:'#e8e8e8' , backgroundColor:'#e8e8e8',alignSelf:'center' , width:'90%' , height:1 , marginTop:10 ,marginBottom:10}}></View>
                                                
                                                    
                                                      <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:5,marginBottom:5 , marginLeft:30}}> 


                                                                <View style={{flexDirection:'column'  }}>
                                                                        <Text style={{fontSize:15, color:'grey' }}>Total Amount</Text>
                                                                </View>

                                                                <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                                        {this.state.fontLoaded ? ( <Text style={{color:'purple' ,marginRight:20,fontFamily:'avbold'}}>PKR 1,00</Text>) : null }
                                                                </View>


                                                    </View>


                                                    <View style={{color:'#e8e8e8' , backgroundColor:'#e8e8e8' , width:'100%' , height:5 , marginTop:10 ,marginBottom:10}}></View>
                                                
    
                                                    {this.state.fontLoaded ? ( <Text style={{fontSize:10, marginTop:5, color:'grey' , fontFamily:'opreg',marginLeft:20,padding:5}}>PAYMENT METHOD</Text>) : null }
                                                     <Text style={{fontSize:15, color:'black',marginLeft:20,padding:5,marginBottom:5 ,marginTop:5  }}>Cash on delivery</Text>
                                                    
                                                      <View opacity={0.2} style={{color:'#e8e8e8' , backgroundColor:'black' , width:'90%' , height:1,marginLeft:20,marginTop:5 , marginBottom:5 , 
                                                      marginRight:20}}></View>

                                                            <Text style={{fontSize:15, color:'black',marginLeft:20,padding:5,marginBottom:5 ,marginTop:5  }}>Master ending with 4561</Text>
                                                    
                                                    <View opacity={0.2} style={{color:'#e8e8e8' , backgroundColor:'black' , width:'90%' , height:1,marginLeft:20,marginTop:5 , marginBottom:5 , 
                                                    marginRight:20}}></View>
                                         
                                         
                                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ADD_CARD')} >
                                                            <Text style={{fontSize:15, color:'black',marginLeft:20,padding:5,marginBottom:5 ,marginTop:5 }}>Add new debit/credit card</Text>


                                                    </TouchableOpacity>
                                               

                            <View style={{color:'#e8e8e8' , backgroundColor:'#e8e8e8' , width:'100%',marginTop:5 , marginBottom:5 , height:5}}></View>

                            {this.state.fontLoaded ? ( <Text style={{fontSize:10, marginTop:5, color:'grey' , fontFamily:'opreg',marginLeft:20,padding:5}}>YOUR WALLET</Text>) : null }

                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('ENTER_DISCOUNT_CODE')}
                                                                                        >

                                         <Text style={{fontSize:15, color:'black',marginLeft:20,padding:5 ,marginBottom:10 }}>Enter discount code</Text>

                                </TouchableOpacity>
                            
                            <View style={{color:'#e8e8e8' , backgroundColor:'#e8e8e8' , width:'100%' , height:5}}></View>

                            {this.state.fontLoaded ? ( <Text style={{fontSize:10, marginTop:5, color:'grey' , fontFamily:'opreg',marginLeft:20,padding:5}}>CANCELLATION POLICY</Text>) : null }
                                    <Text style={{fontSize:10, color:'black',marginLeft:20,padding:5 }}>Free cancellation and amendments before 3:00 am {'\n'} on 10 Dec</Text>
                                  
                                    </View>
                                    </ScrollView>
                                   
                                                
                                                 <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('ADD_ID')}
                                                            style={{marginRight:20 , marginLeft:20 ,height:40 ,bottom:0 , position:'absolute' ,
                                                             marginBottom:20, borderRadius:15,alignSelf:'center' , width:'90%' ,padding:10 
                                                            , backgroundColor:'#F4CA09',justifyContent:'center',alignItems:'center' }}>
                                                            <Text style={{color:'white'}}>Checkout</Text>
                                               </TouchableOpacity>

                                     
                        </View>
        )
    }
}
const styles = StyleSheet.create({
    
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
      },

      v1: {borderColor:'blue' ,borderRadius:20 , borderWidth:1  , width:120 , alignSelf:'center' , height:30} ,
      v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
      v3: {marginTop:15, flexDirection:'row'  , marginRight:20 , marginLeft:20}
  ,
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },


    });