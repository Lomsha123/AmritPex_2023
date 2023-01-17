/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';
import Icon1 from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GoldenPassScreen = props => {
  const {navigation} = props;
  const [user, setUser] = useState('');

  const getData = async () => {
    try {
      const val = await AsyncStorage.getItem('Data');
      if (val !== undefined) {
        const userName = JSON.parse(val).user_name;
        console.log(userName);
        setUser(userName);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },[])
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
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon color="#EAC675" name="arrow-left" size={hp(2.5)} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: hp(2),
              color: '#EAC675',
              letterSpacing: 2,
              fontWeight: '500',
            }}>
            ENTRY PASS
          </Text>
        </View>
        <View>
          {/* <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity> */}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(3),
        }}>
        <Text
          style={{
            color: 'rgba(234, 198, 117, 1)',
            fontSize: hp(2.5),
            fontWeight: '500',
          }}>
          {user}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(5),
        }}>
        <ImageBackground
          style={{
            height: hp(70),
            paddingVertical: hp(3.5),
            width: wp(90),
            paddingHorizontal: wp(7),
          }}
          source={require('../assets/images/Golden_Background.png')}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{height: hp(20), width: wp(70), marginTop: hp(3)}}
              source={require('../assets/images/Logo1.png')}
            />
            <View
              style={{
                borderBottomColor: '#EAC67566',
                borderBottomWidth: 1,
                width: wp(30),
              }}
            />
            <View style={{marginVertical: hp(1)}}>
              <Text
                style={[
                  styles.headingStyle,
                  {
                    fontSize: hp(1.4),
                    fontWeight: '400',
                    color: 'rgba(254, 254, 254, 1)',
                  },
                ]}>
                PRAGATI MAIDAN, NEW DELHI
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#EAC67566',
                borderBottomWidth: 1,
                width: wp(30),
                marginBottom: hp(4),
              }}
            />
            <View>
              <Image
                style={{height: hp(20), width: hp(20)}}
                source={require('../assets/images/Qr_Normal.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(0),
              }}>
              <TouchableOpacity
                style={{margin: hp(5)}}
                onPress={() => {
                  // navigation.push('CreateAccount');
                  Linking.openURL('https://goo.gl/maps/nbeVHjubcCkcht5Y7');
                }}>
                <View style={[styles.button, {flexDirection: 'row'}]}>
                  <Icon1
                    name="location-sharp"
                    color="rgba(255, 16, 25, 1)"
                    size={hp(1.8)}
                    style={{marginRight: wp(2)}}
                  />
                  <Text style={{color: '#103993', fontWeight: '800'}}>
                    Get Directions
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                alignSelf: 'flex-end',
                height: hp(40.2),
                width: hp(4.1),
                marginTop: hp(-60),
              }}
              source={require('../assets/images/GoldenPassText.png')}
            />
          </View>
        </ImageBackground>
      </View>
      <Footer navigation={navigation} tab="Pass" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#103994',
    flex: 1,
    paddingTop: hp(3),
  },
  button: {
    backgroundColor: 'white',
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(4.5),
    borderRadius: 15,
  },
});

export default GoldenPassScreen;
