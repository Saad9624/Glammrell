import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image , Dimensions} from 'react-native';
import * as Font from 'expo-font'; 
import Modal from 'react-native-modal';

export default class add_debit_cards extends Component {

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
      'opreg': require('./../../../assets/fonts/avlight.ttf'),
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

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Add credit/debit card</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                        
                          <View opacity={0.2} style={{borderColor:'grey' , borderWidth:1 , marginTop:5}}></View>
            </View>


            {this.state.fontLoaded ? (  <Text style={styles.T2}>Code</Text>) : null }
      {this.state.fontLoaded ? (   <TextInput style={styles.T1}
        placeholder={'Enter Discount code'}
        ></TextInput>) : null }




                

                                         <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('CONFIRM_N_PAY_WITHCARD')}
                                                            style={{marginRight:20 , marginLeft:20 ,height:40 ,bottom:0 , position:'absolute' ,
                                                             marginBottom:20, borderRadius:15,alignSelf:'center' , width:'90%' ,padding:10 
                                                            , backgroundColor:'#F4CA09',justifyContent:'center',alignItems:'center' }}>
                                                        <Text style={{color:'white'}}>Submit</Text>
                                               </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20, fontFamily:'opreg' , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20, fontFamily:'opreg'}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 

, v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
 v3: {marginTop:15, flexDirection:'row' , justifyContent:'space-around' , borderBottomColor:'grey'  , borderBottomWidth:1 , borderTopColor:'transparent'}
,
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },


});