import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChildStyle = ({color}) => {
  return (

    <View style={ styles.parentComponent }>

      <View style={{ height : 20, 
                     width  : 20,
                     borderRadius : 20/2,
                     backgroundColor : `${color}` }}></View>

      <Text style={ styles.textStyle }>{color} Colour</Text>

    </View>

  );
}

const styles = StyleSheet.create({

  parentComponent : {
    backgroundColor : 'lightblue',
    height : 80,
    flexDirection : 'row',
    alignItems : 'center',
    margin : 10,
    padding : 10,
  },

  textStyle : {
    marginLeft : 10,
    fontSize : 20,
    textTransform : 'capitalize',
  }
});

export default ChildStyle;

