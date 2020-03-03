import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: #E5E5E5;
`;

export const Header = styled.View`
  height:211px; 
`;
export const BgImage = styled.ImageBackground`
  width:100%;
  height: 100%;
  justify-content:center;
  align-items:center;  
`;

export const Message = styled.View`
  background:#fff;
  height: 42px;
  min-width:230px;
  border-radius: 19px;
  padding:22px 8px;
  justify-content:center;
  align-items:center;
  margin-bottom:100px;  
  border:1px solid #999;
`;

export const Hello = styled.Text`
  font-size:22px;
  color: #28C6DB;
`;

export const Name = styled.Text`
  font-weight:bold;
  font-size:22px;
  color: #28C6DB;
`;


export const NavTabs = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{
    flexDirection: 'row'
  }
})`
background:#fafafa;
max-height:84px;
`;


export const Item = styled.View`
  background:#fafafa;
  justify-content:center;
  align-items: center;
  height:100%;
  min-width:200px;
  border-bottom-color:${props => props.cor};
  border-bottom-width:10px;
  flex-direction: row;
`;

export const ItemName = styled.Text`
  
`;

export const ProductList = styled.ScrollView.attrs({
  contentContainerStyle:{
    
    alignItems: 'center'
  }
})`
`;

export const Product = styled.View`
 background: rgba(196, 196, 196, 0.4);
 width: 339px;
 min-height: 70px;
 margin-top:15px;
 flex-direction: row;
 padding:10px;
 border-radius:5px;
`;

export const ImgProduct = styled.View`
 flex:1;
 max-height:100px;
`;
export const InfoProduct = styled.View`
  flex:2;
  margin-left:15px;
`;

export const NameProduct = styled.Text`
  font-weight:bold;
`;
export const DescriptionProduct = styled.Text`
 
`;
export const OptionsProduct = styled.TouchableOpacity`
  background: #FFFFFF;
  border-radius: 5px;
  width:60px;
  padding:3px;
  margin-top:5px;
  margin-right:5px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: #28C6DB;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  margin-top:30px;
`;


