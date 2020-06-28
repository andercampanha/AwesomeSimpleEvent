import React from 'react';
import Faker from 'faker';
import {render} from 'react-native-testing-library';

import LectureScreen from '../Lecture';

const props = {
  navigation: {navigate: jest.fn()},
  route: {
    params: {
      id: Faker.lorem.word(),
      title: Faker.lorem.word(),
    },
  },
};

describe('LectureScreen', () => {
  it('renders lecture title', () => {
    const {queryAllByText} = render(<LectureScreen {...props} />);
    const component = queryAllByText(props.route.params.title);

    expect(component).toHaveLength(1);
  });
});
