import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Contact = ({navigation}) => {
  return (
    <View className="flex flex-1 bg-white">
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Home')}
    
    className="mt-10 ml-3">
         <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>

<View className="items-center">

<Image
  source={require('../assets/logo.png')}
  className="w-36 h-20 mt-0"
  />

  <Text className="font-semibold text-[21px] mt-6">Contact Us</Text>

  {/* E mail button */}

<TouchableOpacity className="w-[85%] h-12 bg-[#FFD662] rounded-lg mt-9 items-center justify-center">
<Text className="font-semibold text-lg">E mail</Text>
</TouchableOpacity>

  {/* E mail button */}

  <TouchableOpacity className="w-[85%] h-12 bg-[#FFD662] rounded-lg mt-6 items-center justify-center">
<Text className="font-semibold text-lg">Mobile</Text>
</TouchableOpacity>


  {/* E mail button */}

  <TouchableOpacity className="w-[85%] h-12 bg-[#FFD662] rounded-lg mt-6 items-center justify-center">
<Text className="font-semibold text-lg">WhatsApp</Text>
</TouchableOpacity>

  </View>



</View>

  )
}

export default Contact