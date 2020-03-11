import React from 'react';
import { SafeAreaView, Text} from 'react-native';
import Lottie from 'lottie-react-native'
import animation from '../../assets/animation/rocket.json'

// import { Container } from './styles';

export default function apresentation() {
  return (
    <SafeAreaView style={{ flex:1,justifyContent:'center', alignItems:'center', }} >
     <Lottie resizeMode='contain'   autoSize source={animation} autoPlay loop />
    </SafeAreaView>

  );
}
