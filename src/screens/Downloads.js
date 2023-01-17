/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';
import RNFetchBlob from 'rn-fetch-blob';
var RNFS = require('react-native-fs');

// const fileUrl =
//   'https://drive.google.com/uc?id=1oNtntJpqI7XpsihqkqFdpU7ELWuMwD70&export=download';

const checkPermission = async (url,fileName) => {
  // Function to check the platform
  // If Platform is Android then check for permissions.

  if (Platform.OS === 'ios') {
    downloadFile();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'Application needs access to your storage to download File',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        downloadFile(url, fileName);
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        Alert.alert('Error', 'Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log('++++' + err);
    }
  }
};

const downloadFile = (fileUrl, filename) => {
  // Get today's date to add the time suffix in filename
  // File URL which we want to download
  // Function to get extention of the file url

  const directoryFile = RNFS.ExternalStorageDirectoryPath + '/Download/';
  console.log(directoryFile, 'path');
  const urlDownload = fileUrl;
  let dirs = directoryFile + filename;
  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const {config} = RNFetchBlob;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path: dirs,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
    },
  };
  config(options)
    .fetch('GET', urlDownload)
    .then(res => {
      // Alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      alert('File Downloaded Successfully.');
    });
};

const DownloadScreen = props => {
  // const [url, setUrl] = useState('');
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
            DOWNLOADS
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
          borderRadius: hp(1),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(5),
        }}>
        <Image
          style={{
            height: hp(15),
            width: wp(90),
            borderTopLeftRadius: hp(1),
            borderTopRightRadius: hp(1),
          }}
          source={require('../assets/images/image.png')}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: wp(90),
            borderBottomLeftRadius: hp(1),
            borderBottomRightRadius: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(3),
            height: hp(5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              color: 'rgba(16, 57, 148, 1)',
              fontWeight: '500',
            }}>
            Prospectus
          </Text>
          <TouchableOpacity
            onPress={() => {
              checkPermission(
                'https://drive.google.com/uc?id=1oNtntJpqI7XpsihqkqFdpU7ELWuMwD70&export=download','Prospectus'
              );
            }}>
            <Text
              style={{
                color: 'rgba(112, 124, 239, 1)',
                textDecorationLine: 'underline',
                fontSize: hp(1.5),
              }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderRadius: hp(1),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <Image
          style={{
            height: hp(15),
            width: wp(90),
            borderTopLeftRadius: hp(1),
            borderTopRightRadius: hp(1),
          }}
          source={require('../assets/images/image.png')}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: wp(90),
            borderBottomLeftRadius: hp(1),
            borderBottomRightRadius: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(3),
            height: hp(5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              color: 'rgba(16, 57, 148, 1)',
              fontWeight: '500',
            }}>
            Brochure-Hindi
          </Text>
          <TouchableOpacity
            onPress={() => {
              checkPermission(
                'https://drive.google.com/uc?id=1QPdnezpAzZXkouy9hebyweVyu6M6U26P&export=download', 'Brochure-Hindi'
              );
            }}>
            <Text
              style={{
                color: 'rgba(112, 124, 239, 1)',
                textDecorationLine: 'underline',
                fontSize: hp(1.5),
              }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderRadius: hp(1),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <Image
          style={{
            height: hp(15),
            width: wp(90),
            borderTopLeftRadius: hp(1),
            borderTopRightRadius: hp(1),
          }}
          source={require('../assets/images/image.png')}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            width: wp(90),
            borderBottomLeftRadius: hp(1),
            borderBottomRightRadius: hp(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(3),
            height: hp(5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              color: 'rgba(16, 57, 148, 1)',
              fontWeight: '500',
            }}>
            Brochure-English
          </Text>
          <TouchableOpacity onPress={() => {
              checkPermission(
                'https://drive.google.com/uc?id=1pRqEEv9_4w9MyBdo7_w7_t8NZfmqmaVm&export=download', 'Brochure-English'
              );
            }}>
            <Text
              style={{
                color: 'rgba(112, 124, 239, 1)',
                textDecorationLine: 'underline',
                fontSize: hp(1.5),
              }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          padding: hp(1),
          marginHorizontal: wp(5),
          borderRadius: hp(0.6),
          marginTop: hp(3),
        }}>
        <Text style={{color: 'black', fontWeight: '500'}}>Follow us on</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.instagram.com/amritpex2023/')
          }>
          <Image
            style={{height: hp(3), width: hp(3)}}
            source={require('../assets/images/Instagram_Icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.facebook.com/profile.php?id=100088534073563',
            )
          }>
          <Image
            style={{height: hp(3), width: hp(3)}}
            source={require('../assets/images/Facebook_Icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.youtube.com/@IndiaPost_DoP')
          }>
          <Image
            style={{height: hp(3), width: hp(4)}}
            source={require('../assets/images/Youtube_Icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com/Amritpex2023')}>
          <Image
            style={{height: hp(3), width: hp(3.5)}}
            source={require('../assets/images/Twitter_Icon.png')}
          />
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} tab="Home" />
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

export default DownloadScreen;
