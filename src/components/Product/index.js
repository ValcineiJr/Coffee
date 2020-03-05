import React from 'react';
import { View, Image, Text } from 'react-native';

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
    AddButton,
    AddText,
    ButtonView
 } from './styles';
import Star from '../../assets/img/star.png'

export default function Product({ productImage }) {
  return (
    <Container>
        <ProductContainer>
            <ImageProduct>
                <Image style={{width:85, height:85, borderRadius: 8}} source={productImage} />
            </ImageProduct>
            <InfoProduct>
                <Title>Café</Title>
                <Description>Uma ótima bebida quente </Description>
                <Prices>
                    <PriceButton>
                        <Price>R$: 11,00 P</Price>
                    </PriceButton>
                    <PriceButton>
                        <Price>R$: 13,00 M</Price>
                    </PriceButton>
                    <PriceButton>
                        <Price>R$: 15,00 G</Price>
                    </PriceButton>
                </Prices>
            </InfoProduct>
            <Rate><RateIcon source={Star} /><RateText>9.5/10</RateText></Rate>
            <Aside>          
                <AddButton>
                    <ButtonView >
                        <AddText>Adicionar</AddText>
                    </ButtonView>                    
                    </AddButton>
            </Aside>
        </ProductContainer>
    </Container>
  );
}
