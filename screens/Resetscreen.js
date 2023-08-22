import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Resetscreen = ({navigation}) => {
  return (
    <View className="flex-1 items-center">
      
      <Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-16"
      />
      <View className="mt-5">
        <Text className="text-red-800 text-[20px] font-semibold" style={{ fontFamily:'Ubuntumedium'}}>Reset Password</Text>
      </View>

{/* Email */}

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-8 rounded-xl flex-row">
            <View className="justify-center ml-3">
            <MaterialCommunityIcons name="email-open-multiple-outline" size={23} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-3">
                <TextInput placeholder='E-mail' placeholderTextColor={'#A6A9AB'} />
            </View>
      </View>

{/* Button */}

      <TouchableOpacity className="
        bg-[#FFD662] shadow-black items-center 
          justify-center w-[90%] h-11 mt-4 rounded-xl">
      <View >  
          <Text className="text-lg font-semibold">Submit</Text>
      </View>

    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=>navigation.navigate('Login')}
    >
         
          <Text className="text-sm font-semibold text-blue-900 mt-4">Back to Login</Text>
    

    </TouchableOpacity>

    </View>
    
  )
}

export default Resetscreen