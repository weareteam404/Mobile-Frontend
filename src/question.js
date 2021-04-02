import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import QuestionItem from '../src/components/questionItem';
import axios from 'axios';
const answerList = ['first', 'first', 'first'];

const questionList = [
  {
    no: 0,
    question: 'Which faculty is situated besides L canteen?',
    answer: 'first',
    optionals: ['Business', 'Post graduate studies'],
  },
  {
    no: 1,
    question: 'Which is situated besides Lagan?',
    answer: 'second',
    optionals: ['New Gym', 'Libaray'],
  },
  {
    no: 2,
    question: 'Which is situated besides Lagan IT Faculty',
    answer: 'first',
    optionals: ['Lagan', 'Health center'],
  },
  // {
  //   no: 3,
  //   question: 'xxxxxx',
  //   answer: 'second',
  //   optionals: ['Business', 'Post graduate studies'],
  // },
  // {
  //   no: 4,
  //   question: 'zzzzzz',
  //   answer: 'first',
  //   optionals: ['Business', 'Post graduate studies'],
  // },
  // {
  //   no: 5,
  //   question: 'wwwwwwwwww',
  //   answer: 'second',
  //   optionals: ['Business', 'Post graduate studies'],
  // },
];

export default function Question({route, navigation}) {
  const [value, setValue] = React.useState();
  const [userAnswers, setUserAnswers] = React.useState([0]);
  const [points, setPoints] = React.useState(0);
  const [permission, setPermission] = React.useState();

  const handleAnswers = (answer, no) => {
    console.log('ans: ' + answer);
    userAnswers[no] = answer;
  };

  const handleSubmit = async () => {
    var equals = require('array-equal');
    console.log('eq: ' + equals(userAnswers, answerList));
    if (equals(userAnswers, answerList)) {
      await signup();
    } else {
      navigation.navigate('null');
    }
  };

  const signup = async () => {
    const {user} = route.params;
    console.log(user.userType);
    const type = user.userType;
    if (user) {
      await axios
        .post(
          'http://10.0.2.2:4000/signup',
          {
            firstName: user.firstName,
            lastName: user.lastName,
            faculty: user.faculty,
            gender: user.gender,
            department: user.department,
            contactNo: user.contactNo,
            address: user.address,
            email: user.email,
            password: user.password,
          },
          {
            params: {
              type: type,
            },
          },
        )
        .then((response) => {
          navigation.navigate('login');
        })
        .catch((error) => {
          console.log(error.message.body);
          Alert.alert('User registration failed');
        });
    }
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 22}}>
            Question Form
          </Text>
        </View>
        {questionList.map((item, index) => {
          return (
            <QuestionItem answerHandler={handleAnswers} key={index} {...item} />
          );
        })}
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: '100%',

    backgroundColor: 'pink',
  },
  buttonContainer: {
    padding: '10%',
    width: '70%',
    marginLeft: 60,
    marginTop: 22,
  },
});
