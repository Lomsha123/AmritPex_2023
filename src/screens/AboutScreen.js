/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {Footer} from '../components/Footer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Transitioning, Transition} from 'react-native-reanimated';

const AboutScreen = props => {
  const {navigation} = props;
  const [show, setShow] = useState(0);
  const ref = useRef();
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={600} />
      <Transition.Out type="fade" durationMs={600} />
    </Transition.Together>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: hp(7)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(6),
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
              ABOUT
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
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: hp(3.5),
          }}>
          <Image
            source={require('../assets/images/AmritPex_Font.png')}
            style={{height: hp(2.6), width: hp(28)}}
          />
        </View>
        <View style={{paddingHorizontal: wp(6)}}>
          <Text style={{color: '#EAC675', marginBottom: hp(2)}}>
            What is AMRITPEX 2023?
          </Text>
          <Text style={{color: '#DADADA', lineHeight: hp(3), fontSize: hp(2)}}>
            AMRITPEX-2023 is a National Philatelic Exhibition for celebrating
            Azadi Ka Amrit Mahotsav which is to be held from 11th to 15th
            February 2023, in cooperation with (PCI). The exhibition will
            highlight India's history, culture, art, and heritage over the years
            through stamps and pictorial collections. {'\n'}
            {'\n'}
            For more than 150 years, the Department of Posts (DoP) has been the
            backbone of the country's communication and has played a crucial
            role in the country's social and economic development. With 1,56,434
            post offices, the DoP has the most widely distributed postal network
            in the world.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#DFDFDF',
            marginHorizontal: wp(6),
            paddingVertical: hp(1.5),
            paddingHorizontal: wp(1.5),
            borderRadius: hp(1),
            marginVertical: hp(3),
          }}>
          <Text style={{color: '#103994', letterSpacing: 1}}>
            <Text style={{fontWeight: '600'}}>Dates</Text> - 11-15 February 2023
          </Text>
          <Text style={{color: '#103994', letterSpacing: 1}}>
            <Text style={{fontWeight: '600'}}>Location</Text> - Pragati Maidan,
            New Delhi{' '}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: hp(2.0),
              color: 'white',
              paddingHorizontal: wp(3),
              marginBottom: hp(2),
            }}>
            Themes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(6),
              marginBottom: hp(3),
            }}>
            <Text style={{fontSize: hp(2.0), color: 'white'}}>01</Text>
            <View style={{paddingHorizontal: wp(4), width: wp(75)}}>
              <Text style={{fontSize: hp(2.0), color: 'white'}}>
                AZADI KA AMRIT
              </Text>
              <Text style={{color: 'rgba(187, 187, 187, 1)'}}>
                Bringing alive stories of unsung heroes and freedom fighters.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.instagram.com/reel/CmgsUX5p7Zq/?igshid=YmMyMTA2M2Y',
                );
              }}>
              <Text style={{fontSize: hp(1.5), color: 'white'}}>View</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(6),
              marginBottom: hp(3),
            }}>
            <Text style={{fontSize: hp(2.0), color: 'white'}}>02</Text>
            <View style={{paddingHorizontal: wp(4), width: wp(75)}}>
              <Text style={{fontSize: hp(2.0), color: 'white'}}>
                WOMEN POWER
              </Text>
              <Text style={{color: 'rgba(187, 187, 187, 1)'}}>
                Highlighting our progress in the last 75 years through dignity,
                respect and justice for all.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/amritpex2023/');
              }}>
              <Text style={{fontSize: hp(1.5), color: 'white'}}>View</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(6),
              marginBottom: hp(3),
            }}>
            <Text style={{fontSize: hp(2.0), color: 'white'}}>03</Text>
            <View style={{paddingHorizontal: wp(4), width: wp(75)}}>
              <Text style={{fontSize: hp(2.0), color: 'white'}}>
                YOUTH POWER
              </Text>
              <Text style={{color: 'rgba(187, 187, 187, 1)'}}>
                Shaping India's destiny through harnessing our Yuva Shakti.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/amritpex2023/');
              }}>
              <Text style={{fontSize: hp(1.5), color: 'white'}}>View</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(6),
              marginBottom: hp(3),
            }}>
            <Text style={{fontSize: hp(2.0), color: 'white'}}>04</Text>
            <View style={{paddingHorizontal: wp(4), width: wp(75)}}>
              <Text style={{fontSize: hp(2.0), color: 'white'}}>
                NATURE AND WILDLIFE
              </Text>
              <Text style={{color: 'rgba(187, 187, 187, 1)'}}>
                Celebrating India's rich reserve of nature and wildlife.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.instagram.com/reel/CmnyER5pcL0/?igshid=YmMyMTA2M2Y',
                );
              }}>
              <Text style={{fontSize: hp(1.5), color: 'white'}}>View</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(6),
              marginBottom: hp(1),
            }}>
            <Text style={{fontSize: hp(2.0), color: 'white'}}>05</Text>
            <View style={{paddingHorizontal: wp(4), width: wp(75)}}>
              <Text style={{fontSize: hp(2.0), color: 'white'}}>
                CULTURE AND HISTORY
              </Text>
              <Text style={{color: 'rgba(187, 187, 187, 1)'}}>
                Celebrating India's culture and history.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.instagram.com/reel/CmnyER5pcL0/?igshid=YmMyMTA2M2Y',
                );
              }}>
              <Text style={{fontSize: hp(1.5), color: 'white'}}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: hp(4)}}>
          <Text style={{color: 'rgba(234, 198, 117, 1)'}}>FAQS</Text>
          <View
            style={{
              backgroundColor: 'white',
              padding: hp(1),
              borderTopLeftRadius: hp(1),
              borderTopRightRadius: hp(1),
              marginTop: hp(2),
            }}>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text
                style={{
                  color: 'rgba(60, 60, 67, 0.5)',
                  marginRight: wp(2),
                  fontSize: hp(2),
                }}>
                01
              </Text>
              <Text
                style={{
                  color: '#000000',
                  flex: 1,
                  fontSize: hp(2),
                  fontWeight: '500',
                }}>
                What is Philately?
              </Text>
              <View>
                {show === 1 ? null : (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      setShow(show === 1 ? 0 : 1);
                    }}>
                    <Icon name="plus-circle" size={hp(2)} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {show === 1 ? (
              <Transitioning.View ref={ref} transition={transition}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: wp(5),
                    paddingVertical: hp(1),
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textStyle}>
                    Philately refers to the study and collection of postage
                    stamps, stamped envelopes, postmarks, postcards and other
                    materials relating to postal delivery.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      ref.current.animateNextTransition();
                      setShow(0);
                    }}>
                    <Icon1 name="closecircle" size={hp(2)} color="black" />
                  </TouchableOpacity>
                </View>
              </Transitioning.View>
            ) : (
              <View />
            )}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: hp(1),
              // borderTopLeftRadius: hp(1),
              // borderTopRightRadius: hp(1),
              marginTop: hp(0.2),
            }}>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text
                style={{
                  color: 'rgba(60, 60, 67, 0.5)',
                  marginRight: wp(2),
                  fontSize: hp(2),
                }}>
                02
              </Text>
              <Text
                style={{
                  color: '#000000',
                  flex: 1,
                  fontSize: hp(2),
                  fontWeight: '500',
                }}>
                Who is a Philatelist?
              </Text>
              <View>
                {show === 2 ? null : (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      setShow(show === 2 ? 0 : 2);
                    }}>
                    <Icon name="plus-circle" size={hp(2)} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {show === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(5),
                  paddingVertical: hp(1),
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle}>
                  Philatelists are people who study and collect postage stamps
                  as a hobby or an investment. Simply said, A philatelist is a
                  person who “loves stamps”.
                </Text>
                <TouchableOpacity
                  // style={{marginLeft: hp(2)}}
                  onPress={() => {
                    setShow(0);
                  }}>
                  <Icon1 name="closecircle" size={hp(2)} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: hp(1),
              // borderTopLeftRadius: hp(1),
              // borderTopRightRadius: hp(1),
              marginTop: hp(0.2),
            }}>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text
                style={{
                  color: 'rgba(60, 60, 67, 0.5)',
                  marginRight: wp(2),
                  fontSize: hp(2),
                }}>
                03
              </Text>
              <Text
                style={{
                  color: '#000000',
                  flex: 1,
                  fontSize: hp(2),
                  fontWeight: '500',
                  paddingHorizontal: wp(3),
                }}>
                What is the significance of Philately?
              </Text>
              <View>
                {show === 3 ? null : (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      setShow(show === 3 ? 0 : 3);
                    }}>
                    <Icon name="plus-circle" size={hp(2)} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {show === 3 ? (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(5),
                  paddingVertical: hp(1),
                }}>
                <Text style={styles.textStyle}>
                  Philately plays a vital role in celebrating and elevating
                  national heritage and events. It gives you a great opportunity
                  to learn about the cultures, currencies, events, and landmarks
                  of other countries.
                </Text>
                <TouchableOpacity
                  // style={{marginLeft: hp(2)}}
                  onPress={() => {
                    setShow(0);
                  }}>
                  <Icon1 name="closecircle" size={hp(2)} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: hp(1),
              borderBottomLeftRadius: hp(1),
              borderBottomRightRadius: hp(1),
              marginTop: hp(0.2),
            }}>
            <View style={{flexDirection: 'row', alignContent: 'center'}}>
              <Text
                style={{
                  color: 'rgba(60, 60, 67, 0.5)',
                  marginRight: wp(2),
                  fontSize: hp(2),
                }}>
                04
              </Text>
              <Text
                style={{
                  color: '#000000',
                  flex: 1,
                  fontSize: hp(2),
                  fontWeight: '500',
                }}>
                What India Post means to India?
              </Text>
              <View>
                {show === 4 ? null : (
                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {
                      setShow(show === 4 ? 0 : 4);
                    }}>
                    <Icon name="plus-circle" size={hp(2)} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {show === 4 ? (
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(5),
                  paddingVertical: hp(1),
                }}>
                <Text style={styles.textStyle}>
                  India Post has been an integral part of our county’s
                  communication for over 150 years. It has succeeded in touching
                  the lives of people, from delivering mail to accepting
                  deposits across every corner of the country, serving as one of
                  the best postal services around the globe.
                </Text>
                <TouchableOpacity
                  // style={{marginLeft: hp(2)}}
                  onPress={() => {
                    setShow(0);
                  }}>
                  <Icon1 name="closecircle" size={hp(2)} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
      </ScrollView>
      <Footer tab="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#103994',
    flex: 1,
    paddingTop: hp(3),
  },
  textStyle: {
    color: 'black',
    // margin: hp(2),
    marginHorizontal: wp(3),
    fontSize: hp(1.6),
  },
});

export default AboutScreen;
