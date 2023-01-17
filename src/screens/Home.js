/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, Linking} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Footer } from '../components/Footer';
import { HomeCard } from '../components/HomeCard';

const HomeScreen = (props) => {

  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{color:'#EAC675', fontSize:hp(2), fontWeight:'600'}}>AMRITPEX 2023</Text></View>
      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:hp(3)}}>
        <TouchableOpacity onPress={() => {
          navigation.push('AboutScreen');
        }}>
          <View style={{backgroundColor:'white', padding:hp(1.2), borderRadius:hp(0.5), width:wp(24), alignItems:'center'}}>
            <Text style={{color:'#103994', fontSize:hp(1.5), fontWeight:'600'}}>ABOUT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.push('ActivityCategoryScreen');
        }}>
          <View style={{backgroundColor:'white', padding:hp(1.2), borderRadius:hp(0.5), width:wp(24), alignItems:'center'}}>
            <Text style={{color:'#103994', fontSize:hp(1.5), fontWeight:'600'}}>ACTIVITIES</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.push('DownloadScreen');
        }}>
          <View style={{backgroundColor:'white', padding:hp(1.2), borderRadius:hp(0.5), width:wp(24), alignItems:'center'}}>
            <Text style={{color:'#103994', fontSize:hp(1.5), fontWeight:'600'}}>DOWNLOADS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color:'white', marginHorizontal:wp(6.5), marginTop:hp(4), fontWeight:'600', fontSize:hp(2)}}>News</Text>
        <View style={{padding:wp(6)}}>
          <TouchableOpacity onPress={() => {
            navigation.push('NewsDetailScreen');
          }}><HomeCard/></TouchableOpacity>
          <TouchableOpacity><HomeCard/></TouchableOpacity>
          <TouchableOpacity><HomeCard/></TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'white', padding:hp(1),marginHorizontal:wp(6.5), borderRadius:hp(0.6), alignItems:'center'}}>
        <Text style={{color:'black', fontWeight:'500'}}>Follow us on</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/amritpex2023/')}><Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Instagram_Icon.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100088534073563')}><Image style={{height:hp(3), width:hp(3)}} source={require('../assets/images/Facebook_Icon.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@IndiaPost_DoP')}><Image style={{height:hp(3), width:hp(4)}} source={require('../assets/images/Youtube_Icon.png')}/></TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/Amritpex2023')}><Image style={{height:hp(3), width:hp(3.5)}} source={require('../assets/images/Twitter_Icon.png')}/></TouchableOpacity>
      </View>
      <Footer navigation={navigation} tab="Home"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#103994',
    paddingTop:hp(3),
  },
});
export default HomeScreen;
