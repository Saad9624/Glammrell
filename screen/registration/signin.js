import React from 'react' ;
import  {View, Text , TextInput , StyleSheet, Platform,Image ,TouchableOpacity , StatusBar} from 'react-native' ;
import * as Font from 'expo-font'; 

import Modal from 'react-native-modal';
import Header from './../components/header' 
import Loading from 'react-native-whc-loading' ;

export default class signin extends React.Component{

    static navigationOptions ={
        header: null ,
        gesturesEnabled: false,

    }

    state={
        visibleModal: null,
        fontLoaded: false,
        email:'',
        password:''
    }
  
   async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../../assets/fonts/opreg.ttf'),
      });
  
      this.setState({ fontLoaded: true });
      
    }

    handleTextChange = (newText) => this.setState({ email: newText });
    handleTextChange1 = (newText) => this.setState({ password: newText });


    check_if_empty = async () =>{


        this.refs.loading2.show() ;

       // this.LOGIN_SERVICE()

        if(this.state.email != '' && this.state.password != ''){
                 
            this.LOGIN_SERVICE(this.state.email , this.state.password)
        }
        else{
            this.refs.loading2.close() ;
                alert("Fields cannot be empty")
        }
    
    }


    LOGIN_SERVICE = async (email , pass) => {

        //  LOGIN_SERVICE = async () => {
          console.log('email :', email) ;
          console.log('pass :', pass) ;
        
          try{
          
              console.log("try" , "under try")
      
              var details = {
                     
              
                "password"  :  pass   ,
                "email"     :  email ,
                'deviceid'     : '1' 
  
              // "phone" : '92' + '3463257698'  ,
              // "password"  : '123'   ,
                
       };
       
       var formBody = [];
       for (var property in details) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(details[property]);
         formBody.push(encodedKey + "=" + encodedValue);
       }
        formBody = formBody.join("&");
      
      
            fetch('https://glamrella.com/api/index.php/practioner/login',
            {
             
              method: 'POST',
                 headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
              
      
              body: formBody
        
             })
         
         
      
             .then((response) => response.json())
             
                    .then((responseJson) => {
                     
                         console.log('response object: ',responseJson)
                       
      
      
                         if(responseJson.responcecode == '002' ){
                          this.refs.loading2.close() ;
                          this.regcode(responseJson.message , responseJson.userdetails.activationcode)
                        }
                        else if(responseJson.responcecode == '001' ){
                          this.refs.loading2.close() ;
                           AsyncStorage.setItem("UN" ,responseJson.userdetails.name )
                           AsyncStorage.setItem("EMAIL" ,responseJson.userdetails.email )
                           AsyncStorage.setItem("USERID" ,responseJson.userdetails.id )
                           AsyncStorage.setItem('isLoginin' ,"yes" )
  
                           console.log("isloginchecking" , AsyncStorage.getItem("isLoginin"))
  
                          this.props.navigation.navigate('MAP' , {
                              USERNAME: responseJson.userdetails.name  ,
                              EMAIL :responseJson.userdetails.email 
                          })
                        }
                        else{
                          this.refs.loading2.close() ;
                          alert(responseJson.message)
                        }
                    })
                    .catch((error) => {
                      this.refs.loading2.close() ;
                    console.error(error);
                    });
      
            
          }
          catch(e){
            this.refs.loading2.close() ;
            this.refs.loading2.close() ;
            console.log("catch" , e)
            
          }
      
      
      
      }  

  

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

                                                <View style={{flexDirection:'column' , marginLeft:20}}>
                                                {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Sign in</Text>) : null }
                                            
                                                </View>
                                        </View>


                            </View>

                

                       <Text style={{marginLeft:20 , marginTop:30 , color:'grey',fontSize:15}}>Enter your credentials to continue</Text>

                

                        <View style={{marginTop:50}}>
                                                <View   style={styles.v3}>
                                                                <Text style={{marginTop:5}}>Full name</Text>
                                                                <TextInput
                                                                     onChangeText={this.handleTextChange}
                                                                    placeholder={"Enter Username"} style={{marginLeft:30}} ></TextInput>

                                                
                                                </View>
                                            
                                                <View opacity={0.3}  style={{marginRight:20 , marginLeft:20 ,  marginTop:5 , borderBottomColor: 'grey',  borderBottomWidth: 1,  }}></View>
                                 

                                        

                                            <View  style={styles.v3}>
                                                <Text style={{marginTop:5}}>Password</Text>
                                                <TextInput  
                                                 onChangeText={this.handleTextChange1}
                                                 placeholder={"Enter Password"}  style={{marginLeft:30}}></TextInput>
                                            </View>
                                            <View opacity={0.3}  style={{ marginRight:20 , marginLeft:20 , marginTop:5 , borderBottomColor: 'grey',  borderBottomWidth: 1,  }}></View>
                                 

                        </View>
                  
                    

            <TouchableOpacity
            onPress={() => this.check_if_empty()}
            style={{marginTop:100 ,alignItems:'center' , alignContent:'center', height:40 , borderColor:'#F4CA09' ,
             borderRadius:20 , alignSelf:'center' ,borderWidth:1 ,width:'80%' ,backgroundColor:'#F4CA09' }}>

                <Text style={{alignSelf:'center',marginTop:7 , color:'white' }}>
                    Log in
                </Text>
            </TouchableOpacity>
          
          {/* <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('Home')}
                style={{alignContent:'center' , marginTop:10}} onPress={() =>  this.props.navigation.navigate('Home')}>
                <Text style={{alignSelf:'center'}}>Don't have an account? Sign up</Text>
          </TouchableOpacity> */}
          <Loading ref='loading2'/>
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
      v3: {marginTop:15, flexDirection:'row'  , marginRight:20 , marginLeft:20}
  ,
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },


    });