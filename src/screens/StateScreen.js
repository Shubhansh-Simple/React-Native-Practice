import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const StateScreen = () => {
  
  const [ increment, setIncrement ] = useState( [] )

  return (
    <View>

      <View style={ styles.btnStyle }>
        <Button title='Add Item'
                color='lightgreen'
                onPress={ ()=>{ setIncrement( [...increment,'Special'] )} } />
      </View>

      {/* CONDITION BASED COMPONENT */}
      { 
        increment.length ? 
        <Text style={ styles.nonEmpty }>Non-empty List</Text> : 
        <Text style={ styles.empty }>Empty List</Text> 
      }

      <FlatList 
        data={ increment }
        renderItem={ (element) => {
          return ( 
            <Text style={styles.resultStyle}>
              { element.item} {element.index+1}
            </Text> 
          );
        }}
        inverted
      />
    </View> // parent ends

  );
};

const styles = StyleSheet.create({

  empty : {
    color : 'red',
    fontSize : 20,
    textAlign : 'center'
  },

  nonEmpty : {
    color : 'green',
    fontSize : 20,
    textAlign : 'center'
  },

  btnStyle : { 
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10,
  },

  resultStyle : {
    textAlign : 'center',
    fontSize  : 30,
    color     : 'white',
    fontStyle : 'italic',
    backgroundColor : 'red',
    marginVertical : 10,
  } 
  
});

export default StateScreen;


