import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View , TextInput , ScrollView , Image , Platform ,StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Header from './../components/appstatusbar' 

export default class addaddress extends Component {
  state = {
    visibleModal: null,
  };

  static navigationOptions ={
    header: null 
}


  render() {
    return (
      <View>
         <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                <StatusBar hidden={false} />
                                <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 
          

         
                               <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                    
                                                     <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()} >
                                                            <Image style={{marginLeft:30 , marginTop:17}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                     
                                                       
                                                        </TouchableOpacity>

                                                       
                                                        <Text style={{fontSize:20  , alignSelf:'center' }}>Confirm Address</Text>   
                                                        <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                    
                              </View>
        <ScrollView style={{marginBottom:100}}>
        <View style={{height:200  ,backgroundColor:'grey'}}></View>
        <Text style={{fontSize:20, margin:10 , marginLeft:20}}>Address Details</Text>

        <Text style={styles.T2}>Building</Text>
        <TextInput style={styles.T1}
        placeholder={'Enter Building no'}
        ></TextInput>

        <Text style={styles.T2}>Street</Text>
        <TextInput style={styles.T1}
        placeholder={'Enter Street no'}
        ></TextInput>

        <Text style={styles.T2}>Area</Text>
        <TextInput style={styles.T1}
        placeholder={'Enter Area'}
        ></TextInput>
        
        <Text style={styles.T2}>Block/Sector/Phase</Text>
        <TextInput style={styles.T1}
        placeholder={'Enter Block'}
        ></TextInput>

        <Text style={styles.T2}>Floor/Unit</Text>
        <TextInput style={styles.T1}
        placeholder={'Enter Floor'}
        ></TextInput>
        <Text style={{fontSize:20, marginLeft:20 , marginTop:20}}>ADDRESS TYPE</Text>


        <View style={styles.v1}>
              <Image source={require('./../../assets/images/calendar/calendar.png')}></Image>
              <Text style={{marginBottom:15 , marginLeft:20}}>Home </Text>
         
         </View>

        <View style={styles.v1}>
          <Image source={require('./../../assets/images/office/office.png')}></Image>
          <Text style={{marginBottom:15 , marginLeft:20}}>Office </Text>
        </View>

        <View style={{flexDirection:'row' , marginLeft:20 , marginRight:20 , marginTop:20 , margin:10}}>
          <Image source={require('./../../assets/images/custom/custom.png')}></Image>
          <Text style={{marginBottom:15 , marginLeft:20}}>Custom</Text>
        </View>

        <TouchableOpacity style={{width:'80%' , height:40 , borderColor:'#F4CA09' , marginTop:10 ,
         borderWidth:1 , alignSelf:'center' , backgroundColor:'#F4CA09' , borderRadius:20 }}> 
        <Text style={{alignSelf:'center' , marginTop:8 , color:'white'}}>Save Address</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
       );
  }
}

const styles = StyleSheet.create({
 T1:{fontSize:10 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 , T2:{fontSize:10, marginLeft:20 ,marginRight:20 , marginTop:20}
,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
});