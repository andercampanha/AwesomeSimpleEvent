// @flow strict-local

import React from 'react';
import {FlatList} from 'react-native';

import Item from './Item';

// TODO: Remove this and retrieve lectures from API using fetch()
import {LECTURE_LIST} from './dummyData';

type ScheduleProps = {
  navigation: {
    navigate: (route: string, params: {id: string, title: string}) => void,
  },
};

const Schedule: (props: ScheduleProps) => React$Node = ({navigation}) => (
  <FlatList
    data={LECTURE_LIST}
    renderItem={({item}) => (
      <Item
        id={item.id}
        room={item.room}
        title={item.title}
        time={item.time}
        navigation={navigation}
      />
    )}
    keyExtractor={item => item.id}
  />
);

export default Schedule;
