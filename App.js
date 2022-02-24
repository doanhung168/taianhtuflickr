import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManHinhChao from './screens/ManHinhChao';
import XemAnh from './screens/XemAnh';
import TaiAnh from './screens/TaiAnh';

const Stack = createNativeStackNavigator()

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ManHinhChao'
          component={ManHinhChao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='XemAnh'
          component={XemAnh}
          options={{
            title: 'AsiaHD+',
            headerTitleStyle: { color: '#fff' },
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#2c2d27'
            },
            headerRight: () => (
              <Pressable  onPress={() => { console.log("123") }}>
                <Image
                source={require('./assets/more.png')}
                title='Info'
                color='#fff'
                style={{ height: 20, width: 20 }}
                resizeMode='contain'
              />
              </Pressable>
              
            )
          }} />
        <Stack.Screen
          name='TaiAnh'
          component={TaiAnh}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
