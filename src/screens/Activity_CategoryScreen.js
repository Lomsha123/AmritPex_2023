/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';

const ActivitiesCategoryScreen = (props) => {
  const baseUrl = 'http://44.227.33.138:3000';
  const [categories, setCategories] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    axios
      .get(`${baseUrl}/event/category`)
      .then(res => {
        console.log(res?.data?.data?.result);
        setCategories(res?.data?.data?.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(7),
          marginBottom: hp(3),
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
            ACTIVITIES
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
          borderBottomColor: 'rgba(141, 141, 141, 0.6)',
          borderBottomWidth: 1,
          marginHorizontal: wp(8),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#F8F8F8', fontSize: hp(1.4)}}>Select Date</Text>
          <Text style={{color: '#F8F8F8', fontSize: hp(1.4)}}>
            February, 2023
          </Text>
        </View>
        <View
          style={{
            marginVertical: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => {
            navigation.push('ActivityCategoryScreen');
          }}>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                // width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
                flex: 1,
                paddingHorizontal: wp(1),
              }}>
              <Text style={{color: 'black'}}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
              }}>
              <Text style={{color: 'black'}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
              }}>
              <Text style={{color: 'black'}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
              }}>
              <Text style={{color: 'black'}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
              }}>
              <Text style={{color: 'black'}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: hp(0.3),
                paddingVertical: hp(0.4),
              }}>
              <Text style={{color: 'black'}}>All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:hp(3)}}>
        {categories.map((item, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => {
                navigation.push('ActivitiesScreen');
            }}>
              <View style={{backgroundColor:'rgba(242, 242, 242, 1)', marginHorizontal:hp(4), padding:hp(2.7), marginBottom:hp(2.5), borderRadius:hp(1.5)}}>
                <Text style={{color:'rgba(16, 57, 148, 1)', alignSelf:'center', fontSize:hp(2.3)}}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
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

export default ActivitiesCategoryScreen;
