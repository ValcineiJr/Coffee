import React, {useState} from 'react';
import { View, Image,TouchableWithoutFeedback, Text } from 'react-native';

import { 
  Container,
  ListItens
 } from './styles';
import Notes from '../../assets/img/note.png'
import coffee from '../../assets/img/coffee.jpg';

export default function Table({ navigation, route }) {

  const { id } = route.params || '';
  const [categories, setCategories] = useState([
    {
      id:1,
      nome:'Bebidas Quentes'
    },
    {
      id:2,
      nome:'Doces'
    },
    {
      id:3,
      nome:'Bebidas Geladas'
    }, {
      id:4,
      nome:'Bebidas Geladas'
    }, {
      id:5,
      nome:'Bebidas Geladas'
    }, {
      id:6,
      nome:'Bebidas Geladas'
    }, {
      id:7,
      nome:'Bebidas Geladas'
    }, {
      id:8,
      nome:'Bebidas Geladas'
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
          <View style={{marginRight:10}} key={category.id}>
          <TouchableWithoutFeedback onPress={() => {alert("Abrir Menu")}}>
             <Image source={coffee} style={{marginLeft:15,width:31, height:31, borderRadius:15}} />
         </TouchableWithoutFeedback>
         <View style={{width:50,height:26, marginLeft:5, alignItems:'center'}}>
         <Text styyle={{fontSize:11, fontWeight: 'light'}}>{category.nome}</Text> 
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
    </Container>
  );
}
