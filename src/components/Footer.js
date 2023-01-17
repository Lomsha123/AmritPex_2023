/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Footer = props => {
  const navigation = props.navigation;
  const tab = props.tab;
  // const [tab, setTab] = useState('Home');
  // useEffect(() => {}, [tab]);
  const [score, setScore] = useState(0);
  console.log(score, 'score/lomsha');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Home');
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            {tab === 'Home' ? (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={require('../assets/images/HomeIconHighligted.png')}
              />
            ) : (
              <Image
                style={{height: hp(2.5), width: hp(2.5)}}
                source={require('../assets/images/HomeIcon.png')}
              />
            )}
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#103994'}}>Home</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          // await setTab('Gallery');
          await navigation.push('Gallery');
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            {tab === 'Gallery' ? (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={require('../assets/images/GalleryIconHighlighted.png')}
              />
            ) : (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={require('../assets/images/GalleryIcon.png')}
              />
            )}
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Gallery</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // setTab('Quiz');
          navigation.push('QuizHome', {score, setScore});
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            {tab === 'Quiz' ? (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={require('../assets/images/QuizIconHighlighted.png')}
              />
            ) : (
              <Image
                style={{height: hp(3), width: hp(3)}}
                source={require('../assets/images/QuizIcon.png')}
              />
            )}
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Quiz</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // setTab('Pass');
          score === 10
            ? navigation.push('GoldenPass')
            : navigation.push('NormalPass');
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            {tab === 'Pass' ? (
              <Image
                style={{height: hp(2.6), width: hp(3.2)}}
                source={require('../assets/images/PassIconHighlighted.png')}
              />
            ) : (
              <Image
                style={{height: hp(2.6), width: hp(3.2)}}
                source={require('../assets/images/PassIcon.png')}
              />
            )}
          </View>
          <View>
            <Text style={{fontSize: hp(1.5), color: '#585858'}}>Pass</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(8),
    backgroundColor: '#EAC675',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});
