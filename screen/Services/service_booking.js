import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar , Platform ,
} from 'react-native';
import * as Font from 'expo-font';


export default class service_booking extends React.Component{

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
            <View style={{flex:1}}>

            <View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 

                <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 }}>
                                        <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()}
                                                        >

                                                        <Image style={{marginTop:15 ,  marginLeft:25}}
                                                         source={require('./../../assets/images/backbtn/back.png')}></Image>

                                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:25}}>
                                        {this.state.fontLoaded ? (    
                                                   <Text style={{fontSize:25 , marginTop:10 , fontFamily:'opreg'}}>Book Opointment</Text> ) : null }
                                     
                                        </View>
                              </View>

                              <View elevation={1} style={{width:'100%' ,height:100,borderTopWidth:1 ,borderRightWidth:1 ,borderLeftWidth:1,borderTopColor:'grey'  , borderRadius:40 ,shadowColor: 'black',shadowOpacity: 1.0,}}>
<Text style={{alignSelf:'center'}}>Book</Text>
</View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
 statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
      }
  });