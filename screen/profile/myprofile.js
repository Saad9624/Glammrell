import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image , Dimensions} from 'react-native';
import * as Font from 'expo-font'; 
import Modal from 'react-native-modal';

export default class myprofile extends Component {

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
      'opreg': require('./../../assets/fonts/avlight.ttf'),
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

  _renderModalContent = () => (
    <View style={{backgroundColor:'white' ,  height:Dimensions.get('window').height / 100 * 50,    borderTopLeftRadius:30 , borderTopRightRadius:30}}>


              

          <TouchableOpacity 
                 onPress={() => this.closemodal()}
                style={{flex:1,backgroundColor:'white' , 
                borderTopRightRadius:30 , borderTopLeftRadius:40,marginTop:10}}>

                        <TouchableOpacity
                          onPress={() => this.closemodal()}
                        style={{right:0 , position:'absolute' , margin:20}}>
                            <Image source={require('./../../assets/images/close/close.png')}></Image>
                        </TouchableOpacity>
    
                        <Text style={{marginTop:50 ,  fontWeight:'bold' , fontSize:20}}>Add a profile photo</Text>
    

                       <Text style={{color:'grey' , fontSize:15,marginTop:5 }}>A profile photo isn't a requirement for using Glamrella but it can help your practioner to recognise you when you meet.</Text>

                  
                       
      
                       <Image style={{width:100, alignSelf:'center' , height:100}}  source={require('./../../assets/images/placehold/placeholder.png')} ></Image>
                                                    
        

                <TouchableOpacity 
                onPress={() => this.closemodal()}
                style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'  , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

                  <Text style={{alignSelf:'center' , color:'white'}}>Upload photo</Text>
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
                                                                  //  onPress={() => this.openmodal()}
                                                                    >

                                                                     <Image style={{marginLeft:30}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                                    </TouchableOpacity>

                                                    <View style={{flexDirection:'column' , marginLeft:20}}>
                                                    {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Profile</Text>) : null }
                                                
                                                    </View>
                                            </View>


                           </View>

                                       <View style={{marginRight:20 ,flexDirection:'row' 
                                                 , marginTop:30 , marginBottom:10, marginLeft:30}}> 

                                                        <TouchableOpacity 
                                                         onPress={() => this.openmodal()}
                                                        >
                                                             <Image style={{width:60 , height:60}}  source={require('./../../assets/images/placehold/placeholder.png')} ></Image>
                                                    

                                                        </TouchableOpacity>
                                                           
                                                                <View style={{flexDirection:'column' , marginLeft:20 , marginTop:12  }}>
                                                                    <Text style={{fontSize:20  , fontWeight:'bold' }}>Alyna butt</Text>
                                                                    <Text style={{fontSize:10  , color:'grey' }}>alynabut1234@gmail.com</Text>
                                                                
                                                                </View>
                                                
                                                
                                        </View>




                    <View style={styles.line}></View>


                  <TouchableOpacity style={styles.mv}>

                                    
                                          <Image style={{marginTop:2}} source={require('./../../assets/images/wallet/wallet.png')}></Image>
                                          {this.state.fontLoaded ? (     <Text style={styles.txt}>Wallet</Text>) : null }
                                     

                  </TouchableOpacity>


                   <TouchableOpacity onPress={() => this.props.navigation.navigate('MY_ADDR')} style={styles.mv}>

                                    
                                        <Image style={{marginTop:2}}  source={require('./../../assets/images/location/loc.png')}></Image>
                                        {this.state.fontLoaded ? (     <Text style={styles.txt}>My Addresses</Text>) : null }


                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Tabs')}
                        style={styles.mv}>

                                                        
                                                <Image style={{marginTop:1}}  source={require('./../../assets/images/gift/gift.png')}></Image>
                                                {this.state.fontLoaded ? (     <Text style={styles.txt}>Gift Cards</Text>) : null }


                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SUPPORT')}  style={styles.mv}>


                                        <Image  source={require('./../../assets/images/support/support.png')}></Image>
                                        {this.state.fontLoaded ? (     <Text style={styles.txt}>Support</Text>) : null }


                            </TouchableOpacity>


                            <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('ABOUT')}
                            style={styles.mvlast}>

                                                                            
                                        <Image style={{marginTop:5}} source={require('./../../assets/images/about/about.png')}></Image>
                                        {this.state.fontLoaded ? (     <Text style={styles.txt}>About the app</Text>) : null }


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
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
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