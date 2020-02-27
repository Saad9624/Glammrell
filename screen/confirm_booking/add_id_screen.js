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

    await Font.loadAsync({
        'avbold': require('./../../assets/fonts/avbold.ttf'),
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
    <View style={{backgroundColor:'white' ,  height:Dimensions.get('window').height / 100 * 40,    borderTopLeftRadius:30 , borderTopRightRadius:30}}>


              

          <TouchableOpacity 
                 onPress={() => this.closemodal()}
                style={{flex:1,backgroundColor:'white' , marginLeft:20 , marginRight:20 , 
                borderTopRightRadius:30 , borderTopLeftRadius:40,marginTop:10}}>

                        <TouchableOpacity
                          onPress={() => this.closemodal()}
                        style={{right:0 , position:'absolute' , margin:20}}>
                            <Image source={require('./../../assets/images/close/close.png')}></Image>
                        </TouchableOpacity>
    
                        {this.state.fontLoaded ? ( <Text style={{marginTop:30 ,  fontFamily:'avbold' , fontSize:20}}>Your reservation will be{'\n'}held for 12 hours</Text>) : null }
                         {this.state.fontLoaded ? ( <Text style={{color:'grey' , fontFamily:'opreg' , fontSize:15,marginTop:5 }}>You will need to finish this before your upcoming booking.</Text>) : null }

                  
                       
      
                                        

                <TouchableOpacity 
                onPress={() => this.closemodal()}
                style={{marginBottom:30,borderRadius:20 , bottom:0 , right:0,alignItems:'center', justifyContent:'center' ,
                 position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , width:'40%' , height:40}}>

                            {this.state.fontLoaded ? ( <Text style={{alignSelf:'center' , color:'white' , fontFamily:'opreg'}}>I'll do this later</Text>) : null }
                </TouchableOpacity>


                </TouchableOpacity>

                 



{/*      
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
    </View>
  );



    
  render() {
    return (
      <View style={{flex:1 ,flexDirection:'column'}}>
                    
                                            
                                            <View style={{height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight,backgroundColor: "#FFFFFF", }}></View>
                                            <StatusBar hidden={false} />
                                            <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 



                                            <View style={{ flexDirection: 'column', backgroundColor:'#ffffff' ,height:60 , marginTop:15,marginLeft:20,marginRight:20 }}>

                                                            <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                                                                    <TouchableOpacity 
                                                                    //  onPress={() => this.openmodal()}
                                                                        >

                                                                        <Image source={require('./../../assets/images/backbtn/back.png')}></Image>
                                                                        </TouchableOpacity>

                                                                        {this.state.fontLoaded ? (  <Text style={{color:'purple' , fontFamily:'avbold'}}>How this works</Text>) : null }
                                                            </View>
                                                    

                                                   
                                                    {this.state.fontLoaded ? (    <Text style={{fontSize:25 , marginTop:10 ,fontWeight:'300' , fontFamily:'avbold'}}>We need more info just{'\n'}this one time</Text>) : null }
                                                
                                                    {this.state.fontLoaded ? (     <Text style={styles.txt}>To complete your booking, Glamrella need you to provide more details to make sure that you're really you</Text>) : null }
                           
                                                    {this.state.fontLoaded ? (     <Text style={styles.txt1}>This is done to ensure the security from both ends.{'\n'}We really appreciate your cooperation</Text>) : null }
                                                   
                                                    {this.state.fontLoaded ? (     <Text opacity={'0.21'} style={{fontSize:10,marginTop:5 , color:'grey' , fontFamily:'opreg' , }}>This info won't be shared with other people</Text>) : null }
                           
                                            </View>




                                    <View style={{flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'}}>
                                    
                                        <Image style={{marginTop:10}} source={require('./../../assets/images/takepic/takepic.png')}></Image>
                                        </View>
                         

                         <View style={{bottom:0 , position:'absolute' , marginBottom:20 , flexDirection:'column' , flex:1 , width:'100%'}} >
                         
                         
                                           <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('CONFIRM_N_PAY_WITHCARD')}
                                                            style={{marginRight:20 , marginLeft:20 ,height:40,
                                                             marginBottom:10, borderRadius:25,alignSelf:'center' , width:'90%' ,padding:10 
                                                            , backgroundColor:'#F4CA09',justifyContent:'center',alignItems:'center' }}>
                                                      {this.state.fontLoaded ? (   <Text style={{color:'white', fontFamily:'opreg'}}>Let's add your ID</Text>) : null }
                                               </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={()=> this.openmodal()}>

                                        {this.state.fontLoaded ? (   <Text style={{color:'purple' , alignSelf:'center', fontFamily:'avbold'}}>I'll do this later</Text>) : null }

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
mc:{flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',
marginBottom:10 , borderBottomWidth:1, marginTop:10 , marginRight:20} ,
mv:{padding:15 ,flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',
borderBottomWidth:1, marginTop:5,marginBottom:7 , marginRight:20 , alignContent:'center'},

mvlast:{padding:15 ,flexDirection:'row' , marginLeft:20 , borderBottomColor:'transparent',
borderBottomWidth:1, marginTop:5 , marginRight:20 , alignContent:'center'}

,
line:{borderColor:'#e8e8e8' , borderWidth:1 , marginTop:15 , marginRight:10 , marginLeft:10} ,

txt:{fontSize:15 ,color:'grey',fontFamily:'opreg'},
txt1:{fontSize:15 ,color:'grey',fontFamily:'opreg' , marginTop:5}
});