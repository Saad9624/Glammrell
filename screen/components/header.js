import React from 'react' ;
import { View, Text , Image , ImageBackground , StyleSheet , FlatList ,
    TextInput ,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Keyboard ,Platform ,AsyncStorage
    } from 'react-native';
    import * as Font from 'expo-font';   

export default class appstatusbar extends React.Component{

   

      static navigationOptions ={
        header: null 
    }

    state = {
        fontLoaded: false,
      };

     async componentDidMount() {
        await Font.loadAsync({
          'opreg': require('./../../assets/fonts/opreg.ttf'),
        });
    
        this.setState({ fontLoaded: true });
        
      }




    render(){
        return(
            <View>
                
                                       <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                        <StatusBar hidden={false} />
                                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 
          

         
                                        <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15 }}>
                                                <TouchableOpacity 
                                                                onPress={() => this.props.navigation.goBack()}
                                                                >

                                                            <Image style={{marginLeft:30}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                                </TouchableOpacity>

                                                <View style={{flexDirection:'column' , marginLeft:20}}>
                                                {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Heading</Text>) : null }
                                            
                                                </View>
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
    
  });