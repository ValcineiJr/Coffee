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
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState([
    {nome:'Bebidas', icon: 'glass-martini', active: true},
    {nome:'Donuts', icon:'bread-slice', active: false},
    {nome:'Sobremesas', icon:'ice-cream', active: false},
    {nome:'Bolos', icon:'birthday-cake', active: false}
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
    setCategories(...[categories])
    alert(category.active);
  }
  function ListCategories(){
   return (
    categories.map(category => (
       
       <Item key={category.nome} cor={'#c4c4c4'}>
       <Icon name={category.icon} size={20} color={'#c4c4c4'} />
          <ItemName 
          onPress={() => SelectActive(category)}                        
          style={DefaultStyle}> 
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
