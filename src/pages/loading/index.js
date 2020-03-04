import React from 'react';
import screenLoading from '../loading/splashcreen'
import Home from '../Home/index'
import { useState, useEffect } from 'react'


// import { Container } from './styles';

export default function loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <NavigationContainer>
      {loading ? (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={screenLoading} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}