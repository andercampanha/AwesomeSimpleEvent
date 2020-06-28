/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/Home';
import LectureScreen from './src/screens/Lecture';
import ScheduleScreen from './src/screens/Schedule';
import EventMapScreen from './src/screens/EventMap';
import QuestionsScreen from './src/screens/Questions';
import SendQuestionsScreen from './src/screens/SendQuestions';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Lecture" component={LectureScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="SendQuestion" component={SendQuestionsScreen} />
        <Stack.Screen
          name="EventMap"
          component={EventMapScreen}
          options={{title: 'Event Map'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
