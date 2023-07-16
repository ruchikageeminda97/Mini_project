import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Login = () => {
  return (
    <View className="flex-1 items-center">
      <Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-16"
      />
      <View className="mt-4">
        <Text className="text-[20px] font-semibold">Login</Text>
      </View>

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-8 rounded-xl flex-row">
            <View className="justify-center ml-3">
            <MaterialCommunityIcons name="email-open-multiple-outline" size={23} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-3">
                <TextInput placeholder='E-mail' placeholderTextColor={'#A6A9AB'} />
            </View>

      </View>

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-4 rounded-xl flex-row">
            <View className="justify-center ml-1 mb-2">
            <EvilIcons name="unlock" size={36} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-1.5">
                <TextInput placeholder='password' placeholderTextColor={'#A6A9AB'} />
            </View>

      </View>
{/* Login Button */}
    <TouchableOpacity className="bg-[#FFD662] shadow-xl shadow-cyan-950 items-center justify-center w-[90%] h-11 mt-4 rounded-xl">
        <View >  
        <Text className="text-lg font-semibold">Login</Text>
         </View>
    </TouchableOpacity>

    </View>
  )
}

export default Login