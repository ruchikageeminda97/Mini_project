import { View, Text, Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';


const OnBoardScreen = () => {
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#FFF',
      image: <Image source={require('../assets/onboarding-images/onboard1.png')} 
        className="w-72 h-72 object-contain"
        />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#FFF',
        image: <Image source={require('../assets/onboarding-images/onboard22.png')}
        className=" w-72 h-72 object-contain"
        />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

      {
        backgroundColor: '#FFF',
        image: <Image source={require('../assets/onboarding-images/onboard3.png')} 
        className=" w-72 h-72 object-contain"
        />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },


      
  ]}
/>
  )
}

export default OnBoardScreen