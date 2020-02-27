import React, { Component } from 'react';
import { View, Text, FlatList ,ScrollView  , StatusBar , Platform , Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';  

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
  {
    key: '5a31077f2e924b8d4d4e7c3b',
    name: 'Saunders Patrick',
    company: 'DADABASE',
    email: 'saunderspatrick@dadabase.com',
  },
  {
    key: '5a31077f7a32fb6cad442782',
    name: 'Conway Glenn',
    company: 'TWIGGERY',
    email: 'conwayglenn@twiggery.com',
  },
  {
    key: '5a31077f523fa49141e3bb9f',
    name: 'Sandy Emerson',
    company: 'GEEKNET',
    email: 'sandyemerson@geeknet.com',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Socorro Hebert',
    company: 'GADTRON',
    email: 'socorrohebert@gadtron.com',
  },
  {
    key: '5a31077f69db14dce94c8474',
    name: 'Nannie Wyatt',
    company: 'GEEKMOSIS',
    email: 'nanniewyatt@geekmosis.com',
  },
 
];

export default class service extends Component {

    static navigationOptions ={
        header: null 
    }

    
    state = {
      fontLoaded: false,
    };

   async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../../assets/fonts/opreg.ttf'),
      });
  
      this.setState({ fontLoaded: true });
      
    }


    onPress = async (item)=>{

        this.props.navigation.navigate('SERVICE_DETAIL')

      
      }


  render() {
    return (
      <View style={{marginLeft:20  , marginRight:20}}>
        

       
                    <View>
                          
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
                                        {this.state.fontLoaded ? (    <Text style={{fontSize:30 , marginTop:10 ,fontWeight:'300' , fontFamily:'opreg'}}>Services</Text>) : null }
                                    
                                        </View>
                                </View>


                   </View>
   
                        <ScrollView>
      <FlatList
      style={{marginTop:10 }}
        data={users}
        renderItem={({ item }) => 
        (
          <TouchableOpacity
          onPress={() => this.onPress(item)}
          >
          <View
          opacity={0.5}
            style={{
              marginBottom:10 ,
              backgroundColor:'#7BC510' ,
              borderRadius:10 ,
              marginRight:10 ,
              padding:20 ,
              height:150 ,
              width:'100%' ,
              borderWidth: 1,
              borderColor: '#7BC510',
              padding: 10
            }}>
            <View>
              <Text style={{color:'transparent' , fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
             
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
      


       </ScrollView>
         </View>
    );
  }
}