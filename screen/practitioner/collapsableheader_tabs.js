import React from 'react';
import {
    View,Text, Dimensions , Image , TouchableOpacity 
} from 'react-native';
const deviceWidth = Dimensions.get("window").width;
import ScrollableTabView, { DefaultTabBar, } from 'rn-collapsing-tab-bar';

export default () => {
    const collapsableComponent = (
        <View style={{ height: 200, backgroundColor: 'white', width: deviceWidth , flexDirection:'row' ,justifyContent:'center' , alignItems:'center'}}>
            
                        
                        
                           <Image style={{width:120 , height:120 }}  source={require('./../../assets/images/placehold/placeholder.png')} ></Image>

                           
                           
                            <View style={{flexDirection:'column' ,marginLeft:20}}>


                                                        <View style={{ justifyContent:'space-between' , flexDirection:'row' , marginTop:5}}>

                                                                <Text>Rating</Text>

                                                                    <View>
                                                                                <Image source={require('./../../assets/images/verified/group.png')}></Image>
                                                                                <Text style={{marginRight:20 , marginLeft:10 , fontSize:10}}>Verified Practictioner</Text>
                                                                    </View>
                                                            
                                                        </View>
                                    

                                                        <Text>Rija Aslam</Text>

                                                        <Text>Last booked 29 minutes ago</Text>

                            </View>
        
        </View>
    );
    return <ScrollableTabView
        scrollToTopAnimation = {true}
        collapsableBar={collapsableComponent}
        tabBarUnderlineStyle ={{backgroundColor:'#F4CA09'}}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar inactiveTextColor="black" activeTextColor="black" backgroundColor="white" />}
    >
        <View style={{height:2000,backgroundColor:"white"}} tabLabel='ABOUT'>
            <Text >My</Text>
        </View>
        <View style={{height:2000,backgroundColor:"white"}} tabLabel='REVIEWS'>
            <Text >Project</Text>
        </View>
        <View style={{height:2000,backgroundColor:"white"}} tabLabel='BIO'>
            <Text >Project</Text>
        </View>
    </ScrollableTabView>;
}
