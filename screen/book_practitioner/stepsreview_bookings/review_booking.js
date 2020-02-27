import React from 'react' ;
import  {View, Text , TextInput , StyleSheet, Platform,Image ,TouchableOpacity , StatusBar, Dimensions} from 'react-native' ;
import * as Font from 'expo-font'; 

import Modal from 'react-native-modal';

export default class reviewpract extends React.Component{

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
        'opreg': require('./../../../assets/fonts/avlight.ttf'),
      });

      await Font.loadAsync({
        'avbold': require('./../../../assets/fonts/avbold.ttf'),
      });

    //   await Font.loadAsync({
    //     'avlight': require('./../../assets/fonts/avlight.ttf'),
    //   });
  
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

                                                            <Image style={{marginLeft:30}} source={require('./../../../assets/images/backbtn.png')}></Image>
                                                                </TouchableOpacity>

                                                <View style={{flexDirection:'column' , marginLeft:20}}>
                                                {this.state.fontLoaded ? (<Text style={{fontSize:10 , marginTop:10 ,color:'grey' , fontFamily:'opreg'}}>Step 1 0f 3</Text>) : null }
                                            
                                                {this.state.fontLoaded ? (<Text style={{fontSize:30 , marginTop:5  , fontFamily:'avbold'}}>Review Booking</Text>) : null }
                                            
                                                </View>
                                        </View>


                            </View>

                                            <TouchableOpacity 
                                                style={{marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:35 , marginRight:20}}>
                                                                                            
                                                              

                                                                <View style={{flexDirection:'row' , marginLeft:20, marginTop:10 , marginRight:20}}>

                                                                    <View style={{justifyContent:'center'}}>
                                                                        <Image source={require('./../../../assets/images/office/office.png')}></Image>
                                                                    </View> 

                                                                    <View style={{marginLeft:30}}>
                                                                    {this.state.fontLoaded ? ( <Text style={{fontFamily:'avbold' , fontSize:18 , marginTop:20}}>Home</Text>) : null }
                                                                        <Text style={{fontSize:10, marginBottom:15 , color:'grey'}}>123 Street Khayaban-e-Ittehad Phase 6, Karachi</Text>
                                                                    </View>

                                                                    </View>

                                                </TouchableOpacity>



                                        <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                        <View style={{justifyContent:'center'}}>
                                                <Image source={require('./../../../assets/images/office/office.png')}></Image>
                                            </View> 

                                            <View style={{marginLeft:30}}>
                                            {this.state.fontLoaded ? (<Text style={{fontFamily:'avbold' , fontSize:18 , marginTop:10}}>Wednesday 11 December</Text>) : null }
                                            <Text style={{fontSize:10, marginBottom:15}}>11:30 - 12:10</Text>
                                            </View>

                                        </View>

                                        <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 


                                        <View style={{flexDirection:'column'  }}>
                                        <Text style={{fontSize:15 }}>Brazilian Fruit Wax</Text>
                                        {this.state.fontLoaded ? (  <Text style={{fontSize:10 , marginTop:5 , color:'grey' , fontFamily:'avbold'}}>PKR 800</Text>) : null }
                                        </View>

                                        <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                          {this.state.fontLoaded ? ( <Text style={{color:'purple' ,marginRight:20,fontFamily:'avbold'}}>PKR 400</Text>) : null }
                                        </View>


                                        </View>

                                        <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 
                                            
                                                    <View style={{flexDirection:'column'  }}>
                                                        <Text style={{fontSize:15 }}>Eyebrow threading</Text>
                                                        <Text style={{fontSize:10 , marginTop:5}}>10 - 20  Minutes</Text>
                                                    </View>
                                                
                                                    <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                        <Text style={{color:'purple' ,marginRight:20}}>PKR 200</Text>
                                                    </View>
                                            

                                        </View>

                                      
                             <View style={{bottom:0,flexDirection:'row',justifyContent:'space-between' , position:'absolute' ,borderTopColor:'grey'
                              , borderTopWidth:1 , width:'100%' }}>
                             
                                        <View style={{flexDirection:'column' , marginLeft:20,padding:10}}>
                                        {this.state.fontLoaded ? ( <Text style={{color:'grey' ,fontFamily:'opreg'}}>Total Amount</Text>) : null }
                                                
                                        {this.state.fontLoaded ? ( <Text style={{color:'purple',fontFamily:'avbold'}}>PKR 1,000</Text>) : null }
                                                
                                        </View>


                                        <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('ENTER_NUMB')}
                                                    style={{marginRight:20 , borderRadius:15 , width:100 ,padding:10 ,marginTop:15   , height:30 , backgroundColor:'#F4CA09',justifyContent:'center',alignItems:'center' }}>
                                                 {this.state.fontLoaded ? ( <Text style={{alignSelf:'center' , color:'white' , fontFamily:'opreg'}}>NEXT</Text>) : null }
            
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