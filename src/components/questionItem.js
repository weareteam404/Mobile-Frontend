import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const QuestionItem = (props) => {
  const [value, setValue] = React.useState();
  const [points, setPoints] = React.useState();

  const handleChanger = (newValue) => {
    setValue(newValue);
    props.answerHandler(newValue,props.no);
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          fontStyle: 'italic',
          marginTop: 45,
          marginLeft: 22,
        }}>
        {props.question}
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => handleChanger(newValue)}
        value={value}>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <RadioButton value="first" />
          <Text style={{fontSize: 20}}>{props.optionals[0]}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <RadioButton value="second" />
          <Text style={{fontSize: 20}}>{props.optionals[1]}</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: '100%',

    backgroundColor: 'pink',
  },
  buttonContainer: {
    width: '70%',
    marginLeft: 60,
    marginTop: 22,
  },
});

export default QuestionItem;
