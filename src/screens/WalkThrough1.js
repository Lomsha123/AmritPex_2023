/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppIntroSlider from 'react-native-app-intro-slider';

const WalkThrough1 = props => {
  const {navigation} = props;
  //   const swiperRef = useRef(null);
  //   const [indeX, setIndex] = useState(null);
  //   console.log(indeX, 'index');

  //   const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    navigation.push('CreateAccount');
  };

  const onSkip = () => {
    navigation.push('CreateAccount');
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          //   justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image
          style={styles.introImageStyle}
          source={require('../assets/images/Logo.png')}
        />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <View style={{marginHorizontal: wp(2)}}>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const NextButton = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={[styles.button, {margin: hp(5)}]}>
          <Text style={{color: '#103993', fontWeight: '800'}}>NEXT</Text>
        </View>
      </View>
    );
  };

  const DoneButton = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{margin: hp(5)}}
          onPress={() => {
            navigation.push('CreateAccount');
          }}>
          <View style={styles.button}>
            <Text style={{color: '#103993', fontWeight: '800'}}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#103993'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.push('CreateAccount');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: hp(2),
          }}>
          <Text style={{color: 'white', textDecorationLine: 'underline'}}>
            Skip
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{height: hp(89), paddingTop: hp(14)}}>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          onSkip={onSkip}
          renderDoneButton={DoneButton}
          renderNextButton={NextButton}
          bottomButton
          dotStyle={{
            backgroundColor: 'white',
            height: hp(1.5),
            width: hp(1.5),
            borderRadius: hp(1),
          }}
          activeDotStyle={{
            backgroundColor: '#EAC675',
            height: hp(1.5),
            width: hp(1.5),
            borderRadius: hp(1),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103993',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: wp(100),
    height: hp(25),
    marginBottom: hp(8),
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal:wp(4),
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
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

const slides = [
  {
    key: 's1',
    text: 'Confirm your presence via App and generate your QR code for hassle-free entry to the venue!',
    title: 'Pre-Registration Feature',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#103993',
  },
  {
    key: 's2',
    title: 'Everything At A Glance',
    text: 'Stay in the loop of all information and fun elements of AMRITPEX 2023 and choose your activities beforehand!',
    image: {uri: '../assets/images/Logo.png'},
    backgroundColor: '#103993',
  },
  {
    key: 's3',
    title: 'Learning With Fun',
    text: 'Explore the world of Philately with dedicated workshops, quizzes, and guided tours. Let’s go!',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#103993',
  },
];

export default WalkThrough1;
