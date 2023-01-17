/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

export const AcitvityCard = props => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: hp(1)}}>
        <Image
          style={{
            height: hp(10),
            width: wp(34),
            borderRadius: hp(1),
            alignSelf: 'center',
          }}
          source={require('../assets/images/image.png')}
        />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: hp(1.5),
            marginBottom: hp(0.3),
          }}>
          {props.eventName}
        </Text>
        <Text style={{fontSize: hp(1.25), marginBottom: hp(0.3), color:'black'}}>
          {props.date}
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: hp(0)}}>
        <Icon
          name="clock"
          size={hp(1.7)}
          style={{paddingRight: wp(1)}}
          color="#7F8896"
        />
        <Text style={{color: '#7F8896', fontSize: hp(1.5)}}>{props.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: hp(2),
    // width: wp(50),
    // height: hp(60),
    borderRadius: hp(1),
    margin: hp(1),
    marginVertical: hp(1),
    justifyContent: 'center',
    height: hp(25),
    width: wp(40),
  },
});
