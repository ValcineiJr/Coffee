import styled from 'styled-components/native';

export const Container = styled.View`

`;
export const ProductContainer = styled.View`
  background: #fff;
  min-height: 95px;
  flex-direction:row;
  align-items:center;
  padding:3px;
  margin-bottom:10px;
`;
export const ImageProduct = styled.View`
  flex:1;
`;
export const InfoProduct = styled.View`
  flex:2;
  justify-content:space-between;
  flex-direction:column;
  min-height: 82px;
`;
export const Title = styled.Text`
  font-size:14px;
  font-weight:bold;
`;
export const Description = styled.Text`
  margin:5px 0;
`;
export const Prices = styled.View`
  flex-direction: row;
  flex-wrap:wrap;
`;
export const PriceButton = styled.TouchableWithoutFeedback`

`;
export const Price = styled.Text`
  font-size:9px;
  border-width:1px;
  border-color:#ddd;
  border-radius:5px;
  padding:3px 5px;
  margin-right:3px;
`;
export const Aside = styled.View`
  position: relative;
  justify-content:flex-end;
`;
export const Rate = styled.View`
  flex-direction:row;
  position:absolute;
  right: 0;
  top:0;
  margin-right:3px;
  margin-top:3px;
`;
export const RateIcon = styled.Image`
  margin-top:3px;
`;
export const RateText = styled.Text`
  color:#D7C310;
`;
export const AddButton = styled.TouchableWithoutFeedback`
  
`;
export const ButtonView = styled.View`
    height: 30px;
    width:80px;
    background: #52d73d;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    border-color:#eee;
    border-width:1px;
`;
export const AddText = styled.Text`
    color:white;
`;
