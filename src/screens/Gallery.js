/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';

const images = [
  {
    id: 1,
    url: require('../assets/images/Gallery_Images/20221221_121904.jpg'),
  },
  {
    id: 2,
    url: require('../assets/images/Gallery_Images/20221221_121937.jpg'),
  },
  {
    id: 3,
    url: require('../assets/images/Gallery_Images/20221221_122001.jpg'),
  },
  {
    id: 4,
    url: require('../assets/images/Gallery_Images/IMG_2192.jpg'),
  },
  {
    id: 5,
    url: require('../assets/images/Gallery_Images/IMG_2193.jpg'),
  },
  {
    id: 6,
    url: require('../assets/images/Gallery_Images/IMG_2194.jpg'),
  },
  {
    id: 7,
    url: require('../assets/images/Gallery_Images/IMG_2196.jpg'),
  },
  {
    id: 8,
    url: require('../assets/images/Gallery_Images/IMG_2197.jpg'),
  },
  {
    id: 9,
    url: require('../assets/images/Gallery_Images/IMG_2198.jpg'),
  },
  {
    id: 10,
    url: require('../assets/images/Gallery_Images/IMG_2199.jpg'),
  },
  {
    id: 11,
    url: require('../assets/images/Gallery_Images/IMG_2205.jpg'),
  },
  {
    id: 12,
    url: require('../assets/images/Gallery_Images/IMG_2207.jpg'),
  },
  {
    id: 13,
    url: require('../assets/images/Gallery_Images/IMG_2224.jpg'),
  },
  {
    id: 14,
    url: require('../assets/images/Gallery_Images/IMG_2225.jpg'),
  },
  {
    id: 15,
    url: require('../assets/images/Gallery_Images/IMG_2226.jpg'),
  },
  {
    id: 16,
    url: require('../assets/images/Gallery_Images/IMG_2241.jpg'),
  },
  {
    id: 17,
    url: require('../assets/images/Gallery_Images/IMG_2248.jpg'),
  },
  {
    id: 18,
    url: require('../assets/images/Gallery_Images/IMG_2250.jpg'),
  },
  {
    id: 19,
    url: require('../assets/images/Gallery_Images/IMG_2258.jpg'),
  },
  {
    id: 20,
    url: require('../assets/images/Gallery_Images/IMG_2260.jpg'),
  },
  {
    id: 21,
    url: require('../assets/images/Gallery_Images/IMG_2261.jpg'),
  },
  {
    id: 22,
    url: require('../assets/images/Gallery_Images/IMG_2280.jpg'),
  },
];

const Gallery = props => {
  const {navigation} = props;

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
            GALLERY
          </Text>
        </View>
        <View>
          {/* <TouchableOpacity>
            <Icon color="#EAC675" name="more-vertical" size={hp(2.5)} />
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={{marginTop: hp(2), alignItems: 'center', flex: 1, marginBottom:hp(8)}}>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <View style={{padding: hp(1)}}>
              <Image
                source={item.url}
                style={{height: hp(20), width: hp(20), borderRadius: hp(1)}}
              />
            </View>
          )}
        />
      </View>
      <Footer navigation={navigation} tab="Gallery" />
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

export default Gallery;
