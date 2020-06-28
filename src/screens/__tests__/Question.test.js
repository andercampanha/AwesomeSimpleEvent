import React from 'react';
import Faker from 'faker';
import {render} from 'react-native-testing-library';

import Question from '../Questions/Question';

const props = {
  user: Faker.lorem.word(),
  time: Faker.lorem.word(),
  question: Faker.lorem.word(),
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Question', () => {
  it('renders a question', () => {
    const {queryAllByText} = render(<Question {...props} />);
    const questionText = queryAllByText(props.question);
    const userText = queryAllByText(props.user);
    const timeText = queryAllByText(props.time);

    expect(questionText).toHaveLength(1);
    expect(userText).toHaveLength(1);
    expect(timeText).toHaveLength(1);
  });
});
