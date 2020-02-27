import React, { Component } from 'react';
import {View, StyleSheet,StatusBar,Platform,Text ,TouchableOpacity , Image } from 'react-native';
// You can import from local files
// or any pure javascript modules available in npm
import CollapseTabBar from './collapsableheader_tabs';
import * as Font from 'expo-font'; 


export default class pract_detail extends Component {

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
      <View style={styles.container}>
         <View>
                            
                            <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                            <StatusBar hidden={false} />
                            <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                          <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                
                                                <TouchableOpacity 
                                                    onPress={() => this.props.navigation.goBack()} >
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Choose a practitioner</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                          <View opacity={0.1} style={{borderWidth:0.5 , backgroundColor:'black' }}></View>


            </View>

      <CollapseTabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
