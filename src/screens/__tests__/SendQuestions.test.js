import React from 'react';
import Faker from 'faker';
import {render, fireEvent} from 'react-native-testing-library';

import SendQuestionsScreen from '../SendQuestions';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
  route: {
    params: {
      lectureId: Faker.lorem.word(),
      addQuestion: jest.fn(),
    },
  },
};

describe('SendQuestionsScreen', () => {
  it('fills and sends a question', () => {
    const {getByTestId} = render(<SendQuestionsScreen {...props} />);
    const questionInput = getByTestId('question-input');
    const userInput = getByTestId('user-input');
    const sendButton = getByTestId('send-questionbutton');
    const questionText = Faker.lorem.word();
    const userText = Faker.lorem.word();

    fireEvent.changeText(questionInput, questionText);
    fireEvent.changeText(userInput, userText);
    fireEvent.press(sendButton);

    expect(props.route.params.addQuestion).toHaveBeenCalledWith(
      expect.objectContaining({
        user: userText,
        question: questionText,
      }),
    );
    expect(props.route.params.addQuestion).toHaveBeenCalledTimes(1);
    expect(props.navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
