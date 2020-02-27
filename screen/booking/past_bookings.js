import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity , StyleSheet , TextInput, StatusBar , Platform , Image , Dimensions} from 'react-native';
import * as Font from 'expo-font'; 
import Modal from 'react-native-modal';

export default class App extends Component {

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

    this.get_bookings_detail("1" ,"86")
    
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

  booking_call(sid ,bookingid){
    const baseUrl = "https://glamrella.com/api/index.php/practioner/bookingdetails?"
   const param = `customer_id=${sid}&booking_id=${bookingid}`;
   return `${baseUrl}${param}`;

 }

  get_bookings_detail = async (s_id , bookingid) => {

    try{

       const url = this.booking_call(s_id ,bookingid)
       console.log(url)

       let response = await fetch(url)
      // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)

       const completeresponse =  await response.json()
       console.log("response " , completeresponse)

       if(completeresponse.success == true){
           console.log("underif_previos_boooking")

           const arr = completeresponse.bookingdetails

           const b_date = arr.booking_date
           const b_time  = arr.booking_time
           const totalamount = arr.total_amount
           const servicetax = arr.service_tax
           const clientnaem = arr.practionername 
           const image = arr.practionerpic 

           if(arr.services >0){
             const servicearray = arr.servcies
           }

           if(arr.reviews>0){
             const rating = arr.reviews.ratings
             const reviemessage  = arr.reviews.message
           }
       }
       else if(completeresponse.message == 'No bookings Found'){
         this.setState({
           showitem:true
         })
         console.log("under no bus found")
        
     }
      

    }
    catch(e){
        console.log(e)
    }
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
                                                        <Image style={{marginLeft:30 , marginTop:20}} source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                
                                                  
                                                    </TouchableOpacity>

                                                  
                                                    {this.state.fontLoaded ? (     <Text style={{fontSize:20  , alignSelf:'center' , fontFamily:'opreg' }}>Past bookings</Text>  ) : null  } 
                                                    <Text style={{fontSize:20  , alignSelf:'center' ,color:'transparent'  }}>Head</Text>             
                                                
                          </View>

                        

            </View>


<View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:5}}></View>

      <View style={{borderColor:'green',marginTop:100,marginRight:20 , 
      borderRadius:20 ,backgroundColor:'green', width:70 , padding:3 , borderWidth:1 , borderRightColor:10  , right:0 , position:'absolute'}}>
           <Text style={{color:'white' , alignSelf:'center' , fontSize:10}}>Completed</Text>

      </View>

                  <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                    <View style={{justifyContent:'center'}}>
                                          <Image source={require('./../../assets/images/office/office.png')}></Image>
                                      </View> 

                                      <View style={{marginLeft:30}}>
                                        <Text style={{fontWeight:'bold' , fontSize:18 , marginTop:20}}>Home</Text>
                                        <Text style={{fontSize:10, marginBottom:15 , color:'grey'}}>123 Street Khayaban-e-Ittehad Phase 6, Karachi</Text>
                                      </View>

                  </View>


                    <View style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

                                    <View style={{justifyContent:'center'}}>
                                            <Image source={require('./../../assets/images/office/office.png')}></Image>
                                        </View> 

                                        <View style={{marginLeft:30}}>
                                          <Text style={{fontWeight:'bold' , fontSize:18 , marginTop:20}}> </Text>
                                          <Text style={{fontSize:10, marginBottom:15}}>11:30 - 12:10</Text>
                                        </View>

                    </View>

                      <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 
                          
                          
                                <View style={{flexDirection:'column'  }}>
                                    <Text style={{fontSize:15 }}>Brazilian Fruit Wax</Text>
                                    <Text style={{fontSize:10 , marginTop:5 , color:'grey'}}>30 - 40  Minutes</Text>
                                </View>
                            
                                <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                    <Text style={{color:'purple' ,marginRight:20}}>PKR 400</Text>
                                </View>
                          

                      </View>

                             <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginLeft:30}}> 
                                          
                                                <View style={{flexDirection:'column'  }}>
                                                    <Text style={{fontSize:15 }}>Eyebrow threading</Text>
                                                    <Text style={{fontSize:10 , marginTop:5}}>10 - 20  Minutes</Text>
                                                </View>
                                              
                                                  <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                      <Text style={{color:'purple' ,marginRight:20}}>PKR 200</Text>
                                                  </View>
                                        

                             </View>

                             <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:30  , marginRight:30 , marginTop:10 , marginBottom:10}}></View>


                            <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10, marginBottom:10 , marginLeft:30}}> 
                                    
                                            <View style={{flexDirection:'column'  }}>
                                                <Text style={{fontSize:15 , color:'grey'}}>Service tax</Text>
                                              
                                            </View>
                                  
                                            <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                <Text style={{color:'purple' ,marginRight:20}}>PKR 200</Text>
                                            </View>
                                  

                            </View>

                             <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:30  , marginRight:30 , marginTop:10 , marginBottom:10}}></View>


                            <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10 , marginBottom:10, marginLeft:30}}> 
                                    
                                              <View style={{flexDirection:'column'  }}>
                                                  <Text style={{fontSize:15  , fontWeight:'bold' }}>Total Amount</Text>
                                              
                                              </View>
                                            
                                                <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                    <Text style={{color:'purple' ,marginRight:20}}>PKR 1000</Text>
                                                </View>
                                

                            </View>

                            <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:30  , marginRight:30 , marginTop:10 , marginBottom:10}}></View>


                              <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between'  , marginTop:10, marginBottom:10 , marginLeft:30}}> 
                                      
                                              <View style={{flexDirection:'column'  }}>
                                                  <Text style={{fontSize:15 , color:'grey'}}>Points earned</Text>
                                                
                                              </View>
                                    
                                              <View style={{ justifyContent:'center' , alignContent:'center'}}>
                                                  <Text style={{color:'purple' ,marginRight:20}}>10 points</Text>
                                              </View>
                                    

                              </View>

                            <View style={{borderColor:'#e8e8e8' , borderWidth:1 , marginLeft:20  , marginRight:20 , marginTop:10 , marginBottom:10}}></View>


                                  <View style={{marginRight:20 ,flexDirection:'row', justifyContent:'space-between' 
                                   , marginTop:30 , marginBottom:10, marginLeft:30}}> 
                                    
                                            <View style={{flexDirection:'column'  }}>
                                                <Text style={{fontSize:20  , fontWeight:'bold' }}>Rija Arsalan</Text>
                                                <Text style={{fontSize:10  , color:'grey' }}>Practictioner</Text>
                                            
                                            </View>
                                          
                                              <TouchableOpacity 
                                              onPress={ () => this.openmodal()}
                                              style={{ justifyContent:'center' , alignContent:'center'  , flexDirection:'row' , marginTop:5}}>
                                               
                                                  <Text style={{marginRight:20 , marginLeft:10 , fontSize:15 , color:'green'}}>Rate now</Text>
                                              </TouchableOpacity>
                      

                                  </View>

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


});