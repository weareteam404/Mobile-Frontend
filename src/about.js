
import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';

export default function About() {
  return (
    <View style={styles.header}>

     <ImageBackground source={require('./img/about.jpg')} style={styles.ImageBackground}>
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>

        <Text style={styles.text}>You can style your Text and View as you deem fit!hi this is abpout us page.
        You can style your Text and View as you deem fit!hi this is abpout us page</Text>
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
  },
  text: {
    marginTop:1,
      color: 'white',
      fontSize: 24,
      alignItems:"center",
      justifyContent:"center"
  },
  header:{
flex:1,
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
});
















