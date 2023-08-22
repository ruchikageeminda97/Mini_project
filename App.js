import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './screens/Onboardscreen';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Resetscreen from './screens/Resetscreen';
import About from './screens/About';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import Chatscreen from './screens/Chatscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>

        <Stack.Navigator>

            <Stack.Screen options={{headerShown:false}} name="onboard" component={OnBoardScreen} />
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
            <Stack.Screen options={{headerShown:false}} name="Reset" component={Resetscreen}/>
            <Stack.Screen options={{headerShown:false}} name="About" component={About}/>
            <Stack.Screen options={{headerShown:false}} name="Contact" component={Contact}/>
            <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
            <Stack.Screen options={{headerShown:false}} name="Chatscreen" component={Chatscreen}/>



            


        </Stack.Navigator>

        <StatusBar style="dark" />

    </NavigationContainer>
      
  );
}


