// @flow strict-local

import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import Colors from '../../utils/Colors';
import {getCurrentTime} from '../../utils/Time';

type SendQuestionProps = {
  route: {
    params: {
      lectureId: string,
      addQuestion: (question: {
        id: string,
        question: string,
        user: string,
        time: string,
      }) => void,
    },
  },
  navigation: {
    goBack: () => void,
  },
};

type QuestionType = {
  id: string,
  user: string,
  question: string,
  time: string,
};

const SendQuestion: (props: SendQuestionProps) => React$Node = ({
  route: {
    params: {addQuestion, lectureId},
  },
  navigation,
}) => {
  const [question, onChangeQuestion] = React.useState('');
  const [user, onChangeUser] = React.useState('');

  const handleSendQuestion: () => void = () => {
    const time: string = getCurrentTime();
    // TODO: remove id when using the API
    const newQuestion: QuestionType = {
      id: `${Math.floor(Math.random() * Math.floor(9999999))}`,
      question,
      user,
      time,
    };

    addQuestion(newQuestion);
  };

  const handleSendQuestionAndGoBack: () => void = () => {
    handleSendQuestion();
    navigation.goBack();
  };

  return (
    <View>
      <Text style={styles.text}>What's your Question?</Text>
      <TextInput
        testID="question-input"
        style={styles.input}
        onChangeText={text => onChangeQuestion(text)}
        value={question}
      />
      <Text style={styles.text}>What's your Name?</Text>
      <TextInput
        testID="user-input"
        style={styles.input}
        onChangeText={text => onChangeUser(text)}
        value={user}
      />
      <View style={styles.button}>
        <Button
          testID="send-questionbutton"
          onPress={handleSendQuestionAndGoBack}
          title="Send the question"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 7,
    borderColor: Colors.dark,
    borderWidth: 1,
    paddingHorizontal: 24,
    margin: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 24,
    margin: 10,
  },
});

export default SendQuestion;
