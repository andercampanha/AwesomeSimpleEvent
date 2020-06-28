// @flow strict-local
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../../../utils/Colors';

type QuestionProps = {
  id: string,
  user: string,
  time: string,
  question: string,
  navigation: {
    navigate: (route: string, params: {lectureId: string}) => void,
  },
};

const Question: (props: QuestionProps) => React$Node = ({
  id,
  navigation,
  user,
  time,
  question,
}) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.question}>{question}</Text>
    <Text style={styles.subtitle}>{user}</Text>
    <Text style={styles.time}>{time}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  question: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 12,
  },
  time: {
    fontSize: 10,
  },
});

export default Question;
