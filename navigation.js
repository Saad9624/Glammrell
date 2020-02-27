import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator , DrawerItems} from 'react-navigation-drawer';
import signup from './screen/registration/signup' ;
import signin from './screen/registration/signin' ;
import addaddress from './screen/address/addaddress';
import homescreen from './screen/Home/homescreen';
import service from './screen/Services/service';
import otherservices from './screen/Services/otherservices';
import service_booking from './screen/Services/service_booking';
import basket from './screen/basket/basket';
import available_booking_listing from './screen/calendar/available_bookings_listing_choose_date';
import bookingstab from './screen/booking/bookingstabs' ;
import bookinglist from './screen/booking/bookinglist' ;
import upcoming_booking from './screen/booking/upcoming_booking' ;
import past_booking from './screen/booking/past_bookings' ;
import onboarding from './screen/onboarding/onboarding' 
// import bottom_navigation from './screen/components/bottom_navigation'
import header from './screen/components/header' ; 

import { createBottomTabNavigator } from 'react-navigation-tabs';
import search from './screen/search/search';

import profile from './screen/profile/myprofile' ;
import myaddress from './screen/profile/myaddress';
import editaddress from './screen/profile/editaddress';
import addaddr from './screen/profile/addaddress' ;

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';

import giftcard_tab1 from './screen/profile/gift/giftcard/giftcard' ;
import redeem_tab2 from './screen/profile/gift/giftcard/redeem' ;
import enterdetails from './screen/profile/gift/enterdetails';
import support from './screen/profile/support/support';
import faq from './screen/profile/support/faq' ;
import acc_n_pay from './screen/profile/support/acc_and_pay_opt' ;
import about from './screen/profile/aboutapp/aboutapp';
import choosepract from './screen/practitioner/chose_prac';
import pract_detail from './screen/practitioner/pract_detail';


import reviewpract from './screen/book_practitioner/stepsreview_bookings/review_booking';

import entrenumber from './screen/book_practitioner/stepsreview_bookings/enternumber';

import payment from './screen/profile/wallet/wallet_payment'
import redeemvoucher from './screen/profile/wallet/redeem_voucher' 
import redeempoints from './screen/profile/wallet/redeem_points'

import confirm_n_pay from './screen/book_practitioner/stepsreview_bookings/confirm_n_pay';
import add_debit_cards from './screen/book_practitioner/addcard/add_debit_card';
import confirm_n_pay_withcard from './screen/book_practitioner/addcard/confirm_n_pay_withcard';
import discount_code from './screen/book_practitioner/addcard/discount_code' ;


import add_id_screen from './screen/confirm_booking/add_id_screen' 



const Tabs = createMaterialTopTabNavigator(
  {
    GiftCard: { screen: giftcard_tab1 },
    REDEEM: { screen: redeem_tab2 },
  },{
    tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: '#e8e8e8',
    },
    labelStyle: {
      textAlign: 'left',
    },
    indicatorStyle: {
      borderBottomColor: '#F4CA09',
      borderBottomWidth: 3,
    },
  },
  }
  // {
  //   pagerComponent: ViewPagerAdapter,
  // }
);



const TabsWallet = createMaterialTopTabNavigator(
  {
    PAYMENT: { screen: payment },
    REDEEM: { screen: redeemvoucher },
    REDEEMPOINTS: {screen: redeempoints}
  },{
    tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: '#e8e8e8',
    },
    labelStyle: {
      textAlign: 'left',
    },
    indicatorStyle: {
      borderBottomColor: '#F4CA09',
      borderBottomWidth: 3,
    },
  },
  }


);



const RootStack = createStackNavigator(
    {
      Home: {
        screen: signup ,
        navigationOptions: {
            gesturesEnabled: false,
        },
    }, 
      SIGN_IN :signin
    //   {
    //     screen: signin ,
    //     navigationOptions: {
    //         gesturesEnabled: false,
    //     },
    // }
    ,  
      ADD_ADDR : addaddress ,
      //MENU : homescreen ,add
      SERVICE : service ,
      SERVICE_DETAIL :  otherservices ,
      BASKET : basket ,
      AVAIL_BOOKING_LISTING: available_booking_listing ,
      
      BOOKINGTAB: bookingstab ,
      BOOKING_LIST : bookinglist ,
      UPCOMING_BOOKING:  upcoming_booking ,
      PAST_BOOKING :  past_booking ,


      ON_BOARDING : onboarding , 
      HEADER : header ,
      MENU : homescreen ,
      SEARCH : search  ,

      PROFILE: profile ,
      MY_ADDR: myaddress , 
      EDIT_ADDR : editaddress ,
      ADD_ADDRESS : addaddr ,

      Tabs: {
        screen: Tabs,
        navigationOptions: {
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          title: 'TabExample',
        },
      },

     

      TabsWallet: {
        screen: TabsWallet,
        navigationOptions: {
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          title: 'TabExample',
        },
      },


      ENTER_DETAILS: enterdetails ,

      //under my profile screen all app options
      SUPPORT : support , 
      FAQ : faq  ,
      ACC_N_PAY_OPT : acc_n_pay ,
      ABOUT : about ,

      // choose practitioner an details with nested tabs
       CHOOSE_PRACT: choosepract  , 
      PRACT_DETAIL:pract_detail ,

        //process after selecting pract reviews and add card 
      REVIEW_BOOKING: reviewpract,
      ENTER_NUMB:entrenumber ,
      ENTER_N_PAY: confirm_n_pay , 

      ADD_CARD : add_debit_cards ,
      CONFIRM_N_PAY_WITHCARD: confirm_n_pay_withcard ,
      ENTER_DISCOUNT_CODE: discount_code ,

      ADD_ID: add_id_screen,

    
    },
    {
      initialRouteName: 'BOOKING_LIST',
    }
  );


 

  

  RootStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'locked-closed';
    let gesturesEnabled = 'true' ; 
  
    if (navigation.state.index == 1  ) {
      // drawerLockMode = 'locked-unlocked'  ;
      gesturesEnabled = false
    }
    else{
      //drawerLockMode = 'locked-closed';
      gesturesEnabled = false
    }

    return {
      drawerLockMode,
      gesturesEnabled 
    };
  };


  // const DrawerNavigation =  createDrawerNavigator({
  //   Home: RootStack ,
   
  // },
  // // {
    
  // //     contentComponent:Home
    
  // // } 
  // );

  const TabNavigator = createBottomTabNavigator({
    Home: { 
      screen: RootStack 
       , navigationOptions:{ 
         tabBarVisible:false
        }},
        MENU : homescreen ,
        Services : service ,
        Bookings: bookingstab ,
    
  });
  
  export default createAppContainer(TabNavigator);

  

  // export default createAppContainer(DrawerNavigation);