import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: #E5E5E5;
`;

export const Header = styled.View`
  height:260px; 
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
  min-width:220px;
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
max-height:100px;
`;


export const Item = styled.View`
  background:#fafafa;
  justify-content:center;
  align-items: center;
  min-width:200px;
  border-bottom-color:${props => props.cor};
  border-bottom-width:10px;
  flex-direction: row;
`;

export const ItemName = styled.Text`
  
`;


