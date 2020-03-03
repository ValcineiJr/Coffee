import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import { 
  Container,
  TableContainer,
  TableFade,
  TableNumber
 } from './styles';

export default function Table({bgColor, tableNumber, navigation}) {

  function openTable(wichTable){
    navigation.navigate('Table', {id:tableNumber});
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={()=> {openTable(tableNumber)}}>
        <TableContainer bgColor={bgColor}>   
        <TableNumber>{tableNumber}</TableNumber>     
          <TableFade />
        </TableContainer>
      </TouchableWithoutFeedback>
    </Container>
  );
}
