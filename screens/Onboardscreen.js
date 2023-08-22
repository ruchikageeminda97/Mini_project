import { View, Text, Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


const OnBoardScreen = () => {
    const navigation=useNavigation()

    const DotComponent = ({selected}) => {
    return(
       <View>
        <View
          className={`mx-1 w-2 h-2 ${
            selected ? "bg-black w-4" : "bg-white"
          } rounded-full`}
        ></View>
      </View>
    )
    }

  return (
    <Onboarding
    onSkip={()=>navigation.replace("Login")}
    onDone={()=>navigation.replace("Login")}
    DotComponent={DotComponent}
    bottomBarColor='#FFD662'
  pages={[
    {
      backgroundColor: '#FFF',

      image: <Image source={require('../assets/onboarding-images/onboard1.png')} 
        className="w-72 h-72 object-contain"
        />,
      title: 'Welcome to ChatLib',
      subtitle: 'Best library experience and get knowledge for the success user journey.', 
      
    },

    {
        backgroundColor: '#FFF',
        image: <Image source={require('../assets/onboarding-images/onboard22.png')}
        className=" w-72 h-72 object-contain"
        />,
        title: 'Library ',
        subtitle: 'Our library is at your fingertips. eaily find and read your favorite books with just few taps.',
      },

      {
        backgroundColor: '#FFF',
        image: <Image source={require('../assets/onboarding-images/onboard3.png')} 
        className=" w-72 h-72 object-contain"
        />,
        title: 'Search Books',
        subtitle: 'Ai Assistant for libraries to give answers in the most accurate and easy manner for queries. ',
      },


      
  ]}
/>
  )
}

export default OnBoardScreen