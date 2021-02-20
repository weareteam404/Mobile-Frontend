
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class frontPage extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{}}>
            <Text  style={{fontSize:50,fontWeight:'bold',textAlign:'center'}}>
              Web Member Directory
            </Text>
            </View>  
          </View>
         
        <View style={{flex:1,justifyContent:'center'}}>
            <View style={{}}>
            <Text  style={{fontSize:35,textAlign:'center'}}>
              {/* University of Western to mkratuwa */}
              University of mkratuwa
            </Text>
            </View>  
          </View>









     
         
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:"space-evenly",}}>
                <View style={{width:'35%'}}>
                <Button
          title="SIGN UP"
          onPress={() => this.props.navigation.navigate('signUp')}
/>

                </View>






                <View style={{width:'35%'}}>
                <Button
          title="LOG IN"
          onPress={() => this.props.navigation.navigate('login')}
/>
               
                </View>



          </View >
          
          <View style={{flex:1,alignItems:"center"}}>
                 
                <View style={{width:'35%'}}>
                <Button
          title="About Us"
          onPress={() => this.props.navigation.navigate('about')}
/>
               
                  </View>

    


         
         
          </View>
      </View>

    )
  }

}

export default frontPage;
