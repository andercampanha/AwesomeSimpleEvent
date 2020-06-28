// @flow strict-local
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../../../utils/Colors';

type ItemProps = {
  id: string,
  room: string,
  time: string,
  title: string,
  navigation: {
    navigate: (route: string, params: {id: string, title: string}) => void,
  },
};

const Item: (props: ItemProps) => React$Node = ({
  id,
  navigation,
  room,
  time,
  title,
}) => (
  <TouchableOpacity
    testID="lecture-card"
    onPress={() => navigation.navigate('Lecture', {id, title})}
    style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{room}</Text>
    <Text style={styles.time}>{time}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.lightBlue,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 14,
  },
  time: {
    fontSize: 16,
  },
});

export default Item;
