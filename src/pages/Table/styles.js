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
