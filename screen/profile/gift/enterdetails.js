import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image} from 'react-native';
import * as Font from 'expo-font'; 


export default class enterdetails extends Component {

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

                                    
                                        <Text style={{fontSize:18 , marginTop:20 ,marginLeft:20}}>DELIVERY INFORMATION</Text>
                                     
                                     

            


                                <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:30 , marginRight:20}}>
                                     <TextInput placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15}}></TextInput>
                                </View>


                                <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                      <TextInput placeholder={`Recepient's name`}  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15}}></TextInput>


                                </View>



                                <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 ,borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                        <TextInput placeholder={"Sender's name"}   placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15}}></TextInput>


                                </View>

                                 <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                             <TextInput placeholder={"Add optional message" }  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15}}></TextInput>


                                </View>

                        

                                <TouchableOpacity 
                                            onPress={() => this.props.navigation.navigate('ENTER_DETAILS')}
                                        style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'
                                            , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

                                            <Text style={{alignSelf:'center' , color:'white'}}>Next</Text>
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