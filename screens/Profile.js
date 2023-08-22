import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Profile = ({navigation}) => {
  return (
    <View className="flex flex-1 bg-white">
    <TouchableOpacity
    onPress={()=>navigation.navigate('Home')}
    
    className="mt-10 ml-3">
         <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>

<View className="items-center">

<View className="h-28 w-28 bg-slate-400 rounded-full">
  {/* <Image
  source={require('../assets/logo.png')}
  className="w-36 h-20"
  />  */}
</View>




  <Text className="font-semibold text-[25px] mt-5">Profile</Text>

  <View className="mt-2 flex-row">
  <Text className="text-lg font-medium">Library ID - </Text>
  <Text className="text-lg font-medium">22276</Text>
  </View>

  <View className="mt-1 flex-row">
  <Text className="text-lg font-medium">Email - </Text>
  <Text className="text-lg font-medium">ruchikarg97@gmail.com</Text>
  </View>


  <View className="mt-1 flex-row">
  <Text className="text-lg font-medium">Address - </Text>
  <Text className="text-lg font-medium">330/15, Balangoda, Kelaniya.</Text>
  </View>

  </View>
</View>

  )
}

export default Profile