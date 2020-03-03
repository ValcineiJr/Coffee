import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import Menu from '../../assets/img/menu.png';
import addButton from '../../assets/img/addButton.png';

import { Container } from './styles';

export default function Home({ navigation }) {

    navigation.setOptions({
        headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => {alert("Abrir menu")}}>
                <Image  source={Menu} style={{marginLeft:10,width:24, height:24}} />
            </TouchableWithoutFeedback>            
          )
    })

  return (
    <Container style={{flex: 1, alignItems:'center', backgroundColor: '#F8F8FF'}}>
        <Text style={{marginTop:40,fontWeight:'bold', fontSize:60, textAlign: 'center'}}>Começe Adicionando Algumas Mesas</Text>
        <TouchableWithoutFeedback onPress={() => {alert("Adicionar Mesa")}}><Image style={{width:128, height:128, marginTop:20}} source={addButton}/></TouchableWithoutFeedback>
    </Container>
  );
}
