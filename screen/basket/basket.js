import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList ,ScrollView, View , StyleSheet , TextInput,Dimensions , Button , StatusBar , Platform ,Image } from 'react-native';
import Modal from "react-native-modal";
import SBAR from '../components/appstatusbar' 
import * as Font from 'expo-font';
 


export default class basket extends Component {

    static navigationOptions ={
        header: null 
    }



  state = {
    isModalVisible: false ,
    fontLoaded: false,
  };


 async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });
    
  }



  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  goto_available_bookings_screen = () => {

   
    this.props.navigation.navigate('AVAIL_BOOKING_LISTING')
  }


  render() {
    return (
        <View style={{ flex: 1 }}>

                  <View>
                                  
                                  <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                  <StatusBar hidden={false} />
                                  <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                      
                                                      <TouchableOpacity 
                                                          onPress={() => this.props.navigation.goBack()} >
                                                              <Image style={{marginLeft:30 , marginTop:15}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                      
                                                        
                                                          </TouchableOpacity>

                                                        
                                                          {this.state.fontLoaded ? (  <Text style={{fontSize:20  , alignSelf:'center', fontFamily : 'opreg' }}>Basket</Text>  ) : null }  
                                                          <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                      
                                </View>

                              

                  </View>
                  

                  <View style={{borderColor:'#d3d3d3' , width:'100%', borderWidth:1}}></View>


                  <View style={{flexDirection:'row' , justifyContent:'space-between' , marginLeft:20 , marginRight:20}}>


                                  <View style={{ padding:10}}>
                                        <Text style={{fontSize:15 , }}>Service</Text>
                                        <Text style={{fontSize:10 , color:'grey' , marginTop:5}}>20 - 40 minutes</Text>

                                  </View>
                                

                                  <View style={{ padding:10}}>
                                        <Text style={{fontSize:15 , color:'purple'}}>PKR 800</Text>
                                        <Text style={{fontSize:10 , color:'red' , marginTop:5}}>Remove</Text>

                                  </View>

                    


                  </View>

                  <View style={{alignSelf:'center' ,borderColor:'#e8e8e8' , width:'90%' , marginTop:10 , borderWidth:1 , marginLeft:20 , marginRight:20}}></View>

                      <View style={{flexDirection:'column' ,bottom:0, position:'absolute' , width:'100%'  }}>
                                  <TouchableOpacity style={{marginBottom:20,width:100 ,borderRadius:20 ,justifyContent:'center'  ,borderColor:'#7BC510' , backgroundColor:'#7BC510' , alignSelf:'center' , width:'80%' , height:40}}>

                                    <Text style={{alignSelf:'center' , color:'white'}}>Add another item</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                    onPress={() => this.goto_available_bookings_screen()}
                                    style={{marginBottom:30,borderRadius:20,justifyContent:'center'  ,borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>
                                    
                                    <Text style={{alignSelf:'center', color:'white'}}>Choose date and time</Text>
                                    </TouchableOpacity>

                      </View>

                        
      </View>
       );s
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 });    