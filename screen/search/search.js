import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StatusBar , Platform , Image , StyleSheet , Dimensions} from 'react-native';
import * as Font from 'expo-font';   
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';

const users = [
  {
    key: '5a31077f6dda99e234ad6727',
    name: 'Full Arm Waxing',
    company: 'EXOVENT',
    email: 'cathygilliam@exovent.com',
    price: 'PKR 200'
  },
  {
    key: '5a31077fcbee1cf54eed6c61',
    name: 'Full Leg Waxing ',
    company: 'COREPAN',
    email: 'nortonpotts@corepan.com',
    price: 'PKR 300'
  },
  {
    key: '5a31077fcb4a048c957901e4',
    name: 'Brazilian Fruit Waxing',
    company: 'SECURIA',
    email: 'kellycollins@securia.com',
    price: 'PKR 400'
  },
  {
    key: '5a31077f8234793502990437',
    name: 'All the waxing will show up',
    company: 'COMBOGEN',
    email: 'leachharrison@combogen.com',
    price: 'PKR 500'
  },
 
];

export default class search extends Component {

    static navigationOptions ={
        header: null  ,
        gesturesEnabled: false,
    }

    state = {
      fontLoaded: false,
      visibleModal: null,
  
    };

   async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../../assets/fonts/opreg.ttf'),
      });
  
      this.setState({ fontLoaded: true });
      
    }

  render() {
    return (
      <View style={{marginLeft:20}}>
        

       
        <View>
                            
                            <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                            <StatusBar hidden={false} />
                            <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                            <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15 }}>
                                    <TouchableOpacity 
                                                    onPress={() => this.props.navigation.goBack()}
                                                    >

                                                <Image source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                    </TouchableOpacity>

                                    <View style={{flexDirection:'column' }}>
                                    {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Search</Text>) : null }
                                
                                    </View>
                            </View>


                </View>
   
            <View style={{backgroundColor:'#e8e8e8' , height:30 , borderRadius:10, marginTop:50  ,width:'95%' , justifyContent:'center' }}>
                
                    <TextInput underlineColor={'transparent'} placeholder={"Waxing"} style={{marginLeft:10 , backgroundColor:'transparent'}}></TextInput>
                   <Image source={require('./../../assets/images/search/search.png')} style={{right:0 , position:'absolute' , marginRight:20}}></Image>

            </View>

            <ScrollView>
 
      <FlatList
      style={{marginTop:50 }}
      
        data={users}
        renderItem={({ item }) => (
          <View style={{marginRight:20 , padding:10 }}>
        
        {this.state.fontLoaded ? ( <Text style={{color:'grey' , marginTop:5, fontSize:15 , marginLeft:4  , fontFamily:'opreg'}}>{item.name}</Text>) : null }
          
          <View style={{backgroundColor:'#e8e8e8' , width:'100%' , height:1 , marginTop:10}}></View>
          </View>
        )}
      />

</ScrollView>
     


         </View>
    );
  }
}

const styles = StyleSheet.create({
    
  statusBarBackground: {
      height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
            backgroundColor: "#FFFFFF",
    },

    v1: {borderColor:'blue' ,borderRadius:20 , borderWidth:1  , width:120 , alignSelf:'center' , height:30} ,
    v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
    v3: {marginTop:15, flexDirection:'row' , justifyContent:'space-around' , borderBottomColor:'grey'  , borderBottomWidth:1 , borderTopColor:'transparent'}
,
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },


  });

