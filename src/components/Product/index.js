import React from 'react';
import { View } from 'react-native';

import { 
    Container,
    ProductContainer,
    ImageProduct,
    InfoProduct,
    Title,
    Description,
    Prices,
    PriceButton,
    Price,
    Aside,
    Rate,
    RateIcon,
    RateText,
    AddButton
 } from './styles';
import Star from '../../assets/img/star.png'

export default function Product() {
  return (
    <Container>
        <ProductContainer>
            <ImageProduct>
                <Image />
            </ImageProduct>
            <InfoProduct>
                <Title></Title>
                <Description></Description>
                <Prices>
                    <PriceButton>
                        <Price>R$: 11,00 P</Price>
                    </PriceButton>
                </Prices>
            </InfoProduct>
            <Aside>
                <Rate><RateIcon source={Star} /><RateText>9.5/10</RateText></Rate>
                <AddButton><AddText>Adicionar</AddText></AddButton>
            </Aside>
        </ProductContainer>
    </Container>
  );
}
