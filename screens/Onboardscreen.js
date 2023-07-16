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
            selected ? "bg-red-700 w-5" : "bg-white"
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
      title: 'Library',
      subtitle: 'Library on your finger Tips', 
      
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