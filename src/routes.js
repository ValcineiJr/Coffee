import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Table from './pages/Table';


const Stack = createStackNavigator();
const bgHeaderColor = "#EE2121";
const txtHeaderColor = "#fff"

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{
            backgroundColor: bgHeaderColor
          },
          headerTitleAlign: 'center',
          headerTintColor: txtHeaderColor,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen options={({navigation}) => ({
          title: 'Coffee Break'
        })} 
        name="Home" 
        component={Home} />

        <Stack.Screen options={({navigation, route}) => ({
          title: 'Mesa X'
        })} 
        name="Table" 
        component={Table} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;