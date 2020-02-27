import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , Platform , StyleSheet, TextInput , Dimensions , StatusBar , Image} from 'react-native';
import Modal from 'react-native-modal';
import * as Font from 'expo-font';  


const users = [
  {
    key: '5a31077f6dda99e234ad6727',
    name: 'Brazilian Regular Wax',
    company: 'EXOVENT',
    email: 'Removal of hair from the bikini area, leaving a neat strip',
    price: 'PKR 200' ,
    time:'20-30 Minutes'
  },
  {
    key: '5a31077fcbee1cf54eed6c61',
    name: 'Hollywood Regular Wax',
    company: 'COREPAN',
    email: 'A total removal of hair',
    price: 'PKR 300' ,
    time:'30-40 Minutes'
  },
  {
    key: '5a31077fcb4a048c957901e4',
    name: 'Brazilian Fruit Wax',
    company: 'SECURIA',
    email: 'A total removal of hair from front and back',
    price: 'PKR 400',
    time:'40-50 Minutes'
  },
  {
    key: '5a31077f8234793502990437',
    name: 'Hollywood Fruit Wax',
    company: 'COMBOGEN',
    email: 'A total removal of hair',
    price: 'PKR 500' ,
    time:'50-60 Minutes'
  },
  {
    key: '5a31077f2e924b8d4d4e7c3b',
    name: 'Line Fruit Wax',
    company: 'DADABASE',
    email: 'A total removal of hair',
    price: 'PKR 600' ,
    time:'60-70 Minutes'
  },
  {
    key: '5a31077f7a32fb6cad442782',
    name: 'Conway Glenn',
    company: 'TWIGGERY',
    email: 'A total removal of hair',
    price: 'PKR 700' ,
    time:'70-80 Minutes'
  },
  {
    key: '5a31077f523fa49141e3bb9f',
    name: 'Sandy Emerson',
    company: 'GEEKNET',
    email: 'A total removal of hair',
    price: 'PKR 800' ,
    time:'10-30 Minutes'
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Socorro Hebert',
    company: 'GADTRON',
    email: 'A total removal of hair',
    price: 'PKR 900' ,
    time:'20-60 Minutes'
  },
  {
    key: '5a31077f69db14dce94c8474',
    name: 'Nannie Wyatt',
    company: 'GEEKMOSIS',
    email: 'A total removal of hair',
    price: 'PKR 1000' ,
    time:'40-80 Minutes'
  },
 
];

export default class otherservices extends Component {
    static navigationOptions ={
        header: null 
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

  addtocart = () => {
    this.setState({
      visibleModal: null
    })
    this.props.navigation.navigate('BASKET')
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

                  <Text style={{marginTop:50 , marginLeft:20 ,  fontWeight:'bold' , fontSize:20 , }}>Book Brazilian Regular Wax!</Text>


                  <View style={{marginTop:10 ,flexDirection:'row' , justifyContent:'space-between' , marginLeft:20 , marginRight:20 , marginTop:20 , marginBottom:20}}>

                    <Text style={{color:'transparent'}}>1</Text>
                    <Text>1 Person</Text>
                    <Text style={{color:'transparent'}}>1</Text>


                  </View>


                  <View style={{width:'100%' , borderWidth:5 , borderColor:'#e8e8e8'}}></View>

                  <Text style={{marginTop:30 , marginLeft:20 , fontSize:15}}>Duration</Text>

                  <View style={{width:'100%',marginLeft:20 , marginRight:20 , borderWidth:1 , borderColor:'#e8e8e8',marginTop:10}}></View>

                  <Text style={{marginTop:30 , marginLeft:20 ,fontWeight:'bold'  ,fontSize:15}}>45 Minutes</Text>



                <TouchableOpacity 
                onPress={() => this.addtocart()}
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
      <View>
                  <View>
                          
                          <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                          <StatusBar hidden={false} />
                          <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                          <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:100 , marginTop:15 }}>
                                  <TouchableOpacity 
                                                  onPress={() => this.props.navigation.goBack()}
                                                  >

                                              <Image style={{marginLeft:20}}
                                                source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                  </TouchableOpacity>

                                  <View style={{flexDirection:'column' , marginLeft:20}}>
                                  {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Hair Removal</Text>) : null }
                              
                                  </View>
                          </View>


                   </View>

        <ScrollView>

       
{/* <Text style={{marginTop:50 ,fontSize:25 , fontWeight:'700' , marginLeft:20}}>Hair Removal</Text> */}
   

      <FlatList
      style={{backgroundColor:'#e8e8e8'}}
        data={users}
        renderItem={({ item }) => (
          <View>
          <View
            style={{
              marginTop:10 ,
              
              backgroundColor:'white' ,
              borderRadius:10 ,
              marginRight:20 ,
              marginLeft:20 ,
              padding:20 ,
              height:150 ,
              width:'90%' ,
              borderWidth: 1,
              borderColor: 'transparent',
              padding: 10
            }}>
            <View>
              <Text style={{fontSize: 18 }}>{item.name}</Text>
              <Text style={{fontSize: 13 }}>{item.time}</Text>

              <Text style={{fontSize: 15 , marginTop:10 , fontWeight:'700' , color:'#d3d3d3' }}>{item.email}</Text>
              <Text style={{right:0 ,position:'absolute' , margin:5 , color:'purple' }}>{item.price}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => this.openmodal()}
            style={{borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , borderRadius:10, height:20 , bottom:0 ,margin:20,width:130 , right:0 ,position:'absolute' }}>
            <Text style={{alignSelf:'center'  , color:'white'}}>Add to basket</Text>
            </TouchableOpacity>
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