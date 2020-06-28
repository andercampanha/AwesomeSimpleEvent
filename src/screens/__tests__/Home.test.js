import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import HomeScreen from '../Home';

const props = {
  navigation: {navigate: jest.fn()},
};

describe('HomeScreen', () => {
  it('navigates to event map', () => {
    const {getByTestId} = render(<HomeScreen {...props} />);
    const component = getByTestId('home-map');

    fireEvent.press(component);

    expect(props.navigation.navigate).toHaveBeenCalledWith('EventMap');
  });

  it('navigates to event schedule', () => {
    const {getByTestId} = render(<HomeScreen {...props} />);
    const component = getByTestId('home-schedule');

    fireEvent.press(component);

    expect(props.navigation.navigate).toHaveBeenCalledWith('Schedule');
  });
});
