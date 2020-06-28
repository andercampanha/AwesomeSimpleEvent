import React from 'react';
import {render} from 'react-native-testing-library';

import Header from '../Home/Header';

describe('Header', () => {
  it('renders the text', () => {
    const {queryAllByText} = render(<Header />);
    const component = queryAllByText('Welcome to our Awesome event');

    expect(component).toHaveLength(1);
  });

  it('renders the background image', () => {
    const {queryAllByTestId} = render(<Header />);
    const component = queryAllByTestId('header-image');

    expect(component).toHaveLength(1);
  });
});
