import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image} from 'react-native';
import * as Font from 'expo-font'; 


export default class App extends Component {

      static navigationOptions ={
        header: null  ,
        gesturesEnabled: false,
        
    }

    state={
      visibleModal: null,
      fontLoaded: false,
  }

 async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });
    
  }



    
  render() {
    return (
      <View style={{flex:1 }}>
                <View>
                            
                            <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                            <StatusBar hidden={false} />
                            <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                          <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                
                                                <TouchableOpacity 
                                                    onPress={() => this.props.navigation.goBack()} >
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Upcmoming bookings</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                        

            </View>


<View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:5}}></View>


                  <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                    <View style={{justifyContent:'center'}}>
                                          <Image source={require('./../../assets/images/office/office.png')}></Image>
                                      </View> 

                                      <View style={{marginLeft:30}}>
                                        <Text style={{fontWeight:'bold' , fontSize:18 , marginTop:20}}>Home</Text>
                                        <Text style={{fontSize:10, marginBottom:15}}>123 Street Khayaban-e-Ittehad Phase 6, Karachi</Text>
                                      </View>

                  </View>


                    <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                    <View style={{justifyContent:'center'}}>
                                            <Image source={require('./../../assets/images/office/office.png')}></Image>
                                        </View> 

                                        <View style={{marginLeft:30}}>
                                          <Text style={{fontWeight:'bold' , fontSize:18 , marginTop:20}}>Wednesday 11 December</Text>
                                          <Text style={{fontSize:10, marginBottom:15}}>11:30 - 12:10</Text>
                                        </View>

                    </View>

                      <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 
                          
                          
                                <View style={{flexDirection:'column'  }}>
                                    <Text style={{fontSize:15 }}>Brazilian Fruit Wax</Text>
                                    <Text style={{fontSize:10 , marginTop:5 , color:'grey'}}>30 - 40  Minutes</Text>
                                </View>
                            
                                <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                    <Text style={{color:'purple' ,marginRight:20}}>PKR 400</Text>
                                </View>
                          

                      </View>

                             <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 
                                          
                                                <View style={{flexDirection:'column'  }}>
                                                    <Text style={{fontSize:15 }}>Eyebrow threading</Text>
                                                    <Text style={{fontSize:10 , marginTop:5}}>10 - 20  Minutes</Text>
                                                </View>
                                              
                                                  <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                      <Text style={{color:'purple' ,marginRight:20}}>PKR 200</Text>
                                                  </View>
                                        

                             </View>

                             <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:30  , marginRight:30 , marginTop:10 , marginBottom:10}}></View>


                            <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10, marginBottom:10 , marginLeft:30}}> 
                                    
                                            <View style={{flexDirection:'column'  }}>
                                                <Text style={{fontSize:15 , color:'grey'}}>Service tax</Text>
                                              
                                            </View>
                                  
                                            <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                <Text style={{color:'purple' ,marginRight:20}}>PKR 200</Text>
                                            </View>
                                  

                            </View>

                             <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:30  , marginRight:30 , marginTop:10 , marginBottom:10}}></View>


                            <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginBottom:10, marginLeft:30}}> 
                                    
                                              <View style={{flexDirection:'column'  }}>
                                                  <Text style={{fontSize:15  , fontWeight:'bold' }}>Total Amount</Text>
                                              
                                              </View>
                                            
                                                <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                    <Text style={{color:'purple' ,marginRight:20}}>PKR 1000</Text>
                                                </View>
                                

                            </View>

                            <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:20  , marginRight:20 , marginTop:10 , marginBottom:10}}></View>


                                  <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between' 
                                   , marginTop:30 , marginBottom:10, marginLeft:30}}> 
                                    
                                            <View style={{flexDirection:'column'  }}>
                                                <Text style={{fontSize:20  , fontWeight:'bold' }}>Rija Arsalan</Text>
                                                <Text style={{fontSize:10  , color:'grey' }}>Practictioner</Text>
                                            
                                            </View>
                                          
                                              <View style={{ justifyContent:'center' , alignContent:'center'  , flexDirection:'row' , marginTop:5}}>
                                                  <Image source={require('./../../assets/images/verified/group.png')}></Image>
                                                  <Text style={{marginRight:20 , marginLeft:10 , fontSize:10}}>Verified Practictioner</Text>
                                              </View>
                      

                                  </View>

      
         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 });