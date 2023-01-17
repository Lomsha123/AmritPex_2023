/* eslint-disable radix */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';

const Landing = props => {
  const {navigation} = props;
  // const [totalDuration, setTotalDuration] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      // Coundown timer for a given expiry date-time
      let date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
      // console.log(date, 'lllll');
      // let Date1 = new Date();
      // console.log(Date1, 'date');
      // Getting the current date-time
      // You can set your own date-time
      let expirydate = '2023-02-11 10:00:00';

      let diffr = moment.duration(moment(expirydate).diff(moment(date)));
      // console.log(diffr, 'kkk');
      // Difference of the expiry date-time
      var hours1 = parseInt(diffr.asHours());
      var minutes1 = parseInt(diffr.minutes());
      var seconds1 = parseInt(diffr.seconds());

      // Converting in seconds
      var d1 = (hours1 + minutes1 / 60 + seconds1 / (60 * 60)) / 24;
      setHours(hours1 % 24);
      setDays(Math.floor(d1));
      setMinutes(minutes1);
      setSeconds(seconds1);
      // Settign up the duration of countdown
      // setTotalDuration(d1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageDivStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/Header_Image.png')}
        />
      </View>
      <View style={styles.midContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headingStyle}>INDIA POST</Text>
          <Text style={[styles.headingStyle, {fontSize: hp(1.8)}]}>
            Presents
          </Text>
          <Text
            style={[
              styles.headingStyle,
              {fontSize: hp(2.8), fontWeight: '400', marginTop: hp(2)},
            ]}>
            AMRITPEX 2023
          </Text>
          <View style={{paddingVertical: hp(2)}}>
            <Image
              style={{height: hp(25), width: wp(100)}}
              source={require('../assets/images/Logo1.png')}
            />
          </View>
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
                {fontSize: hp(1.7), fontWeight: '400'},
              ]}>
              PRAGATI MAIDAN, NEW DELHI
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#EAC67566',
              borderBottomWidth: 1,
              width: wp(30),
            }}
          />
          <Text
            style={[
              styles.headingStyle,
              {fontSize: hp(2), marginVertical: hp(1.5)},
            ]}>
            in
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: wp(55),
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              {days}
            </Text>
            <Text style={styles.textStyle}>Days</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              {hours}
            </Text>
            <Text style={styles.textStyle}>Hours</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              {minutes}
            </Text>
            <Text style={styles.textStyle}>Minutes</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={[styles.textStyle, {fontSize: hp(2), fontWeight: '600'}]}>
              {seconds}
            </Text>
            <Text style={styles.textStyle}>Seconds</Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{margin: hp(5)}}
          onPress={() => {
            navigation.push('WalkThrough1');
          }}>
          <View style={styles.button}>
            <Text style={{color: '#103993', fontWeight: '800'}}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAC675',
    // paddingVertical: 30,
  },
  imageDivStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(3.5),
  },
  imageStyle: {
    height: hp(7),
    width: wp(50),
  },
  midContainer: {
    backgroundColor: '#103993',
    height: hp(70),
    width: '100%',
    paddingVertical: hp(5),
  },
  headingStyle: {
    fontSize: hp(2.5),
    fontWeight: '500',
    color: 'white',
  },
  textStyle: {
    color: '#103993',
    fontSize: hp(1),
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: wp(70),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    borderRadius: 10,
  },
});

export default Landing;
