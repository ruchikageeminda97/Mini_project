import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


const Home = ({navigation}) => {
  return (
    <View className="flex-1 items-center bg-white">

<Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-16"
      />
      

     <TouchableOpacity 
     onPress={()=>navigation.navigate('Chatscreen')}
     className="
              bg-[#FFD662]  items-center justify-center w-[90%] h-20 mt-10 rounded-xl"> 
        <Animatable.View 
                animation={"pulse"} 
                easing={'ease-in-out'} 
                iterationCount={"infinite"}>
                <View>
                  <View >  
                      <Text className="text-lg font-semibold">Let’s Talk Now</Text>
                  </View>
                </View>
          </Animatable.View>
      </TouchableOpacity>


      <TouchableOpacity 
      onPress={()=>navigation.navigate('Profile')}
      className="
              bg-[#FFD662] items-center justify-center w-[90%] h-20 mt-5 rounded-xl">
      <Animatable.View 
                animation={"pulse"} 
                easing={'ease-in-out'} 
                iterationCount={"infinite"}>
                <View >  
                  <Text className="text-lg font-semibold">Profile</Text>
                </View>
        </Animatable.View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>navigation.navigate('Contact')}
      className="
              bg-[#FFD662] items-center justify-center w-[90%] h-20 mt-5 rounded-xl">
      <Animatable.View 
                animation={"pulse"} 
                easing={'ease-in-out'} 
                iterationCount={"infinite"}>
                  <View >  
                    <Text className="text-lg font-semibold">Contact Us</Text>
                  </View>
          </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>navigation.navigate('About')}
          className=" 
              bg-[#FFD662]  items-center justify-center w-[90%] h-20 mt-5 rounded-xl"
              
              >
              <Animatable.View 
                animation={"pulse"} 
                easing={'ease-in-out'} 
                iterationCount={"infinite"}>
                  <View >  
                      <Text className="text-lg font-semibold">About</Text>
                  </View>
          </Animatable.View>
          </TouchableOpacity>

    </View>
  )
}

export default Home