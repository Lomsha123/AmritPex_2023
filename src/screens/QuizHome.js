/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Footer} from '../components/Footer';

const QuizHome = props => {
  const {navigation} = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(3),
          marginBottom: hp(4),
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
            QUIZ
          </Text>
        </View>
        <View>
          {/* <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity> */}
        </View>
      </View>
      <Image
        style={{height: hp(30), width: wp(100)}}
        source={require('../assets/images/AmritPex_Frame.png')}
      />
      <View style={{paddingHorizontal:wp(4), backgroundColor: 'white', margin:hp(3), paddingTop:hp(3), alignItems:'center', borderTopRightRadius:hp(1.5), borderTopLeftRadius:hp(1.5), marginTop:hp(10), flex:1}}>
        <Text style={{fontSize: hp(10), color: '#103994', fontWeight:'400'}}>QUIZ</Text>
        <Text style={{fontSize: hp(3), color: '#103994'}}>
          Test your Philately. 10 questions. Let's see what you got!
        </Text>
        <TouchableOpacity onPress={()=> {
          navigation.push('QuizScreen', props?.route?.params);
        }}>
          <View
            style={{
              backgroundColor: '#103994',
              width: wp(55),
              justifyContent: 'center',
              alignItems: 'center',
              height: hp(6),
              borderRadius: hp(2),
              marginVertical:hp(4),
            }}>
            <Text style={{color: 'white', fontSize: hp(2), fontWeight: '600'}}>
              Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} tab="Quiz"/>
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

export default QuizHome;
