import styled from 'styled-components/native';

export const Container = styled.View`
  
`;
export const ListItens = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { 
        flexDirection: 'row'
    },
})`
  background: #fff;
`;

export const Filter = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  height: 60px;
  padding:10px;
`;

export const InputSearch = styled.TextInput`
  flex:1;
  height: 29px;
  background: #fff;
  border-radius:15px;
  border-color: #ddd;
  border-width:1px;
  padding-left:16px;
  font-size:14px;
  font-weight:bold;
  color:#333;
`;

export const FilterButton = styled.TouchableWithoutFeedback`
  background: #ff0;
`;