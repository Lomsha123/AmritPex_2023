/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './Landing';
import HomeScreen from './Home';
import WalkThrough1 from './WalkThrough1';
import CreateAccount from './CreateAccount';
import NewsDetailScreen from './NewsDetail';
import AboutScreen from './AboutScreen';
import ActivitiesScreen from './ActivitiesScreen';
import DownloadScreen from './Downloads';
import Gallery from './Gallery';
import ActivityDetailScreen from './ActivityDetail';
import QuizScreen from './QuizScreen';
import QuizHome from './QuizHome';
import NormalPassScreen from './NormalPassScreen';
import GoldenPassScreen from './GoldenPassScreen';
import ActivitiesCategoryScreen from './Activity_CategoryScreen';


const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="WalkThrough1" component={WalkThrough1} options={{headerShown: false}}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} options={{headerShown: false}}/>
      <Stack.Screen name="DownloadScreen" component={DownloadScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Gallery" component={Gallery} options={{headerShown: false}}/>
      <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="QuizScreen" component={QuizScreen} options={{headerShown: false}}/>
      <Stack.Screen name="QuizHome" component={QuizHome} options={{headerShown: false}}/>
      <Stack.Screen name="NormalPass" component={NormalPassScreen} options={{headerShown: false}}/>
      <Stack.Screen name="GoldenPass" component={GoldenPassScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ActivityCategoryScreen" component={ActivitiesCategoryScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default Navigator;
