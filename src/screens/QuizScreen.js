/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Footer} from '../components/Footer';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ResultScreen} from '../components/ResultScreen';

const QuizScreen = props => {
  const {navigation} = props;
  console.log(props);
  const [ans, setAns] = useState();
  const baseUrl = 'http://44.227.33.138:3000';

  const [questionIndex, setQuestionIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [totalRightAns, setTotalRightAns] = useState(0);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Data');
      if (value !== null) {
        await setUserId(JSON.parse(value).user_id);
        // console.log(JSON.parse(value).user_id);
        // console.log(userId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/quiz/get-question`, {
        params: {
          group_id: 1,
        },
      })
      .then(function (res) {
        setData(res.data.data.result);
        setIsLoading(false);
        // console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    getData();
  }, []);
  const setScore = props?.route?.params?.setScore;
  const submitAns = e => {
    setAns(e);
    axios
      .post(`${baseUrl}/quiz/submit-answer`, {
        question_id: data[questionIndex].question_id,
        selected_option: `opt_${e}`,
        total_time_taken_in_ms: 10001,
        user_id: userId,
      })
      .then(res => {
        console.log(res.data.data);
        setTotalRightAns(
          res.data.data.is_right_answer ? totalRightAns + 1 : totalRightAns,
        );
        if (props?.route?.params?.score !== 10) {
          setScore(
            res.data.data.is_right_answer ? totalRightAns + 1 : totalRightAns,
          );
        }
        console.log(totalRightAns, 'rightans');
        console.log(userId, 'usr');
      })
      .catch(error => console.log(error));
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
    }, 700);
    setAns(0);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <></>
      ) : questionIndex === data?.length ? (
        <ResultScreen navigation={navigation} rightAns={totalRightAns} />
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(7),
              marginBottom: hp(1),
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
          <View style={{paddingHorizontal: wp(20), marginVertical: hp(5)}}>
            <Text
              style={{
                fontSize: hp(2.8),
                textAlign: 'center',
                letterSpacing: hp(0.2),
                color: 'white',
              }}>
              {`Q.${questionIndex + 1}: ` + data[questionIndex].question_text}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {data[questionIndex].question_img !== null ? (
              <Image
                style={{height: hp(22), width: wp(80), borderRadius: hp(2)}}
                source={{uri: data[questionIndex].question_img}}
              />
            ) : null}
          </View>
          <View>
            <Text
              style={{
                color: 'rgba(195, 194, 194, 1)',
                alignSelf: 'center',
                marginVertical: hp(2),
              }}>
              Choose the correct answer
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                paddingHorizontal: wp(15),
              }}>
              <TouchableOpacity
                onPress={() => {
                  setAns(1);
                  setTimeout(() => {
                    submitAns(1);
                  }, 1000);
                }}>
                <View
                  style={{
                    backgroundColor:
                      ans === 1 ? 'rgba(233, 197, 118, 1)' : 'white',
                    padding: hp(2.5),
                    borderRadius: hp(1),
                    width: wp(30),
                    height: hp(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <Text style={{color: '#103994', fontSize: hp(2)}}>
                    {data[questionIndex].answer.opt_1.text}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAns(2);
                  setTimeout(() => {
                    submitAns(2);
                  }, 1000);
                }}>
                <View
                  style={{
                    backgroundColor:
                      ans === 2 ? 'rgba(233, 197, 118, 1)' : 'white',
                    padding: hp(2.5),
                    borderRadius: hp(1),
                    width: wp(30),
                    height: hp(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <Text style={{color: '#103994', fontSize: hp(2)}}>
                    {data[questionIndex].answer.opt_2.text}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAns(3);
                  setTimeout(() => {
                    submitAns(3);
                  }, 1000);
                }}>
                <View
                  style={{
                    backgroundColor:
                      ans === 3 ? 'rgba(233, 197, 118, 1)' : 'white',
                    padding: hp(2.5),
                    borderRadius: hp(1),
                    width: wp(30),
                    height: hp(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <Text style={{color: '#103994', fontSize: hp(2)}}>
                    {data[questionIndex].answer.opt_3.text}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAns(4);
                  setTimeout(() => {
                    submitAns(4);
                  }, 1000);
                }}>
                <View
                  style={{
                    backgroundColor:
                      ans === 4 ? 'rgba(233, 197, 118, 1)' : 'white',
                    padding: hp(2.5),
                    borderRadius: hp(1),
                    width: wp(30),
                    height: hp(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <Text style={{color: '#103994', fontSize: hp(2)}}>
                    {data[questionIndex].answer.opt_4.text}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  color: 'rgba(233, 197, 118, 1)',
                  alignSelf: 'center',
                  marginVertical: hp(2),
                  fontWeight: '500',
                }}>
                {questionIndex + 1}/10
              </Text>
            </View>
          </View>
          <Footer navigation={navigation} tab="Quiz" />
        </>
      )}
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

export default QuizScreen;
