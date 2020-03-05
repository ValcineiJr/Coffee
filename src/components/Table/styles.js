import styled from 'styled-components/native';

export const Container = styled.View`
  
`;
export const TableContainer = styled.View`
  width:85px;
  height:73px;  
  background:${props => props.bgColor};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin:10px;
`;
export const TableFade = styled.View`
  background: rgba(0,0,0,.3);
  width:21px;
  height:73px;
  position:absolute;
  right:0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const TableNumber= styled.Text`
  font-size:48px;
  font-weight:bold;
  margin-right:20px;
`;
