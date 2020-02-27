import React, {useState} from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import BG from '../../assets/img/header.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { 
  Container,
  Header,
  Message,
  Hello,
  BgImage,
  Name,
  NavTabs,
  Item,
  ItemName
 } from './styles';

export default function Home() {
  const [active, setActive] = useState(undefined);

  const [categories] = useState([
    {nome:'Bebidas', icon: 'glass-martini'},
    {nome:'Donuts', icon:'bread-slice'},
    {nome:'Sobremesas', icon:'ice-cream'},
    {nome:'Bolos', icon:'birthday-cake'}
  ]);

  const SelectedStyle = {
    fontSize: 30, 
    color: '#28C6DB', 
    fontWeight: 'bold',    
    marginLeft: 8
  }
  const DefaultStyle = {
    fontSize: 20, 
    color: '#C4C4C4',
    marginLeft: 8
  }

  
  
  function SelectActive(category) {
    setActive(category.nome);
  }

  function ListCategories(){
   return (
    categories.map(category => (       
       <Item key={category.nome} cor={(active == category.nome) ? '#28c6db' : '#c4c4c4'}>
       <Icon name={category.icon} size={(active == category.nome) ? 30 : 20} color={(active == category.nome) ? '#28c6db' : '#c4c4c4'} />
          <ItemName           
          onPress={() => SelectActive(category)}                        
          style={(active == category.nome) ? SelectedStyle : DefaultStyle}>          
          {category.nome}
          </ItemName>
      </Item>
     ))
   )
  }

  return (
    <Container>  
      <Header>
        <BgImage source={BG} >
          <Message><Hello>Bom dia, <Name>Valcinei Junior </Name><Icon name='coffee' size={20} color={'#995533'} /></Hello></Message>
        </BgImage>
      </Header>

      <NavTabs>

      <ListCategories />

      </NavTabs>   
    <View style={{backgroundColor:'#fafafa', flex:1}}>

    </View>
    </Container>

  );
}
