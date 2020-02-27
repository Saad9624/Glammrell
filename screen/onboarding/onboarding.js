import { Image ,Alert , Button , StatusBar, View , Text , LinearGradient} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class App extends React.Component {

    static navigationOptions ={
        header: null ,
        gesturesEnabled: false,
    }

  render() {
    return (
        <Onboarding
        bottomBarHighlight ={false}
        onSkip={() => this.props.navigation.navigate('Home')}
        
          pages={[
            
            {
              backgroundColor: '#6C13BB',
              image: <Image style={{width:0 , height:0}} source={require('./../../assets/images/nic/nic.png')} />,
              title: (
                <View>
                  <Text style={{fontWeight:'bold' , marginLeft:20 , marginRight:20 , fontSize : 35, marginBottom:30 , color:'white'}}>Feel well {'\n'}  
                   on demand

                  </Text>

                  <Text style={{ marginLeft:20 , marginRight:20  , fontSize : 15, marginBottom:30 , color:'white'}}>Lorem ipsum dolor sit amet, consect adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

                      </Text>
                </View>
              ),
              subtitle: '',
            
            },
            { 
              backgroundColor: '#FF4D56',
              image: <Image style={{width:0 , height:0}} source={require('./../../assets/images/nic/nic.png')} />,
              title: (
                <View>
                        <Text style={{fontWeight:'bold' , marginLeft:20 , marginRight:20 , fontSize : 35, marginBottom:30 , color:'white'}}>You pick the {'\n'}
                        time and place

                        </Text>

                        <Text style={{ marginLeft:20 , marginRight:20  , fontSize : 15, marginBottom:30 , color:'white'}}>Lorem ipsum dolor sit amet, consect adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

                            </Text>

                            
                </View>
              ),
              subtitle: ''
             
            },
            {
              backgroundColor: '#7BC510',
              image: <Image style={{width:0 , height:0}} source={require('./../../assets/images/nic/nic.png')} />,
              title: (
                <View>
                  <Text style={{fontWeight:'bold' , marginLeft:20 , marginRight:20 , fontSize : 35, marginBottom:30 , color:'white'}}>Vetted {'\n'}  
                  Professionals </Text>

                  <Text style={{ marginLeft:20 , marginRight:20  , fontSize : 15, marginBottom:30 , color:'white'}}>Lorem ipsum dolor sit amet, consect adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

                      </Text>
                </View>
              ),
              subtitle: '',
                 
              
            },
            {
              backgroundColor: '#F4CA09',
              image: <Image style={{width:0 , height:0}} source={require('./../../assets/images/nic/nic.png')} />,
              title: (
                <View>
                  <Text style={{fontWeight:'bold' , marginLeft:20 , marginRight:20 , fontSize : 35, marginBottom:30 , color:'white'}}>In the comfort {'\n'}  
                  of your home </Text>

                  <Text style={{ marginLeft:20 , marginRight:20  , fontSize : 15, marginBottom:10 , color:'white'}}>Lorem ipsum dolor sit amet, consect adipis elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

                      </Text>
                </View>
              ),
              subtitle: (

                <View>
                          <View style={{flexDirection:'row'  , marginTop:100 }}>

                                      <TouchableOpacity
                                      onPress={() => this.props.navigation.navigate('SIGN_IN')} style={{backgroundColor:'red' , borderRadius:20 , borderColor:'red' , width:150, padding:10 , marginRight:10}}>
                                                <Text style={{color:'white'  , alignSelf:'center'}}>Sign in</Text>
                                      </TouchableOpacity>

                                      <TouchableOpacity
                                      onPress={() => this.props.navigation.navigate('Home')}
                                      style={{backgroundColor:'purple' , borderRadius:20 , borderColor:'purple', width:150 , padding:10 , marginLeft:10}}>
                                                <Text style={{color:'white' , alignSelf:'center'}}>Sign up</Text>
                                      </TouchableOpacity>

                              </View>

              
                            

                                  <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('MENU')}
                                  style={{alignSelf:'center',backgroundColor:'white' , borderRadius:20 , borderColor:'purple' ,width:'90%', padding:10 , marginTop:20 , marginLeft:20 , marginRight:20}}>
                                              <Text style={{color:'black' , alignSelf:'center'}}>Browse as a guest</Text>
                                  </TouchableOpacity>
                                
                                
                              
                  </View>
                 
                ),
            },
          ]}
        />
    );
  }
}