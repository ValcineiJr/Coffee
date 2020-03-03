import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  TableContainer,
  TableFade,
  TableNumber
 } from './styles';

export default function Table({bgColor, tableNumber}) {
  return (
    <Container>
      <TableContainer bgColor={bgColor}>   
      <TableNumber>{tableNumber}</TableNumber>     
        <TableFade />
      </TableContainer>
    </Container>
  );
}
