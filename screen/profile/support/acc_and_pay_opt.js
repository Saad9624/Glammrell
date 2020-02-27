import React from 'react' ;
import  {View, Text , TextInput , StyleSheet, Platform,Image ,TouchableOpacity , StatusBar, Dimensions} from 'react-native' ;
import * as Font from 'expo-font'; 

import Modal from 'react-native-modal';

export default class faq extends React.Component{

    static navigationOptions ={
        header: null ,
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

  

    render(){
        return(
            <View style={{flex:1}}>
            
                        <View>
                            
                                        <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                        <StatusBar hidden={false} />
                                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                        <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15 }}>
                                                <TouchableOpacity 
                                                                onPress={() => this.props.navigation.goBack()}
                                                                >

                                                            <Image style={{marginLeft:30}} source={require('./../../../assets/images/backbtn/back.png')}></Image>
                                                                </TouchableOpacity>

                                                <View style={{flexDirection:'column' , marginLeft:20}}>
                                                {this.state.fontLoaded ? (<Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Amend a booking</Text>) : null }
                                            
                                                </View>
                                        </View>


                            </View>

                         

                            {this.state.fontLoaded ? (   <Text style={{fontFamily:'opreg',marginLeft:20 , marginTop:30 , color:'grey',fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>) : null }

                
                     
                
                    
                <View style={{height:Dimensions.get('window').height /100 * 35, bottom:0 , position:'absolute' , width:'100%', backgroundColor:'#d3d3d3'}}>

                {this.state.fontLoaded ? (   <Text style={{fontFamily:'opreg',marginLeft:20  , marginTop:10 , color:'black',fontSize:15}}>Not HELPFUL ENOUGH?</Text>) : null }

                                 <TouchableOpacity style={{padding:5,marginTop:20 , flexDirection:'row' , marginLeft:20 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Live chat</Text>) : null }
                                </TouchableOpacity>
                                <View opacity={0.1} style={{borderWidth:0.5 , backgroundColor:'black' , marginLeft:20  , marginRight:20 }}></View>

                               
                               
                                <TouchableOpacity style={{padding:5,marginTop:10 , flexDirection:'row' , marginLeft:20  , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Email us</Text>) : null }
                                </TouchableOpacity>
                                <View opacity={0.1} style={{borderWidth:0.5 , backgroundColor:'black' , marginLeft:20  , marginRight:20 }}></View>


                                <TouchableOpacity style={{padding:5,marginTop:10 , flexDirection:'row' , marginLeft:20, marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Call us</Text>) : null }
                                </TouchableOpacity>
                               

                </View>
           
        
              
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
      },

      v1: {borderColor:'blue' ,borderRadius:20 , borderWidth:1  , width:120 , alignSelf:'center' , height:30} ,
      v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
      v3: {marginTop:15, flexDirection:'row'  , marginRight:20 , marginLeft:20}
  ,
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },


    });