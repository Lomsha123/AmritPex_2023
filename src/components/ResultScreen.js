/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Footer} from '../components/Footer';

export const ResultScreen = props => {
  // const [score, setScore] = useState(10);
  const navigation = props.navigation;
  console.log(props.rightAns,'lomsha');
  const score = props.rightAns;
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
            RESULT
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
          backgroundColor: '#DFDFDF',
          marginHorizontal: wp(8),
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(1),
          borderRadius: hp(1),
          marginVertical: hp(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {score === 10 ? (
          <Text style={{color: '#103994', letterSpacing: 1}}>
            Congratulations! You’ve 10/10 and successfully unlocked the Golden
            Pass!
          </Text>
        ) : (
          <Text style={{color: '#103994', letterSpacing: 1}}>
            Congratulations! Here's your score:
          </Text>
        )}
      </View>
      <View
        style={{
          backgroundColor: 'rgba(234, 198, 117, 1)',
          marginHorizontal: wp(8),
          paddingVertical: hp(4),
          paddingHorizontal: wp(1),
          borderRadius: hp(1),
          marginVertical: hp(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircularProgress
          value={score}
          radius={wp(5500 / 393)}
          duration={200}
          progressValueColor={'white'}
          maxValue={10}
          title={'your score'}
          titleColor={'white'}
          titleStyle={{
            fontSize: hp(1.5),
            color: 'rgba(242, 242, 242, 1)',
            fontWeight: '300',
          }}
          valueSuffix={'/10'}
          valueSuffixStyle={{
            fontSize: hp(1.5),
            color: 'rgba(242, 242, 242, 1)',
            fontWeight: '300',
          }}
          circleBackgroundColor={'rgba(16, 57, 148, 1)'}
          activeStrokeColor={'white'}
          inActiveStrokeColor={'rgba(16, 57, 148, 1)'}
          activeStrokeWidth={8}
          inActiveStrokeWidth={8}
          inActiveStrokeOpacity={0.8}
        />
      </View>
      <View>
        {score === 10 ? (
          <View
            style={{
              paddingHorizontal: wp(6),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#DADADA',
                lineHeight: hp(3),
                fontSize: hp(2),
                textAlign: 'center',
              }}>
              You are now eligible to skip the queue and enjoy hassle-free entry
              at the venue.
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: wp(5),
            }}>
            <View
              style={{
                backgroundColor: '#27AE60',
                padding: hp(2),
                borderRadius: hp(2),
                width: wp(40),
              }}>
              <Text style={{color: 'white', fontSize: hp(2.5)}}>{score}</Text>
              <Text
                style={{color: 'white', fontSize: hp(1.5), letterSpacing: 2}}>
                Correct Answers
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#EB5757',
                padding: hp(2),
                borderRadius: hp(2),
                width: wp(40),
              }}>
              <Text style={{color: 'white', fontSize: hp(2.5)}}>
                {10 - score}
              </Text>
              <Text
                style={{color: 'white', fontSize: hp(1.5), letterSpacing: 2}}>
                Wrong Answers
              </Text>
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(10),
        }}>
        <TouchableOpacity
          style={{margin: hp(5)}}
          onPress={() => {
            navigation.push('QuizHome');
          }}>
          <View style={[styles.button, {flexDirection: 'row'}]}>
            <Icon1
              name="repeat"
              color="#103993"
              size={hp(1.8)}
              style={{marginRight: wp(2)}}
            />
            <Text style={{color: '#103993', fontWeight: '800'}}>
              Try Quiz Again
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} tab="Quiz" />
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
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    borderRadius: 10,
  },
});
