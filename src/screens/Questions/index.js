// @flow strict-local

import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';

import Question from './Question';

// TODO: Remove this and retrieve questions from API using fetch()
import {QUESTION_LIST} from './dummyData';

type QuestionsProps = {
  navigation: {
    navigate: (route: string, params: {lectureId: string}) => void,
  },
  lectureId: string,
};

type QuestionType = {
  id: string,
  user: string,
  question: string,
  time: string,
};

const Questions: (props: QuestionsProps) => React$Node = ({
  lectureId,
  navigation,
}) => {
  const questionList: Array<QuestionType> =
    QUESTION_LIST && QUESTION_LIST[lectureId] ? QUESTION_LIST[lectureId] : [];
  const [questions, setQuestions] = React.useState(questionList);

  // TODO: on add question, POST it to the api using fetch
  const handleAddQuestion: () => void = question =>
    setQuestions([...questions, question]);

  const handleSendQuestion: () => void = () =>
    navigation.navigate('SendQuestion', {
      lectureId,
      addQuestion: handleAddQuestion,
    });

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button onPress={handleSendQuestion} title="Send a question" />
      </View>
      <FlatList
        extraData={questions}
        data={questions}
        renderItem={({item}) => (
          <Question
            id={item.id}
            user={item.user}
            question={item.question}
            time={item.time}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    margin: 10,
  },
  container: {
    flex: 1,
  },
});

export default Questions;
