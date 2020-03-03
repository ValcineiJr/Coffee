import React, {useState} from 'react';
import { View, Image,TouchableWithoutFeedback, Text } from 'react-native';

import { 
  Container,
  ListItens,
  Filter,
  InputSearch,
  FilterButton
, } from './styles';
import Notes from '../../assets/img/note.png'
import coffee from '../../assets/img/coffee.jpg';
import doce from '../../assets/img/rosca.jpg';
import settings from '../../assets/img/settings.png';

import Products from '../../components/Product';

export default function Table({ navigation, route }) {

  const { id } = route.params || '';
  const [categories, setCategories] = useState([
    {
      id:1,
      img:coffee,
      nome:'Bebidas Quentes'
    },{
      id:2,
      img:doce,
      nome:'Doces'
    }
  ]);

  navigation.setOptions({
    headerTitle: () => (
      <Text style={{fontWeight: 'bold', fontSize:24, color: '#fff'}}>Mesa {id}</Text>
    ),
    headerRight: () => (
      <TouchableWithoutFeedback onPress={() => {alert("Abrir Lista de itens")}}>
          <Image  source={Notes} style={{marginRight:10,width:24, height:24}} />
      </TouchableWithoutFeedback>            
    )
  })

  function ShowCategories(){
    if(categories.length == 0){
        return(
        <View style={{height: 83, justifyContent:'center', alignItems: 'center'}}>
             <View>
             <TouchableWithoutFeedback onPress={() => {alert("Abrir Menu")}}>
                <Image source={Menu} style={{marginLeft:20,width:31, height:31}} />
            </TouchableWithoutFeedback>
            <View style={{maxWidth:70, marginLeft:5}}>
            <Text styyle={{fontSize:11, fontWeight: 'light'}}>Adicionar Produtos</Text> 
            </View>              
            </View>
        </View>      
        )
    }else{
      return(
        <View  style={{height: 83,flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
          {categories.map(category => (
          <View style={{marginLeft:10}} key={category.id}>
          <TouchableWithoutFeedback onPress={() => {alert("Abrir Menu")}}>
             <Image source={category.img} style={{marginLeft:15,width:31, height:31, borderRadius:15}} />
         </TouchableWithoutFeedback>
         <View style={{width:50,height:26, marginLeft:5, alignItems:'center'}}>
         <Text styyle={{fontSize:11, fontWeight: 'light', color: '#494545'}}>{category.nome}</Text> 
         </View>              
         </View>
        ))}
   </View> 

      )
    }
  }

  return (
    <Container style={{backgroundColor:'#F8F8FF'}}>
      <ListItens>
          <ShowCategories />  
      </ListItens>
      <Filter>
        <InputSearch
          placeholder="Buscar Produto"
        />
        <View style={{paddingHorizontal:5}}>
        <FilterButton onPress={() => {alert("Filtrar Itens")}}>
          <Image source={settings} />
        </FilterButton>
        </View>
      </Filter>
      <ProductList>

      </ProductList>
    </Container>
  );
}
