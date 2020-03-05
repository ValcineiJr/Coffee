import React, {useState} from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import Menu from '../../assets/img/menu.png';
import addButton from '../../assets/img/addButton.png';
import Table from '../../components/Table';

import {
   Container,
   TablesView
 } from './styles';

export default function Home({ navigation }) {
  const [tables, setTables] = useState([])

  function addTable(){
    setTables([...tables, {
      id:tables.length + 1,
      tableNumber:tables.length + 1,
      tableColor:'#0CD684'
    }])
  }

    navigation.setOptions({
        headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => {alert("Abrir Menu")}}>
                <Image  source={Menu} style={{marginLeft:10,width:24, height:24}} />
            </TouchableWithoutFeedback>            
          )
    })

    function ShowTables(){
      if(tables.length > 0){
        
        return (
          <>
          <TablesView>

          {tables.map(table => (
            <Table navigation={navigation} key={table.id} tableNumber={table.tableNumber} bgColor={table.tableColor} />
          ))}
           
          </TablesView>          
           <TouchableWithoutFeedback onPress={addTable}><Image style={{width:70, height:70,marginBottom:5}} source={addButton}/></TouchableWithoutFeedback>
          
          </>
        )
      }else{
        return(
          <>
            <Text style={{marginTop:40,fontWeight:'bold', fontSize:60, textAlign: 'center'}}>Começe Adicionando Algumas Mesas</Text>
            <TouchableWithoutFeedback onPress={addTable}><Image style={{width:128, height:128, marginTop:20}} source={addButton}/></TouchableWithoutFeedback>
          </>
        )
      }
    }

  return (
    <Container style={{flex: 1, alignItems:'center', backgroundColor: '#F8F8FF'}}>
        <ShowTables />
    </Container>
  );
}
