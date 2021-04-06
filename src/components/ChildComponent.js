import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ChildComponent = ( props ) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center' }}>
      <Image source={ props.imageSource } 
        style={{ width:200, height:100 }} />
      <Text style={ styles.componentStyling }>I am { props.text } component.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  componentStyling : {
    fontSize  : 20,
    color     : 'dark',
    textAlign : 'center',
    fontWeight : 'bold',
    marginVertical : 10,
  }
});

export default ChildComponent;

