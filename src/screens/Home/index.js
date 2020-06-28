// @flow strict-local

import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './Header';

type HomeScreenProps = {
  navigation: {
    navigate: (route: string) => void,
  },
};

const HomeScreen: (props: HomeScreenProps) => React$Node = ({navigation}) => {
  const onPressSchedule: () => void = () => navigation.navigate('Schedule');
  const onPressEventMap: () => void = () => navigation.navigate('EventMap');

  return (
    <SafeAreaView>
      <Header />
      <View>
        <View style={styles.button}>
          <Button
            testID="home-schedule"
            onPress={onPressSchedule}
            title="Schedule"
          />
        </View>
        <View style={styles.button}>
          <Button
            testID="home-map"
            onPress={onPressEventMap}
            title="Event map"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    margin: 10,
  },
});

export default HomeScreen;
