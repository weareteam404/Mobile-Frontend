import React,{useState} from 'react'
import { View, Text, TextInput ,StyleSheet,SafeAreaView,Button,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function register() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
    return (
        <SafeAreaView> 
            <ScrollView>
        <View style={styles.mainContainer}>
            <View style={styles.register}>   
               <Text style={styles.registerText}>Register New Account</Text>
            </View>
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Name</Text>
            <TextInput style={styles.textinputContainer} />             
           </View>
            <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Email</Text>
            <TextInput   style={styles.textinputContainer}/>             
           </View>
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Student Id</Text>
            <TextInput  style={styles.textinputContainer} />             
           </View>

           
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Faculty</Text>
            <TextInput  style={styles.textinputContainer}/>             
           </View >
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Batch</Text>
            <TextInput  style={styles.textinputContainer} />             
           </View>
         

           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Gender   </Text>
            <TextInput  style={styles.textinputContainer}/>             
           </View >
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Address  </Text>
            <TextInput  style={styles.textinputContainerAddress}/>             
           </View >
           <View style={styles.formContainer}>
           <Text style={styles.formContainerText}>Contact No </Text>
            <TextInput  style={styles.textinputContainer}/>             
           </View>
           <View style={styles.checkBoxContainer}>
          
       
  <Text>I give my permission to include the above information in the Member directory of University of Moratuwa.
      This information will not be used for any other purpose and will not be distributed to anyone other than classmates. 
  </Text>
               </View>
   <View style={styles.buttonContainer}> 
   <Button
  title="Register"
  onPress={()=>navigation.navigate("Login")}
/>
        </View>
 


        </View>

        </ScrollView>
    
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : '#cccafe',
        height : '100%'
       
    },
    register : {
       marginTop : 50,
       justifyContent : "center",
       alignItems : "center",
       
    },
    registerText :  {
      fontSize : 20,


    },
    formContainer : {
      flexDirection : 'row',
       justifyContent : "space-between",
       marginLeft : 30,
       marginRight : 40,
       marginTop : 30
       
    },
    formContainerText : {
        fontSize: 15,
        fontWeight : "bold",
        color : 'purple'
    },
    textinputContainer : {
        backgroundColor : "white",
         width : "70%"
     
    },
    batchFacCont : {
        flexDirection : 'row',
        //  justifyContent : "space-between"

    },
    textinputContainerFaculty :{
        backgroundColor : "white",
        width : "40%"


    },
    textinputContainerBatch : {
        backgroundColor : "white",
        width : "30%"


    },
    textinputContainerAddress :{
        backgroundColor : "white",
        width : "70%",
        height : 60

    },
    checkBoxContainer :{

          flexDirection : 'row',
   marginLeft:  10,
   marginRight : 40,
   marginTop : 10 ,
   marginBottom : 20   
},
buttonContainer :{ 

    width: '70%',
     marginLeft : 60
}
    
    
 

})
