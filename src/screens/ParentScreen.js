import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

import ChildComponent from '../components/ChildComponent';

// it's a function bro.
const ParentScreen = () => {

  return (
    <View>

      <ChildComponent 
        text='One' 
        imageSource={require('../../assets/mountain.jpg')} />

      <ChildComponent 
        text='Two' 
        imageSource={require('../../assets/forest.jpg')} />

      <ChildComponent 
        text='Six' 
        imageSource={require('../../assets/beach.jpg')} />

    </View>
  );
};

const styles = StyleSheet.create({});


export default ParentScreen;

