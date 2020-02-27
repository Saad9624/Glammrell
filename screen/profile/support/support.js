import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image, Dimensions} from 'react-native';
import * as Font from 'expo-font'; 


export default class support extends Component {

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
      'opreg': require('./../../../assets/fonts/opreg.ttf'),
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
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Enter details</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                        

            </View>


<View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:5}}></View>

                                    
                                        <View style={{alignItem:'center', justifyContent:'center', width:Dimensions.get('window').width  , height:Dimensions.get('window').height / 100 * 30, backgroundColor:'#e8e8e8'}}>
                                        {this.state.fontLoaded ? (        <Text style={{fontWeight:'bold' , alignSelf:'center', fontSize:20 , fontFamily:'opreg' }}>At your service</Text> ) : null }

                                        {this.state.fontLoaded ? (  <Text style={{alignSelf:'center' , fontSize:15 , marginLeft:30 , marginRight:30, marginTop:5, fontFamily:'opreg'  }}>Our customer service will be able to assist you any bookings or enquiries</Text>) : null }
                                               {this.state.fontLoaded ? ( <Text style={{alignSelf:'center' , fontSize:10 , color:'grey' , marginTop:5, fontFamily:'opreg' }}>(MONDAY - SUNDAY 9AM - 9PM)</Text>) : null }
                                        
                                        </View>
                                     
                                     

            


                       


                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                        {this.state.fontLoaded ? ( <Text placeholder={`Recepient's name`}  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Live chat</Text>) : null }


                                </TouchableOpacity>



                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 ,borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                      {this.state.fontLoaded ? (  <Text placeholder={"Sender's name"}   placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Email us</Text>) : null }


                                </TouchableOpacity>

                                 <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                      {this.state.fontLoaded ? ( <Text placeholder={"Add optional message" }  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Call us</Text>) : null }


                                </TouchableOpacity>

                                <TouchableOpacity
                                      onPress={() => this.props.navigation.navigate('FAQ')}
                                      style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>FAQ</Text>) : null }
                                </TouchableOpacity>

                        

                                <TouchableOpacity 
                                            onPress={() => this.props.navigation.navigate('ENTER_DETAILS')}
                                        style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'
                                            , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

{this.state.fontLoaded ? (  <Text style={{alignSelf:'center' , color:'white', fontFamily:'opreg'}}>Next</Text>) : null }
                                </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 });