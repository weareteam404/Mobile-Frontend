// import React from 'react'
// import { View, Text, Image ,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
// const width = Dimensions.get("window").width
// const height = Dimensions.get("window").height

// // export default SelectionScreen = ({navigation}) => {


//     export default function signUp() {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#002200' }}>
//             <View style={{ alignItems: 'center', marginTop: 30,height:height/3,justifyContent:'flex-end' }}>
//                 <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Sign Up </Text>
//                 <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Category Selection</Text>
//             </View>
//             <View style={{marginTop:20,justifyContent:'space-around',flexDirection:'row'}}>
//             <TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate("register")}>
//                 <Text style={{color:'white',textAlign:'center',fontSize:15}}>Academic Stuff</Text>
//                 <View style={styles.imageContainer}>
//                 {/* <Image
//                 source={require("../images/first.jpg")}
//                 style={{backgroundColor:'grey',height:80,width:80,borderRadius:15,marginTop:5}}
//                 /> */}
//                 </View>
//             </TouchableOpacity >
//             <TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate("register")}>
//             <Text style={{color:'white',textAlign:'center',fontSize:15}}>Past Students</Text>
//             {/* <View style={styles.imageContainer}>
//                 <Image
//                 source={require("../images/second.jpg")}
//                 style={{height:80,width:80,borderRadius:15,marginTop:5}}
//                 />
//                 </View> */}

//             </TouchableOpacity>
//             </View>

//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//         borderWidth:10,
//         borderColor:'white',
//         backgroundColor:'#333333',
//         borderRadius:10,
//         padding:20
//     },
// imageContainer:{
//     backgroundColor:'#333333',
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:20
// }
// })










import React from 'react'
import { View, Text, Image ,StyleSheet,Dimensions,TouchableOpacity,Button} from 'react-native'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

 export default signUp = ({navigation}) => {



    return (
        <View style={{ flex: 1, backgroundColor: '#002200' }}>
            <View style={{ alignItems: 'center', marginTop: 30,height:height/3,justifyContent:'flex-end' }}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Sign Up </Text>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Category Selection</Text>
            </View>
            <View style={{marginTop:20,justifyContent:'space-around',flexDirection:'row'}}>
            <TouchableOpacity style={styles.container}   onPress={() => {
                const userType = {
                    type: 'ACADEMIC'
                }
                navigation.navigate('register', {userType});
            }}>
                <Text style={{color:'white',textAlign:'center',fontSize:15}}>Academic Stuff</Text>




                <View style={styles.imageContainer}>
                 <Image
                source={require("./img/acdemic.png")}
                style={{backgroundColor:'grey',height:80,width:80,borderRadius:15,marginTop:5}}
                />
                </View>
            </TouchableOpacity >
            <TouchableOpacity style={styles.container}  onPress={() => {
                const userType = {
                    type: 'PAST_STUDENT'
                }
                navigation.navigate('register', {userType});
            }}>
            <Text style={{color:'white',textAlign:'center',fontSize:15}}>Past Students</Text>

            <View style={styles.imageContainer}>
                 <Image
                source={require("./img/pastst.png")}
                style={{backgroundColor:'grey',height:80,width:80,borderRadius:15,marginTop:5}}
                />
                </View>
            </TouchableOpacity>




            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#333333',
        borderRadius:10,
        padding:20
    },
imageContainer:{
    backgroundColor:'#333333',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
}
})
