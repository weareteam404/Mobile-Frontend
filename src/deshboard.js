import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native';
import {Text,View,StyleSheet,Image,TextInput} from 'react-native'



const deshboard = ({navigation}) =>{
    const [value, onChangeText] = React.useState('Type Name Here');
    
    return(
        <View style ={styles.containor}>
            <View style={{flexDirection:"row",backgroundColor:"#6487d5",height:90,width:"100%",alignItems:"center",justifyContent:"space-around"}}>
                <Text style={{fontWeight:"bold",color:"blue",fontSize:18}}>UoM Directory</Text>
                

 <Image
   

        source={require('./img/kk.jpg')}
          //borderRadius will help to make Round Shape
          style={{
            width: 70,
            height: 70,
            borderRadius: 70 / 2
          }}
        />
        <TouchableOpacity  onPress={() => navigation.navigate('profile')}>
          <Text style={{fontWeight:"bold",color:"blue",fontSize:18}}>Revon</Text>


          </TouchableOpacity>

            </View>

            <ScrollView>

<View style={{marginTop:35,alignSelf:"center",flexDirection:"row"}}>
            <TextInput
      style={{ height: 40,width:200, borderColor: 'gray', borderWidth: 1 ,borderRadius:5}}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <View style={{width:70,height:30,borderRadius:5,backgroundColor:"blue",justifyContent:"center",marginLeft:15,marginTop:5}}>
        <Text style={{color:"white",textAlign:"center"}}>Search</Text>
    </View>
</View>
<View style={{flexDirection:"row",marginTop:35,alignSelf:"center",justifyContent:"space-around",width:"100%"}}>
<View style={{width:90,height:30,backgroundColor:"blue",justifyContent:"center",marginLeft:15,marginTop:5}}>
        <Text style={{color:"white",textAlign:"center"}}>Faculty</Text>
    </View>
    <View style={{width:90,height:30,backgroundColor:"blue",justifyContent:"center",marginLeft:15,marginTop:5}}>
        <Text style={{color:"white",textAlign:"center"}}>Batch</Text>
    </View>
</View>
<View style={{flexDirection:"row",width:"100%",justifyContent:"space-around"}}>

<View style={{width:"40%",height:190,alignItems:"center",borderWidth:1,borderRadius:2,marginTop:25, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,  
    elevation: 5}}>

<Image  
       source={require('./img/stimage.jpeg')}
          //borderRadius will help to make Round Shape
          style={{
            width: 60,
            height: 60,
            marginTop:15,
            borderRadius: 60 / 2
          }}
        />

        <Text> REvon Muclim</Text>
        <View style={{backgroundColor:"yellow"}}>
            <Text> Faculty of Business</Text>
        </View>
        <Text> Batch 14</Text>

        <Text style={{textAlign:"center"}}>Mangament and commerce</Text>
    </View>

<View style={{width:"40%",height:190,borderWidth:1,borderRadius:2,marginTop:25,alignItems:"center", shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,  
    elevation: 5}}>
        
<Image
       source={require('./img/woman1.jpeg')}
          //borderRadius will help to make Round Shape
          style={{
            width: 60,
            height: 60,
            marginTop:15,
            borderRadius: 60 / 2
          }}
        />

        <Text>mariya  goe</Text>
        <View style={{backgroundColor:"pink"}}>
            <Text> Faculty of Business</Text>
        </View>
        <Text> Batch 14</Text>

        <Text style={{textAlign:"center"}}>Mangament and commerce</Text>
    </View>




    
    
    
</View>



<View style={{flexDirection:"row",marginTop:25,alignSelf:"center",justifyContent:"space-around",width:"100%"}}>

</View>
<View style={{flexDirection:"row",width:"100%",justifyContent:"space-around"}}>

<View style={{width:"40%",height:190,alignItems:"center",borderWidth:1,borderRadius:2,marginTop:25, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,  
    elevation: 5}}>

<Image
       source={require('./img/womanimg.jpg')}
          //borderRadius will help to make Round Shape
          style={{
            width: 60,
            height: 60,
            marginTop:15,
            borderRadius: 60 / 2
          }}
        />

        <Text> sonyia set</Text>
        <View style={{backgroundColor:"green"}}>
            <Text> Faculty of IT</Text>
        </View>
        <Text> Batch 14</Text>

        <Text style={{textAlign:"center"}}>Mangament and IT</Text>
    </View>

<View style={{width:"40%",height:190,borderWidth:1,borderRadius:2,marginTop:25,alignItems:"center", shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,  
    elevation: 5}}>
        
<Image
       source={require('./img/menimg.jpg')}
          //borderRadius will help to make Round Shape
          style={{
            width: 60,
            height: 60,
            marginTop:15,
            borderRadius: 60 / 2
          }}
        />

        <Text> danies richi</Text>
        <View style={{backgroundColor:"red"}}>
            <Text> Faculty of Arts</Text>
        </View>
        <Text> Batch 14</Text>

        <Text style={{textAlign:"center"}}>Mangament and commerce</Text>
    </View>




    
    
    
</View>
</ScrollView>


    <View style={{flexDirection:"row",width:"100%",height:40,borderWidth:1,alignItems:"center",justifyContent:"space-around"}}>
    <Image
       source={require('./img/home.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />

<Image
       source={require('./img/profile.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />


<Image
       source={require('./img/bell.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />

<Image
       source={require('./img/cal.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />

<Image
       source={require('./img/gal.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />

<Image
       source={require('./img/harmbuger.png')}
          //borderRadius will help to make Round Shape
          style={{
            width: 30,
            height: 30,
            
          }}
        />


    </View> 
      
        </View>
    )
}

const styles = StyleSheet.create( {
 containor: {
     flex:1,
   
     
 },
 paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
})

export default deshboard;