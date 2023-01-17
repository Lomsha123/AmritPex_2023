/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IndividualCard from '../components/IndividualCard';
import InstitutionCard from '../components/InstitutionCard';

const CreateAccount = props => {
  const [cardType, setCardType] = useState('Individual');
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: wp(100),
          justifyContent: 'center',
        }}>
        <View style={{marginRight: wp(0)}}>
          <Text style={styles.text}>Create account</Text>
        </View>
        {/* <View style={{marginRight: wp(3)}}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Home');
            }}>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                fontSize: hp(1.5),
              }}>
              Skip Now
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View
        style={{
          marginTop: hp(3),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: wp(6),
        }}>
        {cardType === 'Individual' ? (
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: hp(2.6),
                paddingBottom: hp(1),
              }}>
              Attending solo?
            </Text>
            <Text style={[styles.text, {fontSize: hp(1.8)}]}>
              Pre-register yourself by filling out your details and get a smooth
              check-in at the venue.
            </Text>
          </View>
        ) : (
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: hp(2.6),
                paddingBottom: hp(1),
              }}>
              Coming in a group? No worries!
            </Text>
            <Text style={[styles.text, {fontSize: hp(1.8)}]}>
              Fill out your group’s details to pre-register and get a smooth check-in at the venue.
            </Text>
          </View>
        )}
      </View>
      <View style={{padding: hp(3)}}>
        {cardType === 'Individual' ? (
          <IndividualCard handleCard={setCardType} navigation={navigation} />
        ) : (
          <InstitutionCard handleCard={setCardType} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#103993',
    flex: 1,
    paddingVertical: hp(3),
  },
  text: {
    color: '#EAC675',
    fontSize: hp(2),
  },
});

export default CreateAccount;
