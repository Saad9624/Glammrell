import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, 
    
    TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image, Dimensions } from 'react-native';
import * as Font from 'expo-font'; 

const users = [
    {
      key: '5a31077f6dda99e234ad6727',
      name: 'Cathy Gilliam',
      company: 'EXOVENT',
      email: 'cathygilliam@exovent.com',
      price: 'PKR 200' ,
      review : '11 Reviews'
    },
    {
      key: '5a31077fcbee1cf54eed6c61',
      name: 'Norton Potts',
      company: 'COREPAN',
      email: 'nortonpotts@corepan.com',
      price: 'PKR 300' ,
      review : '41 Reviews'
    },
    {
      key: '5a31077fcb4a048c957901e4',
      name: 'Kelly Collins',
      company: 'SECURIA',
      email: 'kellycollins@securia.com',
      price: 'PKR 400',
      review : '17 Reviews'
    },
    {
      key: '5a31077f8234793502990437',
      name: 'Leach Harrison',
      company: 'COMBOGEN',
      email: 'leachharrison@combogen.com',
      price: 'PKR 500' ,
      review : '9 Reviews'
    },
   
   
  ];


export default class choosepract extends Component {

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
      'opreg': require('./../../assets/fonts/avlight.ttf'),
    });

    await Font.loadAsync({ 
      'avbold': require('./../../assets/fonts/avbold.ttf'),
    });

    this.setState({ fontLoaded: true });
    
  }


onPress=(item) => {
  this.props.navigation.navigate('PRACT_DETAIL')
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

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'avbold' }}>Choose a practitioner</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                          <View opacity={0.1} style={{borderWidth:0.5 , backgroundColor:'black' }}></View>


            </View>

<View style={{alignItems:'center'}}>     
            <FlatList
      style={{marginTop:10  }}
        data={users}
        renderItem={({ item }) => 
        (
          <TouchableOpacity
          onPress={() => this.onPress(item)}
          >
          <View
        
            style={{
                alignItems:'center' ,
                alignSelf:'center',
              marginBottom:10 ,
              backgroundColor:'#E8E8E8' ,
              borderRadius:15 ,
              marginRight:10 ,
              marginLeft:10 ,
              marginTop:10 ,
              padding:20 ,
              height:150 ,
              width:Dimensions.get('window').width / 100 * 40,
              height:Dimensions.get('window').height / 100 * 30,
              borderWidth: 1,
              borderColor: '#E8E8E8',
              padding: 10
            }}>
  <Image style={{width:65 , height:65 , marginTop:10}}  source={require('./../../assets/images/placehold/placeholder.png')} ></Image>
  {this.state.fontLoaded ? (  <Text style={{color:'black', fontSize: 18 , fontFamily:'avbold',fontWeight:'400' , marginTop:20 }}>{item.name}</Text>  ) : null  }                                       
  {this.state.fontLoaded ? (  <Text style={{color:'grey', fontSize: 15 , fontFamily:'opreg' , marginTop:5 }}>{item.review}</Text>  ) : null  }  
            <View>
             
             
            </View>
          </View>
          </TouchableOpacity>
        )}

        numColumns={2}
      />
                                  
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