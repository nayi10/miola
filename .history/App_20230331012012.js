import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <TouchableOpacity
        onPress={() => drawer.current.closeDrawer()}
      ><Text>Close drawer</Text></TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <TouchableOpacity
          onPress={() => changeDrawerPosition()}
        ><Text>Change Drawer Position</Text></TouchableOpacity>
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <TouchableOpacity
          onPress={() => drawer.current.openDrawer()}
        ><Text>Open drawer</Text></TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;