// @flow strict-local

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Questions from '../Questions';

type LectureProps = {
  navigation: {
    navigate: (route: string, params: {lectureId: string}) => void,
  },
  route: {
    params: {
      id: string,
      title: string,
    },
  },
};

const Lecture: (props: LectureProps) => React$Node = ({
  route: {
    params: {id, title},
  },
  navigation,
}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <Questions
        testID="lecture-questions"
        lectureId={id}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
  view: {
    flex: 1,
  },
});

export default Lecture;
