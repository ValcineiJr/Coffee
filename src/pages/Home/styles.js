import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const TablesView = styled.ScrollView.attrs({
    contentContainerStyle: { 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    showsVerticalScrollIndicator: false
  })`  
  `;
