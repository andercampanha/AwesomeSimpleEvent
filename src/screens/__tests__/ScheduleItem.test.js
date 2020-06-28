import React from 'react';
import Faker from 'faker';
import {render, fireEvent} from 'react-native-testing-library';

import Item from '../Schedule/Item';

const props = {
  id: Faker.lorem.word(),
  room: Faker.lorem.word(),
  time: Faker.lorem.word(),
  title: Faker.lorem.word(),
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Item', () => {
  it('renders a schedule item', () => {
    const {queryAllByText} = render(<Item {...props} />);
    const titleText = queryAllByText(props.title);
    const subtitleText = queryAllByText(props.room);
    const timeText = queryAllByText(props.time);

    expect(titleText).toHaveLength(1);
    expect(subtitleText).toHaveLength(1);
    expect(timeText).toHaveLength(1);
  });

  it('navigates to correct lecture', () => {
    const {getByTestId} = render(<Item {...props} />);
    const component = getByTestId('lecture-card');

    fireEvent.press(component);

    expect(props.navigation.navigate).toHaveBeenCalledWith('Lecture', {
      id: props.id,
      title: props.title,
    });
    expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
