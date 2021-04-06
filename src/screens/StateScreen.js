import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const StateScreen = () => {
  
  const [ increment, stateIncrement ] = useState(0)
  
  return (
    <View>

      <View style={ styles.buttonStyle }>

        <Button title=' + ' 
                color='green'
                onPress={ ()=>{ stateIncrement( increment+1 ) }} />

        <Button title=' - ' 
                color='red'
                onPress={ ()=>{ stateIncrement( increment-1 ) }}  />
      </View>
      
      <View>
        <Text style={ styles.resultStyle }>{ increment }</Text>
      </View>

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
  } 
  
});

export default StateScreen;


