import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList ,ScrollView, View , StyleSheet , TextInput,Dimensions ,StatusBar ,Platform , Image} from 'react-native';
import SBAR from '../components/appstatusbar' 
import * as Font from 'expo-font'; 

export default class available_booking_listing extends Component {

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
                                                                              <Image style={{marginLeft:30 , marginTop:17}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                                        
                                                                        
                                                                        </TouchableOpacity>

                                                                        
                                                                        {this.state.fontLoaded ? (  <Text style={{fontSize:20  , alignSelf:'center', fontFamily : 'opreg' }}>Choose date and time</Text>  ) : null }  
                                                                        <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>date</Text>             
                                                                        
                                                </View>

                                                

                                    </View>
          <View style={{color:'white' , width:'100%' , backgroundColor:'purple' , marginTop:5 ,padding:15, alignSelf:'center'}}>
            <Text style={{alignSelf:'center' , color:'white'}}>December 11</Text>
          </View>

          <View style={{height:70 , backgroundColor:'purple'}}>
                          <ScrollView  style={{backgroundColor:'purple' , height:70 , marginLeft:20 , marginRight:20}}
                          horizontal
                          >

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center' , color:'white'}}>1</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center' , color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>2</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>3</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>4</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>5</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>6</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>7</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>8</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>9</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>10</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>11</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>12</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>13</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>14</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>15</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>16</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>17</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>18</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>19</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>20</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>21</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>22</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>23</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>24</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>25</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>26</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>27</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>28</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>29</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                              <Text style={{alignSelf:'center', color:'white'}}>30</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Tue</Text>


                              </TouchableOpacity>

                              <TouchableOpacity style={{flexDirection:'column' , margin:5}}>
                                    <Text style={{alignSelf:'center', color:'white'}}>31</Text>
                                    <Text style={{fontSize:10 , alignSelf:'center', color:'white'}}>Mon</Text>


                              </TouchableOpacity>

                            
                          </ScrollView>


          </View>


          <View style={{flexDirection:'row' , alignSelf:'center' , marginTop:50}}>

                            <View style={{alignContent:'center' ,  justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'red' , backgroundColor:'red' , marginRight:2.5 , borderRadius:5}}>
                                <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>

                            </View>

                            <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'green' , backgroundColor:'green', marginRight:2.5 ,marginLeft:2.5, borderRadius:5 }}>

                            <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>

                            </View>

                            <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'blue' , backgroundColor:'blue', marginLeft:2.5, borderRadius:5}}>
                            <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
                            </View>
                                
          </View>

          <View style={{flexDirection:'row' , alignSelf:'center' , marginTop:15}}>

                        <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'red' , backgroundColor:'blue' , marginRight:2.5 , borderRadius:5}}>
                        <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
                        </View>

                        <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'green' , backgroundColor:'red', marginRight:2.5 ,marginLeft:2.5, borderRadius:5 }}>
                        <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
                        </View>

                        <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'blue' , backgroundColor:'green', marginLeft:2.5, borderRadius:5}}>
                        <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
                        </View>
                                    
          </View>

          <View style={{flexDirection:'row' , alignSelf:'center' , marginTop:15}}>

                          <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'red' , backgroundColor:'green' , marginRight:2.5 , borderRadius:5}}>
                          <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>

                          </View>

                          <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'green' , backgroundColor:'blue', marginRight:2.5 ,marginLeft:2.5, borderRadius:5 }}>
                          <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
                          </View>

                          <View style={{ justifyContent:'center',width:Dimensions.get('window').width / 100 * 30, height:55 , borderColor:'blue' , backgroundColor:'red', marginLeft:2.5, borderRadius:5}}>
                          <Text style={{alignSelf:'center' , alignContent:'center' , justifyContent:'center' , color:'white'}}>11:30</Text>
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