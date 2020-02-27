import React, {useState} from 'react';
import { View, Image, ImageBackground, Text, StatusBar } from 'react-native';
import BG from '../../assets/img/header.jpg';
import coffee from '../../assets/img/coffee.jpg';
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
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
        <Product>
          <ImgProduct>
            <Image style={{flex: 1}} source={coffee} />
          </ImgProduct>

          <InfoProduct>
            <NameProduct>Café</NameProduct>
            <DescriptionProduct>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</DescriptionProduct>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Quente</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Frio</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            <OptionsProduct><Text style={{textAlign: 'center',fontSize: 10, color: '#C4C4C4'}}>Morno</Text></OptionsProduct>
            </View>
          </InfoProduct>

          <AddButton><Text>+</Text></AddButton>
        </Product>       
    </ProductList>

    </Container>

  );
}
