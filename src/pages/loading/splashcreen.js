import React from 'react';
import { SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native'


// import { Container } from './styles';

export default function splashcreen() {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignContent:'center', alignItens:'center', backgroundColor:'#EE2121', }} >
        <Lottie style={{}} resizeMode={'contain'} source={require('../../../src/assets/animation/loading.json')} autoPlay loop/>
    </SafeAreaView>
  );
}