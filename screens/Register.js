import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import {signInWithPopup} from 'firebase/auth';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { async } from '@firebase/util';
import { auth, googleProvider } from '../firebase';

const Register = ({navigation}) => {

   const [isPasswordShow, setIsPasswordShow]= useState(false) 

  const [fontsLoaded] = useFonts({
    'Ubuntumedium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    
  });

  console.log(fontsLoaded)

  if (!fontsLoaded) {
    return null;
  }

  const signUpWithGoogle = async () => {
    try{
       const result = signInWithPopup(auth , googleProvider);
       console.log("logged") 
    }catch(err){
      console.log("err");
    }
  }


  return (
    <View className="flex-1 items-center">
      
      <Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-16"
      />
      <View className="mt-4">
        <Text className="text-red-800 text-[20px] font-semibold" style={{ fontFamily:'Ubuntumedium'}}>Register</Text>
      </View>

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-8 rounded-xl flex-row">
            <View className="justify-center ml-3">
           
            <Ionicons name="person-outline" size={22} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-2">
                <TextInput placeholder='Name' placeholderTextColor={'#A6A9AB'} />
            </View>
      </View>

{/* Email */}

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-4 rounded-xl flex-row">
            <View className="justify-center ml-2">
            <MaterialCommunityIcons name="email-open-multiple-outline" size={23} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-2.5">
                <TextInput placeholder='E-mail' placeholderTextColor={'#A6A9AB'} />
            </View>
      </View>

      <View className="border-2 border-[#A6A9AB] w-[90%] h-11 mt-4 rounded-xl flex-row">
            <View className="justify-center ml-3">
            <FontAwesome name="mobile" size={32} color="#A6A9AB" />
            </View>
            <View className="justify-center ml-3">
                <TextInput placeholder='mobile' placeholderTextColor={'#A6A9AB'} />
            </View>
      </View>


{/* Password */}

      <View className="flex border-2 border-[#A6A9AB] w-[90%] h-11 mt-4 rounded-xl flex-row justify-between">
          <View className="flex-row">
              <View className="justify-center ml-1 mb-2">
                <EvilIcons name="unlock" size={36} color="#A6A9AB" /></View>
              
              <View className="justify-center ml-0">
                <TextInput secureTextEntry={!isPasswordShow} placeholder='password' placeholderTextColor={'#A6A9AB'} /></View>
          </View>

          <TouchableOpacity className="justify-center  mr-2"
          onPress={()=>setIsPasswordShow(!isPasswordShow)}
          >
            {isPasswordShow ? 
            <Entypo name="eye" size={24} color="#A6A9AB" />
        
        : <FontAwesome5 name="eye-slash" size={20} color="#A6A9AB" />
        
        }
           </TouchableOpacity>

      </View>


{/* Login Button */}
    <TouchableOpacity
     onPress={()=>navigation.navigate('Home')}
    className="
        bg-[#FFD662] items-center 
          justify-center w-[90%] h-11 mt-4 rounded-xl">
      <View >  
          <Text className="text-lg font-semibold">Register</Text>
      </View>

    </TouchableOpacity>

  {/* or */}
      <View className="flex flex-row justify-between space-x-2">
        <View className="bg-[#c0c1c2] h-0.5 w-[40%] mt-5"></View>
        <Text className="mt-2.5 font-semibold text-[#929292]">Or</Text>
        <View className="bg-[#c0c1c2] h-0.5 w-[40%] mt-5"></View>
      </View>

  <TouchableOpacity
  onPress={() => navigation.navigate('Login')}
  className="mt-2">
    <Text className="text-blue-900 font-semibold">Login here</Text>
  </TouchableOpacity>

      <TouchableOpacity className="flex flex-row w-[90%] h-14 mt-4 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/apple.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[17px] font-semibold">Continued with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={signUpWithGoogle}
      className="flex flex-row w-[90%] h-14 mt-3 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/google.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[17px] font-semibold">Continued with Google</Text>
      </TouchableOpacity>
    
      <TouchableOpacity className="flex flex-row w-[90%] h-14 mt-3 rounded-lg bg-[#e1e1e1] items-center">
          <Image source={require('../assets/icons/facebook.png')} className="h-9 w-9 ml-4"/>
          <Text className="ml-5 text-[17px] font-semibold ">Continued with Facebook</Text>
      </TouchableOpacity> 


      

    </View>
  )
}

export default Register