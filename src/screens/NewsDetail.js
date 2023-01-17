/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import { Footer } from '../components/Footer';

const NewsDetailScreen = (props) => {
    const {navigation} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(3),
        }}>
        <View>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <Icon color="#EAC675" name="arrow-left" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: hp(2), color: '#EAC675'}}>
            Wall Painting Competition
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: hp(30),
          width: '100%',
          backgroundColor: 'white',
          marginVertical: hp(2),
          justifyContent:'center',
          alignItems:'center',
        }}>
        <Image source={require('../assets/images/image.png')} style={{height:hp(30), width:wp(60)}}/>
      </View>
      <View>
        <View style={{paddingHorizontal:hp(2)}}>
          <View>
            <Text style={{fontSize: hp(3), fontWeight: '500', color: 'white'}}>
              Wall Painting Competition
            </Text>
          </View>
          <View style={{marginBottom:hp(2)}}>
            <Text style={{color:'#F1F1F1', fontSize:hp(1.5)}}>18th Dec 2022</Text>
          </View>
          <View style={{marginBottom:hp(2)}}>
            <Text style={{color:'#EAC675', fontSize:hp(2.4), fontWeight:'500'}}>Public Relation and Awareness Workshop, Jaipur</Text>
          </View>
          <View>
            <Text style={{color:'#F1F1F1', fontWeight:'300', fontSize:hp(2.3)}}>
              Students from various schools participated in women empowerment,
              wildlife, and nature in connection with AMRITPEX 2023
            </Text>
          </View>
        </View>
      </View>
      <Footer tab="Home"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#103994',
    flex: 1,
    paddingTop: hp(3),
  },
});

export default NewsDetailScreen;
