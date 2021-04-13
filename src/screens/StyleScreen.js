import React                      from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChildStyle                 from '../components/ChildStyle';

// it's a function bro.
const StyleScreen = () => {

  return (
    <View style={ styles.parentStyle }>
      <ChildStyle color='red' />
      <ChildStyle color='green' />
      <ChildStyle color='orange' />
    </View>

  );
}

const styles = StyleSheet.create({

   parentStyle : {
    borderWidth : 2,
    flex : 1,
    justifyContent : 'center',
  },

});

export default StyleScreen;
 
