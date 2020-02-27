import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image, Dimensions} from 'react-native';
import * as Font from 'expo-font'; 


export default class about extends Component {

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
      'opreg': require('./../../../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });
    
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
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>About the app</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                          <View opacity={0.1} style={{borderWidth:0.5 , backgroundColor:'black' }}></View>


            </View>

            {this.state.fontLoaded ? ( <Text style={{fontSize:15, marginBottom:15,marginTop:20,marginLeft:20 , fontFamily:'opreg'}}>About the app</Text>) : null }



                                        <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:20 , marginRight:20}}>

                                                {this.state.fontLoaded ? ( <Text placeholder={`Recepient's name`}  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Privacy Policy</Text>) : null }


                                        </TouchableOpacity>



                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ACC_N_PAY_OPT')} style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 ,borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                            {this.state.fontLoaded ? (  <Text placeholder={"Sender's name"}   placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Terms and Condition</Text>) : null }


                                </TouchableOpacity>

                                 <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                            {this.state.fontLoaded ? ( <Text placeholder={"Add optional message" }  placeholderTextColor={'grey'}  style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Rate us on Appstore</Text>) : null }


                                </TouchableOpacity>

                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20, marginTop:10 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Share the app</Text>) : null }
                                </TouchableOpacity>

                                <View opacity={0.1} style={{borderWidth:2 , backgroundColor:'grey' }}></View>


                                {this.state.fontLoaded ? ( <Text style={{fontSize:15, marginBottom:15,marginTop:20, marginLeft:20,fontFamily:'opreg'}}>FOLLOW US ON</Text>) : null }

                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Facebook</Text>) : null }
                                </TouchableOpacity>

                                

                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Instagram</Text>) : null }
                                </TouchableOpacity>


                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20, marginTop:10 , marginRight:20}}>
                                       {this.state.fontLoaded ? (  <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15, fontFamily:'opreg'}}>Linkedin</Text>) : null }
                                </TouchableOpacity>

                          

         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 });