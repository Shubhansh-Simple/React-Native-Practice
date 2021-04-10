import React, { useState }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChildColorScreen     from '../components/ChildColorScreen';

const valueValidation = (value) => {
  if ( value >= 0 && value <= 255 ){
    return value;
  }
  else{
    if ( value < 0 ){
      return 0;
    }
    else{
      return 255;
    }
  }
} // func. ends

const ColorScreen = () => {

  const [ redColor ,  setRedColor ]   = useState(0);
  const [ greenColor, setGreenColor ] = useState(0);
  const [ blueColor,  setBlueColor ]  = useState(0);

  return (
    <View>

      {/* THIS IS CHILD COMPONENT */}
      < ChildColorScreen 
          titleBtn='Red' 
          onIncrease={ ()=> setRedColor( valueValidation(redColor+20) ) }
          onDecrease={ ()=> setRedColor( valueValidation(redColor-20) ) }
          colorMeasure={redColor}
      />

      < ChildColorScreen 
          titleBtn='Blue' 
          onIncrease={ ()=> setBlueColor( valueValidation(blueColor+20) ) }
          onDecrease={ ()=> setBlueColor( valueValidation(blueColor-20) ) }
          colorMeasure={blueColor}
      />

      < ChildColorScreen 
          titleBtn='Green' 
          onIncrease={ ()=> setGreenColor( valueValidation(greenColor+20)) }
          onDecrease={ ()=> setGreenColor( valueValidation(greenColor-20)) }
          colorMeasure={greenColor}
      />

      <View style={ styles.horizontalLine }></View>
      <Text style={{ fontSize : 30, textAlign : 'center' }}>Color Demo</Text>

      <View 
        style={{alignSelf : 'stretch',
                height : 100,
                backgroundColor : `rgb( ${redColor} , ${greenColor} ,${blueColor} )`,
              }}>
      </View>
    </View>

  ); // returns ends.
};

const styles = StyleSheet.create({
  
  horizontalLine : {
    marginVertical : 40,
    borderBottomWidth : 1,
    borderBottomColor : 'black',
  }

});

export default ColorScreen;

