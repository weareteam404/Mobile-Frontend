import React, {useState} from 'react';
import ValidationComponent from 'react-native-form-validator';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class Register extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      faculty: '',
      department: '',
      batch: '',
      gender: '',
      address: '',
      contactNo: '',
      password1: '',
      password2: '',
    };
  }

  navigateToQuestions = () => {
    const {navigation, route} = this.props;

    this.validate({
      firstName: {required: true},
      lastName: {required: true},
      email: {email: true, required: true},
      department: {required: true},
      faculty: {required: true},
      batch: {required: true},
      gender: {required: true},
      address: {required: true},
      contactNo: {required: true},
      password1: {
        required: true,
        minLength: 6,
        equalPassword: this.state.password2,
      },
    });
    if (this.isFormValid()) {
      const {userType} = route.params;
      const user = {
        userType: userType.type,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        faculty: this.state.faculty,
        department: this.state.department,
        batch: this.state.batch,
        gender: this.state.gender,
        address: this.state.address,
        contactNo: this.state.contactNo,
        password: this.state.password1,
      };
      navigation.navigate('question', {user});
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.register}>
              <Text style={styles.registerText}>Register New Account</Text>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>First Name</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({firstName: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Last Name</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({lastName: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Email</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({email: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Faculty</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({faculty: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Department</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({department: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Batch</Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({batch: value})}
              />
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Gender </Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({gender: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Address </Text>
              <TextInput
                style={styles.textInputContainerAddress}
                onChangeText={(value) => this.setState({address: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Contact No </Text>
              <TextInput
                style={styles.textInputContainer}
                onChangeText={(value) => this.setState({contactNo: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Password </Text>
              <TextInput
                style={styles.textInputContainer}
                secureTextEntry={true}
                onChangeText={(value) => this.setState({password1: value})}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formContainerText}>Retype password </Text>
              <TextInput
                style={styles.textInputContainer}
                secureTextEntry={true}
                onChangeText={(value) => this.setState({password2: value})}
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <Text>
                I give my permission to include the above information in the
                Member directory of University of Moratuwa. This information
                will not be used for any other purpose and will not be
                distributed to anyone other than classmates.
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Register" onPress={this.navigateToQuestions} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#cccafe',
    height: '100%',
  },
  register: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 20,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 40,
    marginTop: 30,
    height: 40,
    alignItems: 'center',
  },
  formContainerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'purple',
    width: '30%',
  },
  textInputContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 40,
  },
  batchFacCont: {
    flexDirection: 'row',
    //  justifyContent : "space-between"
  },
  textInputContainerFaculty: {
    backgroundColor: 'white',
    width: '40%',
  },
  textInputContainerBatch: {
    backgroundColor: 'white',
    width: '30%',
  },
  textInputContainerAddress: {
    backgroundColor: 'white',
    width: '70%',
    height: 60,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '70%',
    marginLeft: 60,
  },
});
