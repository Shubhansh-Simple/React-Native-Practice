import React from 'react';
import { View, StyleSheet,Button, Text, FlatList } from 'react-native';

// it's a function bro.
const HomeScreen = ({ navigation }) => {
 
  const li = [
               { 'name' : 'Friend #1'},
               { 'name' : 'Friend #2'},
               { 'name' : 'Friend #3'},
               { 'name' : 'Friend #4'},
               { 'name' : 'Friend #5'},
               { 'name' : 'Friend #6'},
             ]

  return (
    <View>
      <FlatList 
        data={li} 
        renderItem={ (element)=>{
          return (
            <Text style={ styles.textSub }>
              {element.index+1}.) Name - {element.item.name}
            </Text>
          )
        }}
      />

      <Button title='Parent>>>' 
              color='red'
              onPress={ ()=>{ navigation.navigate('parent') }} />

      <Button title='State>>>' 
              color='green'
              onPress={ ()=>{ navigation.navigate('state') }} />

      <Button title='Colors>>>' 
              color='lightblue'
              onPress={ ()=>{ navigation.navigate('color') }} />

      <Button title='Inputs>>>' 
              color='blue'
              onPress={ ()=>{ navigation.navigate('input') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  textSub : {
    fontSize : 20,
    marginVertical : 10,
    fontStyle : 'italic',
    fontWeight: 'bold',
    color : 'orange',
  }

});


export default HomeScreen;

