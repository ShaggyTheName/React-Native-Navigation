import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabmenu';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView}  from 'react-native';
import { Feather } from '@expo/vector-icons';


const App = () => {
  return(
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}

export default App;