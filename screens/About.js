import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const About = ({navigation}) => {
  return (  
    <ScrollView className="flex flex-1 bg-white">
    <View >
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
        
        className="mt-10 ml-3">
             <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

<View className="items-center justify-center">
    
    <Image
      source={require('../assets/logo.png')}
      className="w-36 h-20 mt-0"
      />

      <Text  className="font-semibold text-[21px] mt-5">About us</Text>

      <Text style={{textAlign:'justify'}} className="font-medium text-blue-95  text-[20px] items-center mt-5 ml-6 mr-6">
        Welcome to LibChat, your Ai-powered library assistant at the University of Sabaragamuwa in Sri Lanka. 
        Our mission is to simplify your library experience, offering personalized assistance, resource recommendations, 
        real-time updates and more. Behind LibChat is a dedicated team of innovators passionate about merging technology 
        and education. We aim to become an integral part of the university's academic ecosystem, continually evolving with
        emerging technologies and user feedback. Join us on this journey as we redefine library interactions with AI, making 
        your academic pursuits more efficient and enjoyable. LibChat, Your Intelligent Library Assistant.
      </Text>

         <Text  className="font-semibold text-[21px] mt-5">Team</Text>
         
      </View>
    </View>

    </ScrollView>

  )
}

export default About