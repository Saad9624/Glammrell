import React from 'react' ;
import  {View, Text , TextInput , StyleSheet, Platform,Image ,TouchableOpacity , StatusBar , Dimensions} from 'react-native' ;
import Header from './../components/header' 

import Modal from 'react-native-modal';
import * as Font from 'expo-font'; 

import * as GoogleSignIn from 'expo-google-sign-in';

export default class signup extends React.Component{

    static navigationOptions ={
        header: null 
    }

    state={
        visibleModal: null,
        fontLoaded: false, 
        user: null
    }



 async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });
    this.initAsync();
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

      movetolocatescreen =() =>{
        this.setState({
          visibleModal: null
        })

        this.props.navigation.navigate('ADD_ADDR')
      }

    _renderModalContent = () => (
        <TouchableOpacity  onPress = {() => this.closemodal()}
         style={{backgroundColor:'white' , height:Dimensions.get('window').height / 100 * 50  , borderTopLeftRadius:40 , borderTopRightRadius:40}}>

    
                      <TouchableOpacity
                       onPress = {() => this.closemodal()}
                      >
                           <Text style={{fontSize:20 , color:'black', padding:15 , fontWeight:'bold' , marginTop:20 , marginLeft:30 , marginRight:30}}>Where do you want your appointment?</Text>
                      </TouchableOpacity>
    
                      <View style={styles.v3}>
                       
                        <TextInput placeholder={"Email Address"}
                         style={{marginBottom:10 , marginLeft:20 , marginRight:20}}></TextInput>
                    </View>



                      <TouchableOpacity 
                      onPress={() => this.movetolocatescreen()}
                      style={{alignSelf:'center' ,backgroundColor:'#F4CA09' , borderRadius:30 , width:'80%' , bottom:0 , 
                      position:'absolute' , marginBottom:20}}>
                           <Text style={{fontSize:15 , color:'white', padding:15 , alignSelf:'center'}}>Locate me</Text>
                      </TouchableOpacity>
    {/*      
          {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
        </TouchableOpacity>
      );

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

                                                <Image style={{marginLeft:30}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.onPress} style={{flexDirection:'column' , marginLeft:20}}>
                                               {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Sign up</Text>) : null }
                                
                                    </TouchableOpacity>
                            </View>


                </View>
          {/* <Text style={{fontSize:30  , fontWeight:'bold' , marginLeft:20}}>Sign up</Text> */}
          <Text style={{fontSize:15  , marginLeft:20 , marginTop:20}}>Join the xxx community</Text>
  
  
  <View style={{flexDirection:'row' , marginLeft:20 , marginRight:20 , marginTop:20}}>
  
  
    <TouchableOpacity style={{borderColor:'grey' , borderWidth:1 , borderRadius:25 , backgroundColor:'#3b5998' , height:40 ,flex:1 , marginRight:10 ,}}>
      <Text style={{alignSelf:'center' , color:'white' , marginTop:8}}>Facebook</Text>
    </TouchableOpacity>
  
    <TouchableOpacity style={{borderColor:'#e8e8e8`' , borderWidth:1 , borderRadius:25 , backgroundColor:'white' , height:40 ,flex:1 , marginLeft:10}}>
    <Text style={{alignSelf:'center' , color:'#d3d3d3' , marginTop:8}}>Google</Text>
    </TouchableOpacity>
  </View>
  <Text style={{fontSize:15  , marginLeft:20 , alignSelf:'center' , marginTop:10}}>or signup with an email</Text>
  <View style={{marginTop:20}}></View>
  <Text style={styles.T2}>Full name</Text>
          <TextInput style={styles.T1}
          placeholder={'Enter Building no'}
          ></TextInput>
  
  <Text style={styles.T2}>Email</Text>
          <TextInput style={styles.T1}
          placeholder={'Enter Email'}
          ></TextInput>
  
  <Text style={styles.T2}>Password</Text>
          <TextInput style={styles.T1}
          placeholder={'Enter Password'}
          ></TextInput>
  
  <Text style={styles.T2}>City</Text>
          <TextInput style={styles.T1}
          placeholder={'Enter City'}
          ></TextInput>
  
  <TouchableOpacity 
     onPress={() => this.openmodal()}
  style={{ marginBottom:30 , alignSelf:'center',width:'80%' , borderColor:'#FF4D56'
   , borderWidth:1 , borderRadius:30 , backgroundColor:'#FF4D56' , height:40 , bottom:0 , position:'absolute' , marginRight:10 ,}}>
  
    <Text style={{color:'white' , alignSelf:'center',marginTop:10}}>Sign up</Text>
  </TouchableOpacity>
  
        
       
                    

            {/* <TouchableOpacity
            onPress={() => this.openmodal()}
            style={{marginTop:100 ,alignItems:'center' , alignContent:'center', height:30 , borderColor:'pink' , borderRadius:20 , alignSelf:'center' ,borderWidth:1 ,width:'80%' ,backgroundColor:'pink' }}>

                <Text style={{alignSelf:'center',marginTop:5 , color:'white' }}>
                    Signup
                </Text>
            </TouchableOpacity> */}


            <Modal
             transparent={true}
                                      animationType="fade"
                                    backdropColor={'grey'}
                                    backdropTransitionOutTiming={0}
                                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                                    {this._renderModalContent()}
          
                                 </Modal>
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
      v3: {marginTop:15, flexDirection:'row'  , borderBottomColor:'#d3d3d3'
        , borderBottomWidth:1 , borderTopColor:'transparent' , marginLeft:30  , marginRight:30}
  ,
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },

      T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
      , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
    // ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}


    });