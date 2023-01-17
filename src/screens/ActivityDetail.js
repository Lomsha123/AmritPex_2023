/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActivityDetailScreen = props => {
  // console.log(props, 'props');
  const item = props.route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <View style={{paddingHorizontal:wp(3)}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: hp(1),
            borderRadius: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#103994',
                fontSize: hp(3),
                fontWeight: '600',
                paddingRight: wp(20),
              }}>
              {item.eventName}
            </Text>
            <Icon style={{marginTop:hp(-5)}} name="heart" color="#941010" size={hp(2.5)} />
          </View>
          <Text style={{color: '#941010', fontSize: hp(1.5)}}>
            500 interested
          </Text>
          <Text style={{color:'rgba(0, 0, 0, 0.7)', marginVertical:hp(0.5)}}>{item.time}</Text>
          <Text style={{color:'rgba(0, 0, 0, 0.7)'}}>{item.date}</Text>
        </View>
        <View style={{
            backgroundColor: 'white',
            padding: hp(1),
            borderRadius: hp(1),
            marginTop:hp(2),
          }}>
          <Text style={{color:'#103994', fontSize:hp(2), fontWeight:'500', marginBottom:hp(1)}}>About</Text>
          <Text style={{color:'rgba(85, 85, 85, 1)'}}>Hold your emotions together to write your heart out at the Postcard writing activity by Daakroom.</Text>
        </View>
      </View>
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

export default ActivityDetailScreen;
