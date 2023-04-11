import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native";

const Drawer = () => (
  <View style={styles.container}>
    <Text>Drawer content</Text>
  </View>
);

const DrawerApp = () => {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={Drawer}
    >
      <View style={styles.container}>
        <Text style={{marginBottom: 12}}>Main Content</Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default DrawerApp;
