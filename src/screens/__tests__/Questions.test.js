import React from 'react';
import Faker from 'faker';
import {render, fireEvent} from 'react-native-testing-library';

import QuestionsScreen from '../Questions';

const props = {
  lectureId: Faker.lorem.word(),
  navigation: {
    navigate: jest.fn(),
  },
};

describe('QuestionsScreen', () => {
  it('navigates to send questions screen', () => {
    const {getByText} = render(<QuestionsScreen {...props} />);
    const sendQuestionButton = getByText('Send a question');

    fireEvent.press(sendQuestionButton);

    expect(props.navigation.navigate).toHaveBeenCalledWith(
      'SendQuestion',
      expect.objectContaining({
        lectureId: props.lectureId,
      }),
    );
    expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
