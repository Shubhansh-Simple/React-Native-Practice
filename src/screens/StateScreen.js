import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';


const StateScreen = () => {
  
  const [ increment, setIncrement ] = useState( [] )
  
  return (
    <View>
      <Button title='Add Item'
              onPress={ ()=>{ setIncrement( [...increment,'Special'] )} } />

      <FlatList 
        data={ increment }
        renderItem={ (element) => {
          return ( 
            <Text style={styles.resultStyle}>{ element.item }</Text> 
          );
        }}
         
      />
    </View> // parent ends

  );
};

const styles = StyleSheet.create({

  buttonStyle : { 
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10,
  },

  resultStyle : {
    textAlign : 'center',
    fontSize  : 30,
    fontWeight : 'bold',
    backgroundColor : 'red',
    marginVertical : 10,
  } 
  
});

export default StateScreen;


