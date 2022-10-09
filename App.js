import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, DrawerLayoutAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import artInstitute from './assets/art.png';
import magMile from './assets/mile.png';
import navyPier from './assets/pier.png';
import waterTower from './assets/water.png';
import willisTower from './assets/willis.png';
import Button from './Button';

import * as WebBrowser from 'expo-web-browser';



function ArtInstitueScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={artInstitute} style={ styles.logo } />
      <Button info style={ styles.button } onPress={() => { WebBrowser.openBrowserAsync('https://www.artic.edu/'); }}>
          More Information
      </Button>
    </View>
  )
}

function MagMileScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image source={magMile} style={ styles.logo } />
      <Button info style={ styles.button } onPress={() => { WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/'); }}>
        More Information
      </Button>
    </View>
  )
}

function NavyPierScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image source={navyPier} style={ styles.logo } />
      <Button info style={ styles.button } onPress={() => { WebBrowser.openBrowserAsync('https://navypier.org/'); }}>
        More Information
      </Button>
    </View>
  )
}

function WaterTowerScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image source={waterTower} style={ styles.logo } />
      <Button info style={ styles.button } onPress={() => { WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html'); }}>
          More Information
      </Button>
    </View>
  )
}

function WillisTowerScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Image source={willisTower} style={ styles.logo } />
      <Button info style={ styles.button } onPress={() => { WebBrowser.openBrowserAsync('https://www.willistower.com/'); }}>
          More Information
      </Button>
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="ArtInstituteOfChicago" screenOptions={ styles.header }>
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitueScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MagMileScreen} />
        <Drawer.Screen name="Navy Pier" component={NavyPierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterTowerScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisTowerScreen} />
      </Drawer.Navigator>
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
  header: {
    headerStyle: { backgroundColor: '#fff', }, 
    headerTintColor: '#000000', 
    headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
  },
  logo: {
    height: 360,
    width: 240,
  },
  button: {
    margin: 10,
  },
});