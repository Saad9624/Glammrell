import React from 'react' ;
import { View, Text , Image , ImageBackground , StyleSheet , FlatList ,
    TextInput ,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Keyboard ,Platform ,AsyncStorage
    } from 'react-native';

export default class appstatusbar extends React.Component{

    render(){
        return(
            <View>
                
                                <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                <StatusBar hidden={false} />
                                <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 
          

         
                               <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                    
                                                     <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()} >
                                                            <Image style={{marginLeft:30 , marginTop:15}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                     
                                                       
                                                        </TouchableOpacity>

                                                       
                                                        <Text style={{fontSize:20  , alignSelf:'center' }}>Heading</Text>   
                                                        <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                    
                              </View>

                             

            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    
  });