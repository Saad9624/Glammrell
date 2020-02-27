import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image , Dimensions} from 'react-native';
import * as Font from 'expo-font'; 
import Modal from 'react-native-modal';

export default class enter_num extends Component {

      static navigationOptions ={
        header: null  ,
        gesturesEnabled: false,
    }

    state={
      visibleModal: null,
      fontLoaded: false,
      OtpNumber1 :'' ,
      OtpNumber2 :'' ,
      OtpNumber3 :'' ,
      OtpNumber4 :'' ,
  }

 async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../../../assets/fonts/avlight.ttf'),
    });

    await Font.loadAsync({
        'avbold': require('./../../../assets/fonts/avbold.ttf'),
      });

    this.setState({ fontLoaded: true });
    
  }

  openmodal = () =>{
    this.setState({
      visibleModal : 5
    })
  }

  closemodal = () =>{
    this.setState({
      visibleModal: null
    })
  }

  onTextChange = text => {
    this.setState({OtpNumber1 : text});
    if(text.length == 1){
      this.input2.focus()
    }
 }
 onTextChange1 = text => {
  this.setState({OtpNumber2 : text});
  if(text.length == 1){
    this.input3.focus()
  }
}
onTextChange2 = text => {
this.setState({OtpNumber3 : text});
if(text.length == 1){
  this.input4.focus()
}
}
onTextChange3 = text => {
this.setState({OtpNumber4 : text});
if(text.length == 1){
  Keyboard.dismiss()
}
}

  _renderModalContent = () => (
    <View style={{backgroundColor:'white' ,  height:Dimensions.get('window').height / 100 * 60,    borderTopLeftRadius:30 , borderTopRightRadius:30}}>


              

          <TouchableOpacity 
                 onPress={() => this.closemodal()}
                style={{flex:1,backgroundColor:'white' , 
                borderTopRightRadius:30 , borderTopLeftRadius:40,marginTop:10}}>

                        <TouchableOpacity
                          onPress={() => this.closemodal()}
                        style={{right:0 , position:'absolute' , margin:20}}>
                            <Image source={require('./../../../assets/images/close/close.png')}></Image>
                        </TouchableOpacity>
    
                        <Text style={{marginTop:50 ,  fontWeight:'bold' , fontSize:20, marginLeft:20 }}>Enter OTP</Text>
    

                       <Text style={{color:'grey' , fontSize:15,marginTop:5 , marginLeft:20 }}>We have sent a four digit code to the {'\n'} number +92330 12345</Text>

                  
                       <View style={{alignSelf:'center',flexDirection:'row' ,marginTop:20}}>

<TextInput secureTextEntry={true} ref={input1 => this.input1 = input1} onSubmitEditing={() => this.input2.focus()} textAlign={'center'} onChangeText={this.onTextChange} maxLength={1} keyboardType = 'numeric' style={{width: 62.5,borderBottomColor:'grey' , borderBottomWidth : 1 , marginRight:5 }} >{this.state.OtpNumber1}</TextInput>
<TextInput  secureTextEntry={true} ref={input2 => this.input2 = input2} onSubmitEditing={() => this.input3.focus()} textAlign={'center'}  onChangeText={this.onTextChange1} maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'grey' , borderBottomWidth : 1  , marginRight:5 , alignSelf:'center'}} >{this.state.OtpNumber2}</TextInput>
<TextInput secureTextEntry={true}  ref={input3 => this.input3 = input3} onSubmitEditing={() => this.input4.focus()} textAlign={'center'}  onChangeText={this.onTextChange2} maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'grey' , borderBottomWidth : 1  , marginRight : 5 , alignSelf:'center'}} >{this.state.OtpNumber3}</TextInput>
<TextInput secureTextEntry={true}  ref={input4 => this.input4 = input4} textAlign={'center'}  onChangeText={this.onTextChange3}maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'grey' , borderBottomWidth : 1  , alignSelf:'center'}} >{this.state.OtpNumber4}</TextInput>



</View>
<Text style={{alignSelf:'center' , color:'purple' , marginTop:10 , fontWeight:'bold'}}>RESEND CODE</Text>
                                                   
        

                <TouchableOpacity 
                onPress={() => this.closemodal()}
                style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'  , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

                  <Text style={{alignSelf:'center' , color:'white'}}>Submit</Text>
                </TouchableOpacity>


                </TouchableOpacity>

                 



{/*      
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
    </View>
  );



    
  render() {
    return (
      <View style={{flex:1 }}>
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
                                
                                    {this.state.fontLoaded ? (<Text style={{fontSize:30 , marginTop:5  , fontFamily:'avbold'}}>Enter a phone number </Text>) : null }
                                    {this.state.fontLoaded ? (<Text style={{fontSize:15 , marginTop:5 ,color:'grey' , fontFamily:'opreg'}}>This is for us to contact you in relation to {'\n'}our booking </Text>) : null }
                

                                    </View>
                            </View>

                </View>

                     
                                {this.state.fontLoaded ? (  <Text style={styles.T2}>Phone Number</Text>) : null }
                                {this.state.fontLoaded ? (   <TextInput style={styles.T1}
                                  placeholder={'+92 300 1234567'}
                                  ></TextInput>) : null }

                           

                    <TouchableOpacity
                                                onPress={() => this.openmodal()}
                                                    style={{marginRight:20 , borderRadius:15,bottom:0, right:0 ,marginBottom:20, marginRight:20 , position:'absolute' ,
                                                     width:100 ,padding:10 ,marginTop:5   , height:30 , backgroundColor:'#F4CA09',justifyContent:'center',alignItems:'center' }}>
                                                {this.state.fontLoaded ? ( <Text style={{alignSelf:'center' , color:'white' , fontFamily:'opreg'}}>NEXT</Text>) : null }
            
                                        </TouchableOpacity>
                           

                                <Modal
                                   transparent={true}
                                      animationType="fade"
                                    backdropColor={'grey'}
                                    backdropTransitionOutTiming={0}
                                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                                    {this._renderModalContent()}
          
                                 </Modal>           

         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20, fontFamily:'opreg' , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:130 , fontFamily:'opreg'}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 

, v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
 v3: {marginTop:15, flexDirection:'row' , justifyContent:'space-around' , borderBottomColor:'grey'  , borderBottomWidth:1 , borderTopColor:'transparent'}
,
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },
mc:{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',
marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20} ,
mv:{padding:15 ,flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',
borderBottomWidth:1, marginTop:5,marginBottom:7 , marginRight:20 , alignContent:'center'},

mvlast:{padding:15 ,flexDirection:'row' , marginLeft:20 , borderBottomColor:'transparent',
borderBottomWidth:1, marginTop:5 , marginRight:20 , alignContent:'center'}

,
line:{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:15 , marginRight:10 , marginLeft:10} ,

txt:{fontSize:15 , marginLeft:20 , fontFamily:'opreg'}
});