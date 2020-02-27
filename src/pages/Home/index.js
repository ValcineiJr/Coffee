import React, {useState} from 'react';
import { View, Image, ImageBackground, Text, StatusBar, TouchableOpacity } from 'react-native';
import BG from '../../assets/img/header.jpg';
import coffee from '../../assets/img/coffee.jpg';
import rosca from '../../assets/img/rosca.jpg';
import leite from '../../assets/img/leite.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';


import { 
  Container,
  Header,
  Message,
  Hello,
  BgImage,
  Name,
  NavTabs,
  Item,
  ItemName,
  ProductList,
  AddButton,
  OptionsProduct,
  DescriptionProduct,
  NameProduct,
  InfoProduct,
  ImgProduct,
  Product
 } from './styles';

export default function Home() {
  const [active, setActive] = useState('Bebidas');

  const [categories] = useState([
    {nome:'Bebidas', icon: 'glass-martini'},
    {nome:'Donuts', icon:'bread-slice'},
    {nome:'Sobremesas', icon:'ice-cream'},
    {nome:'Bolos', icon:'birthday-cake'}
  ]);

  const [products, setProducts] = useState([
    {category:'Bebidas', name: 'Café', img:coffee, price: '15,00', description: 'Tome um café gostoso do jeito que quiser', espcs:['Quente', 'Gelado'],},

    {category:'Bebidas', name: 'Leite', img:leite, price: '11,00', description: 'Compre um leite para acompanhar seu café', espcs:['Morno', 'Gelado'],},

    {category:'Donuts', name: 'Rosca', img:rosca, price: '16,00', description: 'Um delicioso doce de dar água na boca', espcs:['Doce'],}
  ]);

  const SelectedStyle = {
    fontSize: 26, 
    color: '#28C6DB', 
    fontWeight: 'bold',    
    marginLeft: 8
  }
  const DefaultStyle = {
    fontSize: 17, 
    color: '#C4C4C4',
    marginLeft: 8
  }  
  

  function ListCategories(){
    if(categories.length <= 0){
      return <Text>Sem Itens</Text>
    }else
   return (
    categories.map(category => (     
      <TouchableOpacity onPress={() => setActive(category.nome)}  activeOpacity={.7} key={category.nome}>
       <Item  cor={(active == category.nome) ? '#28c6db' : '#c4c4c4'}>
       <Icon name={category.icon} size={(active == category.nome) ? 20 : 10} color={(active == category.nome) ? '#28c6db' : '#c4c4c4'} />
          <ItemName           
                                 
          style={(active == category.nome) ? SelectedStyle : DefaultStyle}>          
          {category.nome}
          </ItemName>
      </Item>
      </TouchableOpacity>  
     ))
   )
  }

  function ListProducts(){    
    if(categories.length <= 0){
      return <Text>Adicione alguns produtos</Text>
    }else{
      return (
        products.map(product =>(
         <View key={product.price}>          
           {(product.category == active) ?
            
            <Product>
            <ImgProduct>
              <Image style={{width:'100%', height: '100%'}} source={product.img} />
            </ImgProduct>

            <InfoProduct>
              <NameProduct>{product.name}</NameProduct>
              <DescriptionProduct>{product.description}</DescriptionProduct>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {product.espcs.map((espc, i )=>(
                  <OptionsProduct key={i}><Text style={{textAlign: 'center',fontSize: 11, color: '#888', fontWeight: 'bold'}}>{espc}</Text></OptionsProduct>
                ))}
              </View>
            </InfoProduct>

            <AddButton><Text>+</Text></AddButton>
            
            </Product>
            :<></>}
         </View>
        ))
      )
    }
  }

  return (
    <Container>  
      <StatusBar hidden={true} />
      <Header>
        <BgImage source={BG} >
          <Message><Hello>Bom dia, <Name>Valcinei Junior </Name><Icon name='coffee' size={20} color={'#995533'} /></Hello></Message>
        </BgImage>
      </Header>

        <NavTabs>
          <ListCategories />
        </NavTabs>  

    <ProductList >    
          <ListProducts />
    </ProductList>

    </Container>

  );
}
