import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView, TouchableOpacity ,
   StyleSheet , TextInput, StatusBar,Platform , Image,
  } from 'react-native';
import * as Font from 'expo-font'; 


export default class App extends Component {

    static navigationOptions ={
        header: null  ,
        gesturesEnabled: false,
    }
    state={
      visibleModal: null,
      fontLoaded: false,
      previos_booking_arr :[] ,
      next_booking_arr:[]
  }

 async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });

    this.get_next_bookings("1")
    this.get_previous_bookings("1")
    
  }

  previous_booking_call(sid){
    const baseUrl = "https://glamrella.com/api/index.php/practioner/previousbookings?"
   const param = `practioner_id=${sid}`;
   return `${baseUrl}${param}`;

 }

  get_previous_bookings = async (s_id) => {

    try{

       const url = this.previous_booking_call(s_id)
       console.log(url)

       let response = await fetch(url)
      // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)

       const completeresponse =  await response.json()
       console.log("response " , completeresponse)

       if(completeresponse.success == true){
           console.log("underif_previos_boooking")
           const st_array = completeresponse.previousbooking 

           this.setState({
            previos_booking_arr:st_array,
            showitem:false
           })
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


 next_booking_call(sid){
  const baseUrl = "https://glamrella.com/api/index.php/practioner/newbookings?"
 const param = `practioner_id=${sid}`;
 return `${baseUrl}${param}`;

}

get_next_bookings = async (s_id) => {

  try{

     const url = this.next_booking_call(s_id)
     console.log(url)

     let response = await fetch(url)
    // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)

     const completeresponse =  await response.json()
     console.log("response " , completeresponse)

     if(completeresponse.success == true){
         console.log("underif_previos_boooking")
         const st_array = completeresponse.previousbooking 

         this.setState({
          next_booking_arr:st_array,
          showitem:false
         })
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
     

                             <View style={{marginLeft:20}}>
                                          
                                          <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                          <StatusBar hidden={false} />
                                          <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                          <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:100 , marginTop:15 }}>
                                                  <TouchableOpacity 
                                                                  onPress={() => this.props.navigation.goBack()}
                                                                  >

                                                              <Image
                                                                source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                                  </TouchableOpacity>

                                                  <View style={{flexDirection:'column' }}>
                                                  {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Bookings</Text>) : null }
                                              
                                                  </View>
                                          </View>


                            </View>
                            {this.state.fontLoaded ? ( <Text style={{color:'grey',marginTop:10,marginLeft:20, fontFamily:'opreg'}}>UPCOMING</Text>) : null }


                  

                    <FlatList
                            data={ this.state.previos_booking_arr }
                            keyExtractor={(item,index)=>index}
                            renderItem={({item}) =>
                              ( 
                                  
                                <TouchableOpacity
                                onPress= { ()=> this.props.navigation.navigate('UPCOMING_BOOKING')}
                                style={{flexDirection:'row' , marginLeft:20 , marginTop:10}}>
            
                                      <View style={{justifyContent:'center'}}>
                                          <Image source={require('./../../assets/images/office/office.png')}></Image>
                                      </View> 
            
                                      <View style={{marginLeft:30 , marginTop:10}}>
                              {this.state.fontLoaded ? ( <Text style={{fontWeight:'bold' , fontSize:18, fontFamily:'opreg'}}>{item.booking_date}</Text>) : null }
                              {this.state.fontLoaded ? ( <Text style={{fontSize:10, marginBottom:15, fontFamily:'opreg'}}>{item.booking_time}</Text>) : null }
                                        </View>
                                  
                                </TouchableOpacity>
                          )}
                            keyExtractor={(item, index) => index.toString()}
                          />



                   

        <View style={{borderColor:'#e8e8e8' , borderWidth:5 , marginTop:10 }}></View>

        {this.state.fontLoaded ? ( <Text style={{color:'grey',marginTop:10,marginLeft:20, fontFamily:'opreg'}}>PAST</Text>) : null }


        

        <FlatList
                            data={ this.state.previos_booking_arr }
                            keyExtractor={(item,index)=>index}
                            renderItem={({item}) =>
                              ( 
                                  
                                <TouchableOpacity
        onPress= { ()=> this.props.navigation.navigate('PAST_BOOKING')}
        style={{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20}}>

               <View style={{justifyContent:'center'}}>
                      <Image source={require('./../../assets/images/office/office.png')}></Image>
                  </View> 

                  <View style={{marginLeft:30 , marginTop:10}}>
                              {this.state.fontLoaded ? ( <Text style={{fontWeight:'bold' , fontSize:18}}>{item.booking_date}</Text>) : null }
                              {this.state.fontLoaded ? (<Text style={{fontSize:10, marginBottom:15}}>{item.booking_time}</Text>) : null }
                  </View>
          
        </TouchableOpacity>
                          )}
                            keyExtractor={(item, index) => index.toString()}
                          />

      
         </View>
    );
  }
}

const styles = StyleSheet.create({
  T1:{fontSize:15 , marginLeft:20, marginRight:20 , borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
  , T2:{fontSize:18, marginLeft:20 ,marginRight:20 , marginTop:20}
 ,v1:{flexDirection:'row' ,marginLeft:20, margin:10 , marginRight:20 , marginTop:20, borderBottomColor:'#d3d3d3' , borderTopColor:'transparent' , borderRightColor:'transparent' , borderLeftColor:'transparent' , borderWidth:1}
 });