import React, { Component } from 'react';
//import react in our code.
import { Text, View  , StyleSheet , Dimensions , TouchableOpacity  ,Image} from 'react-native';
import { Card } from 'react-native-elements';
//import all the components we are going to use.

export default class giftcard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <Card style={{width: Dimensions.get('window').width / 100 * 60 , height: 200, marginLeft:40 , marginRight:40 , flex:1}}>


          <Text style={{alignSelf:'center' , color:'transparent'}}>PKR 1,200</Text>

          <Text style={{alignSelf:'center' , color:'transparent'}}>PKR 1,200</Text>

          <Text style={{alignSelf:'center' , fontSize:20 , color:'#FF4D56'}}>PKR 1,200</Text>

          <Text style={{alignSelf:'center' , color:'transparent'}}>PKR 1,200</Text>

          <Text style={{alignSelf:'center' , color:'transparent'}}>PKR 1,200</Text>
        </Card>


                <TouchableOpacity style={{flexDirection:"row" , marginTop:20 , marginLeft:20 , marginRight:30}} >

                <Text style={{color:'grey' , fontSize:10 , justifyContent:'center'}}>Choose {'\n'}a voucher</Text>                     

                <Text style={{fontWeight:'bold' , marginLeft:30}}>PKR 1,200 - Back Massage</Text>


              </TouchableOpacity>


              <View style={{marginLeft:20 , marginRight:20 , backgroundColor:'#e8e8e8' , height:1 , marginTop:20}}></View>

                <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('ENTER_DETAILS')}
                      style={{marginBottom:30,borderRadius:20 , bottom:0, justifyContent:'center'
                        , position:'absolute',borderColor:'#F4CA09' , backgroundColor:'#F4CA09' , alignSelf:'center' , width:'80%' , height:40}}>

                        <Text style={{alignSelf:'center' , color:'white'}}>Next</Text>
                </TouchableOpacity>


              
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mv:{padding:15 ,flexDirection:'row' , marginLeft:20 , borderBottomColor:'#e8e8e8',
  borderBottomWidth:1, marginTop:5,marginBottom:7 , marginRight:20 , alignContent:'center'},
  
});
