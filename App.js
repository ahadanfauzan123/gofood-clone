import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Userscreen from './screens/Userscreen';
import Settingscreen from './screens/Settingscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='homescreen'>
        <Stack.Screen name="homescreen" component={Homescreen} />
        <Stack.Screen name="loginscreen" component={Loginscreen} />
        <Stack.Screen name="userscreen" component={Userscreen} />
        <Stack.Screen name="settingscreen" component={Settingscreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
