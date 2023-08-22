import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Register from './Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Login = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    'Ubuntumedium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    
  });

  console.log(fontsLoaded)

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View className="flex-1 items-center">
      <Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-16"
      />
      <View className="mt-4">
        <Text className="text-red-800 text-[20px] font-semibold" style={{ fontFamily:'Ubuntumedium'}}>Login</Text>
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

{/* Password */}

      <View className="flex border-2 border-[#A6A9AB] w-[90%] h-11 mt-4 rounded-xl flex-row justify-between">
          <View className="flex-row">
              <View className="justify-center ml-1 mb-2">
                <EvilIcons name="unlock" size={36} color="#A6A9AB" /></View>
              
              <View className="justify-center ml-1.5">
                <TextInput secureTextEntry={true} placeholder='password' placeholderTextColor={'#A6A9AB'} /></View>
          </View>

          <TouchableOpacity className="justify-center  mr-2 ">
            <FontAwesome5 name="eye-slash" size={20} color="#A6A9AB" /></TouchableOpacity>

      </View>
{/* Forget Area */}  
    <View className="flex ml-1 w-[90%] h-5.5 rounded-xl flex-row justify-between">
      <View className="flex flex-row space-x-1">
        <Text className="text-[#6A6C71]">Forgot Password?</Text>
        <TouchableOpacity
           onPress={() => navigation.navigate('Reset')}
          ><Text className="text-blue-900 font-semibold">Reset it</Text></TouchableOpacity>
      </View>
    </View>

{/* Login Button */}
    <TouchableOpacity
    onPress={()=>navigation.navigate('Home')}
    className="
        bg-[#FFD662] shadow-sm shadow-yellow-600 items-center 
          justify-center w-[90%] h-11 mt-4 rounded-xl">
      <View >  
          <Text className="text-lg font-semibold">Login</Text>
      </View>

    </TouchableOpacity>

  {/* or */}
      <View className="flex flex-row justify-between space-x-2">
        <View className="bg-[#c0c1c2] h-0.5 w-[40%] mt-5"></View>
        <Text className="mt-2.5 font-semibold text-[#929292]">Or</Text>
        <View className="bg-[#c0c1c2] h-0.5 w-[40%] mt-5"></View>
      </View>

  <TouchableOpacity
    onPress={() => navigation.navigate('Register')}
  className="mt-2">
    <Text className="text-blue-900 font-semibold">Register here</Text>
  </TouchableOpacity>

      <TouchableOpacity className="flex flex-row w-[90%] h-14 mt-4 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/apple.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[18px] font-semibold">Continued with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex flex-row w-[90%] h-14 mt-3 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/google.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[18px] font-semibold">Continued with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="flex flex-row w-[90%] h-14 mt-3 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/facebook.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[18px] font-semibold">Continued with Facebook</Text>
      </TouchableOpacity>
      

    </View>
  )
}

export default Login