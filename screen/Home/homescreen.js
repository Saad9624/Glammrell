import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StatusBar , Platform , Image , StyleSheet , Dimensions} from 'react-native';
import * as Font from 'expo-font';   
import Modal from 'react-native-modal';

const users = [
  {
    key: '5a31077f6dda99e234ad6727',
    name: 'Cathy Gilliam',
    company: 'EXOVENT',
    email: 'cathygilliam@exovent.com',
    price: 'PKR 200'
  },
  {
    key: '5a31077fcbee1cf54eed6c61',
    name: 'Norton Potts',
    company: 'COREPAN',
    email: 'nortonpotts@corepan.com',
    price: 'PKR 300'
  },
  {
    key: '5a31077fcb4a048c957901e4',
    name: 'Kelly Collins',
    company: 'SECURIA',
    email: 'kellycollins@securia.com',
    price: 'PKR 400'
  },
  {
    key: '5a31077f8234793502990437',
    name: 'Leach Harrison',
    company: 'COMBOGEN',
    email: 'leachharrison@combogen.com',
    price: 'PKR 500'
  },
 
];

export default class homescreen extends Component {

    static navigationOptions ={
        header: null  ,
        gesturesEnabled: false,
    }

    state = {
      fontLoaded: false,
      visibleModal: null,
  
    };

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
      
                          <Text style={{marginTop:50 , marginLeft:20 ,  fontWeight:'bold' , fontSize:20 , }}>Package Name 1</Text>
      

                         <Text style={{color:'grey' , fontSize:15,marginLeft:20,marginTop:40}}>This Package includes</Text>
  
                    
                          <Text style={{marginTop:30 , marginLeft:40 ,fontWeight:'bold'  ,fontSize:15}}>Brazilian Fruit Wax </Text>
                          <Text style={{marginTop:10 , marginLeft:40 , fontSize:10 , color:'grey'}}>30-40 minutes</Text>
        
                        
                          <Text style={{marginTop:30 , marginLeft:40 ,fontWeight:'bold'  ,fontSize:15}}>Eyebrow threading</Text>
                          <Text style={{marginTop:10 , marginLeft:40 , fontSize:10 , color:'grey'}}>10 minutes</Text>

                          <Text style={{marginTop:30 , marginLeft:40 ,fontWeight:'bold'  ,fontSize:15}}>Full Arm Wax</Text>
                          <Text style={{marginTop:10 , marginLeft:40 , fontSize:10 , color:'grey'}}>20-25 minutes minutes</Text>
        
                            <View style={{width:'100%', borderWidth:1 , borderColor:'#e8e8e8',marginTop:20}}></View>

                          
                          <Text style={{marginTop:30 , marginLeft:40 , fontSize:10 , color:'grey'}}>Total Amount  </Text>
                          <Text style={{marginTop:10 , marginLeft:40 ,fontWeight:'800' , color:'purple'  ,fontSize:20}}>PKR 1,800</Text>

                  <TouchableOpacity 
                 onPress={() => this.closemodal()}
                  style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'  , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>
  
                    <Text style={{alignSelf:'center' , color:'white'}}>Add to Basket</Text>
                  </TouchableOpacity>
  
  
                  </TouchableOpacity>
  
                   
  
  
  
  {/*      
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
      </View>
    );


  render() {
    return (
      <View style={{marginLeft:20}}>
        <ScrollView >

       
                        <View>
                                    <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                    <StatusBar hidden={false} />
                                    <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                    <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15 }}>
                                        

                                            <View style={{flexDirection:'column'}}>
                                            {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Home</Text>) : null }
                                        
                                            </View>
                                    </View>
                        </View>
   
      <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SEARCH')}
            style={{backgroundColor:'#e8e8e8' , height:30 , borderRadius:10, marginTop:20  ,width:'95%' , justifyContent:'center' }}>
            <Image source={require('./../../assets/images/search/search.png')} style={{right:0 , position:'absolute' , marginRight:20}}></Image>

      </TouchableOpacity>
   <Text style={{fontSize:18 , fontWeight:'bold', marginTop:20}}>Explore our range of services</Text>
      <FlatList
      style={{marginTop:10 }}
      horizontal
        data={users}
        renderItem={({ item }) => (
          <View>
          <View
          opacity={0.5}
            style={{
              backgroundColor:'#F4CA09' ,
              borderRadius:10 ,
              marginRight:10 ,
              padding:20 ,
              height:100 ,
              width:100 ,
              borderWidth: 1,
              borderColor: '#F4CA09',
              padding: 10
            }}>
            <View>
              <Text style={{color:'transparent' , fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
             
            </View>
          </View>
          <Text style={{color:'grey' , fontWeight:'600' , marginTop:5, fontSize:10 , marginLeft:4 }}>{item.company}</Text>
          <Text style={{color:'purple'  , fontWeight:'800' , marginTop:3, fontSize:8 , marginLeft:4 }}>{item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SERVICE')}>
      <Text style={{fontSize:18 , fontWeight:'bold', marginTop:20}}>Services</Text>
      </TouchableOpacity>
     
       <FlatList
      style={{marginTop:10 }}
      horizontal
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity  onPress={() => this.openmodal()} >
                  <View
                  opacity={0.4}
                    style={{
                      backgroundColor:'purple' ,
                      borderRadius:10 ,
                      marginRight:10 ,
                      padding:20 ,
                      height:140 ,
                      width:180 ,
                      borderWidth: 1,
                      borderColor: 'purple',
                      padding: 10
                    }}>
                          <View>
                            <Text style={{color:'transparent' , fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                          
                          </View>
                  </View>
          </TouchableOpacity>
        )}
      />
  <TouchableOpacity
   onPress={() => this.props.navigation.navigate('BOOKINGTAB')}
  >

        <Text style={{fontSize:18 , fontWeight:'bold', marginTop:20}}>Bookings tabs</Text>
  </TouchableOpacity>

       <FlatList
      style={{marginTop:10 }}
      horizontal
        data={users}
        renderItem={({ item }) => (
          <View>
          <View
           opacity={0.5}
            style={{
              backgroundColor:'#FF4D56' ,
              borderRadius:10 ,
              marginRight:10 ,
              padding:20 ,
              height:120 ,
              width:220 ,
              borderWidth: 1,
              borderColor: '#FF4D56',
              padding: 10
            }}>
            <View>
              <Text style={{color:'transparent' , fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
             
            </View>
          </View>
          </View>
        )}
      />

       </ScrollView>

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
    
  statusBarBackground: {
      height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
            backgroundColor: "#FFFFFF",
    },

    v1: {borderColor:'blue' ,borderRadius:20 , borderWidth:1  , width:120 , alignSelf:'center' , height:30} ,
    v2: {borderColor:'grey' ,borderRadius:20 , borderWidth:1 , width:120, alignSelf:'center', height:25} ,
    v3: {marginTop:15, flexDirection:'row' , justifyContent:'space-around' , borderBottomColor:'grey'  , borderBottomWidth:1 , borderTopColor:'transparent'}
,
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },


  });

