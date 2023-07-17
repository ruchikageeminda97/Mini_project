import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './screens/Onboardscreen';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="onboard" component={OnBoardScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />


      </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
      
  );
}


