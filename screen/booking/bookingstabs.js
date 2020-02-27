import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput , StatusBar,Platform , Image} from 'react-native';
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
     
                       <View style={{marginLeft:20}}>
                                    
                                    <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                    <StatusBar hidden={false} />
                                    <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                    <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:100 , marginTop:15 }}>
                                            <TouchableOpacity 
                                                            onPress={() => this.props.navigation.goBack()}
                                                            >

                                                        <Image
                                                          source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                            </TouchableOpacity>

                                            <View style={{flexDirection:'column' }}>
                                            {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Bookings</Text>) : null }
                                        
                                            </View>
                                    </View>


                      </View>

                    <Image style={{marginLeft:20 , marginTop:20}} source={require('./../../assets/images/group/group.png')}></Image>

                    {this.state.fontLoaded ? (<Text style={{fontSize:25  , marginLeft:20  , marginTop:30 , fontWeight:'bold', fontFamily:'opreg'}}>You have'nt booked yet</Text>) : null }
                    {this.state.fontLoaded ? (<Text style={{color:'grey', marginLeft:20 ,marginTop:10, fontFamily:'opreg'}}>You dont have any bookings to display</Text>) : null }

                        <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('BOOKING_LIST')}
                        style={{ marginBottom:30 , alignSelf:'center',width:'80%' , borderColor:'#F4CA09' , borderWidth:1 , borderRadius:30 , backgroundColor:'#F4CA09' , height:40 , bottom:0 , position:'absolute' , marginRight:10 ,}}>

                {this.state.fontLoaded ? ( <Text style={{color:'white' , alignSelf:'center',marginTop:10, fontFamily:'opreg'}}>Book now</Text>) : null }
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