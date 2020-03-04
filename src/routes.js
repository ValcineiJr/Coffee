import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './pages/Home'
import LoadingScreen from './pages/loading/'

const Stack = createStackNavigator()
const bgHeaderColor = '#EE2121'
const txtHeaderColor = '#fff'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })

  return (
    <NavigationContainer>
      {loading ? (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={LoadingScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: bgHeaderColor
            },
            headerTitleAlign: 'center',
            headerTintColor: txtHeaderColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            options={({ navigation }) => ({
              title: 'Coffee Break'
            })}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App