import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// COMPONENT CODE

const ChildColorScreen = ({ titleBtn, onIncrease, onDecrease, colorMeasure }) => {

  return (
    <View>
      <Text style={ styles.textStyle }>{titleBtn} Section - {colorMeasure}</Text>

      <View style={ styles.buttonStyle }>

        <Button 
          title={`More ${titleBtn}`} 
          onPress={()=>onIncrease() } />
    
        {/* White Space */}
        <View style={{ width:10,height:10 }}></View>

        <Button 
          title={`Less ${titleBtn}`} 
          onPress={()=>onDecrease()} />

      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  buttonStyle : {
    flexDirection : 'row',
    justifyContent : 'center',
    marginVertical : 2,
  },

  textStyle   : {
    fontSize : 20,
    fontStyle : 'italic',
    fontWeight : 'bold',
    paddingVertical : 10,
    textAlign : 'center',
  },


});

export default ChildColorScreen;

