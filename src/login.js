
import React from 'react';
import {ImageBackground, View, Text, Button, TextInput,StyleSheet} from 'react-native';

export default function About() {
  return (
    <View style={styles.header}>

     <ImageBackground source={require('./img/login.jpg')} style={styles.ImageBackground}>
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      

    </View>

    <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>User Name:</Text>
            <TextInput style={styles.textinputContainer} />             
           </View>


           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}> Password:</Text>
            <TextInput style={styles.textinputContainer} />             
           </View>

           <View style={styles.buttonContainer}> 
   <Button
  title="Login"
//   onPress={()=>navigation.navigate("Login")}
/>
        </View>
 

</ImageBackground> 

</View>



  );
}

const styles = StyleSheet.create({
  ImageBackground: {
      flex: 1,
      width: "100%",
      height: "100%",
  },
  container: {
      
      alignSelf:"center",
      
     
  },
  text: {
    marginTop:77,
       color: 'black',
       fontWeight:"bold",
      fontSize: 33,
    //   alignItems:"center",
    //   justifyContent:"center"
  },
  header:{
flex:1,
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  formContainer : {
    flexDirection : 'row',
     justifyContent : "space-between",
     marginLeft : 30,
     marginRight : 40,
      marginTop : 30
     
  },

  buttonContainer :{ 

    width: '70%',
    marginTop:44,
     marginLeft : 60,
     borderRadius:55
},
  formContainerText : {
      fontSize: 20,
      marginTop:5,
      fontWeight : "bold",
      color : 'black'
  },
  textinputContainer : {
      backgroundColor : "white",
       width : "70%",
       borderRadius:22,
   
  },
});



