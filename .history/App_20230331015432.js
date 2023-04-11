import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const Drawer = () => (
  <View style={styles.container}>
    <Text>Drawer content</Text>
  </View>
);

const App = () => {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={Drawer}
    >
      <View style={styles.container}>
        <Text>Main Content</Text>
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
  listTile: {
    padding: 20,
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: { fontSize: 18, color: "white" },
});

export default App;
