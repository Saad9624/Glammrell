import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image , Dimensions} from 'react-native';
import * as Font from 'expo-font'; 
import Modal from 'react-native-modal';

export default class addaddress extends Component {

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
      'opreg': require('./../../assets/fonts/opreg.ttf'),
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
    <View style={{backgroundColor:'white' ,  height:Dimensions.get('window').height / 100 * 90,    borderTopLeftRadius:30 , borderTopRightRadius:30}}>


              

          <TouchableOpacity 
                 onPress={() => this.closemodal()}
                style={{flex:1,backgroundColor:'white' , 
                borderTopRightRadius:30 , borderTopLeftRadius:40,marginTop:10}}>

                        <TouchableOpacity
                          onPress={() => this.closemodal()}
                        style={{right:0 , position:'absolute' , margin:20}}>
                            <Image source={require('./../../assets/images/close/close.png')}></Image>
                        </TouchableOpacity>
    
                        <Text style={{marginTop:50 ,  fontWeight:'bold' , fontSize:20,alignSelf:'center'}}>Rija Aslam</Text>
    

                       <Text style={{color:'grey' , fontSize:15,marginTop:5 , alignSelf:'center'}}>Wednesday, December 11</Text>

                  
                        <Text style={{marginTop:5 , alignSelf:'center' ,fontWeight:'bold'  ,fontSize:15 , color:'purple'}}>PKR 800</Text>
                       
      
                      
                        <Text style={{marginTop:20 , fontWeight:'bold'  ,fontSize:20 , alignSelf:'center'}}>How was your last appointment</Text>


                          <View style={{backgroundColor:'#e8e8e8', marginTop:50 , width:'80%' , alignSelf:'center' , height:160 , borderRadius:10}}>
                          
                          <Text style={{color:'grey' , fontSize:10 , margin:10}}>
                            Please tell us more.This helps us to make our service better for you.
                          </Text>
                          </View>

                <TouchableOpacity 
                onPress={() => this.closemodal()}
                style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'  , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

                  <Text style={{alignSelf:'center' , color:'white'}}>Done</Text>
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



                          <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 , justifyContent:'space-between' , alignContent:'center' }}>
                                                
                                                <TouchableOpacity 
                                                    onPress={() => this.props.navigation.goBack()} >
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Add Address</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                        

            </View>


<View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:5}}></View>

    

                  <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'transparent',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                   

                                         <View style={{marginLeft:20}}>
                                               <Text style={{fontWeight:'bold' , fontSize:25 , marginTop:20}}>Where do you want your appointment</Text>
                                         </View>

                  </View>

              <TextInput style={{marginLeft:20 , marginRight:20 , marginTop:10}} placeholder={"Enter Address"}></TextInput>

              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('ADD_ADDR')}
              style={{bottom:0 , position:'absolute' , marginBottom:30 , height:40 , justifyContent:'center' , width:'80%' , alignSelf:'center' 
              , backgroundColor:'#F4CA09' , borderRadius:20}}>
                <Text style={{alignSelf:'center' , color:'white'}}>Locate me</Text>
              
              </TouchableOpacity>
                                                  
                  <View style={styles.line}></View>

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
 line:{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:10 , marginRight:20 , marginLeft:20} ,

});