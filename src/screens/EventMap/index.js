// @flow strict-local

import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import {EVENT_MAP} from '../../utils/Assets';

const EventMap: () => React$Node = () => {
  return (
    <ScrollView>
      <ScrollView horizontal>
        <View>
          <Image source={EVENT_MAP} />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default EventMap;
