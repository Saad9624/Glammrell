import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class payment extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
   <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20, marginTop:10 , marginRight:20}}>
                                        <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15}}>Master card end with 4561</Text>
                                </TouchableOpacity>

                                <View opacity={0.1} style={{borderWidth:1 , backgroundColor:'grey', marginLeft: 20, marginRight: 20 }}></View>

                                <TouchableOpacity style={{padding:5 , flexDirection:'row' , marginLeft:20, marginTop:10 , marginRight:20}}>
                                        <Text placeholder={"Email"} placeholderTextColor={'grey'} style={{fontSize:15, marginBottom:15}}>Add New Debit/Credit Card</Text>
                                </TouchableOpacity>
      </View>
    );
  }
}