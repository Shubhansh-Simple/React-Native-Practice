import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

// it's a function bro.
const InputScreen = () => {

  const [ input, setInput ] = useState('')

  return (
    <View>
      <TextInput 
        style={ styles.textInput }
        placeholder='Kindly type text'
        value={input}
        onChangeText={ (inputy)=>{ setInput( inputy )}}
      />

      <Text style={ styles.textStyle }>Text is {input}</Text>
      { input.length > 10  ? 
        <Text style={{ color : 'red', textAlign : 'center' }}>
          ( Text length is greather than 10 )
        </Text> : null
      }

      <View style={{ borderWidth:1, marginVertical:10 }}></View>

      <View style={ styles.parentStyle }>
        <View style={ styles.firstStyle }></View>
        <View style={ styles.secondStyle }></View>
        <View style={ styles.threeStyle }></View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

    textInput : {
    marginVertical : 5,
    paddingVertical : 5,
    borderWidth : 1,
    fontSize    : 20,
    fontWeight : 'bold',
  },

  textStyle : {
    fontStyle : 15,
    paddingVertical : 10,
    color : 'blue',
  },

  parentStyle : {
    borderWidth : 2,
    flexDirection : 'row',
    justifyContent : 'space-between',
  },

  firstStyle : {
    backgroundColor : 'red',
    width : 50,
    height : 50,
  },

  secondStyle : {
    backgroundColor : 'green',
    width : 50,
    height : 50,
    marginTop : 50,
  },  

  threeStyle : {
    backgroundColor : 'orange',
    width : 50,
    height : 50,

  },

});


export default InputScreen;

