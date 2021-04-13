import React, {useState} from 'react';
import { View, Button, StyleSheet, Text, FlatList } from 'react-native';
import apiRequest from '../api/apiRequest';

const ApiScreen = () => {
  
  const [ apiData, setApiData ] = useState([])

  console.log('Data from server - ',apiData )

  const callingApi = async () =>{
  
    const response = await apiRequest.get('posts',{
      params : {
        _limit : 10
      }
    })
    setApiData(response.data)
  };

  return (
    <View>
      <Button 
        title = 'Call Api'
        color = 'black'
        onPress = { ()=>{callingApi()} }
      />

      {
        apiData.length > 0 ? 
        <Text style={ styles.dataYes }>Data Found!</Text> :
        <Text style={ styles.dataNo }>No Data Found!</Text> 
      }

      {/*Here we need the flatlist.*/}
      <FlatList 
        data={apiData}
        keyExtractor={item=>item.id.toString()}
        renderItem={ (element)=>{
          return (
            <View style={styles.cardStyle}>
              <Text style={styles.titleStyle}>{element.item.title}</Text>
              <Text style={styles.bodyStyle}>{element.item.body}</Text>
            </View>
          ); 
        }}

      />

    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle : {
    padding : 10,
    borderWidth : 1,
    margin : 10,
    backgroundColor : 'black',
    borderRadius : 8,
  },

  titleStyle : {
    fontSize : 15,
    textTransform : 'capitalize',
    marginBottom : 5,
    fontWeight : 'bold',
    color : 'white',
  },

  bodyStyle : {
    fontSize : 13,
    textTransform : 'capitalize',
    color : 'white',
  },

  dataNo : {
    color:'red',
    textAlign:'center',
    fontSize : 20,
    marginVertical : 10,
  },

  dataYes : {
    color:'green',
    textAlign:'center',
    fontSize : 20,
    marginVertical : 10,
  }
});

export default ApiScreen;




